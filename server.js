const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.set('port', process.env.PORT || 3000)
app.locals.title = 'BYOB'
app.locals.secrets = {
  wowowow: 'I am a banana'
}

app.get('/', (request, response) => {
  response.send('Hello World!')
})

app.get('/api/secrets', (request, response) => {
  const secrets = app.locals.secrets

  response.json({ secrets })
})


app.get('/api/secrets/:id', (request, response) => {
  const { id } = request.params
  const message = app.locals.secrets[id]

  if (!message) { return response.sendStatus(404)  }

  response.json({ id, message })
})

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on ${app.get('port')}.`)
})
