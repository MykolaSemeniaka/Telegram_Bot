import { FORM_SERVICE_NAME, POST_URLS } from 'src/utils/constants';

export const getPostUrl = (service: string): string => {
	let res = '';

	switch (service) {
		case FORM_SERVICE_NAME.OPENING_COMPANY: {
			res = POST_URLS.openingCompany;
			break;
		}
		case FORM_SERVICE_NAME.OPENING_SOLE_PROPRIETORSHIP: {
			res = POST_URLS.openingSoleProprietorship;
			break;
		}
		case FORM_SERVICE_NAME.VIRTUAL_OFFICE_YES: {
			res = POST_URLS.virtualOfficeYes;
			break;
		}
		case FORM_SERVICE_NAME.INSURANCE: {
			res = POST_URLS.insurance;
			break;
		}

		case FORM_SERVICE_NAME.VIRTUAL_OFFICE_NO: {
			res = POST_URLS.contactForm;
			break;
		}

		case FORM_SERVICE_NAME.GETTING_CERTIFICATION_AND_LICENSES: {
			res = POST_URLS.contactForm;
			break;
		}

		case FORM_SERVICE_NAME.CAR_REGISTRATION: {
			res = POST_URLS.contactForm;
			break;
		}

		case FORM_SERVICE_NAME.PESEL: {
			res = POST_URLS.contactForm;
			break;
		}

		case FORM_SERVICE_NAME.LICENCE_CHANGE: {
			res = POST_URLS.contactForm;
			break;
		}

		case FORM_SERVICE_NAME.NO_CRIMINAL_RECORD_CERTIFICATE: {
			res = POST_URLS.contactForm;
			break;
		}

		default: {
			res = POST_URLS.default;
		}
	}

	return res;
};
