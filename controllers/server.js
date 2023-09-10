const express = require('express');
const detailRoutes = require('../controllers/proyect_detail_router')
const cors = require("cors");

const server = express()
server.use(express.json())
server.use(cors());

server.use('/details', detailRoutes)


module.exports = server