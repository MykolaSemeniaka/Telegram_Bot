import { phoneRegExp } from 'src/utils/constants/variables/reg-exp';
import * as yup from 'yup';

export const fullName_ValidationSchema: any = yup.string().required('errors.required');

export const fullNameMother_ValidationSchema: any = yup.string().required('errors.required');

export const fullNameFather_ValidationSchema: any = yup.string().required('errors.required');

export const mothersMaidenName_ValidationSchema: any = yup.string().required('errors.required');

export const dob_ValidationSchema: any = yup.string().required('errors.required');

export const placeOfBirthAndCountry_ValidationSchema: any = yup.string().required('errors.required');

export const nationality_ValidationSchema: any = yup.string().required('errors.required');

export const citizenship_ValidSchama: any = yup.string().required('errors.required');

export const maritalStatus_ValidationSchema: any = yup.string().required('errors.required'); // select

export const education_ValidationSchema: any = yup.string().required('errors.required');

export const height_ValidationSchema: any = yup.string().required('errors.required');

export const eyeColor_ValidationSchema: any = yup.string().required('errors.required'); // select

export const specialDistinguishingMarks_ValidationSchema = yup.string().required('errors.required');

export const peselNumber_ValidationSchema = yup.string().required('errors.required');

export const phoneNumber_ValidationSchema: any = yup
	.string()
	.min(6, 'errors.phone-min')
	.max(15, 'errors.phone-max')
	.matches(phoneRegExp, 'errors.phone-template')
	.required('errors.required');

export const telegramName_ValidationSchema = yup.string().required('errors.required');

export const email_ValidationSchema: any = yup.string().email('errors.email-inValid').required('errors.required');

export const polishAddress_ValidationSchema = yup.string().email('invalid').required('errors.required');

export const previousStayInPoland_ValidationSchema = yup.string().required('errors.required');

export const previousTripsAbroad_ValidationSchema = yup.string().required('errors.required');

export const previousVisitToPoland_ValidationSchema = yup.string().required('errors.required');

export const criminalRecord_ValidationSchema = yup.string().required('errors.required');

export const employerEmail_ValidationSchema = yup.string().email('errors.email-inValid');

export const employerPhone_ValidationSchema = yup
	.string()
	.max(15, 'errors.phone-max')
	.matches(phoneRegExp, 'errors.phone-template');
export const accountantEmail_ValidationSchema = yup.string().email('errors.email-inValid');

export const accountantPhone_ValidationSchema = yup
	.string()
	.max(15, 'errors.phone-max')
	.matches(phoneRegExp, 'errors.phone-template');

export const defaultStringField: any = yup.string().required('errors.required');
