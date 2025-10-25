import type { NextApiRequest, NextApiResponse } from 'next';
import * as Server from '@common/server';
import * as Constants from '@common/constants';

export const config = {
  api: {
    bodyParser: true,
  },
};

export default async function apiIndex(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  await Server.cors(req, res);

  const data = [...Constants.TEMPLATE_EXAMPLES_ANIMATIONS, ...Constants.TEMPLATE_EXAMPLES_COMPONENTS, ...Constants.TEMPLATE_EXAMPLES_SYSTEM];

  res.json({
    data,
    count: data.length,
    success: true,
    message: 'hey there, friend.',
  });
}
