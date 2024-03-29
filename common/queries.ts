import * as Constants from '@common/constants';
import * as Utilities from '@common/utilities';

const REQUEST_HEADERS = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

const getHeaders = (key) => {
  return { ...REQUEST_HEADERS, Authorization: `Bearer ${key}` };
};

export async function attemptFetch(url, method, headers, body) {
  try {
    const response = await fetch(url, { method, headers, body });
    console.log(response);
    const result = await response.json();
    return !result.error ? result : null;
  } catch (e) {
    return null;
  }
}

export async function userAuthenticate({ email, password }) {
  let result;
  try {
    const response = await fetch('https://api.internet.dev/api/users/authenticate', {
      method: 'POST',
      headers: REQUEST_HEADERS,
      body: JSON.stringify({ email, password }),
    });
    result = await response.json();
  } catch (e) {
    return null;
  }

  if (!result) {
    return null;
  }

  if (!result.user) {
    return null;
  }

  return result;
}

export async function web3Authenticate({ address, message, signature, email, password }) {
  const apiUrl = 'https://api.internet.dev/api/users/authenticate';
  const headers = { 'Content-Type': 'application/json' };

  // NOTE(xBalbinus): Web3 Quick-auth
  if (message && signature && address) {
    const authBody = JSON.stringify({ wallet_address: address, message, wallet_signature: signature });
    const authResult = await attemptFetch(apiUrl, 'POST', headers, authBody);
    if (authResult) return authResult;
  }

  // NOTE(xBalbinus): Web3 Register
  if (email && password && address) {
    const domain = 'YOUR_DOMAIN_HERE';
    const registerBody = JSON.stringify({ email, domain, password, wallet_address: address });
    const registerResult = await attemptFetch(apiUrl, 'POST', headers, registerBody);
    if (registerResult && registerResult.user) return registerResult;
  }

  return null;
}

export async function userRefreshKey({ email, password }) {
  let result;
  try {
    const response = await fetch('https://api.internet.dev/api/users/regenerate-key', {
      method: 'POST',
      headers: REQUEST_HEADERS,
      body: JSON.stringify({ email, password }),
    });
    result = await response.json();
  } catch (e) {
    return null;
  }

  if (!result) {
    return null;
  }

  if (!result.user) {
    return null;
  }

  return result;
}

export async function userUnsubscribeServices({ key }) {
  if (Utilities.isEmpty(key)) {
    return null;
  }

  let result;
  try {
    const response = await fetch('https://api.internet.dev/api/users/subscriptions/unsubscribe', {
      method: 'POST',
      headers: { 'X-API-KEY': key, Accept: 'application/json', 'Content-Type': 'application/json' },
    });
    result = await response.json();
  } catch (e) {
    return null;
  }

  if (!result) {
    return null;
  }

  if (!result.user) {
    return null;
  }

  return result;
}

export async function userUploadData({ file, key }) {
  if (Utilities.isEmpty(key)) {
    return null;
  }

  let signedResult;
  const name = file.name;
  const type = file.type;
  const size = file.size;

  if (size > Constants.MAX_SIZE_BYTES) {
    return { error: 'File size exceeds 15mb limit' };
  }

  try {
    const signedResponse = await fetch(`https://api.internet.dev/api/data/generate-presigned-url`, {
      method: 'POST',
      headers: {
        'X-API-KEY': key,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ type, file: name, size }),
    });
    signedResult = await signedResponse.json();
  } catch (e) {
    return null;
  }

  if (!signedResult) {
    return null;
  }

  if (signedResult.error) {
    return signedResult;
  }

  if (!signedResult.uploadURL) {
    return null;
  }

  try {
    fetch(signedResult.uploadURL, {
      method: 'PUT',
      body: file,
    });
  } catch (e) {
    return null;
  }

  return signedResult;
}

export async function userCreatePost({ id, key, src, type }) {
  if (Utilities.isEmpty(key)) {
    return null;
  }

  let result;
  try {
    const response = await fetch('https://api.internet.dev/api/posts/create', {
      method: 'POST',
      headers: { 'X-API-KEY': key, Accept: 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({ type, fields: { fileId: id, public: true }, src }),
    });
    result = await response.json();
  } catch (e) {
    return null;
  }

  if (!result) {
    return null;
  }

  return result;
}

export async function userDeletePost({ id, key }) {
  if (Utilities.isEmpty(key)) {
    return null;
  }

  let result;
  try {
    const response = await fetch('https://api.internet.dev/api/posts/delete', {
      method: 'POST',
      headers: { 'X-API-KEY': key, Accept: 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
    result = await response.json();
  } catch (e) {
    return null;
  }

  if (!result) {
    return null;
  }

  return result;
}

export async function userCreatePlainThread({ key, fields, src, type }) {
  if (Utilities.isEmpty(key)) {
    return null;
  }

  let result;
  try {
    const response = await fetch('https://api.internet.dev/api/posts/create', {
      method: 'POST',
      headers: { 'X-API-KEY': key, Accept: 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({ fields, src, type }),
    });
    result = await response.json();
  } catch (e) {
    return null;
  }

  if (!result) {
    return null;
  }

  return result;
}

export async function userListThreadReplies({ id, orderBy }) {
  let result;
  try {
    const response = await fetch('https://api.internet.dev/api/posts/all-thread-replies', {
      method: 'POST',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, orderBy }),
    });
    result = await response.json();
  } catch (e) {
    return null;
  }

  if (!result) {
    return null;
  }

  return result;
}

export async function userListThreads({ orderBy }) {
  let result;
  try {
    const response = await fetch('https://api.internet.dev/api/posts/all-threads', {
      method: 'POST',
      body: JSON.stringify({ orderBy }),
    });
    result = await response.json();
  } catch (e) {
    return null;
  }

  if (!result) {
    return null;
  }

  return result;
}
