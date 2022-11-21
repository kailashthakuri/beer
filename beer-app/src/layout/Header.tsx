import { Grid, Typography } from '@mui/material';
import { LogoSection } from './LogoSection';

export const Header = () => {
    return (
        <Grid container sx={{
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Grid item xs={2}>
                <LogoSection/>
            </Grid>
            <Grid item xs={8} sx={{textAlign: 'center'}}>
                <Typography sx={{fontFamily:'Lobster',fontSize:'30px'}}>World's Best Beers!</Typography>
            </Grid>
            <Grid item xs={2}/>
        </Grid>
    )
}
