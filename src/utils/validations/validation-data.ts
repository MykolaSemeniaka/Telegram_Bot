import { FIELD_NAMES } from 'src/utils/constants';
import {
	accountantEmail_ValidationSchema,
	accountantPhone_ValidationSchema,
	citizenship_ValidSchama,
	defaultStringField,
	dob_ValidationSchema,
	email_ValidationSchema,
	employerEmail_ValidationSchema,
	employerPhone_ValidationSchema,
	eyeColor_ValidationSchema,
	fullName_ValidationSchema,
	fullNameFather_ValidationSchema,
	fullNameMother_ValidationSchema,
	height_ValidationSchema,
	maritalStatus_ValidationSchema,
	mothersMaidenName_ValidationSchema,
	nationality_ValidationSchema,
	phoneNumber_ValidationSchema,
	placeOfBirthAndCountry_ValidationSchema,
} from 'src/utils/validations/index';

export const main_ValidSchema = {
	[FIELD_NAMES.FULL_NAME]: fullName_ValidationSchema,
	[FIELD_NAMES.FATHER_NAME]: fullNameFather_ValidationSchema,
	[FIELD_NAMES.MOTHER_NAME]: fullNameMother_ValidationSchema,
	[FIELD_NAMES.MOTHER_MAIDEN_NAME]: mothersMaidenName_ValidationSchema,
	[FIELD_NAMES.DOB]: dob_ValidationSchema,
	[FIELD_NAMES.PLACE_OF_BIRTH]: placeOfBirthAndCountry_ValidationSchema,
	[FIELD_NAMES.NATIONALITY]: nationality_ValidationSchema,
	[FIELD_NAMES.CITIZENSHIP]: citizenship_ValidSchama,
	[FIELD_NAMES.MARITAL_STATUS]: maritalStatus_ValidationSchema,
	[FIELD_NAMES.HEIGHT]: height_ValidationSchema,
	[FIELD_NAMES.EYE_COLOR]: eyeColor_ValidationSchema,
	[FIELD_NAMES.PHONE_NUMBER]: phoneNumber_ValidationSchema,
	[FIELD_NAMES.EMAIL]: email_ValidationSchema,
};

export const employer_ValidSchema = {
	[FIELD_NAMES.EMPLOYER_EMAIL]: employerEmail_ValidationSchema,
	[FIELD_NAMES.EMPLOYER_PHONE]: employerPhone_ValidationSchema,
};

export const accountant_ValidSchema = {
	[FIELD_NAMES.ACCOUNTANT_EMAIL]: accountantEmail_ValidationSchema,
	[FIELD_NAMES.ACCOUNTANT_PHONE]: accountantPhone_ValidationSchema,
};

// opening company
export const openingCompany_validSchema: any = {
	[FIELD_NAMES.FULL_NAME]: fullName_ValidationSchema,
	[FIELD_NAMES.EMAIL]: email_ValidationSchema,
	[FIELD_NAMES.PHONE_NUMBER]: phoneNumber_ValidationSchema,
	[FIELD_NAMES.COMPANY_NAME]: defaultStringField,
	[FIELD_NAMES.COMPANY_ADDRESS]: defaultStringField,
	[FIELD_NAMES.COMPANY_FOUNDER]: defaultStringField,
	[FIELD_NAMES.COMPANY_CAPITAL]: defaultStringField,
	[FIELD_NAMES.COMPANY_DIVIDE_SHARES]: defaultStringField,
	[FIELD_NAMES.COMPANY_DIRECTOR]: defaultStringField,
	[FIELD_NAMES.COMPANY_TYPE]: defaultStringField,
};

export const openingSoleProprietorship_validSchema: any = {
	[FIELD_NAMES.FULL_NAME]: fullName_ValidationSchema,
	[FIELD_NAMES.PHONE_NUMBER]: phoneNumber_ValidationSchema,
	[FIELD_NAMES.MOTHER_NAME]: defaultStringField,
	[FIELD_NAMES.FATHER_NAME]: defaultStringField,
	[FIELD_NAMES.PLACE_OF_BIRTH]: defaultStringField,
	[FIELD_NAMES.COMPANY_NAME]: defaultStringField,
	[FIELD_NAMES.COMPANY_ADDRESS]: defaultStringField,
	[FIELD_NAMES.COMPANY_TYPE]: defaultStringField,
	[FIELD_NAMES.EMAIL]: email_ValidationSchema,
};
