exports.up = (knex, Promise) => {
  
};

exports.down = (knex, Promise) => knex.schema.dropTable('shows').dropTable('favorites');
