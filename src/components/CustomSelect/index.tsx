'use client';
import { BaseSyntheticEvent, FC, useState } from 'react';
import { Box, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { FieldProps, useFormikContext } from 'formik';
import { useTranslation } from 'next-i18next';
import { ISelectOptions } from 'src/utils/constants';

interface ICustomSelect extends FieldProps {
	options: ISelectOptions[];
	onChange: any;
	label: any;
}

export const CustomSelect: FC<ICustomSelect> = ({ options, onChange, label, field }) => {
	const [fieldValue, setFieldValue] = useState<string>('');

	const { t } = useTranslation('common');
	const { name } = field;
	const { errors } = useFormikContext<any>();

	const handleChange = (event: SelectChangeEvent) => {
		setFieldValue(() => event.target.value);
	};

	const handleBlur = (event: BaseSyntheticEvent) => {
		onChange(event);
	};

	const hasError = Boolean(errors[name]);

	return (
		<Box>
			<Select
				sx={{
					'&.MuiInputBase-root': {
						color: '#FFFFFF',
						marginTop: '40px',
					},
					'& .MuiSelect-icon': {
						fill: 'white',
						right: 0,
					},
				}}
				name={name}
				value={fieldValue}
				onChange={handleChange}
				fullWidth
				displayEmpty
				MenuProps={{ disableScrollLock: true }}
				onBlur={handleBlur}
				error={hasError}
			>
				<MenuItem sx={{ display: 'none' }} value={''}>
					<span>{t(label)}</span>
				</MenuItem>
				{options.map(item => (
					<MenuItem value={t(item.value)} key={item.value}>
						{t(item.value)}
					</MenuItem>
				))}
			</Select>
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
		</Box>
	);
};
