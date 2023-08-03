import DB from '../data/db';

const NAME = `example.js`;

console.log(`RUNNING: ${NAME}`);

const createRun = DB.schema.createTable('market', function(table) {
  table
    .uuid('id')
    .primary()
    .unique()
    .notNullable()
    .defaultTo(DB.raw('uuid_generate_v4()'));
  table.string('text').nullable();
  table.jsonb('data').nullable();
  table
    .timestamp('created_at')
    .notNullable()
    .defaultTo(DB.raw('now()'));
  table
    .timestamp('updated_at')
    .notNullable()
    .defaultTo(DB.raw('now()'));
  table.timestamp('deleted_at').nullable();
});

async function run() {
  await Promise.all([createRun]);
  console.log(`FINISHED: ${NAME}`);
  process.exit(0);
}

run();
