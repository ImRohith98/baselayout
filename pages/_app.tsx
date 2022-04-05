import type { AppProps } from 'next/app';

import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import { theme } from 'src/assets/styles';

function AusiyticApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider theme={theme}>
			<CSSReset />
			<Component {...pageProps} />
		</ChakraProvider>
	);
}

export default AusiyticApp;