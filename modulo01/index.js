const express = require('express')

const server = express()

server.use(express.json())

//Query params = ?teste=1
//Route params = /users/1
//Request body = {"name" : "Diego"}

//CRUD = Create, Read, Update, Delete

const users = ['Diego', 'Robson', 'Victor']

// Middleware global
server.use((request, response, next) => {
  console.time('Request')
  console.log(`Método: ${request.method}; URL: ${request.url}`)

  // return next()
  next()

  console.timeEnd('Request')
})

// Middleware local
function checkUserExists(request, response, next){
  if(!request.body.name){
    return response.status(400).json({error: 'User name is required'});
    }
    return next()
}

function checkUserInArray(request, response, next){
  const user = users[request.params.index]

  if(!user){
    return response.status(400).json({error: 'User does not exists'});
  }

  request.user = user

  return next()
}

server.get('/users', (request, response) => {
  return response.json(users)
})

server.get('/users/:index', checkUserInArray, (request, response) => {
  // const nome = request.query.nome
  // const id = request.params.id
  // const {index} = request.params

  // return response.json(users[index])
  return response.json(request.user)
})

server.post('/users',checkUserExists, (request, response) => {
  const {name} = request.body

  users.push(name)

  return response.json(users)
})

server.put('/users/:index', checkUserInArray, checkUserExists, (request, response) => {
  const {index} = request.params
  const {name} = request.body

  users[index] = name

  return response.json(users)
})

server.delete('/users/:index', checkUserInArray, (request, response) => {
  const {index} = request.params

  users.splice(index, 1)

  return response.json(users)
})

server.listen(3000)