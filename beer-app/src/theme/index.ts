import { createTheme } from '@mui/material';
import { ThemeOptions } from '@mui/material/styles/createTheme';
import { componentStyleOverrides } from './componentStyleOverrides';
import { themeTypography } from './typography';
import { themePalette } from './palette';
import { CustomThemeOptions } from './CustomeThemeOptions';

export const theme = (customization: CustomThemeOptions) => {
    const themeOptions: ThemeOptions = {
        direction: 'ltr',
        palette: themePalette(customization),
        mixins: {
            toolbar: {
                minHeight: '48px',
                padding: '16px',
                '@media (min-width: 600px)': {
                    minHeight: '48px'
                }
            }
        },
        typography: themeTypography(customization)
    }
    const themes = createTheme(themeOptions);
    themes.components = componentStyleOverrides(themeOptions);

    return themes;
}
