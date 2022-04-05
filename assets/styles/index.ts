import { fonts } from './fonts';
import { global } from './global';
import { Button } from './components';
import { colorMode } from './color-mode';
import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
	components: {
		Button
	},
	config: { ...colorMode },
	...global,
	...fonts
});
