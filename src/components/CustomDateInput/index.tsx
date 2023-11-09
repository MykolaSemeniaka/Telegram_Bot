import { FC } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import { FieldProps, useFormikContext } from 'formik';
import { useTranslation } from 'next-i18next';

type customType = 'default' | 'tripsAbroad';

export interface ICustomInput extends FieldProps {
	onChange?: (event: any) => void;
	type?: string;
	label: string;
	customType?: customType;
}

export const CustomDateInput: FC<ICustomInput> = ({ label, field, customType = 'default' }) => {
	const { name } = field;
	const { setFieldValue, errors } = useFormikContext<any>();

	const { t } = useTranslation('common');

	const handleChange = (pickerValue: any) => {
		const res = dayjs.isDayjs(pickerValue) && dayjs(pickerValue).isValid() ? pickerValue.toISOString() : '';
		const parsedDate = dayjs(res).format(customType === 'tripsAbroad' ? 'YYYY' : 'DD-MM-YYYY');
		setFieldValue(name, parsedDate);
	};

	const hasError = Boolean(errors[name]);

	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<DatePicker
				sx={{ marginTop: '40px', width: '100%', fill: '#FFFFFF' }}
				format={customType === 'tripsAbroad' ? 'YYYY' : 'DD/MM/YYYY'}
				onChange={handleChange}
				label={t(label)}
				openTo={customType === 'tripsAbroad' ? 'year' : undefined}
			/>
			{hasError ? (
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
			) : null}
		</LocalizationProvider>
	);
};
