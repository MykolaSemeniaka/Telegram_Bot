import { allFieldsData, IField } from 'src/utils/constants';
import { mainFormData } from 'src/utils/constants/variables/main-form-data';

export const createCurrentForm = (serviceName: string): IField[] => {
	if (!serviceName || !mainFormData[serviceName]) {
		return [];
	}

	const res = mainFormData[serviceName];

	return res.map(item => allFieldsData[item]);
};
