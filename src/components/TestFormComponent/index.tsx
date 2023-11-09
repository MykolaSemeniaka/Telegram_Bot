'use client';

import { BaseSyntheticEvent, FC, useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import { ErrorMessage, Field, useFormikContext } from 'formik';
import { CustomDateInput } from 'src/components/CustomDateInput';
import { CustomInput } from 'src/components/CustomInput';
import { CustomPhoneInput } from 'src/components/CustomPhoneInput';
import { CustomSelect } from 'src/components/CustomSelect';
import { FamilyField } from 'src/components/FamilyField';
import { OpeningCompanyOwners } from 'src/components/OpeningCompanyOwners';
import { TripsAbroad } from 'src/components/TripsAbroad';
import { FIELD_TYPES } from 'src/utils/constants';
import { createCurrentForm } from 'src/utils/helpers/create-current-form';
import styles from './index.module.scss';

interface ITestFormComponent {
	userParams: { serviceParam: string; telegramIdParam: string };
}

export const TestFormComponent: FC<ITestFormComponent> = ({ userParams }) => {
	const [formFields, setFormFields] = useState<any[]>([]);

	useEffect(() => {
		if (userParams.serviceParam) {
			const template = createCurrentForm(userParams.serviceParam);
			setFormFields(() => [...template]);
		}
	}, [userParams.serviceParam]);

	const { setFieldValue, values }: any = useFormikContext();

	const handleChange = (event: BaseSyntheticEvent<HTMLInputElement> | FocusEvent) => {
		setFieldValue(event.target.name, event.target.value);
	};

	return (
		<>
			{formFields.map(
				(item, index) =>
					(item.fieldType === FIELD_TYPES.DEFAULT && (
						<Field
							className={styles.input}
							key={`${item.name}-${index}`}
							name={item.name}
							label={item.label}
							component={CustomInput}
							onChange={handleChange}
							variant="outlined"
							type="text"
							id={item.name}
							value={values[item.name]}
							inputProps={{ 'aria-label': 'Without label' }}
							helperText={<ErrorMessage name={item.name}>{() => <Typography sx={{ color: 'red' }} />}</ErrorMessage>}
						/>
					)) ||
					(item.fieldType === FIELD_TYPES.SELECT && (
						<Field
							className={styles.input}
							key={`${item.name}-${index}`}
							label={item.label}
							name={item.name}
							component={CustomSelect}
							onChange={handleChange}
							variant="outlined"
							type="text"
							id={item.name}
							value={values[item.name]}
							helperText={<ErrorMessage name={item.name} />}
							options={item.selectOptions}
						/>
					)) ||
					(item.fieldType === FIELD_TYPES.PHONE && (
						<Field
							className={styles.input}
							key={`${item.name}-${index}`}
							label={item.label}
							name={item.name}
							component={CustomPhoneInput}
							onChange={handleChange}
							variant="outlined"
							type="tel"
							id={item.name}
							value={values[item.name]}
							helperText={<ErrorMessage name={item.name} />}
						/>
					)) ||
					(item.fieldType === FIELD_TYPES.DATE && (
						<Field
							className={styles.input}
							key={`${item.name}-${index}`}
							label={item.label}
							name={item.name}
							component={CustomDateInput}
							onChange={handleChange}
							variant="outlined"
							type="date"
							id={item.name}
							value={values ? values[item.name] : ''}
							helperText={<ErrorMessage name={item.name} />}
						/>
					)) ||
					(item.fieldType === FIELD_TYPES.FAMILY && (
						<FamilyField
							key={`${item.name}-${index}`}
							fieldName={item.name}
							label={item.label}
							fieldValue={values[item.name]}
						/>
					)) ||
					(item.fieldType === FIELD_TYPES.TRIPS_ABROAD && (
						<TripsAbroad
							key={`${item.name}-${index}`}
							fieldName={item.name}
							label={item.label}
							fieldValue={values[item.name]}
						/>
					)) ||
					(item.fieldType === FIELD_TYPES.OPENING_COMPANY && (
						<OpeningCompanyOwners
							key={`${item.name}-${index}`}
							fieldName={item.name}
							label={item.label}
							fieldValue={values[item.name]}
						/>
					))
			)}
		</>
	);
};
