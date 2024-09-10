import * as Server from '@common/server';
import * as Constants from '@common/constants';

export default async function apiIndex(req, res) {
  await Server.cors(req, res);

  const data = [...Constants.TEMPLATE_EXAMPLES_ANIMATIONS, ...Constants.TEMPLATE_EXAMPLES_COMPONENTS, ...Constants.TEMPLATE_EXAMPLES_SYSTEM];

  res.json({
    data,
    count: data.length,
    success: true,
    message: 'hey there, friend.',
  });
}
