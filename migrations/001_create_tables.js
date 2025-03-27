exports.up = function(knex) {
  return knex.schema
    .createTable('posts', function(table) {
      table.increments('id');
      table.string('title').notNullable();
      table.text('content');
    })
    .createTable('tags', function(table) {
      table.increments('id');
      table.string('name').notNullable();
    })
    .createTable('post_tags', function(table) {
      table.integer('post_id').unsigned().notNullable().references('id').inTable('posts');
      table.integer('tag_id').unsigned().notNullable().references('id').inTable('tags');
      table.primary(['post_id', 'tag_id']);
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('post_tags')
    .dropTableIfExists('tags')
    .dropTableIfExists('posts');
};