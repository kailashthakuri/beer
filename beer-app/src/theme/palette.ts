import { PaletteOptions } from '@mui/material/styles/createPalette';

export const themePalette = (options: any): PaletteOptions => {
    return {
        background: {
            default: options.defaultBackgroundColor,
            paper: options.paperBackgroundColor,
        }
    }
}
