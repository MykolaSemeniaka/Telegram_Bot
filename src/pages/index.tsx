import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { EmploymentLegalization } from 'src/components';
import { withLayout } from 'src/layout';
import { LANGUAGE } from 'src/utils/constants';
import styles from './index.module.scss';

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale as LANGUAGE, ['common'])),
	},
});

function Home() {
	return (
		<div className={styles.wrapper}>
			<EmploymentLegalization />
		</div>
	);
}

export default withLayout(Home);
