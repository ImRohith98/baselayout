import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';

const rootId = document.getElementById('root');

const Application = () => (
	<React.StrictMode>
		<ChakraProvider>test</ChakraProvider>
	</React.StrictMode>
);

ReactDOM.render(<Application />, rootId);
