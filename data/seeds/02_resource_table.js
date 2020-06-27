
exports.seed = async function(knex) {
  await knex("resource_table").insert([
    {name: "Elon Musk", description: "He can pay & solve complex problems"},
    {name: "Computer", description: "Used for calculations"},
    {name: "Someone You Hate", description: "Can be used as xenomorph incubator and other things"},
    {name: "Plubus", description: "Needed to make Plumbus"},
    {name: "Kyber Crystal", description: "Important component in the creation of Lightsabers, Death Stars, and to turn Xenomorph into servant"},
  ]);
};
