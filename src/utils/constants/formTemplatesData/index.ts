import { FIELD_NAMES } from 'src/utils/constants/enums';

const standartFormTemplate: string[] = [
	FIELD_NAMES.TELEGRAM_NAME,
	FIELD_NAMES.PREVIOUS_SURNAME,
	FIELD_NAMES.FULL_NAME,
	FIELD_NAMES.FATHER_NAME,
	FIELD_NAMES.MOTHER_NAME,
	FIELD_NAMES.MOTHER_MAIDEN_NAME,
	FIELD_NAMES.DOB,
	FIELD_NAMES.PLACE_OF_BIRTH,
	FIELD_NAMES.NATIONALITY,
	FIELD_NAMES.CITIZENSHIP,
	FIELD_NAMES.MARITAL_STATUS,
	FIELD_NAMES.EDUCATION,
	FIELD_NAMES.HEIGHT,
	FIELD_NAMES.EYE_COLOR,
	FIELD_NAMES.SPECIAL_DISTINGUISHING_MARKS,
	FIELD_NAMES.PESEL_NUMBER,
	FIELD_NAMES.PHONE_NUMBER,
	FIELD_NAMES.EMAIL,
	FIELD_NAMES.POLISH_ADDRESS,
	FIELD_NAMES.FAMILY_IN_POLAND,
	FIELD_NAMES.PREVIOUS_STAY_IN_POLAND,
	FIELD_NAMES.PREVIOUS_TRIPS_ABROAD,
	FIELD_NAMES.PREVIOUS_VISIT_TO_POLAND,
	FIELD_NAMES.CRIMINAL_RECORD,
];

// легалізація перебування - легалізація роботи
export const basedOnWork: string[] = [...standartFormTemplate, FIELD_NAMES.EMPLOYER_EMAIL, FIELD_NAMES.EMPLOYER_PHONE];

export const basedOnBlueCard: string[] = [...standartFormTemplate];

export const basedOnStudy: string[] = [...standartFormTemplate];

export const basedOnBusinessFOP: string[] = [
	...standartFormTemplate,
	FIELD_NAMES.ACCOUNTANT_EMAIL,
	FIELD_NAMES.ACCOUNTANT_PHONE,
];

export const basedOnBusinessTOV: string[] = [
	...standartFormTemplate,
	FIELD_NAMES.ACCOUNTANT_EMAIL,
	FIELD_NAMES.ACCOUNTANT_PHONE,
];

export const basedOnFamily: string[] = [...standartFormTemplate];

export const basedOnHumanitarian = [...standartFormTemplate];

export const citizenshipGraduation: string[] = [...standartFormTemplate];

export const basedOnParents: string[] = [...standartFormTemplate];

export const euResidenceCard: string[] = [
	...standartFormTemplate,
	FIELD_NAMES.EMPLOYER_PHONE,
	FIELD_NAMES.EMPLOYER_EMAIL,
];

export const basedOfPolesCard: string[] = [...standartFormTemplate];

export const definitionOfCitizenship: string[] = [...standartFormTemplate];

export const polishCitizenMarriage: string[] = [...standartFormTemplate];

export const declarationOfIntentToWork: string[] = [...standartFormTemplate];

export const starostasInformation: string[] = [...standartFormTemplate];

export const workPermit: string[] = [...standartFormTemplate];

export const familyMemberDataTemplate: string[] = [
	FIELD_NAMES.FULL_NAME,
	FIELD_NAMES.DOB,
	FIELD_NAMES.NATIONALITY,
	FIELD_NAMES.FAMILY_PLACE_OF_RESIDENCE,
	FIELD_NAMES.FAMILY_DEGREE_GENTILITY,
];

export const tripsAbroadDataTemplate: string[] = [FIELD_NAMES.TRIPS_COUNTRY, FIELD_NAMES.TRIPS_DATE_FROM_TO_RESULT];

// business consulting
export const openingCompany: string[] = [
	FIELD_NAMES.TELEGRAM_NAME,
	FIELD_NAMES.FULL_NAME,
	FIELD_NAMES.PHONE_NUMBER,
	FIELD_NAMES.EMAIL,
	FIELD_NAMES.COMPANY_NAME,
	FIELD_NAMES.COMPANY_ADDRESS,
	FIELD_NAMES.COMPANY_FOUNDER,
	FIELD_NAMES.COMPANY_CAPITAL,
	FIELD_NAMES.COMPANY_DIVIDE_SHARES,
	FIELD_NAMES.COMPANY_DIRECTOR,
	FIELD_NAMES.COMPANY_TYPE,
	FIELD_NAMES.COMPANY_MEMBERS,
];

export const openingCompanyOwner: string[] = [FIELD_NAMES.EMAIL, FIELD_NAMES.PHONE_NUMBER, FIELD_NAMES.PESEL_NUMBER];

export const openingSoleProprietorship: string[] = [
	FIELD_NAMES.TELEGRAM_NAME,
	FIELD_NAMES.FULL_NAME,
	FIELD_NAMES.PHONE_NUMBER,
	FIELD_NAMES.MOTHER_NAME,
	FIELD_NAMES.FATHER_NAME,
	FIELD_NAMES.PLACE_OF_BIRTH,
	FIELD_NAMES.COMPANY_NAME,
	FIELD_NAMES.TAX_SYSTEM,
	FIELD_NAMES.COMPANY_ADDRESS,
	FIELD_NAMES.COMPANY_TYPE,
	FIELD_NAMES.PESEL_NUMBER,
	FIELD_NAMES.EMAIL,
];

export const virtualOfficeYes: string[] = [
	FIELD_NAMES.TELEGRAM_NAME,
	FIELD_NAMES.FULL_NAME,
	FIELD_NAMES.PHONE_NUMBER,
	FIELD_NAMES.COMPANY_NIP,
	FIELD_NAMES.SIGNING_DATE_CONTRACT,
	FIELD_NAMES.EMAIL,
];

export const virtualOfficeNo: string[] = [
	FIELD_NAMES.TELEGRAM_NAME,
	FIELD_NAMES.FULL_NAME,
	FIELD_NAMES.PHONE_NUMBER,
	FIELD_NAMES.EMAIL,
];

export const gettingCertificationAndLicenses: string[] = [
	FIELD_NAMES.TELEGRAM_NAME,
	FIELD_NAMES.FULL_NAME,
	FIELD_NAMES.PHONE_NUMBER,
	FIELD_NAMES.EMAIL,
];

// services for life field names
export const insurance: string[] = [
	FIELD_NAMES.TELEGRAM_NAME,
	FIELD_NAMES.INSURANCE_START_DATE,
	FIELD_NAMES.INSURANCE_END_DATE,
	FIELD_NAMES.DOB,
	FIELD_NAMES.SEX,
	FIELD_NAMES.FULL_NAME,
	FIELD_NAMES.PHONE_NUMBER,
	FIELD_NAMES.EMAIL,
	FIELD_NAMES.CITIZENSHIP,
	FIELD_NAMES.INSURANCE_PASSPORT_NUMBER,
	FIELD_NAMES.PESEL_NUMBER,
	FIELD_NAMES.INSURANCE_PLACE_OF_RESIDENCE,
];

export const carRegistration: string[] = [
	FIELD_NAMES.TELEGRAM_NAME,
	FIELD_NAMES.FULL_NAME,
	FIELD_NAMES.PHONE_NUMBER,
	FIELD_NAMES.EMAIL,
];

export const pesel: string[] = [
	FIELD_NAMES.TELEGRAM_NAME,
	FIELD_NAMES.FULL_NAME,
	FIELD_NAMES.PHONE_NUMBER,
	FIELD_NAMES.EMAIL,
];

export const licenceChange: string[] = [
	FIELD_NAMES.TELEGRAM_NAME,
	FIELD_NAMES.FULL_NAME,
	FIELD_NAMES.PHONE_NUMBER,
	FIELD_NAMES.EMAIL,
];

export const noCriminalRecordCertificate: string[] = [
	FIELD_NAMES.TELEGRAM_NAME,
	FIELD_NAMES.FULL_NAME,
	FIELD_NAMES.PHONE_NUMBER,
	FIELD_NAMES.EMAIL,
];
