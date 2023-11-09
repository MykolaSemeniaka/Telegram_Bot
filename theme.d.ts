// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Palette, PaletteOptions } from '@mui/material/styles/createPalette';

interface CustomPalette {
	white: string;
	black: string;
	customGrey: string;
}

declare module '@mui/material/styles/createPalette' {
	export interface Palette extends CustomPalette {}

	export interface PaletteOptions extends CustomPalette {}
}
