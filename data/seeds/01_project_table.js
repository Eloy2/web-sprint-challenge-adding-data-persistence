
exports.seed = async function(knex) {
  await knex("project_table").insert([
    {name: "Death Star", description: "Make a Death Star"},
    {name: "Xenomorph", description: "Grow a Xenomorph Servant"},
    {name: "Plumbus", description: "Make a Plumbus"},
    {name: "Lightsaber", description: "Make a Lightsaber"},
  ]);
};
