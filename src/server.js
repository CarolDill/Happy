// import lib - dependencia
const express = require('express');
const path = require('path');
const pages = require('./pages.js')

const port = process.env.PORT||5500

// initializing express
const server = express()
server
    // using req body
    .use(express.urlencoded({ extended: true}))
    
    // using estatic files
    .use(express.static('public'))

    // set up template engine
    .set('views', path.join(__dirname, "views"))
    .set('view engine', 'hbs')

    // app routes
    .get('/', pages.index)
    .get('/orphanage', pages.orphanage)
    .get('/orphanages', pages.orphanages)
    .get('/create-orphanage', pages.createOrphanage)
    .post('/save-orphanage', pages.saveOrphanage)

// turn server on
server.listen(port, console.log(`Servidor executando na porta ${port}`));