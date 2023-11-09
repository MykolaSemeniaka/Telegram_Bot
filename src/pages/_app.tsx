import { ToastContainer } from 'react-toastify';
import { StyledEngineProvider } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { theme } from 'src/utils/theme';
import 'src/styles/globals.css';

function App({ Component, pageProps }: AppProps) {
	return (
		<StyledEngineProvider injectFirst>
			<ToastContainer />
			<ThemeProvider theme={theme}>
				<Component {...pageProps} />
			</ThemeProvider>
		</StyledEngineProvider>
	);
}

export default appWithTranslation(App);
