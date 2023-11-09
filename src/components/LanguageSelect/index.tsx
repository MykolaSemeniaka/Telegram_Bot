import { FC } from 'react';
import { MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { LANGUAGE } from 'src/utils/constants';
import { LanguageMenuItems } from 'src/utils/constants/variables/language-menu-items';
import styles from './index.module.scss';

export const LanguageSelect: FC = () => {
	const { i18n } = useTranslation();
	const router = useRouter();

	const handleChange = async (event: SelectChangeEvent): Promise<void> => {
		const language: LANGUAGE = event.target.value as LANGUAGE;
		await i18n.changeLanguage(language);
		await router.push(router.route, router.route, { locale: language });
	};

	return (
		<Select
			sx={{
				'.MuiSelect-standard': {
					display: 'flex',
					gap: '8px',
					maxHeight: '50px',
					maxWidth: '100px',
					padding: '8px 10px 2px 10px',
				},
				'.MuiSelect-icon': {
					fill: 'white',
					right: 0,
				},
			}}
			defaultValue={i18n.language as LANGUAGE}
			value={i18n.language as LANGUAGE}
			onChange={handleChange}
			MenuProps={{ disableScrollLock: true }}
			inputProps={{ 'aria-label': 'Without label' }}
			variant={'standard'}
		>
			{LanguageMenuItems.map(item => (
				<MenuItem className={styles.selectItem} key={item.iconPath} value={item.value}>
					<Typography variant="subtitle2" className={styles.select__value}>
						{item.value.toUpperCase()}
					</Typography>
					<Image src={item.iconPath} alt={item.alt} width={28} height={20} />
				</MenuItem>
			))}
		</Select>
	);
};
