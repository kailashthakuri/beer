import React from 'react';
import './App.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './theme';
import { Route, Routes } from 'react-router';
import { PrivateRoutes } from './routes/PrivateRoutes';
import MainLayout from './layout/MainLayout';
import Landing from './pages/Landing';
import { CustomThemeOptions } from './theme/CustomeThemeOptions';
import { AlertProvider } from './context/alertContext';
import { GlobalMessage } from './components/common/GlobalMessage';
import { RecoilRoot } from 'recoil';


/**
 * can be store in state
 */
const customThemeOptions: CustomThemeOptions = {
    defaultBackgroundColor: '#F8F8FF',
    paperBackgroundColor: '#FFFFFF'
}

function App() {
    return (
        <>
            <ThemeProvider theme={theme(customThemeOptions)}>
                <CssBaseline/>
                <RecoilRoot>
                    <AlertProvider>
                        <GlobalMessage/>
                        <Routes>
                            <Route element={<MainLayout/>}>
                                <Route path={'/'} element={<Landing/>}/>
                                <Route path={'/dashboard'} element={<PrivateRoutes/>}>
                                    {/*Private Routes*/}
                                </Route>
                            </Route>
                        </Routes>
                    </AlertProvider>
                </RecoilRoot>
            </ThemeProvider>
        </>
    );
}

export default App;
