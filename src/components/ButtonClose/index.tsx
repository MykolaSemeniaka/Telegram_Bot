import { FC } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';

interface IButtonClose {
	setOpen: (arg: boolean) => void;
}

export const ButtonClose: FC<IButtonClose> = ({ setOpen }) => {
	return (
		<IconButton
			aria-label="close"
			onClick={() => setOpen(false)}
			sx={{
				position: 'absolute',
				right: 0,
				top: 0,
				color: '#ce0f0f',
			}}
		>
			<CloseIcon />
		</IconButton>
	);
};
