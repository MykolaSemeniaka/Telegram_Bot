import { FC } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';

interface IButtonDeleteProps {
	setOpen?: (arg: boolean) => void;
	handleDelete: () => void;
}

export const ButtonDelete: FC<IButtonDeleteProps> = ({ handleDelete }) => {
	return (
		<IconButton
			aria-label="delete"
			onClick={handleDelete}
			sx={{
				color: '#ffffff',
			}}
		>
			<DeleteIcon />
		</IconButton>
	);
};
