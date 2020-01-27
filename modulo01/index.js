const express = require('express')

const server = express()

//Query params = ?teste=1
//Route params = /users/1
//Request body = {"name" : "Diego"}

server.get('/users/:id', (request, response) => {
  const nome = request.query.nome
  // const id = request.params.id
  const {id} = request.params

  return response.json({message_name: `Hello ${nome}`,
                        message_id: `Buscando o usuario ${id}`})
})

server.listen(3000)