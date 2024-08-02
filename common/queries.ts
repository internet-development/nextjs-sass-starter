import * as Constants from '@common/constants';
import * as Utilities from '@common/utilities';

const REQUEST_HEADERS = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

const getHeaders = (key) => {
  return { ...REQUEST_HEADERS, Authorization: `Bearer ${key}` };
};

export async function fetchAndExpectData({ route, key, body }) {
  let result;
  try {
    const response = await fetch(route, {
      method: 'POST',
      headers: { 'X-API-KEY': key, 'Content-Type': 'application/json' },
      body,
    });
    result = await response.json();
  } catch (e) {
    return null;
  }

  if (!result) {
    return null;
  }

  if (!result.data) {
    return null;
  }

  return result;
}

export async function anonymousForgotPassword({ email }) {
  let result;
  try {
    const response = await fetch('https://api.internet.dev/api/users/reset-password', {
      method: 'POST',
      headers: REQUEST_HEADERS,
      body: JSON.stringify({ email }),
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

export async function userAuthenticate({ email, password }) {
  let result;
  try {
    const response = await fetch('https://api.internet.dev/api/users/authenticate', {
      method: 'POST',
      headers: REQUEST_HEADERS,
      body: JSON.stringify({ email, password, source: 'wireframes.internet.dev' }),
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

export async function userChangePassword({ key, password }) {
  let result;
  try {
    const response = await fetch('https://api.internet.dev/api/users/update-viewer-password', {
      method: 'POST',
      headers: { 'X-API-KEY': key, Accept: 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
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

export async function onRefreshDocuments({ key, type }) {
  const result = await fetchAndExpectData({ route: 'https://api.internet.dev/api/documents', key, body: JSON.stringify({ type }) });
  return result;
}

export async function onCreateDocument({ key, type }) {
  const result = await fetchAndExpectData({ route: 'https://api.internet.dev/api/documents/create', key, body: JSON.stringify({ type }) });
  return result;
}

export async function onDeleteDocumentById({ id, key }) {
  const result = await fetchAndExpectData({ route: 'https://api.internet.dev/api/documents/delete', key, body: JSON.stringify({ id }) });
  return result;
}

export async function onUpdateDocumentById({ id, key, updates }) {
  const result = await fetchAndExpectData({ route: 'https://api.internet.dev/api/documents/update', key, body: JSON.stringify({ id, updates }) });
  return result;
}
