import { Box, Grid, Typography } from '@mui/material';
import { Beer } from '../../../models/Beer';
import { BootstrapTooltip } from '../../../ui-components/tooltip/BootstrapTooltip';
import { memo, useMemo } from 'react';

export interface BeerItemProps {
    beer: Beer
}


export const BeerItem = memo(({beer}: BeerItemProps) => {
    const label = useMemo(() => {
        return `Ingradient: ${Object.keys(beer.ingredients || {}).join(', ')}`
    }, [beer]);

    return (
        <Box className={'animate__slideInUp'} sx={{
            width: '100%',
            boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
            p: 1.5,
            cursor: 'pointer',
            '&:hover': {
                backgroundColor: '#F0F8FF',
                transform: 'scale(1.01)',
                transition: 'all 500ms linear',
                boxShadow: 'none'
            },
            borderRadius: 2
        }}>
            <Grid container sx={{px: 4}}>
                <Grid item xs={'auto'} sx={{mr: 7}}>
                    <BootstrapTooltip title={label} placement="top">
                        <img
                            className={'beer-image'}
                            src={beer.image_url}
                            alt="Beer Logo"
                        />
                    </BootstrapTooltip>
                </Grid>
                <Grid item container xs={10} flexDirection={'column'} spacing={1}>
                    <Grid item>
                        <Typography sx={{fontWeight: 'bold'}}
                                    variant={'h5'}>{beer.name}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography color={'#FF9900'}
                                    variant={'subtitle1'}>{beer.tagline}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant={'subtitle2'}>{beer.description}</Typography>
                    </Grid>
                </Grid>

            </Grid>
        </Box>
    )
});
