import { BaseSyntheticEvent, ChangeEvent, FC, useState } from 'react';
import { Box, TextField } from '@mui/material';
import { FieldProps, useFormikContext } from 'formik';
import { useTranslation } from 'next-i18next';

export interface ICustomInput extends FieldProps {
	onChange?: any;
	type?: string;
	label: string;
}

export const CustomInput: FC<ICustomInput> = ({ type, onChange, label, field }) => {
	const [inputValue, setInputValue] = useState('');
	const { name } = field;
	const { errors } = useFormikContext<any>();

	const { t } = useTranslation('common');

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setInputValue(() => event.target.value);
	};

	const handleBlur = (event: BaseSyntheticEvent) => {
		onChange(event);
	};

	const hasError = Boolean(errors[name]);

	return (
		<Box>
			<TextField
				error={hasError}
				sx={{ marginTop: '40px' }}
				fullWidth
				value={inputValue}
				type={type}
				name={name}
				//InputLabelProps={{ shrink: false }}
				onChange={handleChange}
				//placeholder={t(label)}
				label={t(label)}
				onBlur={handleBlur}
			/>
			<span
				style={{
					display: 'block',
					color: 'red',
					marginTop: '8px',
					fontSize: '12px',
				}}
			>
				{t(errors[name] as string)}
			</span>
		</Box>
	);
};
