import { FIELD_NAMES, FORM_SERVICE_NAME } from 'src/utils/constants';
import {
	defaultStringField,
	email_ValidationSchema,
	fullName_ValidationSchema,
	phoneNumber_ValidationSchema,
} from 'src/utils/validations/index';
import {
	accountant_ValidSchema,
	employer_ValidSchema,
	main_ValidSchema,
	openingCompany_validSchema,
	openingSoleProprietorship_validSchema,
} from 'src/utils/validations/validation-data';
import * as yup from 'yup';

export const virtualOfficeYes_validSchema: any = yup.object().shape({
	[FIELD_NAMES.FULL_NAME]: fullName_ValidationSchema,
	[FIELD_NAMES.PHONE_NUMBER]: phoneNumber_ValidationSchema,
	[FIELD_NAMES.COMPANY_NIP]: defaultStringField,
	[FIELD_NAMES.SIGNING_DATE_CONTRACT]: defaultStringField,
	[FIELD_NAMES.EMAIL]: email_ValidationSchema,
});

export const virtualOfficeNo_validSchema: any = yup.object().shape({
	[FIELD_NAMES.FULL_NAME]: fullName_ValidationSchema,
	[FIELD_NAMES.PHONE_NUMBER]: phoneNumber_ValidationSchema,
	[FIELD_NAMES.EMAIL]: defaultStringField,
});

export const namePhoneEmail_validSchema: any = yup.object().shape({
	[FIELD_NAMES.FULL_NAME]: fullName_ValidationSchema,
	[FIELD_NAMES.PHONE_NUMBER]: phoneNumber_ValidationSchema,
	[FIELD_NAMES.EMAIL]: defaultStringField,
});

export const insurance_validSchema: any = yup.object().shape({
	[FIELD_NAMES.EMAIL]: email_ValidationSchema,
	[FIELD_NAMES.INSURANCE_START_DATE]: fullName_ValidationSchema,
	[FIELD_NAMES.INSURANCE_END_DATE]: phoneNumber_ValidationSchema,
	[FIELD_NAMES.DOB]: defaultStringField,
	[FIELD_NAMES.SEX]: defaultStringField,
	[FIELD_NAMES.CITIZENSHIP]: defaultStringField,
	[FIELD_NAMES.FULL_NAME]: fullName_ValidationSchema,
	[FIELD_NAMES.PHONE_NUMBER]: phoneNumber_ValidationSchema,
	[FIELD_NAMES.INSURANCE_PASSPORT_NUMBER]: defaultStringField,
	[FIELD_NAMES.INSURANCE_PLACE_OF_RESIDENCE]: defaultStringField,
});

export const mainValidationSchema: any = {
	[FORM_SERVICE_NAME.WORK]: yup.object().shape({ ...main_ValidSchema, ...employer_ValidSchema }),
	[FORM_SERVICE_NAME.BLUE_CARD]: yup.object().shape({ ...main_ValidSchema, ...employer_ValidSchema }),
	[FORM_SERVICE_NAME.LEARNING]: yup.object().shape(main_ValidSchema),
	[FORM_SERVICE_NAME.BUSINESS_INDIVIDUAL]: yup.object().shape({ ...main_ValidSchema, ...accountant_ValidSchema }),
	[FORM_SERVICE_NAME.BUSINESS_LLC]: yup.object().shape({ ...main_ValidSchema, ...accountant_ValidSchema }),
	[FORM_SERVICE_NAME.LIVING_WITH_FAMILY]: yup.object().shape(main_ValidSchema),
	[FORM_SERVICE_NAME.BELARUS_D21_VISA]: yup.object().shape(main_ValidSchema),
	[FORM_SERVICE_NAME.ABSOLVENTA]: yup.object().shape(main_ValidSchema),
	[FORM_SERVICE_NAME.LIVING_WITH_BOYFRIEND]: yup.object().shape(main_ValidSchema),
	[FORM_SERVICE_NAME.RESIDENT_OF_EUROPEAN]: yup.object().shape({ ...main_ValidSchema, ...employer_ValidSchema }),
	[FORM_SERVICE_NAME.POLAND_CARDS]: yup.object().shape(main_ValidSchema),
	[FORM_SERVICE_NAME.ORIGIN_HISTORICAL_DOCUMENTS]: yup.object().shape(main_ValidSchema),
	[FORM_SERVICE_NAME.MARRIAGE_TO_POLISH_CITIZEN]: yup.object().shape(main_ValidSchema),
	[FORM_SERVICE_NAME.STATEMENT_OF_INTENT_WORK]: yup.object().shape(main_ValidSchema),
	[FORM_SERVICE_NAME.INFORMATION_OF_STAROSTA]: yup.object().shape(main_ValidSchema),
	[FORM_SERVICE_NAME.WORK_PERMIT]: yup.object().shape(main_ValidSchema),
	// business consulting
	[FORM_SERVICE_NAME.OPENING_COMPANY]: yup.object().shape(openingCompany_validSchema),
	[FORM_SERVICE_NAME.OPENING_SOLE_PROPRIETORSHIP]: yup.object().shape(openingSoleProprietorship_validSchema),
	[FORM_SERVICE_NAME.VIRTUAL_OFFICE_YES]: virtualOfficeYes_validSchema,
	[FORM_SERVICE_NAME.VIRTUAL_OFFICE_NO]: virtualOfficeNo_validSchema,
	[FORM_SERVICE_NAME.GETTING_CERTIFICATION_AND_LICENSES]: namePhoneEmail_validSchema,
	// services for life
	[FORM_SERVICE_NAME.INSURANCE]: insurance_validSchema,
	[FORM_SERVICE_NAME.CAR_REGISTRATION]: namePhoneEmail_validSchema,
	[FORM_SERVICE_NAME.PESEL]: namePhoneEmail_validSchema,
	[FORM_SERVICE_NAME.LICENCE_CHANGE]: namePhoneEmail_validSchema,
	[FORM_SERVICE_NAME.NO_CRIMINAL_RECORD_CERTIFICATE]: namePhoneEmail_validSchema,
};

export const tripAbroad_validSchema = yup.object().shape({
	[FIELD_NAMES.TRIPS_COUNTRY]: defaultStringField,
	[FIELD_NAMES.TRIPS_DATE_FROM_TO_RESULT]: defaultStringField,
});

export const addCompanyMember_validSchema = yup.object().shape({
	[FIELD_NAMES.PESEL_NUMBER]: defaultStringField,
	[FIELD_NAMES.PHONE_NUMBER]: phoneNumber_ValidationSchema,
	[FIELD_NAMES.EMAIL]: email_ValidationSchema,
});

export const addFamilyMember_validSchema = yup.object().shape({
	[FIELD_NAMES.FULL_NAME]: defaultStringField,
	[FIELD_NAMES.DOB]: defaultStringField,
	[FIELD_NAMES.NATIONALITY]: defaultStringField,
	[FIELD_NAMES.FAMILY_PLACE_OF_RESIDENCE]: defaultStringField,
	[FIELD_NAMES.FAMILY_DEGREE_GENTILITY]: defaultStringField,
});
