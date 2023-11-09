import { FC, useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, Typography } from '@mui/material';
import { useFormikContext } from 'formik';
import { useTranslation } from 'next-i18next';
import { ButtonClose } from 'src/components/ButtonClose';
import { ButtonDelete } from 'src/components/ButtonDelete';
import { AddOwnerData } from 'src/components/OpeningCompanyOwners/AddOwnerData';
import { OwnersDataList } from 'src/components/OpeningCompanyOwners/OwnersDataList';
import { handleDeleteFormInFormData } from 'src/utils/helpers/handle-delete-formInForm-Data';
import { IOpeningCompanyOwnerItem } from 'src/utils/types';

interface ITripsAbroadProps {
	fieldValue: IOpeningCompanyOwnerItem[];
	label: string;
	fieldName: string;
}

export const OpeningCompanyOwners: FC<ITripsAbroadProps> = ({ fieldValue, label, fieldName }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [isOpenSecondDialog, setIsOpenSecondDialog] = useState(false);
	const [ownersData, setOwnersData] = useState<IOpeningCompanyOwnerItem[]>(fieldValue);

	const { setFieldValue } = useFormikContext<any>();
	const { t } = useTranslation('common');

	const handleTripsData = (value: IOpeningCompanyOwnerItem) => {
		setOwnersData(prevState => [...prevState, value]);
	};

	const handleClickOpen = () => {
		setIsOpen(true);
	};

	const sendValuesAtForm = () => {
		setFieldValue(fieldName, ownersData).then();
		setIsOpen(false);
	};

	return (
		<>
			<OwnersDataList label={label} dataListProps={ownersData} handleOpen={handleClickOpen} />

			{isOpen && (
				<Dialog
					fullWidth
					scroll={'body'}
					open={isOpen}
					onClose={() => setIsOpen(false)}
					sx={{ backgroundColor: 'rgba(70,70,70,0.87)' }}
				>
					<DialogContent
						sx={{
							minHeight: '50vh',
							maxHeight: '80vh',
							backgroundColor: 'rgba(37,37,37,0.71)',
							padding: '20px 40px',
							width: '100%',
							color: '#fff',
						}}
					>
						<Typography sx={{ color: '#fff', marginTop: '20px' }}>{t(label)}</Typography>
						{ownersData.map((item: IOpeningCompanyOwnerItem, index: number) => (
							<Box
								sx={{
									display: 'flex',
									justifyContent: 'space-evenly',
									alignItems: 'center',
									marginTop: '20px',
								}}
								key={`CompanyOwner-${index}`}
							>
								<Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
									<Typography>{item.phoneNumber}</Typography>
									<Typography>{item.peselNumber}</Typography>
									<Typography>{item.email}</Typography>
								</Box>
								<ButtonDelete handleDelete={() => handleDeleteFormInFormData(index, ownersData, setOwnersData)} />
							</Box>
						))}
					</DialogContent>
					<DialogActions sx={{ backgroundColor: 'rgba(37,37,37,0.71)' }}>
						<ButtonClose setOpen={setIsOpen} />

						<Button
							sx={{
								backgroundColor: 'transparent',
								color: 'yellow',
								borderColor: 'yellow',
							}}
							variant={'outlined'}
							onClick={() => {
								setIsOpenSecondDialog(true);
							}}
						>
							{t('form-buttons.add')}
						</Button>

						<Button
							sx={{
								backgroundColor: 'transparent',
								color: 'yellow',
								borderColor: 'yellow',
							}}
							variant={'outlined'}
							onClick={sendValuesAtForm}
						>
							{t('form-buttons.save')}
						</Button>
					</DialogActions>

					{isOpenSecondDialog ? (
						<AddOwnerData isOpen={isOpenSecondDialog} setIsOpen={setIsOpenSecondDialog} setData={handleTripsData} />
					) : null}
				</Dialog>
			)}
		</>
	);
};
