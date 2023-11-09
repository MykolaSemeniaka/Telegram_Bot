import { mainFormData } from 'src/utils/constants/variables/main-form-data';
import { mainValidationSchema } from 'src/utils/validations/validation-templates';

export const getCurrentValidationSchema = (serviceName: string): any => {
	if (!serviceName || !mainFormData[serviceName]) {
		return {};
	}

	return mainValidationSchema[serviceName];
};
