import { Schema, ValidationError } from 'joi';
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

export type ValidableRequestFields = Pick<
  NextApiRequest,
  'body' | 'headers' | 'query'
>;

export type ValidationSchemas = {
  [K in keyof ValidableRequestFields]?: Schema;
};

export type ValidationFunction = (
  schemas: ValidationSchemas,
  handler?: NextApiHandler,
) => NextApiHandler;

export type OnValidationError = (
  req: NextApiRequest,
  res: NextApiResponse,
  error: ValidationError,
) => void | Promise<void>;

export type Configuration = { onValidationError: OnValidationError };

export default function makeWithJoi(
  config?: Configuration,
): ValidationFunction {
  // @ts-ignore
  const onValidationError: OnValidationError = config
    ? config.onValidationError
    : (_, res) => res.status(400).end();

  return (schemas, handler) => {
    return (req: NextApiRequest, res: NextApiResponse, next?: any) => {
      const fields: (keyof ValidableRequestFields)[] = [
        'body',
        'headers',
        'query',
      ];

      const validationError = fields.reduce<ValidationError | undefined>(
        (error, field) => {
          if (undefined !== error) {
            return error;
          }

          const schema = schemas[field];

          return schema && schema.required().validate(req[field]).error;
        },
        undefined,
      );

      if (undefined !== validationError) {
        return onValidationError(req, res, validationError);
      }

      if (undefined !== next) {
        return next();
      }

      if (undefined !== handler) {
        return handler(req, res);
      }

      res.status(404).end();
    };
  };
}
