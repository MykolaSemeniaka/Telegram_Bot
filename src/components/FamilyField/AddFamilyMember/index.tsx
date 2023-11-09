import { BaseSyntheticEvent, FC } from 'react';
import { Button, Dialog, DialogActions, DialogContent } from '@mui/material';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useTranslation } from 'next-i18next';
import { ButtonClose } from 'src/components/ButtonClose';
import { CustomDateInput } from 'src/components/CustomDateInput';
import { CustomInput } from 'src/components/CustomInput';
import { FAMILY_MEMBER_INIT_VALUE, FIELD_TYPES, FORM_SERVICE_NAME } from 'src/utils/constants';
import { createCurrentForm } from 'src/utils/helpers/create-current-form';
import { IFamilyMemberItem } from 'src/utils/types';
import { addFamilyMember_validSchema } from 'src/utils/validations/validation-templates';

const memberItem = createCurrentForm(FORM_SERVICE_NAME.FAMILY_MEMBER);

interface IAddFamilyMember {
	isOpen: boolean;
	setIsOpen: (arg: boolean) => void;
	setMembers: (arg: IFamilyMemberItem) => void;
}

export const AddFamilyMember: FC<IAddFamilyMember> = ({ isOpen, setIsOpen, setMembers }) => {
	const { t } = useTranslation('common');
	const handleSubmit = (values: IFamilyMemberItem) => {
		setMembers(values);
		setIsOpen(false);
	};

	return (
		<Formik
			initialValues={FAMILY_MEMBER_INIT_VALUE}
			onSubmit={handleSubmit}
			validationSchema={addFamilyMember_validSchema}
		>
			{({ values, setFieldValue }) => (
				<Dialog fullWidth sx={{ height: '100vh' }} scroll={'body'} open={isOpen} onClose={() => setIsOpen(false)}>
					<Form>
						<DialogContent sx={{ backgroundColor: '#2f2f2f', height: '80vh' }}>
							{memberItem.map((item, index) => (
								<Field
									key={`${item.name}-${index}`}
									name={item.name as string}
									label={item.label}
									component={item.fieldType === FIELD_TYPES.DATE ? CustomDateInput : CustomInput}
									onChange={(event: BaseSyntheticEvent) => {
										setFieldValue(item.name, event.target.value);
									}}
									variant="outlined"
									type="text"
									id={item.name as string}
									value={values}
									inputProps={{ 'aria-label': 'Without label' }}
									helperText={<ErrorMessage name={item.name} />}
								/>
							))}
						</DialogContent>
						<DialogActions sx={{ backgroundColor: '#2f2f2f' }}>
							<ButtonClose setOpen={setIsOpen} />
							<Button sx={{ backgroundColor: 'transparent', color: 'yellow', borderColor: 'yellow' }} type="submit">
								{t('form-buttons.submit')}
							</Button>
						</DialogActions>
					</Form>
				</Dialog>
			)}
		</Formik>
	);
};
