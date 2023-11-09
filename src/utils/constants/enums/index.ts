export enum LANGUAGE {
	EN = 'en',
	UA = 'ua',
	RU = 'ru',
	PL = 'pl',
}

export enum FLAGS {
	EN = 'icons/US.svg',
	UA = 'icons/UA.svg',
	RU = 'icons/Svinosobaki.svg',
	PL = 'icons/PL.svg',
}

export enum TOAST_TYPES {
	INFO = 'info',
	SUCCESS = 'success',
	WARNING = 'warning',
	ERROR = 'error',
	DEFAULT = 'default',
}

export enum FIELD_TYPES {
	DEFAULT = 'defaultInput',
	SELECT = 'select',
	PHONE = 'phoneNumber',
	DATE = 'dateInput',
	FAMILY = 'family',
	TRIPS_ABROAD = 'tripsAbroad',
	OPENING_COMPANY = 'openingCompany',
}

export enum FORM_SERVICE_NAME {
	// legalization of stay - legalization of work
	WORK = 'residenceCardBasedOnWork',
	BLUE_CARD = 'residenceCardBasedOnBlueCard',
	LEARNING = 'residenceCardBasedOnStudy',
	BUSINESS_INDIVIDUAL = 'residenceCardBasedOnBusinessFOP',
	BUSINESS_LLC = 'residenceCardBasedOnBusinessTOV',
	LIVING_WITH_FAMILY = 'residenceCardBasedOnFamily',
	BELARUS_D21_VISA = 'residenceCardBasedOnHumanitarian',
	ABSOLVENTA = 'citizenshipGraduation',
	LIVING_WITH_BOYFRIEND = 'residenceCardBasedOnParents',
	RESIDENT_OF_EUROPEAN = 'euResidenceCard',
	POLAND_CARDS = 'permanentResidenceBasedOfPolesCard',
	ORIGIN_HISTORICAL_DOCUMENTS = 'definitionOfCitizenship',
	MARRIAGE_TO_POLISH_CITIZEN = 'polishCitizenMarriage ',
	STATEMENT_OF_INTENT_WORK = 'declarationOfIntentToWork',
	INFORMATION_OF_STAROSTA = 'starostasInformation',
	WORK_PERMIT = 'workPermit',
	// family form in form dto name
	FAMILY_MEMBER = 'familyMemberDataTemplate',
	// trips abroad form data
	TRIPS_ABROAD = 'tripsAbroadDataTemplate',
	// opening company member form data
	OPENING_COMPANY_MEMBER = 'openingCompanyDataTemplate',

	// business consulting
	OPENING_COMPANY = 'openingCompany',
	OPENING_SOLE_PROPRIETORSHIP = 'openingSoleProprietorship',
	VIRTUAL_OFFICE_YES = 'virtualOfficeYes',
	VIRTUAL_OFFICE_NO = 'virtualOfficeNo',
	GETTING_CERTIFICATION_AND_LICENSES = 'gettingCertificationAndLicenses',

	// services for life
	INSURANCE = 'insurance',
	CAR_REGISTRATION = 'carRegistration',
	PESEL = 'pesel',
	LICENCE_CHANGE = 'licenceChange',
	NO_CRIMINAL_RECORD_CERTIFICATE = 'noCriminalRecordCertificate',
}

// all field names, used in formik and as keys in array and objects
export enum FIELD_NAMES {
	PREVIOUS_SURNAME = 'previousSurname',
	FULL_NAME = 'fullName',
	FATHER_NAME = 'fatherFullName',
	MOTHER_NAME = 'motherFullName',
	MOTHER_MAIDEN_NAME = 'motherMaidenName',
	DOB = 'dob',
	PLACE_OF_BIRTH = 'placeOfBirthAndCountry',
	NATIONALITY = 'nationality',
	CITIZENSHIP = 'citizenship',
	MARITAL_STATUS = 'maritalStatus',
	EDUCATION = 'education',
	HEIGHT = 'height',
	EYE_COLOR = 'eyeColor',
	SPECIAL_DISTINGUISHING_MARKS = 'specialDistinguishingMarks',
	PESEL_NUMBER = 'peselNumber',
	PHONE_NUMBER = 'phoneNumber',
	TELEGRAM_NAME = 'telegramName',
	EMAIL = 'email',
	POLISH_ADDRESS = 'polishAddress',
	FAMILY_IN_POLAND = 'familyMembers',
	PREVIOUS_STAY_IN_POLAND = 'previousStayInPoland',
	PREVIOUS_TRIPS_ABROAD = 'previousTripsAbroad',
	PREVIOUS_VISIT_TO_POLAND = 'previousVisitToPoland',
	CRIMINAL_RECORD = 'criminalRecord',
	SEX = 'sex',

	// employer field names
	EMPLOYER_EMAIL = 'employerEmail',
	EMPLOYER_PHONE = 'employerPhone',
	// accountant field names

	ACCOUNTANT_EMAIL = 'accountantEmail',
	ACCOUNTANT_PHONE = 'accountantPhone',

	// family member info
	FAMILY_PLACE_OF_RESIDENCE = 'placeOfResidence',
	FAMILY_DEGREE_GENTILITY = 'degreeGentility',

	// trips abroad field info
	TRIPS_COUNTRY = 'country',
	TRIPS_DATE_FROM_TO_RESULT = 'dateFromTo',

	// user info - not field
	SERVICE = 'service',
	USER_TELEGRAM_ID = 'userTelegramId',
	LANG = 'communicationLanguage',

	// services for life field names
	INSURANCE_START_DATE = 'startDate',
	INSURANCE_END_DATE = 'endDate',
	INSURANCE_PLACE_OF_RESIDENCE = 'insurancePlaceOfResidence',
	INSURANCE_PASSPORT_NUMBER = 'passportNumber',

	// business consulting field names
	COMPANY_NAME = 'companyName',
	COMPANY_ADDRESS = 'companyAddress',
	COMPANY_FOUNDER = 'companyFounder',
	COMPANY_CAPITAL = 'companyCapital',
	COMPANY_DIVIDE_SHARES = 'divideShares',
	COMPANY_DIRECTOR = 'companyDirector',
	COMPANY_TYPE = 'typeOfCompany',
	COMPANY_MEMBERS = 'companyMembers',

	TAX_SYSTEM = 'taxSystem',
	COMPANY_NIP = 'companyNip',
	SIGNING_DATE_CONTRACT = 'signingDateContract',
}

export enum POST_URLS {
	openingCompany = 'https://semeniaka.synergpulse.com/api/bot/user/company-opening',
	openingSoleProprietorship = 'https://semeniaka.synergpulse.com/api/bot/user/sole-proprietor',
	virtualOfficeYes = 'https://semeniaka.synergpulse.com/api/bot/user/virtual-office-yes',
	insurance = 'https://semeniaka.synergpulse.com/api/bot/user/residence-card-insurance',
	contactForm = 'https://semeniaka.synergpulse.com/api/bot/user/contact-form',
	default = 'https://semeniaka.synergpulse.com/api/bot/user/common-form',
}
