
exports.seed = async function(knex) {
  // truncate
  await knex("task_table").truncate()
  await knex("project_resource").truncate()
  await knex("resource_table").truncate()
  await knex("project_table").truncate()
};
