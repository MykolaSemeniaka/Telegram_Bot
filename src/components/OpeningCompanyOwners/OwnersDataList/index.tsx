import { FC, useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'next-i18next';
import { theme } from 'src/utils/theme';
import { IOpeningCompanyOwnerItem } from 'src/utils/types';

interface ITripsAbroadListPreps {
	dataListProps: IOpeningCompanyOwnerItem[];
	handleOpen: (event: any) => void;
	label: string;
}

export const OwnersDataList: FC<ITripsAbroadListPreps> = ({ dataListProps, label, handleOpen }) => {
	const [dataList, setDataList] = useState<IOpeningCompanyOwnerItem[]>(dataListProps);
	const { t } = useTranslation('common');

	useEffect(() => {
		setDataList(dataListProps);
	}, [dataListProps]);

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
			{!dataList || dataList.length === 0 ? (
				<Typography sx={{ color: theme.palette.white, cursor: 'pointer' }}>{label ? t(label) : ''}</Typography>
			) : (
				dataList.map((item: IOpeningCompanyOwnerItem, index: number) => (
					<Box key={`trip-${index}`} sx={{ marginTop: '18px' }}>
						<Typography>{item.email}</Typography>
						<Typography>{item.phoneNumber}</Typography>
						<Typography>{item.peselNumber}</Typography>
					</Box>
				))
			)}
		</Box>
	);
};
