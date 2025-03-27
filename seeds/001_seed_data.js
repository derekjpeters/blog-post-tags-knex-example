exports.seed = async function(knex) {
  await knex('post_tags').del();
  await knex('tags').del();
  await knex('posts').del();

  const [post1] = await knex('posts').insert({ title: 'Hello World', content: 'This is my first blog post' }, ['id']);
  const [post2] = await knex('posts').insert({ title: 'Learning Knex', content: 'Knex makes SQL easier' }, ['id']);

  const [tag1, tag2] = await knex('tags').insert([{ name: 'Introduction' }, { name: 'Knex' }], ['id']);

  await knex('post_tags').insert([
    { post_id: post1.id, tag_id: tag1.id },
    { post_id: post2.id, tag_id: tag2.id },
    { post_id: post2.id, tag_id: tag1.id }
  ]);
};