const db = require('../data/dbConfig');

module.exports = {
    addResource,
    addProject,
    addTask,
    getResources,
    getProjects,
    getTasks
}

function addResource(resource) {
    return db('resources')
    .insert(resource)
    .then(ids => {
        return ids
    });
}

function addProject(project) {
    return db('projects')
    .insert(project)
    .then(ids => {
        return ids
    });
}

function addTask(task, project_id) {
    const newTask = {
        ...task,
        project_id: project_id
    }
    return db('tasks')
    .insert(newTask)
    .then(ids => {
        return ids
    });
}

function getResources() {
    return db('resources')
}

function getProjects() {
    return db('projects')
    .then(res => {
        const completed = res.map(project => {
            if(project.completed){
                const boolVal = {
                    ...project,
                    completed: true
                };
                return boolVal;
            } else {
                const boolVal = {
                    ...project,
                    completed: false
                };
                return boolVal;
            }
        });
        return completed;
    })
}

function getTasks() {
    return db('tasks')
    .join('projects', 'projects.id', 'tasks.project_id')
    .select(
    'tasks.id', 
    'tasks.description', 
    'tasks.notes', 
    'tasks.completed',
    'projects.name as project_name',
    'projects.description as project_description')
    .then(res => {
        const completed = res.map(task => {
            if(task.completed){
                const boolVal = {
                    ...task,
                    completed: true
                };
                return boolVal;
            } else {
                const boolVal = {
                    ...task,
                    completed: false
                };
                return boolVal;
            }
        });
        return completed;
    })
}