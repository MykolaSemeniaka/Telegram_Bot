import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import styles from './index.module.scss';

export const getYear = (): number => {
	const date = new Date();
	return date.getFullYear();
};

export const Footer = () => {
	const { t } = useTranslation('common');

	return (
		<footer className={styles.footer}>
			<span>
				©{getYear()}, {t('footer.create')}
			</span>

			<Link className={styles.company_name} target={'_blank'} href={'https://synergpulse.com/'}>
				SynergPulse
			</Link>

			<span>{t('footer.team')}</span>
		</footer>
	);
};
