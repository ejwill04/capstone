const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const environment = process.env.NODE_ENV || 'development'
const configuration = require('./knexfile')[environment]
const database = require('knex')(configuration)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.set('port', process.env.PORT || 3000)

app.get('/api/v1/users', (request, response) => {
  database('users').select()
  .then(users => {
    response.status(200).json(users)
  })
  .catch(error => {
    console.error('error', error)
  })
})

app.get('/api/v1/comments', (request, response) => {
  database('comments').select()
  .then(comments => {
    response.status(200).json(comments)
  })
  .catch(error => {
    console.error('error', error)
  })
})

app.get('/api/v1/companies', (request, response) => {
  database('companies').select()
  .then(companies => {
    response.status(200).json(companies)
  })
  .catch(error => {
    console.error('error', error)
  })
})

app.get('/api/v1/users/:id', (request, response) => {
  const { id } = request.params

  database('users').where('id', id).select()
  .then(users => {
    response.status(200).json(users)
  })
  .catch(error => {
    console.error('error', error)
  })
})

app.get('/api/v1/companies/:id', (request, response) => {
  const { id } = request.params

  database('companies').where('id', id).select()
  .then(companies => {
    response.status(200).json(companies)
  })
  .catch(error => {
    console.error('error', error)
  })
})

app.get('/api/v1/comments/:id', (request, response) => {
  const { id } = request.params

  database('comments').where('id', id).select()
  .then(comments => {
    response.status(200).json(comments)
  })
  .catch(error => {
    console.error('error', error)
  })
})

app.post('/api/v1/users', (request, response) => {
  const { name } = request.body;

  database('users').insert({name})
  .then(() => {
    database('users').select()
    .then(users => {
      response.status(200).json(users)
    })
    .catch(error => {
      console.error('error', error)
    })
  })
})

app.post('/api/v1/companies', (request, response) => {
  const { name, city, state } = request.body
  const company = { name, city, state }

  database('companies').insert(company)
  .then(() => {
    database('companies').select()
    .then(companies => {
      response.status(200).json(companies)
    })
    .catch(error => {
      console.error('error', error)
    })
  })
})

app.post('/api/v1/comments', (request, response) => {
  const { message, user_id, company_id } = request.body
  const comment = { message, user_id, company_id, created_at: new Date }

  database('comments').insert(comment)
  .then(() => {
    database('comments').select()
    .then(comments => {
      response.status(200).json(comments)
    })
    .catch(error => {
      console.error('error', error)
    })
  })
})

// update user name
app.put('/api/v1/users/:id', (request, response) => {
  const { id } = request.params
  const { name } = request.body

  database('users').where('id', id).update({ name })
  .then(() => {
    database('users').where('id',id).select()
      .then(updatedUser =>
        response.status(200).json(updatedUser)
      )
  })
  .catch(error => {
    console.error('error', error)
  })
})

// update company name
app.put('/api/v1/companies/:id', (request, response) => {
  const { id } = request.params
  const { name, city, state } = request.body
  const updated_at = new Date

  database('companies').where('id', id).update({ name, city, state, updated_at })
  .then(() => {
    database('companies').where('id', id).select()
      .then(updatedCompany =>
        response.status(200).json(updatedCompany)
      )
  })
  .catch(error => {
    console.error('error', error)
  })
})

// update message
app.patch('/api/v1/comments/:id', (request, response) => {
  const { id } = request.params
  const { message } = request.body
  const updated_at = new Date

  database('comments').where('id', id).update({ message, updated_at })
  .then(() => {
    database('comments').where('id', id).select()
      .then(updatedComment =>
        response.status(200).json(updatedComment)
      )
  })
  .catch(error => {
    console.error('error', error)
  })
})


// app.delete('/api/v1/comments/:id', (request, response) => {
//   const { id } = request.params
//
//   database('comments').where('id', id).del()
//   .then(()=> response.status('the force is with you'))
// })

// app.delete('/api/v1/users/:id', (request, response) => {
//   const { id } = request.params
//
//   database('comments').where('user_id', id).del()
//   .then(() => database('users').where('id', id).del())
//   .then(() => response.status('the force removed it'))
// })

app.listen(app.get('port'), () => {
  console.log(`BYOB is running on ${app.get('port')}.`)
})
