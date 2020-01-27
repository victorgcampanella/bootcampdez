const express = require('express')

const server = express()

server.use(express.json())

//Query params = ?teste=1
//Route params = /users/1
//Request body = {"name" : "Diego"}

//CRUD = Create, Read, Update, Delete

const users = ['Diego', 'Robson', 'Victor']

server.get('/users', (request, response) => {
  return response.json(users)
})

server.get('/users/:index', (request, response) => {
  const nome = request.query.nome
  // const id = request.params.id
  const {index} = request.params

  return response.json(users[index])
})

server.post('/users', (request, response) => {
  const {name} = request.body

  users.push(name)

  return response.json(users)
})

server.put('/users/:index', (request, response) => {
  const {index} = request.params
  const {name} = request.body

  users[index] = name

  return response.json(users)
})

server.delete('/users/:index', (request, response) => {
  const {index} = request.params

  users.splice(index, 1)

  return response.json(users)
})

server.listen(3000)