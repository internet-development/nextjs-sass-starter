const REQUEST_HEADERS = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

const getHeaders = (key) => {
  return { ...REQUEST_HEADERS, Authorization: `Bearer ${key}` };
};

export async function placeholder(key) {
  const response = await fetch('/api', {
    method: 'GET',
    headers: getHeaders(key),
  });

  const json = await response.json();
  return json;
}
