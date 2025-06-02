import * as Server from '@common/server';
import * as Constants from '@common/constants';

export default async function apiAESTest(req, res) {
  await Server.cors(req, res);

  const originalMessage = 'hey there, friend';
  const encryptedOriginalMessage = await Server.encrypt(originalMessage);
  const decryptedOriginalMessage = await Server.decrypt(encryptedOriginalMessage);

  res.json({
    success: true,
    originalMessage,
    encryptedOriginalMessage,
    decryptedOriginalMessage,
  });
}
