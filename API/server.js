require('module-alias/register')

const http = require('http')
const API = require('@ApiAPI')
const Server = http.Server(API)
const PORT = process.env.PORT || 3000
const LOCAL = '0.0.0.0'

Server.listen(PORT, LOCAL, () => console.info(`API running on ${LOCAL}:${PORT}`))