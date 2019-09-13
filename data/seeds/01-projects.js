  

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          name: "Learn how to use a computer",
          description: "Learn to turn on and turn off a computer",
          completed: false
        },
        {
          name: "Diabetes Management Build Week Project",
          description: "Build a predictive glucose app using machine learning",
          completed: false
        }
      ]);
    });
}