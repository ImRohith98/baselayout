import React from 'react';
import ReactDOM from 'react-dom';
import { theme } from './assets/styles';
import ApplicationRouter from './router';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';

const container = document.getElementById('root');

const Application = (
	<React.StrictMode>
		<ChakraProvider theme={theme}>
			<CSSReset />
			<BrowserRouter>
				<ApplicationRouter />
			</BrowserRouter>
		</ChakraProvider>
	</React.StrictMode>
);

ReactDOM.render(Application, container)
