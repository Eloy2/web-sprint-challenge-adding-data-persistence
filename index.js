const express = require("express")
const db = require("./project_model")

const server = express()

const port = process.env.PORT || 5000

server.use(express.json())

server.get("/projects", async (req, res) => {
    try {
        const projects = await db.getProjects()
        res.json(projects)
    } catch(err) {
        console.log(err)
        res.status(500).json({ message: "Something went wrong"})
    }
})

server.get("/resources", async (req, res) => {
    try {
        const resources = await db.getResources()
        res.json(resources)
    } catch(err) {
        console.log(err)
        res.status(500).json({ message: "Something went wrong"})
    }
})

server.get("/tasks", async (req, res) => {
    try {
        const tasks = await db.getTasks()
        res.json(tasks)
    } catch(err) {
        console.log(err)
        res.status(500).json({ message: "Something went wrong"})
    }
})

// ADDING ENDPOINTS BELOW THIS LINE

server.post("/projects", async (req, res) => {
    try {
        const project_body = req.body
        const newProject = await db.addProject(project_body)
        res.json(newProject)
    } catch(err) {
        console.log(err)
        res.status(500).json({ message: "Something went wrong"})
    }
})

server.post("/resources", async (req, res) => {
    try {
        const resources_body = req.body
        const newResources = await db.addResource(resources_body)
        res.json(newResources)
    } catch(err) {
        console.log(err)
        res.status(500).json({ message: "Something went wrong"})
    }
})

server.post("/tasks", async (req, res) => {
    try {
        const tasks_body = req.body
        const newTasks = await db.addTasks(tasks_body)
        res.json(newTasks)
    } catch(err) {
        console.log(err)
        res.status(500).json({ message: "Something went wrong"})
    }
})

server.listen(port, () => {
    console.log(`Running at http://localhost:${port}`)
})
