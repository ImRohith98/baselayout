import React from 'react';
import ReactDOM from 'react-dom';
import { queryClient } from '@/config';
import { theme } from '@/assets/styles';
import ApplicationRouter from '@/router';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import { QueryClientProvider } from 'react-query';

const container = document.getElementById('root');

const Application = (
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<ChakraProvider theme={theme}>
				<CSSReset />
				<BrowserRouter>
					<ApplicationRouter />
				</BrowserRouter>
			</ChakraProvider>
		</QueryClientProvider>
	</React.StrictMode>
);

ReactDOM.render(Application, container);
