import { FC, useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, Typography } from '@mui/material';
import { useFormikContext } from 'formik';
import { useTranslation } from 'next-i18next';
import { ButtonClose } from 'src/components/ButtonClose';
import { ButtonDelete } from 'src/components/ButtonDelete';
import { AddTripAbroadItem } from 'src/components/TripsAbroad/AddTripAbroadItem';
import { TripsAbroadList } from 'src/components/TripsAbroad/TripsAbroadList';
import { handleDeleteFormInFormData } from 'src/utils/helpers/handle-delete-formInForm-Data';
import { ITripsAbroadItem } from 'src/utils/types';

interface ITripsAbroadProps {
	fieldValue: ITripsAbroadItem[];
	label: string;
	fieldName: string;
}

export const TripsAbroad: FC<ITripsAbroadProps> = ({ fieldValue, label, fieldName }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [isOpenSecondDialog, setIsOpenSecondDialog] = useState(false);
	const [tripsData, setTripsData] = useState<ITripsAbroadItem[]>(fieldValue);

	const { setFieldValue } = useFormikContext<any>();
	const { t } = useTranslation('common');

	const handleTripsData = (value: ITripsAbroadItem) => {
		setTripsData(prevState => [...prevState, value]);
	};

	const handleClickOpen = () => {
		setIsOpen(true);
	};

	const sendValuesAtForm = () => {
		setFieldValue(fieldName, tripsData).then();
		setIsOpen(false);
	};

	return (
		<>
			<TripsAbroadList label={label} tripsListProps={tripsData} handleOpen={handleClickOpen} />

			{isOpen && (
				<Dialog
					scroll={'paper'}
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
						{tripsData.map((item: ITripsAbroadItem, index: number) => (
							<Box
								sx={{
									display: 'flex',
									justifyContent: 'space-evenly',
									alignItems: 'center',
									marginTop: '20px',
								}}
								key={`TripsAbroadItem-${index}`}
							>
								<Box>
									<Typography sx={{ textAlign: 'center' }}>{item.country}</Typography>
									<Typography sx={{ display: 'flex' }}>{item.dateFromTo}</Typography>
								</Box>
								<ButtonDelete handleDelete={() => handleDeleteFormInFormData(index, tripsData, setTripsData)} />
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
								maxWidth: '100px',
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
								maxWidth: '100px',
							}}
							variant={'outlined'}
							onClick={sendValuesAtForm}
						>
							{t('form-buttons.save')}
						</Button>
					</DialogActions>

					{isOpenSecondDialog ? (
						<AddTripAbroadItem
							isOpen={isOpenSecondDialog}
							setIsOpen={setIsOpenSecondDialog}
							setData={handleTripsData}
						/>
					) : null}
				</Dialog>
			)}
		</>
	);
};
