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
const httpPort = process.env.NETOVIZ_REST_PORT
const grpcPort = process.env.NETOVIZ_GRPC_PORT

/** HTTP server */
async function startHTTPServer() {
  const app = express()
  app.use('/api', restApiRouter) // set route for REST API

  // Listen the server
  app.listen(httpPort, host)
  consola.ready({
    message: `HTTP Server listening on http://${host}:${httpPort}/`,
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
    message: `gRPC Server listening on http://${host}:${grpcPort}/`,
    badge: true
  })
}

// Run server.
startHTTPServer()
if (process.env.NODE_ENV === 'development') {
  startGRPCServer()
}
