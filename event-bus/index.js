const express = require('express')
const axios = require('axios')

const app = express()
app.use(express.json())

const events = []

app.post('/events', (req, res) => {
    const event = req.body
    events.push(event)

    axios.post('http://localhost:3001/events', event)
    axios.post('http://localhost:3002/events', event)
    axios.post('http://localhost:3003/events', event)
    axios.post('http://localhost:3004/events', event)

    res.status(200).json({})
})

app.get('/events', (req, res) => {
    res.json({ events, result: 0 })
})

app.listen(4000, () => console.log('event-bus started on port 4000'))