import { QueryClient } from 'react-query';

const defaultOptions = {
	queries: {
		refetchOnWindowFocus: false,
		refetchOnmount: false,
		refetchOnReconnect: false,
		retry: false,
		staleTime: 5 * 60 * 1000
	}
};

export default new QueryClient({ defaultOptions });
