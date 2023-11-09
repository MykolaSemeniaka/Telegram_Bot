import { BaseSyntheticEvent, FC } from 'react';
import { Button, Dialog, DialogActions, DialogContent } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import { useTranslation } from 'next-i18next';
import { ButtonClose } from 'src/components/ButtonClose';
import { CustomInput } from 'src/components/CustomInput';
import { COMPANY_MEMBERS_INIT_VALUE, FORM_SERVICE_NAME } from 'src/utils/constants';
import { createCurrentForm } from 'src/utils/helpers/create-current-form';
import { IOpeningCompanyOwnerItem } from 'src/utils/types';
import { addCompanyMember_validSchema } from 'src/utils/validations/validation-templates';

interface IAddOwnerDataProps {
	isOpen: boolean;
	setIsOpen: (arg: boolean) => void;
	setData: (arg: IOpeningCompanyOwnerItem) => void;
}

const companyOwnerData = createCurrentForm(FORM_SERVICE_NAME.OPENING_COMPANY_MEMBER);

export const AddOwnerData: FC<IAddOwnerDataProps> = ({ isOpen, setIsOpen, setData }) => {
	const { t } = useTranslation('common');
	const handleSubmit = (values: IOpeningCompanyOwnerItem) => {
		setData(values);
		setIsOpen(false);
	};

	return (
		<>
			<Dialog fullWidth scroll={'paper'} open={isOpen} onClose={() => setIsOpen(false)}>
				<Formik
					initialValues={COMPANY_MEMBERS_INIT_VALUE}
					onSubmit={handleSubmit}
					validationSchema={addCompanyMember_validSchema}
				>
					{({ values, setFieldValue, isValid }) => (
						<Form>
							<DialogContent sx={{ backgroundColor: '#2f2f2f' }}>
								{companyOwnerData.map((item, index) => (
									<Field
										key={`${item.name}-${index}`}
										name={item.name}
										label={item.label}
										component={CustomInput}
										onChange={(event: BaseSyntheticEvent) => {
											setFieldValue(item.name, event.target.value);
										}}
										variant="outlined"
										type="text"
										id={item.name}
										value={values}
										inputProps={{ 'aria-label': 'Without label' }}
									/>
								))}
							</DialogContent>

							<DialogActions sx={{ backgroundColor: '#2f2f2f' }}>
								<ButtonClose setOpen={setIsOpen} />
								<Button
									sx={{ backgroundColor: 'transparent', color: 'yellow', borderColor: 'yellow' }}
									variant={'outlined'}
									type="submit"
									disabled={!isValid}
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
