
exports.up = function(knex) {
  return knex.schema
  .createTable('projects', tbl =>{
      tbl.increments();
      tbl.string('name').notNullable();
      tbl.string('description');
      tbl.boolean('completed').defaultTo(false);
  })
  .createTable('tasks', tbl =>{
      tbl.increments();
      tbl.string('description').notNullable();
      tbl.string('notes');
      tbl.boolean('completed').defaultTo(false);
      tbl.integer('project_id').unsigned().notNullable().references('id').inTable('projects')
  })
  .createTable('resources', tbl=>{
      tbl.increments();
      tbl.string('name').unique().notNullable();
      tbl.string('description');

  })
  .createTable('project_resources', tbl =>{
      tbl.integer('project_id').unsigned().notNullable().references('id').inTable('projects');
      tbl.integer('resource_id').unsigned().notNullable().references('id').inTable('resources');

  })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('projects')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('project_resources')
};
