


exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {
          name: "Github"
        },
        {
          name: "Youtube",
          description: "Youtube website"
        },
        {
          name: "React Docs",
          description: "React website docs"
        },
      ]);
    });
};