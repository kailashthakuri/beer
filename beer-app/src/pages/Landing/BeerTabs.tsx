import { Button, Grid, Typography } from "@mui/material";
import { TabType } from "./index";
import defaultBeer from '../../images/defaul-beer.png';
import { memo } from 'react';

const MenuItem = ({text, active, ...props}: { text: string, active: boolean, [x: string]: any }) => {
    return (
        <Typography variant={'subtitle1'} sx={{
            cursor: 'pointer',
            fontWeight: 'bold',
            color: active ? '#000000' : '#C0C0C0'
        }} {...props}>
            {text}
        </Typography>
    )
}

export const BeerTabs = memo(({
                             activeTab,
                             setActiveTab,
                             setEditMyBeer
                         }: { activeTab: TabType, setActiveTab: Function, setEditMyBeer: Function }) => {
    return (
        <Grid container spacing={2}>
            <Grid item container spacing={5} xs={12} sm={6}>
                <Grid item>
                    <MenuItem onClick={() => setActiveTab(TabType.ALL)} text={'All Beers'}
                              active={activeTab === TabType.ALL}/>
                </Grid>
                <Grid item>
                    <MenuItem onClick={() => setActiveTab(TabType.MY)} text={'My Beers'}
                              active={activeTab === TabType.MY}/>
                </Grid>
            </Grid>
            {activeTab === TabType.MY && <Grid item xs={12} sm={6} sx={{textAlign: {sx: 'left', sm: 'right'}}}>
                <Button variant={'contained'} onClick={() => setEditMyBeer({image_url: defaultBeer}, true)}>Create a new
                    beer</Button>
            </Grid>}
        </Grid>
    )
});
