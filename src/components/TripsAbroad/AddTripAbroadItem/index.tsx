import { BaseSyntheticEvent, FC } from 'react';
import { Button, Dialog, DialogActions, DialogContent } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import { useTranslation } from 'next-i18next';
import { ButtonClose } from 'src/components/ButtonClose';
import { CustomDateInput } from 'src/components/CustomDateInput';
import { CustomInput } from 'src/components/CustomInput';
import { FIELD_TYPES, FORM_SERVICE_NAME, TRIPS_ABROAD_INIT_VALUE } from 'src/utils/constants';
import { createCurrentForm } from 'src/utils/helpers/create-current-form';
import { ITripsAbroadItem } from 'src/utils/types';
import { tripAbroad_validSchema } from 'src/utils/validations/validation-templates';

interface IAddTripAbroadItemProps {
	isOpen: boolean;
	setIsOpen: (arg: boolean) => void;
	setData: (arg: ITripsAbroadItem) => void;
}

const tripAbroadData = createCurrentForm(FORM_SERVICE_NAME.TRIPS_ABROAD);

export const AddTripAbroadItem: FC<IAddTripAbroadItemProps> = ({ isOpen, setIsOpen, setData }) => {
	const { t } = useTranslation('common');

	const handleSubmit = (values: ITripsAbroadItem) => {
		setData(values);
		setIsOpen(false);
	};

	return (
		<>
			<Dialog sx={{ backgroundColor: '#2f2f2f' }} scroll={'body'} open={isOpen} onClose={() => setIsOpen(false)}>
				<Formik
					initialValues={TRIPS_ABROAD_INIT_VALUE}
					onSubmit={handleSubmit}
					validationSchema={tripAbroad_validSchema}
				>
					{({ values, setFieldValue }) => (
						<Form style={{ backgroundColor: '#2f2f2f' }}>
							<DialogContent sx={{ backgroundColor: '#2f2f2f', height: '80vh' }}>
								{tripAbroadData.map((item, index) => (
									<Field
										key={`${item.name}-${index}`}
										name={item.name}
										label={item.label}
										component={item.fieldType === FIELD_TYPES.DATE ? CustomDateInput : CustomInput}
										onChange={(event: BaseSyntheticEvent) => {
											setFieldValue(item.name, event.target.value);
										}}
										variant="outlined"
										type="text"
										id={item.name}
										value={values}
										inputProps={{ 'aria-label': 'Without label' }}
										customType="tripsAbroad"
									/>
								))}
							</DialogContent>

							<DialogActions sx={{ backgroundColor: '#2f2f2f' }}>
								<ButtonClose setOpen={setIsOpen} />
								<Button
									sx={{ backgroundColor: 'transparent', color: 'yellow', borderColor: 'yellow' }}
									variant={'outlined'}
									type="submit"
								>
									{t('form-buttons.submit')}
								</Button>
							</DialogActions>
						</Form>
					)}
				</Formik>
			</Dialog>
		</>
	);
};
