import DB from '@data/db';

function print({ address, copy }) {
  console.log(`\x1b[1m\x1b[37m\[${address}\]\x1b[0m : ${copy}`);
}

export const runQuery = async ({ queryFn, errorFn, label }) => {
  let response;
  try {
    response = await queryFn();
  } catch (e) {
    response = errorFn(e);
  }

  print({ address: `database-query`, copy: label });
  return response;
};

export const example = async (options) => {
  return await runQuery({
    label: 'EXAMPLE',
    queryFn: async () => {
      const query: any = await DB.insert(options)
        .into('EXAMPLE_CHANGE_ME')
        .returning('*');

      const index = query ? query.pop() : null;
      return index;
    },
    errorFn: async (e) => {
      return {
        error: 'EXAMPLE',
        source: e,
      };
    },
  });
};
