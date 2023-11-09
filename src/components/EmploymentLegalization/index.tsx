'use client';

import { useEffect, useMemo, useState } from 'react';
import { Button } from '@mui/material';
import axios from 'axios';
import { Form, Formik, FormikHelpers } from 'formik';
import { useTranslation } from 'next-i18next';
import { CreateFormTitle } from 'src/components/CreateFormTitle';
import { TestFormComponent } from 'src/components/TestFormComponent';
import { TOAST_TYPES } from 'src/utils/constants';
import { toastMessage } from 'src/utils/helpers';
import { getCurrentPostValue } from 'src/utils/helpers/get-current-post-value';
import { getCurrentValidationSchema } from 'src/utils/helpers/get-current-validation-schema';
import { getInitialParams } from 'src/utils/helpers/get-initial-params';
import { getPostUrl } from 'src/utils/helpers/get-post-url';
import styles from './index.module.scss';

export const EmploymentLegalization = () => {
	const [userParams, setUserParams] = useState({ telegramIdParam: '', serviceParam: '', lang: '', messageId: '' });
	const { t } = useTranslation('common');

	useEffect(() => {
		const url = new URL(window.location.href);
		const serviceParam = url.searchParams.get('service');
		const idParams = url.searchParams.get('id');
		const language = url.searchParams.get('lang');
		const messageId = url.searchParams.get('msgId');
		if (serviceParam && idParams) {
			setUserParams((prev: any) => ({
				...prev,
				telegramIdParam: idParams,
				serviceParam: serviceParam,
				lang: language,
				messageId: messageId,
			}));
		}
	}, []);

	const handleSubmit = async (value: any, { resetForm }: FormikHelpers<any>): Promise<void> => {
		try {
			const url = getPostUrl(userParams.serviceParam);
			const currentValue = getCurrentPostValue(value, userParams);
			const { status } = await axios.post(url, currentValue);
			await toastMessage(t('toastify.success'), TOAST_TYPES.SUCCESS, 1000);
			status === 200 && resetForm();
		} catch (e: Error | any) {
			await toastMessage(t('toastify.error'), TOAST_TYPES.ERROR, 1000);
			await Promise.reject(e);
		}
	};

	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	const validationSchema = useMemo(() => {
		return getCurrentValidationSchema(userParams.serviceParam);
	}, [userParams.serviceParam]);

	const initialValue = useMemo(() => {
		return getInitialParams(userParams.serviceParam);
	}, [userParams.serviceParam]);

	return userParams.serviceParam ? (
		<Formik initialValues={initialValue} onSubmit={handleSubmit} validationSchema={validationSchema}>
			{({ isValid }) => {
				return (
					<>
						<CreateFormTitle serviceName={userParams.serviceParam} />
						<Form className={styles.form}>
							<TestFormComponent userParams={userParams} />
							<Button disabled={!isValid} className={styles.submit} variant="outlined" type="submit">
								{t('form-buttons.submit')}
							</Button>
						</Form>
					</>
				);
			}}
		</Formik>
	) : null;
};
