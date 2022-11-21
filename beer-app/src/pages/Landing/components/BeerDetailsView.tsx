import { Beer } from '../../../models/Beer';
import { Box, Card, Chip, DialogContent, DialogTitle, Grid, Typography } from '@mui/material';
import { BootstrapDialog } from '../../../ui-components/dialog/BootstrapDialog';
import { CrossIcon } from '../../../ui-components/icons/CrossIcon';
import { StringUtils } from '../../../utils/StringUtils';
import { memo, useMemo } from 'react';

export const BeerDetailsView = memo(({beer, onClose}: { beer: Partial<Beer>, onClose: () => void }) => {
    return (
        <BootstrapDialog
            onClose={onClose}
            aria-labelledby="customized-dialog-title"
            open={true}
        >
            <DialogTitle>
                <Typography
                    variant="h6">Beer Details</Typography>
                <CrossIcon onClose={onClose}/>
            </DialogTitle>
            <DialogContent dividers>
                <Grid container spacing={2}>
                    <Grid item>
                        <Card sx={{px: 4, py: 2}}>
                            <img
                                className={'beer-image-sm'}
                                src={beer.image_url}
                                alt="Beer Logo"
                            />
                        </Card>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography sx={{fontWeight: 'bold'}}
                                    variant={'h5'}>{beer.name}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography color={'#FF9900'}
                                    variant={'subtitle1'}>{beer.tagline}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant={'subtitle2'}>{beer.description}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant={'subtitle1'}>Ingradients</Typography>
                        <Box sx={{p: 1.5, borderRadius: 2, boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;'}}>
                            <Grid container spacing={2}>
                                {Object.entries(beer.ingredients || {}).map(([k, ingredients]) => {
                                    return (
                                        <Grid item xs={12}>
                                            <Typography
                                                variant={'subtitle1'}>{StringUtils.capitalizeFirstLetter(k)}</Typography>
                                            {
                                                Array.isArray(ingredients) ? (
                                                    (ingredients || []).map(ingredient => {
                                                        return (
                                                            <Chip
                                                                color={'primary'}
                                                                label={`${ingredient.name} : ${ingredient.amount.value}${ingredient.amount.unit}`}
                                                                variant="outlined" sx={{m: 0.5}}/>
                                                        )
                                                    })
                                                ) : <Chip label={ingredients} variant="outlined" color={'primary'}
                                                          sx={{m: 0.5}}/>
                                            }
                                        </Grid>
                                    )
                                })}
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </DialogContent>
        </BootstrapDialog>
    )
});
