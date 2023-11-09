import { FORM_SERVICE_NAME } from 'src/utils/constants';
import { IUserParams } from 'src/utils/types';

export const getCurrentPostValue = <T extends Record<string, any>>(inputObject: T, userParams: IUserParams) => {
	const { fullName, phoneNumber, telegramName, email, ...rest } = inputObject;

	const commonUserInformation = {
		fullName,
		phoneNumber,
		telegramName: !telegramName ? null : telegramName,
		email,
		service: userParams.serviceParam,
		communicationLanguage: userParams.lang,
		userTelegramId: +userParams.telegramIdParam,
		formMessage: +userParams.messageId,
	};

	const currentRest = Object.fromEntries(
		Object.entries(rest).map(([key, value]) => [key, value === '' ? null : value])
	);

	const serviceParamOptions = [
		FORM_SERVICE_NAME.VIRTUAL_OFFICE_NO,
		FORM_SERVICE_NAME.GETTING_CERTIFICATION_AND_LICENSES,
		FORM_SERVICE_NAME.CAR_REGISTRATION,
		FORM_SERVICE_NAME.PESEL,
		FORM_SERVICE_NAME.LICENCE_CHANGE,
		FORM_SERVICE_NAME.NO_CRIMINAL_RECORD_CERTIFICATE,
	];

	let res: any;
	const check: any = serviceParamOptions.includes(userParams.serviceParam as any);

	if (check) {
		res = commonUserInformation;
	} else {
		res = { commonUserInformation, ...currentRest } as {
			commonUserInformation: typeof commonUserInformation;
		} & typeof currentRest;
	}

	return res;
};
