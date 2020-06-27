const db = require("./config")

function getProjects() {
    return db("project_table")
}

function getResources() {
    return db("resource_table")
}

function getTasks() { // GETS LISTS OF TASKS FOR SPECIFIED PROJECT
    return db("task_table as tt")
            .innerJoin("project_table as pt", "pt.id", "tt.project_id")
            .select("tt.id", "tt.description", "tt.notes", "tt.completed", "pt.name as project_name", "pt.description as project_description")
}

// ADD FUNCTIONS BELOW THIS LINE

async function addProject(project_object) {
    const [newProjectId] = await db.insert(project_object).into("project_table")
    const newProject = await db.first("*").from("project_table").where("id", newProjectId)
    return newProject
}

async function addResource(resources_object) {
    const [newResourceId] = await db.insert(resources_object).into("resource_table")
    const newProject = await db.first("*").from("resource_table").where("id", newResourceId)
    return newProject
}

async function addTasks(tasks_object) {
    const [newTaskId] = await db.insert(tasks_object).into("task_table")
    const newTask = await db.first("*").from("task_table").where("id", newTaskId)
    return newTask
}

module.exports = {
    getProjects,
    getResources,
    getTasks,
    addProject,
    addResource,
    addTasks,
}