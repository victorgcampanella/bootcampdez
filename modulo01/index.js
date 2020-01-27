const express = require('express')

const server = express()

//Query params = ?teste=1
//Route params = /users/1
//Request body = {"name" : "Diego"}

const users = ['Diego', 'Claudio', 'Victor']

server.get('/users/:index', (request, response) => {
  const nome = request.query.nome
  // const id = request.params.id
  const {index} = request.params

  return response.json(users[index])
})

server.listen(3000)