'use strict'
const express = require('express')

//Constants
const PORT = 8080
const HOST = '0.0.0.0'

//App
const app = new express();
app.get('/', (req, res)=>{
    res.send('Hello Docker 🐳 ')
})

app.listen(PORT, HOST)
console.log(`Running on https://${HOST}:${PORT}`)
