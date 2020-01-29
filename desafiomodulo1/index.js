const express = require('express')

const server = express()

server.use(express.json())

const projects = [{
  id: '1',
  title: 'Novo Projeto',
  tasks: ['Fazer código', 'Fazer tela']
},
{
  id: '2',
  title: 'Novo Prick',
  tasks: ['Fazer botao', 'Fazer cadastro']
},
];

server.post('/projects', (request, response) => {
  const { id, title, tasks } = request.body

  const project = {
    id,
    title,
    tasks
  }

  projects.push(project)

  return response.json(projects)
})

server.get('/projects', (request, response) => {
  return response.json(projects)
})

server.put('/projects/:id', (request, response) => {
  const { id } = request.params
  const { title, tasks } = request.body

  const identifyProject = projects.find(params => params.id == id)

  identifyProject.title = title
  identifyProject.tasks = tasks

  return response.json(projects)
})

server.delete('/projects/:id', (request, response) => {
  const {id} = request.params

  const projectIndex = projects.findIndex(params => params.id == id)

  projects.splice(projectIndex, 1)

  return response.json(projects)
})

server.post('/projects/:id/tasks', (request, response) => {
  const {id} = request.params
  const {title} = request.body

  const addTask = projects.find(params => params.id == id)

  addTask.tasks.push(title)

  return response.json(projects)
})

server.listen(3000)