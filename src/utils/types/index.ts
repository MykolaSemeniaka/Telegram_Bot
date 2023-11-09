export interface IFamilyMemberItem {
	fullName: string;
	dob: string;
	nationality: string;
	placeOfResidence: string;
	degreeGentility: string;
}

export interface ITripsAbroadItem {
	country: string;
	dateFromTo: string;
}

export interface IOpeningCompanyOwnerItem {
	email: string;
	phoneNumber: string;
	peselNumber: string;
}

export interface IUserParams {
	telegramIdParam: string;
	serviceParam: string;
	lang: string;
	messageId: string;
}
