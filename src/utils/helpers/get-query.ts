import { useEffect, useState } from 'react';

// interface useGetQueryReturn {
// 	telegramId: string;
// 	service: string;
// 	// lang: string;
// }

export const useGetQuery = () => {
	const [queryParams, setQueryParams] = useState<any>({ telegramId: '', service: '' });

	useEffect(() => {
		if (document) {
			const url = new URL(window.location.href);
			const serviceParam = url.searchParams.get('service');
			const telegramIdParam = url.searchParams.get('id');
			setQueryParams({ telegramId: telegramIdParam, service: serviceParam });
		}
	}, []);

	return queryParams;
};
