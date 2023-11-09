import { FC, useEffect, useState } from 'react';
import { Chip, Paper, Typography } from '@mui/material';
import { useTranslation } from 'next-i18next';
import { theme } from 'src/utils/theme';
import { IFamilyMemberItem } from 'src/utils/types';

interface ICustomChipList {
	chipListProps: IFamilyMemberItem[];
	handleOpen: (event: any) => void;
	label?: string;
}

export const CustomChipList: FC<ICustomChipList> = ({ chipListProps, handleOpen, label }) => {
	const [chipList, setChipList] = useState<IFamilyMemberItem[]>(chipListProps);
	const { t } = useTranslation('common');

	useEffect(() => {
		setChipList(chipListProps);
	}, [chipListProps]);

	return (
		<Paper
			onClick={handleOpen}
			variant={'outlined'}
			sx={{
				display: 'flax',
				alignItems: 'center',
				backgroundColor: 'transparent',
				marginTop: '40px',
				minHeight: '50px',
				border: '1px solid #FFFFFF',
				borderRadius: '12px',
				padding: '12px 16px',
				cursor: 'pointer',
			}}
		>
			{!chipList || chipList.length === 0 ? (
				<Typography sx={{ color: theme.palette.white }}>{label ? t(label) : ''}</Typography>
			) : (
				chipList.map((item: IFamilyMemberItem, index: number) => (
					<Chip
						sx={{ color: theme.palette.white, border: '1px solid yellow' }}
						key={`chip-${index}`}
						variant={'filled'}
						label={item.degreeGentility ? item.degreeGentility : 'member'}
					/>
				))
			)}
		</Paper>
	);
};
