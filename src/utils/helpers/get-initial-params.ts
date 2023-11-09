import { FIELD_NAMES } from 'src/utils/constants';
import { mainFormData } from 'src/utils/constants/variables/main-form-data';

interface getInitialParamsReturn extends Record<string, string | []> {}

export const getInitialParams = (serviceName: string): Record<string, string | []> => {
	const res: getInitialParamsReturn = {};

	const template = mainFormData[serviceName];

	if (Array.isArray(template)) {
		template.forEach(item => {
			switch (item) {
				case FIELD_NAMES.FAMILY_IN_POLAND: {
					res[item] = [];
					break;
				}
				case FIELD_NAMES.PREVIOUS_TRIPS_ABROAD: {
					res[item] = [];
					break;
				}
				case FIELD_NAMES.COMPANY_MEMBERS: {
					res[item] = [];
					break;
				}
				default: {
					res[item] = '';
					break;
				}
			}
		});
	}

	return res;
};
