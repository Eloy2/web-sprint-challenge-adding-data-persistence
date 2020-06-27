
exports.seed = async function(knex) {
  await knex("task_table").insert([
    {description: "Convince Elon Musk that making a Death Star is good idea.", notes: "Make him pay and make it", project_id: 1},
    {description: "Give Elon Musk a Computer", notes: "He can use it for calculations", project_id: 1},
    {description: "Give Elon Musk Kyber Crystal", notes: "He needs it to make Death Star", project_id: 1},
    {description: "Take someone you hate to Xenomorph egg", project_id: 2},
    {description: "Once Xenomorph hatches give it a Kyber Crystal to turn into Slave", project_id: 2},
    {description: "Throw someone you hate down Death Star reactor shaft", notes: "body will turn into Plubus", project_id: 3},
    {description: "Retrieve Plubus from reactor shaft", project_id: 3},
    {description: "Use Computer to make Plumbus out of Plubus", project_id: 3},
    {description: "Convince Elon Musk to pay for Lightsaber", project_id: 4},
    {description: "Use Computer for calculations of Lightsaber", project_id: 4},
    {description: "Put Kyber Crystal in Lightsaber", project_id: 4},
  ]);
};
