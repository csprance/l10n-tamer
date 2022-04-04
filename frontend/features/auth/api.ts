import axios from 'axios';

import { AuthRegisterFormData } from '@/features/auth/components/AuthRegisterForm';
import { ForgotPasswordRequest } from '@/pages/api/account/forgot';
import { ResetPasswordRequestBody } from '@/pages/api/account/reset';

const authAxios = axios.create({
  baseURL: '/api/account',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

/**
 * This is the function we use to Register a user given some inputs
 * @param formData
 */
export async function registerUser(formData: AuthRegisterFormData) {
  const { data } = await authAxios.post('/register', formData);
  return data;
}

/**
 * Start forgot password workflow
 */
export async function forgotPassword(body: ForgotPasswordRequest) {
  const { data } = await authAxios.post('/forgot', body);
  return data;
}

/**
 * Resets a users password given a specific token
 */
export async function resetPassword(body: ResetPasswordRequestBody) {
  const { data } = await authAxios.post('/reset', body);
  return data;
}
