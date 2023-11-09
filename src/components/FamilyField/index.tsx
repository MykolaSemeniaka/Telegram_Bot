import { FC, useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, Typography } from '@mui/material';
import { useFormikContext } from 'formik';
import { useTranslation } from 'next-i18next';
import { ButtonClose } from 'src/components/ButtonClose';
import { ButtonDelete } from 'src/components/ButtonDelete';
import { CustomChipList } from 'src/components/CustomChip';
import { handleDeleteFormInFormData } from 'src/utils/helpers/handle-delete-formInForm-Data';
import { IFamilyMemberItem } from 'src/utils/types';
import { AddFamilyMember } from './AddFamilyMember';

export interface IFamilyField {
	onChange?: (event: any) => void;
	type?: string;
	label: string;
	fieldName: string;
	fieldValue: IFamilyMemberItem[];
}

export const FamilyField: FC<IFamilyField> = ({ fieldName, label, fieldValue }) => {
	const [open, setOpen] = useState(false);
	const [openMemberDialog, setOpenMemberDialog] = useState(false);
	const [members, setMembers] = useState<IFamilyMemberItem[]>(fieldValue);
	const { t } = useTranslation('common');

	const { setFieldValue } = useFormikContext<any>();

	const handleMembers = (member: IFamilyMemberItem) => {
		setMembers(prevState => [...prevState, member]);
	};

	const handleClickOpen = () => {
		setOpen(true);
	};

	const sendValuesAtForm = () => {
		setFieldValue(fieldName, members).then();
		setOpen(false);
	};

	return (
		<>
			<CustomChipList label={label} chipListProps={members} handleOpen={handleClickOpen} />

			{open && (
				<Dialog
					fullWidth
					scroll={'paper'}
					open={open}
					onClose={() => setOpen(false)}
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
						{members.map((item: any, index: number) => (
							<Box
								sx={{
									display: 'flex',
									justifyContent: 'space-evenly',
									alignItems: 'center',
									marginTop: '20px',
									color: '#FFFFFF',
								}}
								key={`item-${index}`}
							>
								<Typography>{item.degreeGentility}</Typography>
								<ButtonDelete handleDelete={() => handleDeleteFormInFormData(index, members, setMembers)} />
							</Box>
						))}
					</DialogContent>
					<DialogActions sx={{ backgroundColor: 'rgba(37,37,37,0.71)' }}>
						<ButtonClose setOpen={setOpen} />
						<Button
							sx={{
								backgroundColor: 'transparent',
								color: 'yellow',
								borderColor: 'yellow',
							}}
							onClick={() => {
								setOpenMemberDialog(true);
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
							variant={'contained'}
							onClick={sendValuesAtForm}
						>
							{t('form-buttons.save')}
						</Button>
					</DialogActions>

					{openMemberDialog ? (
						<AddFamilyMember isOpen={openMemberDialog} setIsOpen={setOpenMemberDialog} setMembers={handleMembers} />
					) : null}
				</Dialog>
			)}
		</>
	);
};
