import { useCallback, useEffect, useState } from 'react';
import { AppMainCard } from '../../ui-components/cards/AppMainCard';
import { Beer } from '../../models/Beer';
import { BeerApis } from '../../api/BeerApis';
import { Box, Button } from '@mui/material';
import ItemListing from '../../components/ItemListing';
import { DataStatus } from '../../models/DataStatus';
import { BeerItems } from './components/BeerItems';
import { EditBeerItem } from './components/EditBeerItem';
import { Pagination } from '../../models/Pagination';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { BeerTabs } from './BeerTabs';
import { GotoTopButton } from '../../components/common/GotoTopButton';
import { EmptyItemsContainer } from './components/EmptyItemsContainer';
import { useRecoilState } from 'recoil';
import { BeerRecoilPersist } from './state/BeerRecoilPersist';
import { BeerUtils } from './utils/BeerUtils';
import useAlert from '../../hooks/useAlert';
import { Severity } from '../../context/alertContext';
import { BeerDetailsView } from './components/BeerDetailsView';


export enum TabType {
    ALL = 'ALL',
    MY = 'MY'
}

export interface Tabs {
    type: TabType,
    label: string,
}

const Landing = () => {
    const {addAlert} = useAlert();

    const [activeTab, setActiveTab] = useState<TabType>(TabType.ALL);
    /**
     * Can be used context/reducer/redux instead of state
     */
    const [allBeers, setAllBeers] = useState<Array<Beer>>([]);
    const [allBeersStatus, setAllBeerStatus] = useState<DataStatus>(DataStatus.INITIAL);
    const [allBearPageState, setAllBeerPageState] = useState<Pagination>({pageSize: 10, offset: 1});
    const [allBeerError, setAllBeerError] = useState<string | undefined>('');

    /**
     * For persistent storage
     */
    const [myBeers, setMyBeers] = useRecoilState<Array<Beer>>(BeerRecoilPersist.myBeers);
    const [currentBeer, setCurrentBeer] = useState<Partial<Beer>>({});
    const [openEditPopup, setOpenEditPopup] = useState<boolean>(false);
    const [editable, setEditable] = useState<boolean>(false);

    const onEditHandler = useCallback((beer: Beer, editable: boolean) => {
        setCurrentBeer(beer);
        setEditable(editable);
        setOpenEditPopup(true);
    },[]);

    const getAllBeers = async () => {
        setAllBeerStatus(DataStatus.LOADING);
        const response = await BeerApis.getAll(allBearPageState);
        if (response.success) {
            setAllBeerStatus(DataStatus.LOADED);
            setAllBeers([...allBeers, ...response.data]);
            return;
        }
        setAllBeerStatus(DataStatus.ERROR);
        setAllBeerError(response?.message);
    }


    const onSaveBeer = useCallback((beer: Beer) => {
        setMyBeers(BeerUtils.upsertBeer(myBeers, beer));
        addAlert(Severity.SUCCESS, beer.id ? 'Beer has been updated successfully!' : 'New beer has been added successfully!');
        setOpenEditPopup(false);
    },[myBeers]);

    const onRemoveBeer = useCallback((id: string) => {
        // better to show popup (Are you sure?) before deleting.
        setMyBeers(BeerUtils.removeBeer(myBeers, id));
        addAlert(Severity.SUCCESS, 'Beer has been removed successfully!');
    },[myBeers]);

    const loadMore = useCallback(async () => {
        setAllBeerPageState({...allBearPageState, offset: allBearPageState.offset + 1});
    },[]);

    useEffect(() => {
        getAllBeers();
    }, [allBearPageState]);

    return (
        <>
            <GotoTopButton/>
            {openEditPopup && (
                editable ? <EditBeerItem beer={currentBeer} onSave={onSaveBeer}
                                         open={openEditPopup}
                                         editable={editable}
                                         onClose={() => setOpenEditPopup(false)}/> :
                    <BeerDetailsView beer={currentBeer} onClose={() => setOpenEditPopup(false)}/>
            )}
            <AppMainCard contentSx={{p: 4, px: 6}} headerSx={{p: 4, px: 6}}
                         Header={() => <BeerTabs activeTab={activeTab} setActiveTab={setActiveTab}
                                                 setEditMyBeer={onEditHandler}/>}>

                {/*Better to use tabs: MUI:Tabs*/}
                {/*For all Beers*/}
                {activeTab === TabType.ALL &&
                <ItemListing status={allBeersStatus} retry={getAllBeers} errorMessage={allBeerError}>
                    <BeerItems beers={allBeers} onClick={(beer: Beer) => onEditHandler(beer, false)}/>
                    {allBeersStatus == DataStatus.LOADED && <Box className={'flex-center flex-row'} sx={{mt: 6}}>
                        <Button endIcon={<ExpandMoreIcon/>} onClick={loadMore}>Load More</Button>
                    </Box>}
                </ItemListing>}

                {/*For my beers*/}
                {activeTab === TabType.MY && <ItemListing status={DataStatus.LOADED}>
                    <EmptyItemsContainer count={myBeers.length} onAdd={() => setOpenEditPopup(true)}>
                        <BeerItems beers={myBeers} onRemove={onRemoveBeer}
                                   onClick={(beer:Beer) => onEditHandler(beer, true)}/>
                    </EmptyItemsContainer>
                </ItemListing>}
            </AppMainCard>
        </>
    )
}

export default Landing;
