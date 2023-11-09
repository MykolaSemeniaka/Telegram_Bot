import { LanguageSelect, Logo } from 'src/components';
import styles from './imdex.module.scss';

export const Header = () => {
	return (
		<header className={styles.header}>
			<Logo />
			<div className={styles.language}>
				<LanguageSelect />
			</div>
		</header>
	);
};
