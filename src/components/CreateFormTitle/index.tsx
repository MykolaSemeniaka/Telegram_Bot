import { FC, useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import { useTranslation } from 'next-i18next';
import { formTitleNames, IFormTitleNames_Item } from 'src/utils/constants/variables/form-title-names';

interface ICreateFormTitle {
	serviceName: string;
}

export const CreateFormTitle: FC<ICreateFormTitle> = ({ serviceName }) => {
	const [formTitle, setFormTitle] = useState<IFormTitleNames_Item | null>(null);
	const [fontSize, setFontSize] = useState('42px');

	const { t } = useTranslation('common');

	useEffect(() => {
		const formTitle = formTitleNames[serviceName];
		setFormTitle(formTitle);
	}, [serviceName]);

	useEffect(() => {
		if (!document) {
			return undefined;
		}
		const handleResize = () => {
			window.innerWidth < 400 ? setFontSize('8vw') : setFontSize('42px');
		};

		handleResize();

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	if (!formTitle) {
		return null;
	}

	const styles = {
		display: 'grid',
		color: '#FFFFFF',
		textTransform: 'capitalize',
		fontSize: fontSize,
		lineHeight: '46px',
		marginTop: '20px',
	};

	return (
		<>
			<Typography sx={styles} align={'center'} variant={'h2'}>
				{t(formTitle.title)}
			</Typography>
			<Typography sx={styles} align={'center'} variant={'h2'}>
				{t(formTitle.subTitle)}
			</Typography>
		</>
	);
};
