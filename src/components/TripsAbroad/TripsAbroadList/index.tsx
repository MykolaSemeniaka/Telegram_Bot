import { FC, useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'next-i18next';
import { theme } from 'src/utils/theme';
import { ITripsAbroadItem } from 'src/utils/types';

interface ITripsAbroadListPreps {
	tripsListProps: ITripsAbroadItem[];
	handleOpen: (event: any) => void;
	label: string;
}

export const TripsAbroadList: FC<ITripsAbroadListPreps> = ({ tripsListProps, label, handleOpen }) => {
	const [tripsList, setTripsList] = useState<ITripsAbroadItem[]>(tripsListProps);
	const { t } = useTranslation('common');

	useEffect(() => {
		setTripsList(tripsListProps);
	}, [tripsListProps]);

	return (
		<Box
			sx={{
				display: 'flax',
				alignItems: 'center',
				backgroundColor: 'transparent',
				marginTop: '40px',
				minHeight: '50px',
				border: '1px solid #FFFFFF',
				borderRadius: '12px',
				padding: '12px 16px',
			}}
			onClick={handleOpen}
		>
			{!tripsList || tripsList.length === 0 ? (
				<Typography sx={{ color: theme.palette.white, cursor: 'pointer' }}>{label ? t(label) : ''}</Typography>
			) : (
				tripsList.map((item: ITripsAbroadItem, index: number) => (
					<Box key={`trip-${index}`} sx={{ marginTop: '18px' }}>
						<Typography>{item.country}</Typography>
						<Typography>{item.dateFromTo}</Typography>
					</Box>
				))
			)}
		</Box>
	);
};
