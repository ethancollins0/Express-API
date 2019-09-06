const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser())

const foods = []
// respond with "hello world" when a GET request is made to the homepage
app.get('/', (request, response) => {
  response.send(foods)
})

app.post('/', (request, response) => {
    foods.push(request.body.name)
    response.send(`${request.body.name} was added to foods`)
})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`listening on port ${port}...`)
})