const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const path = require('path')
module.exports = app

// logging middleware
app.use(morgan('dev'))

// body parsing middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// routes

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '..', 'public/index.html')))


// static file-serving middleware
app.use(express.static(path.join(__dirname, '..', 'public')))

// any remaining requests with an extension (.js, .css, etc.) send 404
app.use((req, res, next) =>
{
    if (path.extname(req.path).length)
    {
        const err = new Error('not found')
        err.status = 404
        next(err)
    }
    else
    {
        next()
    }
})

app.use('*', (req, res) =>
{
    res.sendFile(path.join(__dirname, '..', 'public/index.html'))
})

app.use((err, req, res, next) =>
{
    console.error(err)
    console.error(err.stack)
    res.status(err.status || 500).send(err.message || 'Internal server error')
})
