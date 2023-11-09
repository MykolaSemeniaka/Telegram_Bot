import { FIELD_NAMES } from 'src/utils/constants/enums';
import { IFamilyMemberItem, IOpeningCompanyOwnerItem, ITripsAbroadItem } from 'src/utils/types';

interface IInitialValues extends Record<string, string> {}

export const FAMILY_MEMBER_INIT_VALUE: IInitialValues & IFamilyMemberItem = {
	[FIELD_NAMES.FULL_NAME]: '',
	[FIELD_NAMES.DOB]: '',
	[FIELD_NAMES.NATIONALITY]: '',
	[FIELD_NAMES.FAMILY_PLACE_OF_RESIDENCE]: '',
	[FIELD_NAMES.FAMILY_DEGREE_GENTILITY]: '',
};

export const TRIPS_ABROAD_INIT_VALUE: IInitialValues & ITripsAbroadItem = {
	[FIELD_NAMES.TRIPS_COUNTRY]: '',
	[FIELD_NAMES.TRIPS_DATE_FROM_TO_RESULT]: '',
};

export const COMPANY_MEMBERS_INIT_VALUE: IInitialValues & IOpeningCompanyOwnerItem = {
	[FIELD_NAMES.PHONE_NUMBER]: '',
	[FIELD_NAMES.EMAIL]: '',
	[FIELD_NAMES.PESEL_NUMBER]: '',
};
