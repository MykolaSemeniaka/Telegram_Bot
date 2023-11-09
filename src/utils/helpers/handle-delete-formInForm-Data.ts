export const handleDeleteFormInFormData = (index: number, data: any[], setData: any) => {
	const newData = [...data];
	newData.splice(index, 1);
	setData(newData);
};
