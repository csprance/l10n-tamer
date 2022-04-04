import httpStatus from 'http-status';
import Joi from 'joi';
import { NextApiRequest, NextApiResponse } from 'next';

import { initializeApollo } from '@/lib/apollo';
import { withJoi } from '@/lib/validations';

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '32kb',
    },
  },
};

/**
 * This is an API route that is triggered by a webhook called by a hasura
 * cron job. It clears out any old (Over a day old) password tokens.
 * @location /api/webhooks/clear-password-tokens
 * @method: POST
 * @requires
 * token: string The secret token
 * @param req
 * @param res
 */
async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  // If the user has a session we don't want to reset the password
  if (method === 'POST') {
    // Body
    const { token }: ClearPasswordResetBody = req.body;
    // If input validates check and make sure the token is legit
    const client = initializeApollo();
  }
  return res.status(httpStatus.BAD_REQUEST).json({ message: 'Bad Request' });
}

export interface ClearPasswordResetBody {
  token: string;
}

const clearPasswordResetBodySchema = Joi.object({
  token: Joi.string().required(),
});

export default withJoi({ body: clearPasswordResetBodySchema }, handler);
