import { FIELD_NAMES, FIELD_TYPES } from 'src/utils/constants/enums';

export interface ISelectOptions {
	value: string;
}

type fieldType =
	| FIELD_TYPES.DEFAULT
	| FIELD_TYPES.SELECT
	| FIELD_TYPES.PHONE
	| FIELD_TYPES.DATE
	| FIELD_TYPES.FAMILY
	| FIELD_TYPES.TRIPS_ABROAD
	| FIELD_TYPES.OPENING_COMPANY;

export interface IField {
	name: string;
	label: string;
	fieldType: fieldType;
	selectOptions?: ISelectOptions[];
	initialState?: string | { [key: string]: string };
}

interface IAllFieldsData {
	[key: string]: IField;
}

export const serviceForLife: IAllFieldsData = {
	// services for life
	[FIELD_NAMES.INSURANCE_START_DATE]: {
		name: FIELD_NAMES.INSURANCE_START_DATE,
		label: 'form-inputs.insurance.startDate.label',
		fieldType: FIELD_TYPES.DEFAULT,
	},
	[FIELD_NAMES.INSURANCE_END_DATE]: {
		name: FIELD_NAMES.INSURANCE_END_DATE,
		label: 'form-inputs.insurance.endDate.label',
		fieldType: FIELD_TYPES.DEFAULT,
	},
	[FIELD_NAMES.SEX]: {
		name: FIELD_NAMES.SEX,
		label: 'form-inputs.insurance.sex.label',
		fieldType: FIELD_TYPES.DEFAULT,
	},
	[FIELD_NAMES.INSURANCE_PASSPORT_NUMBER]: {
		name: FIELD_NAMES.INSURANCE_PASSPORT_NUMBER,
		label: 'form-inputs.insurance.passportNumber.label',
		fieldType: FIELD_TYPES.DEFAULT,
	},
	[FIELD_NAMES.INSURANCE_PLACE_OF_RESIDENCE]: {
		name: FIELD_NAMES.INSURANCE_PLACE_OF_RESIDENCE,
		label: 'form-inputs.insurance.insurancePlaceOfResidence.label',
		fieldType: FIELD_TYPES.DEFAULT,
	},
};

export const businessConsulting: IAllFieldsData = {
	// business consulting
	[FIELD_NAMES.COMPANY_NAME]: {
		name: FIELD_NAMES.COMPANY_NAME,
		label: 'form-inputs.openingCompany.companyName.label',
		fieldType: FIELD_TYPES.DEFAULT,
	},
	[FIELD_NAMES.COMPANY_ADDRESS]: {
		name: FIELD_NAMES.COMPANY_ADDRESS,
		label: 'form-inputs.openingCompany.companyAddress.label',
		fieldType: FIELD_TYPES.DEFAULT,
	},
	[FIELD_NAMES.COMPANY_FOUNDER]: {
		name: FIELD_NAMES.COMPANY_FOUNDER,
		label: 'form-inputs.openingCompany.companyFounder.label',
		fieldType: FIELD_TYPES.DEFAULT,
	},
	[FIELD_NAMES.COMPANY_CAPITAL]: {
		name: FIELD_NAMES.COMPANY_CAPITAL,
		label: 'form-inputs.openingCompany.companyCapital.label',
		fieldType: FIELD_TYPES.DEFAULT,
	},
	[FIELD_NAMES.COMPANY_DIVIDE_SHARES]: {
		name: FIELD_NAMES.COMPANY_DIVIDE_SHARES,
		label: 'form-inputs.openingCompany.divideShares.label',
		fieldType: FIELD_TYPES.DEFAULT,
	},
	[FIELD_NAMES.COMPANY_DIRECTOR]: {
		name: FIELD_NAMES.COMPANY_DIRECTOR,
		label: 'form-inputs.openingCompany.companyDirector.label',
		fieldType: FIELD_TYPES.DEFAULT,
	},
	[FIELD_NAMES.COMPANY_TYPE]: {
		name: FIELD_NAMES.COMPANY_TYPE,
		label: 'form-inputs.openingCompany.typeOfCompany.label',
		fieldType: FIELD_TYPES.DEFAULT,
	},
	[FIELD_NAMES.TAX_SYSTEM]: {
		name: FIELD_NAMES.TAX_SYSTEM,
		label: 'form-inputs.openingSoleProprietorship.taxSystem.label',
		fieldType: FIELD_TYPES.DEFAULT,
	},
	[FIELD_NAMES.COMPANY_NIP]: {
		name: FIELD_NAMES.COMPANY_NIP,
		label: 'form-inputs.virtualOfficeYes.companyNip.label',
		fieldType: FIELD_TYPES.DEFAULT,
	},
	[FIELD_NAMES.SIGNING_DATE_CONTRACT]: {
		name: FIELD_NAMES.SIGNING_DATE_CONTRACT,
		label: 'form-inputs.virtualOfficeYes.signingDateContract.label',
		fieldType: FIELD_TYPES.DEFAULT,
	},
	[FIELD_NAMES.COMPANY_MEMBERS]: {
		name: FIELD_NAMES.COMPANY_MEMBERS,
		label: 'form-inputs.openingCompany.companyMembers.label',
		fieldType: FIELD_TYPES.OPENING_COMPANY,
	},
};

export const allFieldsData: IAllFieldsData = {
	[FIELD_NAMES.PREVIOUS_SURNAME]: {
		name: FIELD_NAMES.PREVIOUS_SURNAME,
		label: 'form-inputs.previously-surname.label',
		fieldType: FIELD_TYPES.DEFAULT,
		initialState: '',
	},
	[FIELD_NAMES.FULL_NAME]: {
		name: FIELD_NAMES.FULL_NAME,
		label: 'form-inputs.fullName.label',
		fieldType: FIELD_TYPES.DEFAULT,
		initialState: '',
	},
	[FIELD_NAMES.FATHER_NAME]: {
		name: FIELD_NAMES.FATHER_NAME,
		label: 'form-inputs.father-name.label',
		fieldType: FIELD_TYPES.DEFAULT,
		initialState: '',
	},
	[FIELD_NAMES.MOTHER_NAME]: {
		name: FIELD_NAMES.MOTHER_NAME,
		label: 'form-inputs.mother-name.label',
		fieldType: FIELD_TYPES.DEFAULT,
		initialState: '',
	},
	[FIELD_NAMES.MOTHER_MAIDEN_NAME]: {
		name: FIELD_NAMES.MOTHER_MAIDEN_NAME,
		label: 'form-inputs.name-mother-maiden.label',
		fieldType: FIELD_TYPES.DEFAULT,
		initialState: '',
	},
	[FIELD_NAMES.DOB]: {
		name: FIELD_NAMES.DOB,
		label: 'form-inputs.birth-date.label',
		fieldType: FIELD_TYPES.DATE,
		initialState: '',
	},
	[FIELD_NAMES.PLACE_OF_BIRTH]: {
		name: FIELD_NAMES.PLACE_OF_BIRTH,
		label: 'form-inputs.birth-place.label',
		fieldType: FIELD_TYPES.DEFAULT,
		initialState: '',
	},
	[FIELD_NAMES.NATIONALITY]: {
		name: FIELD_NAMES.NATIONALITY,
		label: 'form-inputs.nationality.label',
		fieldType: FIELD_TYPES.DEFAULT,
		initialState: '',
	},
	[FIELD_NAMES.CITIZENSHIP]: {
		name: FIELD_NAMES.CITIZENSHIP,
		label: 'form-inputs.citizenship.label',
		fieldType: FIELD_TYPES.DEFAULT,
		initialState: '',
	},
	[FIELD_NAMES.MARITAL_STATUS]: {
		name: FIELD_NAMES.MARITAL_STATUS,
		label: 'form-inputs.maritalStatus.label',
		fieldType: FIELD_TYPES.SELECT,
		selectOptions: [
			{ value: 'form-inputs.maritalStatus.options.single' },
			{ value: 'form-inputs.maritalStatus.options.married' },
			{ value: 'form-inputs.maritalStatus.options.divorced' },
			{ value: 'form-inputs.maritalStatus.options.widowed' },
		],
		initialState: '',
	},
	[FIELD_NAMES.EDUCATION]: {
		name: FIELD_NAMES.EDUCATION,
		label: 'form-inputs.education.label',
		fieldType: FIELD_TYPES.SELECT,
		selectOptions: [
			{ value: 'form-inputs.education.options.none' },
			{ value: 'form-inputs.education.options.secondary' },
			{ value: 'form-inputs.education.options.higher' },
		],
		initialState: '',
	},
	[FIELD_NAMES.HEIGHT]: {
		name: FIELD_NAMES.HEIGHT,
		label: 'form-inputs.height.label',
		fieldType: FIELD_TYPES.DEFAULT,
		initialState: '',
	},
	[FIELD_NAMES.EYE_COLOR]: {
		name: FIELD_NAMES.EYE_COLOR,
		label: 'form-inputs.eyeColor.label',
		fieldType: FIELD_TYPES.SELECT,
		selectOptions: [
			{ value: 'form-inputs.eyeColor.options.blue' },
			{ value: 'form-inputs.eyeColor.options.green' },
			{ value: 'form-inputs.eyeColor.options.brown' },
			{ value: 'form-inputs.eyeColor.options.brown-green' },
			{ value: 'form-inputs.eyeColor.options.dark-brown' },
			{ value: 'form-inputs.eyeColor.options.dark-blue' },
			{ value: 'form-inputs.eyeColor.options.gray' },
			{ value: 'form-inputs.eyeColor.options.red' },
		],
		initialState: '',
	},
	[FIELD_NAMES.SPECIAL_DISTINGUISHING_MARKS]: {
		name: FIELD_NAMES.SPECIAL_DISTINGUISHING_MARKS,
		label: 'form-inputs.special-marks.label',
		fieldType: FIELD_TYPES.DEFAULT,
		initialState: '',
	},
	[FIELD_NAMES.PESEL_NUMBER]: {
		name: FIELD_NAMES.PESEL_NUMBER,
		label: 'form-inputs.pesel-number.label',
		fieldType: FIELD_TYPES.DEFAULT,
		initialState: '',
	},
	[FIELD_NAMES.PHONE_NUMBER]: {
		name: FIELD_NAMES.PHONE_NUMBER,
		label: 'form-inputs.phoneNumber.label',
		fieldType: FIELD_TYPES.PHONE,
		initialState: '',
	},
	[FIELD_NAMES.TELEGRAM_NAME]: {
		name: FIELD_NAMES.TELEGRAM_NAME,
		label: 'form-inputs.telegram-nikName.label',
		fieldType: FIELD_TYPES.DEFAULT,
		initialState: '',
	},
	[FIELD_NAMES.EMAIL]: {
		name: FIELD_NAMES.EMAIL,
		label: 'form-inputs.email.label',
		fieldType: FIELD_TYPES.DEFAULT,
		initialState: '',
	},
	[FIELD_NAMES.POLISH_ADDRESS]: {
		name: FIELD_NAMES.POLISH_ADDRESS,
		label: 'form-inputs.polish-address.label',
		fieldType: FIELD_TYPES.DEFAULT,
		initialState: '',
	},
	[FIELD_NAMES.FAMILY_IN_POLAND]: {
		name: FIELD_NAMES.FAMILY_IN_POLAND,
		label: 'form-inputs.familyMembers.label',
		fieldType: FIELD_TYPES.FAMILY,
		initialState: '',
	},
	[FIELD_NAMES.PREVIOUS_STAY_IN_POLAND]: {
		name: FIELD_NAMES.PREVIOUS_STAY_IN_POLAND,
		label: 'form-inputs.previousStayInPoland.label',
		fieldType: FIELD_TYPES.DEFAULT,
		initialState: '',
	},
	[FIELD_NAMES.PREVIOUS_TRIPS_ABROAD]: {
		name: FIELD_NAMES.PREVIOUS_TRIPS_ABROAD,
		label: 'form-inputs.previousTripsAbroad.label',
		fieldType: FIELD_TYPES.TRIPS_ABROAD,
	},
	[FIELD_NAMES.PREVIOUS_VISIT_TO_POLAND]: {
		name: FIELD_NAMES.PREVIOUS_VISIT_TO_POLAND,
		label: 'form-inputs.previousVisitToPoland.label',
		fieldType: FIELD_TYPES.DEFAULT,
		initialState: '',
	},
	[FIELD_NAMES.CRIMINAL_RECORD]: {
		name: FIELD_NAMES.CRIMINAL_RECORD,
		label: 'form-inputs.criminalRecord.label',
		fieldType: FIELD_TYPES.DEFAULT,
		initialState: '',
	},
	[FIELD_NAMES.EMPLOYER_PHONE]: {
		name: FIELD_NAMES.EMPLOYER_PHONE,
		label: 'form-inputs.employerPhone.label',
		fieldType: FIELD_TYPES.DEFAULT,
		initialState: '',
	},
	[FIELD_NAMES.EMPLOYER_EMAIL]: {
		name: FIELD_NAMES.EMPLOYER_EMAIL,
		label: 'form-inputs.employerEmail.label',
		fieldType: FIELD_TYPES.DEFAULT,
		initialState: '',
	},
	// family members field
	[FIELD_NAMES.ACCOUNTANT_PHONE]: {
		name: FIELD_NAMES.ACCOUNTANT_PHONE,
		label: 'form-inputs.accountantPhone.label',
		fieldType: FIELD_TYPES.DEFAULT,
		initialState: '',
	},
	[FIELD_NAMES.ACCOUNTANT_EMAIL]: {
		name: FIELD_NAMES.ACCOUNTANT_EMAIL,
		label: 'form-inputs.accountantEmail.label',
		fieldType: FIELD_TYPES.DEFAULT,
		initialState: '',
	},
	[FIELD_NAMES.FAMILY_PLACE_OF_RESIDENCE]: {
		name: FIELD_NAMES.FAMILY_PLACE_OF_RESIDENCE,
		label: 'form-inputs.placeOfResidence.label',
		fieldType: FIELD_TYPES.DEFAULT,
	},
	[FIELD_NAMES.FAMILY_DEGREE_GENTILITY]: {
		name: FIELD_NAMES.FAMILY_DEGREE_GENTILITY,
		label: 'form-inputs.degreeGentility.label',
		fieldType: FIELD_TYPES.DEFAULT,
	},
	// trips abroad fields
	[FIELD_NAMES.TRIPS_COUNTRY]: {
		name: FIELD_NAMES.TRIPS_COUNTRY,
		label: 'form-inputs.country.label',
		fieldType: FIELD_TYPES.DEFAULT,
	},
	[FIELD_NAMES.TRIPS_DATE_FROM_TO_RESULT]: {
		name: FIELD_NAMES.TRIPS_DATE_FROM_TO_RESULT,
		label: 'form-inputs.dateFromTo.label',
		fieldType: FIELD_TYPES.DATE,
	},
	...businessConsulting,
	...serviceForLife,
};
