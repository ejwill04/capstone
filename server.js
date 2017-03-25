const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const environment = process.env.NODE_ENV || 'test'
const configuration = require('./knexfile')[environment]
const database = require('knex')(configuration)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.set('port', process.env.PORT || 3000)

// get all users
app.get('/api/v1/users', (request, response) => {
  database('users').select()
  .then(users => {
    response.status(200).json(users)
  })
  .catch(error => {
    console.error('error', error)
  })
})

// get all comments
app.get('/api/v1/comments', (request, response) => {
  database('comments').select()
  .then(comments => {
    response.status(200).json(comments)
  })
  .catch(error => {
    console.error('error', error)
  })
})

// get all companies
app.get('/api/v1/companies', (request, response) => {
  if (request.query.state) {
    let state = request.query.state
    database('companies').where('state', state).select()
    .then(companies => {
      if (companies.length > 0) {
        response.status(200).json(companies)
      } else {
        response.status(404).json('State not found')
      }
    })
  } else {
    database('companies').select()
    .then(companies => {
      response.status(200).json(companies)
    })
    .catch(error => {
      console.error('error', error)
    })
  }
})

// get a user
app.get('/api/v1/users/:id', (request, response) => {
  const { id } = request.params

  database('users').where('id', id).select()
  .then(users => {
    if (users.length > 0) {
      response.status(200).json(users)
    } else {
      response.status(404).send('User not found')
    }
  })
  .catch(error => {
    response.status(404).send('DB Error')
  })
})

// get a company
app.get('/api/v1/companies/:id', (request, response) => {
  const { id } = request.params

  database('companies').where('id', id).select()
  .then(companies => {
    if (companies.length > 0) {
      response.status(200).json(companies)
    } else {
      response.status(404).send('Company not found')
    }
  })
  .catch(error => {
    response.status(404, 'Company not found')
  })
})

// get a comment
app.get('/api/v1/comments/:id', (request, response) => {
  const { id } = request.params

  database('comments').where('id', id).select()
  .then(comments => {
    if (comments.length > 0) {
      response.status(200).json(comments)
    } else {
      response.status(404).send('Comment not found')
    }
  })
  .catch(error => {
    console.error(404, 'Comment not found')
  })
})

// get all comments associated with a company
app.get('/api/v1/comments/company/:company_id', (request, response) => {
  const { company_id } = request.params
  database('comments').where('company_id', company_id).select()
  .then(comments => {
    if (comments.length > 0) {
      response.status(200).json(comments)
    } else {
      response.status(404).send('Company not found')
    }
  })
  .catch(error => {
    console.error(404, 'Company not found')
  })
})

// get total number of comments associated with a company
app.get('/api/v1/comments/total/:company_id', (request, response) => {
  const { company_id } = request.params
  database('comments').where('company_id', company_id).select()
  .then(comments => {
    if (comments.length > 0) {
      response.status(200).json(comments.length)
    } else {
      response.status(404).send('Company not found')
    }
  })
  .catch(error => {
    console.error(404, 'Company not found')
  })
})


// add a user
app.post('/api/v1/users', (request, response) => {
  const { name } = request.body;

  if (!name) {
    response.status(422).send('Did not receive correct body params')
  } else {
    database('users').insert({name})
    .then(() => {
      database('users').select()
      .then(users => {
        response.status(200).json(users)
      })
    })
    .catch(error => {
      response.status(422).send('Could not add user')
    })
  }
})

// add a company
app.post('/api/v1/companies', (request, response) => {
  const { name, city, state } = request.body
  const company = { name, city, state }

  if (!name || !city || !state) {
    response.status(422).send('Did not receive correct body params')
  } else {
    database('companies').insert(company)
    .then(() => {
      database('companies').select()
      .then(companies => {
        response.status(200).json(companies)
      })
    })
    .catch(error => {
      response.status(422).send('Could not add company')
    })
  }
})

// post a comment
app.post('/api/v1/comments', (request, response) => {
  const { message, user_id, company_id } = request.body
  const comment = { message, user_id, company_id, created_at: new Date }

  database('comments').insert(comment)
  .then(() => {
    database('comments').select()
    .then(comments => {
      response.status(200).json(comments)
    })
  })
  .catch(error => {
    response.status(422).send('Could not post comment')
  })
})

// update user name
app.put('/api/v1/users/:id', (request, response) => {
  const { id } = request.params
  const { name } = request.body

  if (!name) {
    response.status(422).send('Could not update user')
  } else {
    database('users').where('id', id).update({ name })
    .then(() => {
      database('users').where('id', id).select()
      .then(updatedUser =>
        response.status(200).json(updatedUser)
      )
    })
    .catch(error => {
      response.status(422).send('Could not update user')
    })
  }
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
    response.status(422).send('Could not update company')
  })
})

// update message
app.patch('/api/v1/comments/:id', (request, response) => {
  const { id } = request.params
  const { message } = request.body
  const updated_at = new Date

  if (!message) {
    response.status(422).send('Please send a message')
  } else {
    database('comments').where('id', id).update({ message, updated_at })
    .then((update) => {
      if (update === 0) {
        response.status(404).send('Could not find comment')
      } else {
        database('comments').where('id', id).select()
        .then(updatedComment =>
          response.status(200).json(updatedComment)
        )
        .catch(error => {
          response.status(422).send('Could not update comment')
        })
      }
    })
  }
})

// delete user
app.delete('/api/v1/users/:id', (request, response) => {
  const { id } = request.params

  database('users').where('id', id).select()
  .then((user) => {
    if (user.length === 0) {
      response.status(404).send('Could not find that user')
    } else {
      database('comments').where('user_id', id).delete()
      .then(() => database('users').where('id', id).delete())
      .then(() => {
          database('users').select()
          .then(users => response.status(200).json(users))
      })
      .catch((error) => {
        console.error('error: ', error)
      });
    }
  })
})

// delete company
app.delete('/api/v1/companies/:id', (request, response) => {
  const { id } = request.params

  database('companies').where('id', id).select()
  .then((company) => {
    if (company.length === 0) {
      response.status(404).send('Could not find that company')
    } else {
      database('comments').where('company_id', id).delete()
      .then(() => database('companies').where('id', id).delete())
      .then(() => {
          database('companies').select()
          .then(companies => response.status(200).json(companies))
      })
      .catch((error) => {
        console.error('error: ', error)
      });
    }
  })
})

// delete comment
app.delete('/api/v1/comments/:id', (request, response) => {
  const { id } = request.params

  database('comments').where('id', id).select()
  .then((comment) => {
    if (comment.length === 0) {
      response.status(404).send('Could not find that comment')
    } else {
      database('comments').where('id', id).delete()
      .then(() => {
        database('comments').select()
        .then(comments => response.status(200).json(comments))
      })
      .catch((error) => {
        console.error('error: ', error)
      });
    }
  })
})

app.listen(app.get('port'), () => {
  console.log(`BYOB is running on ${app.get('port')}.`)
})

module.exports = app;
