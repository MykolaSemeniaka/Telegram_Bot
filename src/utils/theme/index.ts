import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
	palette: {
		text: {
			primary: '#3A3A3C',
			secondary: '#96969D',
		},
		primary: {
			main: '#5856D6',
		},
		background: {
			default: '#FFFFFF',
		},
		error: {
			main: '#FF2D55',
			light: '#FF2D55',
			dark: '#FF2D55',
		},
		customGrey: '#676767',
		white: '#FFFFFF',
		black: '#000000',
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: ({ theme }) => ({
					width: 'max-content',
					padding: '8px 16px',
					fontStyle: 'normal',
					fontWeight: '700',
					textTransform: 'unset',
					fontSize: '14px',
					lineHeight: '24px',
					position: 'relative',
					color: theme.palette.white,
					background: 'transparent',
					border: `1px solid ${theme.palette.primary.main}`,
					borderRadius: '20px',
					boxShadow: 'none',
					gap: '12px',
					alignItems: 'center',
					justifyContent: 'center',
					'&:hover': {
						color: theme.palette.grey,
						// background: theme.palette.primary.main,
						//boxShadow: '0px 4px 6px -1px rgba(6, 6, 43, 0.1), 0px 2px 4px -2px rgba(6, 6, 43, 0.05)',
					},
					'&:active': {
						color: theme.palette.white,
						borderColor: theme.palette.white,
						background: theme.palette.white,
						boxShadow: '0px 4px 6px -1px rgba(6, 6, 43, 0.1), 0px 2px 4px -2px rgba(6, 6, 43, 0.05)',
					},
					'&:disabled': {
						color: theme.palette.white,
						borderColor: theme.palette.white,
						background: theme.palette.grey,
					},
					'& .MuiButton-endIcon, & .MuiButton-startIcon': {
						margin: 0,
						'svg path': {
							transition: theme.transitions.create('all', {
								duration: theme.transitions.duration.standard,
							}),
							fill: theme.palette.white,
						},
					},
				}),
				text: ({ theme }) => ({
					minWidth: 'max-content',
					color: theme.palette.primary.main,
					background: theme.palette.white,
					borderColor: theme.palette.white,
					'&:hover': {
						background: theme.palette.grey,
						color: theme.palette.primary.main,
					},
					'&:active': {
						color: theme.palette.white,
						background: theme.palette.grey,
					},
					'&:disabled': {
						color: theme.palette.grey,
						borderColor: theme.palette.white,
						background: theme.palette.grey,
					},
				}),
				outlined: ({ theme }) => ({
					color: theme.palette.primary.main,
					background: theme.palette.white,
					'&:hover': {
						color: theme.palette.white,
					},
					'&:active': {
						color: theme.palette.white,
						background: theme.palette.white,
					},
					'&:disabled': {
						color: theme.palette.white,
						borderColor: theme.palette.grey,
						background: theme.palette.grey,
					},
				}),
			},
		},
		MuiInputBase: {
			styleOverrides: {
				root: {
					'& .MuiOutlinedInput-notchedOutline': {
						height: '100%',
						top: 0,
					},
				},
				input: ({ theme }) => ({
					color: theme.palette.white,
					fontSize: '16px',
					height: '100%',
					'&::placeholder': {
						color: theme.palette.white,
					},
					'&:-internal-autofill-selected': {
						backgroundColor: '#000',
					},
				}),
			},
		},
		// MuiFormLabel: {
		// 	styleOverrides: {
		// 		root: ({ theme }) => ({
		// 			display: 'block',
		// 			color: theme.palette.white,
		// 			fontSize: '14px',
		// 			lineHeight: '18px',
		// 			marginBottom: '2px',
		// 			'&.Mui-disabled': {
		// 				color: theme.palette.grey,
		// 			},
		// 			'&.Mui-error': {
		// 				color: theme.palette.error.main,
		// 			},
		// 			'&.Mui-focused': {
		// 				color: theme.palette.white,
		// 			},
		// 		}),
		// 	},
		// },
		MuiInputLabel: {
			styleOverrides: {
				root: ({ theme }) => ({
					color: theme.palette.white,
					fontSize: '14px',
					'&.Mui-disabled': {
						color: theme.palette.grey,
					},
					'&.Mui-error': {
						color: theme.palette.error.main,
					},
					'&.Mui-focused': {
						color: theme.palette.white,
					},
				}),
			},
		},
		MuiOutlinedInput: {
			styleOverrides: {
				root: ({ theme }) => ({
					'&.MuiOutlinedInput-input': {
						width: '100%',
						color: theme.palette.white,
						// borderColor: theme.palette.white,
					},
					'& legend > span': {
						display: 'none',
					},
					'& .MuiOutlinedInput-notchedOutline': {
						borderColor: theme.palette.white,
						padding: '0px',
					},
					'&.Mui-focused': {
						'& .MuiOutlinedInput-notchedOutline': {
							borderColor: theme.palette.white,
						},
					},
					width: '100%',
					minHeight: '50px',
					fontSize: '14px',
					borderRadius: '12px',
					borderWidth: '1px',
					'& .MuiOutlinedInput-input': {
						padding: '0px 16px',
					},
					'&:hover .MuiOutlinedInput-notchedOutline': {
						borderColor: theme.palette.white,
					},
					'&.Mui-disabled .MuiOutlinedInput-notchedOutline': {
						borderColor: theme.palette.grey,
					},
					':invalid': {
						borderColor: theme.palette.error.main,
						fieldset: {
							borderColor: theme.palette.error.main,
						},
					},
					'& .MuiInputAdornment-root .MuiButtonBase-root': {
						'& path, stroke': {
							fill: theme.palette.white,
							stroke: theme.palette.white,
						},
						'&:hover stroke, &:hover path': {
							fill: theme.palette.text.secondary,
							stroke: theme.palette.text.secondary,
						},
					},
				}),
			},
		},
		// MuiSelect: {
		// 	styleOverrides: {
		// 		standard: {
		// 			width: '100%',
		// 		},
		// 		// select: ({ theme }) => ({
		// 		// 	display: 'flex',
		// 		// 	alignItems: 'center',
		// 		// 	gap: '8px',
		// 		// 	borderColor: theme.palette.grey,
		// 		// 	padding: 0,
		// 		// 	'& > .MuiButtonBase-root': {
		// 		// 		padding: '0',
		// 		// 	},
		// 		// 	'&::placeholder': {
		// 		// 		fontSize: '16px',
		// 		// 		fontFamily: 'inherit',
		// 		// 	},
		// 		// 	'& fieldset': {
		// 		// 		borderColor: theme.palette.grey,
		// 		// 	},
		// 		// 	'&:hover fieldset': {
		// 		// 		borderColor: theme.palette.white,
		// 		// 	},
		// 		// 	'&.Mui-focused fieldset': {
		// 		// 		borderColor: theme.palette.primary.main,
		// 		// 	},
		// 		// 	'& .MuiListItem-root': {
		// 		// 		padding: 0,
		// 		// 	},
		// 		// 	'& > .MuiListItemButton-root': {
		// 		// 		'&:hover': {
		// 		// 			background: 'none',
		// 		// 		},
		// 		// 		'& .MuiTouchRipple-root': {
		// 		// 			display: 'none',
		// 		// 		},
		// 		// 	},
		// 		// }),
		// 		icon: ({ theme }) => ({
		// 			color: theme.palette.text.primary,
		// 			transition: theme.transitions.create('all', {
		// 				duration: theme.transitions.duration.standard,
		// 			}),
		// 			right: '20px',
		// 			marginLeft: '12px',
		// 			top: 'calc(50% - 0.3em)',
		// 		}),
		// 	},
		// },
		// MuiPaper: {
		// 	styleOverrides: {
		// 		root: {
		// 			borderRadius: '16px',
		// 			boxShadow: '0px 4px 6px -1px rgba(6, 6, 43, 0.1), 0px 2px 4px -2px rgba(6, 6, 43, 0.05)',
		// 		},
		// 	},
		// },
		// MuiMenuItem: {
		// 	styleOverrides: {
		// 		root: {
		// 			minWidth: '160px',
		// 			gap: '14px',
		// 		},
		// 	},
		// },
		// MuiDialog: {
		// 	styleOverrides: {
		// 		root: {
		// 			boxSizing: 'border-box',
		// 			zIndex: 9999,
		// 		},
		// 		paper: {
		// 			maxWidth: 'none',
		// 			width: '770px',
		// 			borderRadius: '16px',
		// 			boxShadow: '0px 10px 15px -3px rgba(6, 6, 43, 0.1), 0px 4px 6px rgba(6, 6, 43, 0.05)',
		// 			margin: 0,
		// 		},
		// 	},
		// },
		// MuiDialogContent: {
		// 	styleOverrides: {
		// 		root: {
		// 			display: 'flex',
		// 			flexDirection: 'column',
		// 			alignItems: 'center',
		// 			padding: '48px 40px 40px',
		// 		},
		// 	},
		// },
		// MuiDialogTitle: {
		// 	styleOverrides: {
		// 		root: {
		// 			padding: '24px 0',
		// 		},
		// 	},
		// },
		// MuiPopover: {
		// 	styleOverrides: {
		// 		root: {
		// 			zIndex: 100000,
		// 		},
		// 	},
		// },
		// MuiLinearProgress: {
		// 	styleOverrides: {
		// 		root: ({ theme }) => ({
		// 			borderRadius: '16px',
		// 			backgroundColor: theme.palette.black,
		// 		}),
		// 		bar1Determinate: ({ theme }) => ({
		// 			backgroundColor: theme.palette.primary.main,
		// 			borderRadius: '16px',
		// 		}),
		// 	},
		// },
		// MuiPagination: {
		// 	styleOverrides: {
		// 		root: {
		// 			marginTop: '24px',
		// 			'& .MuiPagination-ul': {
		// 				margin: '0 auto',
		// 				display: 'flex',
		// 				alignItems: 'center',
		// 				justifyContent: 'center',
		// 				gap: '4px',
		// 			},
		// 		},
		// 	},
		// },
		// MuiPaginationItem: {
		// 	styleOverrides: {
		// 		root: ({ theme }) => ({
		// 			minWidth: '30px',
		// 			height: '42px',
		// 			lineHeight: '42px',
		// 			fontWeight: '700',
		// 			padding: 0,
		// 			'&.Mui-selected': {
		// 				backgroundColor: theme.palette.primary.main,
		// 				//color: theme.palette.white,
		// 			},
		// 			'&.MuiPaginationItem-previousNext': {
		// 				background: theme.palette.primary.main,
		// 				borderColor: 'transparent',
		// 				width: '100%',
		// 				height: '100%',
		// 				padding: 0,
		// 				overflow: 'hidden',
		// 				'&:hover': {
		// 					//color: theme.palette.white,
		// 					background: theme.palette.primary.main,
		// 				},
		// 				'&:active': {
		// 					//color: theme.palette.white,
		// 					//borderColor: theme.palette.white,
		// 					//background: theme.palette.white,
		// 				},
		// 				'&:disabled': {
		// 					//color: theme.palette.white,
		// 					//borderColor: theme.palette.white,
		// 					//background: theme.palette.grey,
		// 				},
		// 				'& > .MuiButtonBase-root': {
		// 					background: 'none',
		// 					margin: 0,
		// 					border: 'none',
		// 					width: '100%',
		// 					height: '100%',
		// 					minWidth: 'auto',
		// 					padding: '8px 56px',
		// 					borderRadius: 'initial',
		// 				},
		// 			},
		// 		}),
		// 	},
		// },
		// MuiChip: {
		// 	styleOverrides: {
		// 		root: ({ theme }) => ({
		// 			padding: '4px 12px',
		// 			paddingRight: '6',
		// 			gap: '4px',
		// 			backgroundColor: theme.palette.white,
		// 			'&:hover': {
		// 				backgroundColor: theme.palette.white,
		// 				'& .MuiChip-deleteIcon': {
		// 					'& path, & stroke': {
		// 						fill: theme.palette.text.secondary,
		// 						stroke: theme.palette.text.secondary,
		// 					},
		// 				},
		// 			},
		// 			'& .MuiChip-label': {
		// 				fontSize: '14px',
		// 				padding: 0,
		// 			},
		// 			'& .MuiChip-deleteIcon': {
		// 				width: '24px',
		// 				height: '24px',
		// 				margin: 0,
		// 				objectFit: 'contain',
		// 				'& path, & stroke': {
		// 					//fill: theme.palette.grey,
		// 					//stroke: theme.palette.grey,
		// 				},
		// 			},
		// 		}),
		// 	},
		// },
		// MuiFormControl: {
		// 	styleOverrides: {
		// 		root: {
		// 			width: '100%',
		// 			position: 'relative',
		// 			marginBottom: '0',
		// 		},
		// 	},
		// },
		// MuiFormControlLabel: {
		// 	styleOverrides: {
		// 		root: ({ theme }) => ({
		// 			width: 'max-content',
		// 			margin: '0',
		// 			position: 'relative',
		// 			alignItems: 'center',
		// 			'& .MuiFormControlLabel-label': {
		// 				display: 'flex',
		// 				alignItems: 'center',
		// 			},
		// 			'& .MuiIcon-root': {
		// 				width: 'auto',
		// 				height: 'auto',
		// 				fontSize: 'inherit',
		// 				marginRight: '10px',
		// 			},
		// 			'& .MuiTypography-root': {
		// 				fontSize: '14px',
		// 				fontWeight: '400',
		// 				lineHeight: '22px',
		// 				userSelect: 'none',
		// 			},
		// 			'& .tooltip': {
		// 				width: '14px',
		// 				height: '14px',
		// 				position: 'absolute',
		// 				top: '4px',
		// 				right: '4px',
		// 				path: {
		// 					transition: theme.transitions.create('all', {
		// 						duration: theme.transitions.duration.standard,
		// 					}),
		// 				},
		// 				':hover path': {
		// 					fill: theme.palette.primary.main,
		// 				},
		// 			},
		// 			// checked
		// 			'&.checked': {
		// 				'.MuiIcon-root path': {
		// 					fill: theme.palette.primary.main,
		// 				},
		// 				'& .MuiTypography-root': {
		// 					color: theme.palette.primary.main,
		// 				},
		// 				'&.checkbox_button': {
		// 					borderColor: theme.palette.primary.main,
		// 				},
		// 			},
		// 			// error
		// 			'&.error': {
		// 				'&.checkbox_button': {
		// 					borderColor: theme.palette.error.main,
		// 				},
		// 				'& .MuiCheckbox-root path': {
		// 					fill: theme.palette.error.main,
		// 				},
		// 			},
		// 			// custom checkbox button variant
		// 			'&.checkbox_button': {
		// 				width: '100%',
		// 				padding: '8px 16px',
		// 				borderRadius: '12px',
		// 				border: '1px solid',
		// 				borderColor: theme.palette.white,
		// 				'& .MuiCheckbox-root': {
		// 					padding: 0,
		// 					marginRight: '16px',
		// 				},
		// 			},
		// 		}),
		// 	},
		// },
	},

	typography: palette => ({
		h1: {
			fontSize: '4wv',
			//lineHeight: '10px',
			fontWeight: '700',
			color: palette.white,
			textAlign: 'center',
		},
		h2: {
			fontSize: '48px',
			lineHeight: '64px',
			fontWeight: '700',
		},
		h3: {
			fontSize: '32px',
			lineHeight: '48px',
			fontWeight: '700',
			color: palette.primary.main,
		},
		h4: {
			fontSize: '24px',
			lineHeight: '36px',
			fontWeight: '700',
		},
		h5: {
			fontSize: '20px',
			lineHeight: '30px',
			fontWeight: '700',
		},
		h6: {
			fontSize: '18px',
			lineHeight: '28px',
			fontWeight: '700',
		},
		button: {
			fontSize: '14px',
			lineHeight: '24px',
			fontWeight: '700',
			color: palette.primary.main,
			textTransform: 'initial',
		},
	}),
});
