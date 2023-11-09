import { FORM_SERVICE_NAME } from 'src/utils/constants/enums';

export interface IFormTitleNames_Item {
	title: string;
	subTitle: string;
}

type IFormTitleNames_Data = Record<string, IFormTitleNames_Item>;

export const formTitleNames: IFormTitleNames_Data = {
	[FORM_SERVICE_NAME.WORK]: {
		title: 'form-titles.legalization-of-stay',
		subTitle: 'form-sub-titles.residenceCardBasedOnWork',
	},
	[FORM_SERVICE_NAME.BLUE_CARD]: {
		title: 'form-titles.legalization-of-stay',
		subTitle: 'form-sub-titles.residenceCardBasedOnBlueCard',
	},
	[FORM_SERVICE_NAME.LEARNING]: {
		title: 'form-titles.legalization-of-stay',
		subTitle: 'form-sub-titles.residenceCardBasedOnStudy',
	},
	[FORM_SERVICE_NAME.BUSINESS_INDIVIDUAL]: {
		title: 'form-titles.legalization-of-stay',
		subTitle: 'form-sub-titles.residenceCardBasedOnBusinessFOP',
	},
	[FORM_SERVICE_NAME.BUSINESS_LLC]: {
		title: 'form-titles.legalization-of-stay',
		subTitle: 'form-sub-titles.residenceCardBasedOnBusinessTOV',
	},
	[FORM_SERVICE_NAME.LIVING_WITH_FAMILY]: {
		title: 'form-titles.legalization-of-stay',
		subTitle: 'form-sub-titles.residenceCardBasedOnFamily',
	},
	[FORM_SERVICE_NAME.BELARUS_D21_VISA]: {
		title: 'form-titles.legalization-of-stay',
		subTitle: 'form-sub-titles.residenceCardBasedOnHumanitarian',
	},
	[FORM_SERVICE_NAME.ABSOLVENTA]: {
		title: 'form-titles.legalization-of-stay',
		subTitle: 'form-sub-titles.citizenshipGraduation',
	},
	[FORM_SERVICE_NAME.LIVING_WITH_BOYFRIEND]: {
		title: 'form-titles.legalization-of-stay',
		subTitle: 'form-sub-titles.residenceCardBasedOnParents',
	},
	[FORM_SERVICE_NAME.RESIDENT_OF_EUROPEAN]: {
		title: 'form-titles.legalization-of-stay',
		subTitle: 'form-sub-titles.euResidenceCard',
	},
	[FORM_SERVICE_NAME.POLAND_CARDS]: {
		title: 'form-titles.legalization-of-stay',
		subTitle: 'form-sub-titles.permanentResidenceBasedOfPolesCard',
	},
	[FORM_SERVICE_NAME.ORIGIN_HISTORICAL_DOCUMENTS]: {
		title: 'form-titles.legalization-of-stay',
		subTitle: 'form-sub-titles.definitionOfCitizenship',
	},
	[FORM_SERVICE_NAME.MARRIAGE_TO_POLISH_CITIZEN]: {
		title: 'form-titles.legalization-of-stay',
		subTitle: 'form-sub-titles.polishCitizenMarriage',
	},

	[FORM_SERVICE_NAME.STATEMENT_OF_INTENT_WORK]: {
		title: 'form-titles.legalization-of-employment',
		subTitle: 'form-sub-titles.declarationOfIntentToWork',
	},
	[FORM_SERVICE_NAME.INFORMATION_OF_STAROSTA]: {
		title: 'form-titles.legalization-of-employment',
		subTitle: 'form-sub-titles.starostasInformation',
	},
	[FORM_SERVICE_NAME.WORK_PERMIT]: {
		title: 'form-titles.legalization-of-employment',
		subTitle: 'form-sub-titles.workPermit',
	},
	// business consulting
	[FORM_SERVICE_NAME.OPENING_COMPANY]: {
		title: 'form-titles.business-consulting',
		subTitle: 'form-sub-titles.openingCompany',
	},
	[FORM_SERVICE_NAME.OPENING_SOLE_PROPRIETORSHIP]: {
		title: 'form-titles.business-consulting',
		subTitle: 'form-sub-titles.openingSoleProprietorship',
	},
	[FORM_SERVICE_NAME.VIRTUAL_OFFICE_YES]: {
		title: 'form-titles.business-consulting',
		subTitle: 'form-sub-titles.virtualOffice',
	},
	[FORM_SERVICE_NAME.VIRTUAL_OFFICE_NO]: {
		title: 'form-titles.business-consulting',
		subTitle: 'form-sub-titles.virtualOffice',
	},
	[FORM_SERVICE_NAME.GETTING_CERTIFICATION_AND_LICENSES]: {
		title: 'form-titles.business-consulting',
		subTitle: 'form-sub-titles.gettingCertificationAndLicenses',
	},
	// services for life
	[FORM_SERVICE_NAME.INSURANCE]: {
		title: 'form-titles.services-for-life',
		subTitle: 'form-sub-titles.insurance',
	},
	[FORM_SERVICE_NAME.CAR_REGISTRATION]: {
		title: 'form-titles.services-for-life',
		subTitle: 'form-sub-titles.carRegistration',
	},
	[FORM_SERVICE_NAME.PESEL]: {
		title: 'form-titles.services-for-life',
		subTitle: 'form-sub-titles.pesel',
	},
	[FORM_SERVICE_NAME.LICENCE_CHANGE]: {
		title: 'form-titles.services-for-life',
		subTitle: 'form-sub-titles.licenceChange',
	},
	[FORM_SERVICE_NAME.NO_CRIMINAL_RECORD_CERTIFICATE]: {
		title: 'form-titles.services-for-life',
		subTitle: 'form-sub-titles.noCriminalRecordCertificate',
	},
};
