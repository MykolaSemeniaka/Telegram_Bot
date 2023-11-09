const path = require('path');

module.exports = {
	i18n: {
		locales: ['en', 'pl', 'ua', 'ru'],
		defaultLocale: 'en',
		localeDetection: false,
	},
	localePath: path.resolve('public/locales'),
};
