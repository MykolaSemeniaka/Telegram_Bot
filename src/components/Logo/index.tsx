import Image from 'next/image';

export const Logo = () => {
	return (
		<>
			<Image src={'/semeniaka-logo.png'} alt={'logo image'} width={300} height={100} priority />
		</>
	);
};
