/**
 * @file netoviz server definition
 */

require('dotenv').config()
const express = require('express')
const consola = require('consola')
const grpc = require('grpc')

const restApiRouter = require('./api/rest')
const grpcImplement = require('./api/grpc')
const services = require('./api/grpc/topology-data_grpc_pb')

// Init Nuxt.js
const host = '0.0.0.0'
const restPort = process.env.NETOVIZ_REST_LISTEN
const grpcPort = process.env.NETOVIZ_GRPC_LISTEN

/** HTTP server */
async function startRESTServer() {
  const app = express()
  app.use('/api', restApiRouter) // set route for REST API

  // Listen the server
  app.listen(restPort, host)
  consola.ready({
    message: `REST Server listening on http://${host}:${restPort}/`,
    badge: true
  })
}

/** gRPC server */
function startGRPCServer() {
  const server = new grpc.Server()
  server.addService(services.TopologyDataService, grpcImplement)
  server.bind(`${host}:${grpcPort}`, grpc.ServerCredentials.createInsecure())
  server.start()
  consola.ready({
    message: `gRPC Server listening on ${host}:${grpcPort}`,
    badge: true
  })
}

// Run server.
console.log('[Server] NETOVIZ_API: ', process.env.NETOVIZ_API)
startRESTServer()
if (process.env.NETOVIZ_API === 'grpc') {
  startGRPCServer()
}
