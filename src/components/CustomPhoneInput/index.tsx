import { ChangeEvent, FC } from 'react';
import { Box, TextField } from '@mui/material';
import { FieldProps, useFormikContext } from 'formik';
import { useTranslation } from 'next-i18next';

export interface ICustomPhoneInput extends FieldProps {
	onChange?: (event: ChangeEvent) => void;
	type?: string;
	label: string;
}

export const CustomPhoneInput: FC<ICustomPhoneInput> = ({ label, field }) => {
	const { t } = useTranslation('common');
	const { name } = field;
	const { setFieldValue, values, errors }: any = useFormikContext();

	const handleChange = (event: any) => {
		const { value } = event.target;
		!value.startsWith('+') ? setFieldValue(name, `+${value}`) : setFieldValue(name, value);
	};

	const hasError = Boolean(errors[name]);

	return (
		<Box>
			<TextField
				error={hasError}
				sx={{ marginTop: '40px' }}
				fullWidth
				value={values[field.name]}
				onChange={handleChange}
				label={t(label)}
				name={field.name}
			/>
			<span
				style={{
					display: 'block',
					color: 'red',
					marginTop: '8px',
					fontSize: '12px',
				}}
			>
				{t(errors[name]) as string}
			</span>
		</Box>
	);
};
