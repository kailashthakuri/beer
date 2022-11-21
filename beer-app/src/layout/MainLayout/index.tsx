import { AppBar, Box, styled, Toolbar, useTheme } from '@mui/material';
import { Header } from '../Header';
import { Outlet } from 'react-router-dom';

const Main = styled('main')(({theme}) => ({
    backgroundColor: theme.palette.background.default,
    width: '100%',
    minHeight: 'calc(100vh - 88px)',
    flexGrow: 1,
    padding: '20px',
    marginTop: '88px',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
    })
}));

const MainLayout = () => {
    const theme = useTheme();

    return (
        <Box sx={{display: 'flex'}}>
            <AppBar
                enableColorOnDark
                position="fixed"
                color="inherit"
                elevation={0}
                sx={{
                    boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
                    backgroundColor: theme.palette.background.paper
                }}>
                <Toolbar>
                    <Header/>
                </Toolbar>
            </AppBar>
            <Main>
                <Outlet/>
            </Main>
        </Box>
    )
}

export default MainLayout;
