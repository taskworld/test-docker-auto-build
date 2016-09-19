const Hapi = require('hapi')

const server = new Hapi.Server()
server.connection({ port: 13000 })

server.start((err) => {
  if (err) {
    throw err
  }
  console.log(`Server running at: ${server.info.uri}`)
})

server.route({
  method: 'GET',
  path: '/',
  handler: function (request, reply) {
    reply('Hello, world!222')
  }
})

server.route({
  method: 'GET',
  path: '/echo',
  handler: function (request, reply) {
    reply(request.query)
  }
})

server.route({
  method: 'GET',
  path: '/echo2',
  handler: function (request, reply) {
    reply(request.query)
  }
})

server.route({
  method: 'GET',
  path: '/echo3',
  handler: function (request, reply) {
    reply(request.query)
  }
})
