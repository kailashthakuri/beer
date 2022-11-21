import { Box, Grid, IconButton } from '@mui/material';
import { BeerItem } from './BeerItem';
import { Beer } from '../../../models/Beer';
import CloseIcon from '@mui/icons-material/Close';
import { MouseOverPopover } from '../../../ui-components/popover/MouseOverPopover';
import { memo } from 'react';


/**
 * Note: Can be used virtual scroll to reduce dom size
 */
export const BeerItems = memo(({
                              beers,
                              onRemove,
                              onClick
                          }: { beers: Array<Beer>, onClick: Function, onRemove?: (id: string) => void }) => {

    const removeHandler = (e: any, id: string) => {
        e.stopPropagation();
        // @ts-ignore
        onRemove(id);
    }

    return (
        <Grid container spacing={3} className={'animate__fadeIn'}>
            {
                beers.map((beer) => {
                    return (
                        <Grid item container xs={12} key={beer.id} sx={{position: 'relative'}}
                              onClick={() => onClick(beer)}>
                            <MouseOverPopover message={'Click to open'} sx={{width: '100%'}}>
                                <BeerItem beer={beer}/>
                            </MouseOverPopover>
                            {onRemove && <Box sx={{position: 'absolute', right: 5, top: 30}}>
                                <IconButton sx={{
                                    boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;'
                                }} onClick={(e) => removeHandler(e,beer.id)}>
                                    <CloseIcon color={'error'}/>
                                </IconButton>
                            </Box>}
                        </Grid>
                    )
                })
            }
        </Grid>
    )
});
