

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {
          description: "Make money",
          notes: "acquire females",
          completed: true,
          project_id: 1
        },
        {
          description: "Build a react front end",
          completed: true,
          project_id: 1
        },
        {
          description: "Build a react native app",
          completed: true,
          project_id: 1
        },
        {
          description: "Make a database scheme",
          completed: false,
          project_id: 2
        },
        {
          description: "Write endpoints",
          notes: "Use routers",
          completed: true,
          project_id: 2
        },
      ]);
    });
};