import httpStatus from 'http-status';
import Joi from 'joi';
import { NextApiResponse } from 'next';

import { THEME_NAMES } from '@/constants';

import makeWithJoi from './with-joi';

/**
 * This is a function that can wrap an apiRoute and validate the schema
 * at the route level rather than needing to do it in side the route itself
 * it should be used in an api route like
 * @example
 * export default withJoi({ body: apiRouteSchema }, handler)
 */
export const withJoi = makeWithJoi({
  onValidationError(req, res, err) {
    console.error('------ VALIDATION: ERROR ------');
    console.error(err);
    res.status(httpStatus.UNPROCESSABLE_ENTITY);
  },
});

// These are a list of validations that we enforce project wide
// So they're stored here and can be used in other places
// We can even use these on the front and the backend
export const USERNAME = Joi.string().min(3).max(32);
export const EMAIL = Joi.string().email({ tlds: { allow: false } });
export const PASSWORD = Joi.string().min(6).max(32).messages({
  'string.required': 'Password is Required',
  'string.min': 'Passwords must be within 6-32 characters',
  'string.max': 'Passwords must be within 6-32 characters',
});
export const PASSWORD_REPEAT = Joi.ref('password', {});
export const THEME_NAME = Joi.string().valid(...THEME_NAMES);
export const USER_SETTINGS = Joi.object({
  themeName: THEME_NAME,
});
