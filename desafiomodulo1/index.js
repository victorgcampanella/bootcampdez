const express = require('express')

const server = express()

server.use(express.json())

const projects = [{id : '1', 
                  title : 'Novo Projeto', 
                  tasks: ['Fazer código', 'Fazer tela']
                  },
                  {id : '2', 
                  title : 'Novo Prick', 
                  tasks: ['Fazer botao', 'Fazer cadastro']
                  },
                ]

server.get('/projects', (request, response) => {
  return response.json(projects)
})

server.post('/projects', (request, response) => {
  const {id, title, tasks} = request.body

  const project = {
    id,
    title,
    tasks
  }

  projects.push(project)

  return response.json(project)
})

server.put('/projects/:id', (request, response) => {
  const {id} = request.params
  const {title, tasks} = request.body

  const identifyProject = projects.find(params => params.id == id)

  identifyProject.title = title
  identifyProject.tasks = tasks

  return response.json(identifyProject)
})

server.listen(3000)