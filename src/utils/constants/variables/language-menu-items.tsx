import { FLAGS, LANGUAGE } from 'src/utils/constants/enums';

interface ILanguageMenuItems {
	iconPath: string;
	alt: string;
	value: string;
}

export const LanguageMenuItems: ILanguageMenuItems[] = [
	{
		iconPath: FLAGS.EN,
		alt: 'English flag',
		value: LANGUAGE.EN,
	},
	{
		iconPath: FLAGS.UA,
		alt: 'Ukrainian flag',
		value: LANGUAGE.UA,
	},
	{
		iconPath: FLAGS.PL,
		alt: 'Poland flag',
		value: LANGUAGE.PL,
	},
	{
		iconPath: FLAGS.RU,
		alt: 'russia flag',
		value: LANGUAGE.RU,
	},
];
