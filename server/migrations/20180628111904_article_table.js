
exports.up = function(knex, Promise) {
  return knex.schema.createTable('articles_table', table => {
    table.increments('id')
    table.text('title')
    table.date('datePublished')
    table.text('author')
    table.text('body')
    table.string('image')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('articles_table')
};
