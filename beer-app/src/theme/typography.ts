import { TypographyOptions } from '@mui/material/styles/createTypography';
import { CustomThemeOptions } from './CustomeThemeOptions';

/**
 * Override Global Mui Typography
 * @param options
 */
export const themeTypography = (options: CustomThemeOptions): TypographyOptions => {
    return {
            button: {
                textTransform: 'none'
            }
    }
}
