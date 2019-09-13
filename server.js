const express = require('express');
const db = require('./helpers/dbHelper');
const server = express();

server.use(express.json());

server.post('/projects', (req, res) => {
    const project = req.body;
    if (!project.name) {
        res.status(400).json({ error: "Project name is required" })
    } else {
        db.addProject(project)
        .then(project => {
            res.status(201).json(project)
        })
        .catch(err => {
            res.status(500).json({ error: "Server error adding project" })
        })
    }
})

server.get('/projects', (req, res) => {
    db.getProjects()
    .then(projects => {
        res.status(200).json(projects)
    })
    .catch(err => {
        res.status(500).json({ error: "Server error getting projects" })
    })
})

// Tasks CRUD

server.post('/:project_id/tasks', (req, res) => {
    const task = req.body;
    const { project_id } = req.params;
    if (!task.description) {
        res.status(400).json({ error: "Task description is required" })
    } else {
        db.addTask(task, project_id)
        .then(task => {
            res.status(201).json(task)
        })
        .catch(err => {
            res.status(500).json({ error: "Server error adding task" })
        })
    }
})

server.get('/tasks', (req, res) => {
    db.getTasks()
    .then(tasks => {
        res.status(200).json(tasks)
    })
    .catch(err => {
        res.status(500).json({ error: "Server error getting tasks" })
    })
})

server.post('/resources', (req, res) => {
    const resource = req.body;
    if (!resource.name) {
        res.status(400).json({ error: "Resource Name is required" })
    } else {
        db.addResource(resource)
        .then(resource => {
            res.status(201).json(resource)
        })
        .catch(err => {
            res.status(500).json({ error: "Server error adding Resource" })
        })
    }
})

server.get('/resources', (req, res) => {
    db.getResources()
    .then(resources => {
        res.status(200).json(resources)
    })
    .catch(err => {
        res.status(500).json({ error: "Server error getting Resources" })
    })
})
module.exports = server;