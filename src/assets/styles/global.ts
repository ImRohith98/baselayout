export const global = {
	styles: {
		global: {
			'html, body': { overflow: 'hidden' },
			'html, body, #__next': { height: 'full', width: 'full' },
			'#__next': { position: 'relative' },
			'.animate-opacity': { animation: 'opac 0.8s' },
			'@keyframes opac': { from: { opacity: 0 }, to: { opacity: 1 } },
			'::-webkit-scrollbar': { backgroundColor: 'transparent', width: '5px' },
			'::-webkit-scrollbar-track': { background: 'transparent' },
			'::-webkit-scrollbar-thumb': { backgroundColor: '#39506f' },
			'::-webkit-scrollbar-button': { display: 'none' }
		}
	}
};
