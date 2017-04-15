const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const fs = require('fs')

const environment = process.env.NODE_ENV || 'development'
const configuration = require('./knexfile')[environment]
const database = require('knex')(configuration)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('build'))

app.use(function(req, res, next) {
 res.header("Access-Control-Allow-Origin", "*")
 res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
 next()
})

app.set('port', process.env.PORT || 3000)

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

app.get('/', (request, response) => {
  fs.readFile(`${__dirname}/index.html`, (err, file) => {
    response.send(file)
  })
})

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

// get all locations
app.get('/api/v1/locations', (request, response) => {
  database('locations').select()
  .then(locations => {
    response.status(200).json(locations)
  })
  .catch(error => {
    console.error('error', error)
  })
})

// get all locations, companies and related users for a given state
app.get('/api/v1/locations/:state', (request, response) => {
let { state } = request.params
let company_ids
let responseObj = { locations: '', companies: '', users: '' }

  database('locations').where('state', state).select().orderBy('city', 'asc')
  .then(locations => {
    responseObj.locations = locations
    company_ids = locations.map(obj => obj.company_id)
  })
  .then(() => {
    database('companies').whereIn('id', company_ids).select().orderBy('name', 'asc')
    .then(companies => {
      responseObj.companies = companies
      database('users').whereIn('company_id', company_ids).select()
      .then(users => {
        responseObj.users = users
        response.status(200).json(responseObj)
      })
    })
  })
  .catch(error => {
    console.error('error', error)
  })
})

// get all interview_questions
app.get('/api/v1/interview_questions', (request, response) => {
  database('interview_questions').select()
  .then(interview_questions => {
    response.status(200).json(interview_questions)
  })
  .catch(error => {
    console.error('error', error)
  })
})

// get all salaries
app.get('/api/v1/salaries', (request, response) => {
  database('salaries').select()
  .then(salaries => {
    response.status(200).json(salaries)
  })
  .catch(error => {
    console.error('error', error)
  })
})

// get all reviews
app.get('/api/v1/reviews', (request, response) => {
  database('reviews').select()
  .then(reviews => {
    response.status(200).json(reviews)
  })
  .catch(error => {
    console.error('error', error)
  })
})

// get all companies
app.get('/api/v1/companies', (request, response) => {
  database('companies').select()
  .then(companies => {
    response.status(200).json(companies)
  })
  .catch(error => {
    console.error('error', error)
  })
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

// get an interview_questions
app.get('/api/v1/interview_questions/:id', (request, response) => {
  const { id } = request.params

  database('interview_questions').where('id', id).select()
  .then(interview_questions => {
    if (interview_questions.length > 0) {
      response.status(200).json(interview_questions)
    } else {
      response.status(404).send('interview question not found')
    }
  })
  .catch(error => {
    console.error(404, 'interview question not found')
  })
})

// get a salary
app.get('/api/v1/salaries/:id', (request, response) => {
  const { id } = request.params

  database('salaries').where('id', id).select()
  .then(salaries => {
    if (salaries.length > 0) {
      response.status(200).json(salaries)
    } else {
      response.status(404).send('salary not found')
    }
  })
  .catch(error => {
    console.error(404, 'salary not found')
  })
})

// get a review
app.get('/api/v1/reviews/:id', (request, response) => {
  const { id } = request.params

  database('reviews').where('id', id).select()
  .then(review => {
    if (review.length > 0) {
      response.status(200).json(review)
    } else {
      response.status(404).send('review not found')
    }
  })
  .catch(error => {
    console.error(404, 'review not found')
  })
})

// get all users associated with a company
app.get('/api/v1/users/company/:company_id', (request, response) => {
  const { company_id } = request.params
  database('users').where('company_id', company_id).select()
  .then(users => {
    if (users.length > 0) {
      response.status(200).json(users)
    } else {
      response.status(404).send('Company not found')
    }
  })
  .catch(error => {
    console.error(404, 'Company not found')
  })
})

// get all interview questions associated with a company
app.get('/api/v1/interview_questions/company/:company_id', (request, response) => {
  const { company_id } = request.params
  database('interview_questions').where('company_id', company_id).select()
  .then(interview_questions => {
    if (interview_questions.length > 0) {
      response.status(200).json(interview_questions)
    } else {
      response.status(404).send('Company not found')
    }
  })
  .catch(error => {
    console.error(404, 'Company not found')
  })
})

// get all reviews associated with a company
app.get('/api/v1/reviews/company/:company_id', (request, response) => {
  const { company_id } = request.params
  database('reviews').where('company_id', company_id).select()
  .then(reviews => {
    if (reviews.length > 0) {
      response.status(200).json(reviews)
    } else {
      response.status(404).send('Company not found')
    }
  })
  .catch(error => {
    console.error(404, 'Company not found')
  })
})

// get all salaries associated with a company
app.get('/api/v1/salaries/company/:company_id', (request, response) => {
  const { company_id } = request.params
  database('salaries').where('company_id', company_id).select()
  .then(salaries => {
    if (salaries.length > 0) {
      response.status(200).json(salaries)
    } else {
      response.status(404).send('Company not found')
    }
  })
  .catch(error => {
    console.error(404, 'Company not found')
  })
})

// add a user
// what information do we need to know about a user if any?
app.post('/api/v1/users', (request, response) => {
  const { name, github_url, cohort, slack, email, remote, company_id, github_avatar } = request.body;
  const user = { name, github_url, cohort, slack, email, remote, company_id, github_avatar }

  if (!name) {
    response.status(422).send('Did not receive correct body params')
  } else {
    database('users').insert(user)
    .then(() => {
      database('users').where('name', name).select()
      .then((user) => {
        response.status(200).json(user[user.length-1].id)
      })
    })
    .catch(error => {
      response.status(422).send('Could not add user')
    })
  }
})

// add a company
app.post('/api/v1/companies', (request, response) => {
  const { name, industry, num_of_emp, tech_stack, remote_ok } = request.body
  const company = { name, industry, num_of_emp, tech_stack, remote_ok }

  if (!name) {
    response.status(422).send('Did not receive correct body params')
  } else {
    database('companies').insert(company)
    .then((company) => {
      database('companies').where('name', name).select()
      .then(company => {
        response.status(200).json(company[0].id)
      })
    })
    .catch(error => {
      response.status(422).send('Could not add company')
    })
  }
})
// add a location
app.post('/api/v1/locations', (request, response) => {
  const { city, state, country, company_id } = request.body
  const location = { city, state, country, company_id }

  if (!city ) {
    response.status(422).send('Did not receive correct body params')
  } else {
    database('locations').insert(location)
    .then(() => {
      response.status(200).json('location received')
    })
    .catch(error => {
      response.status(422).send('Could not add location')
    })
  }
})

// post an interview_questions
app.post('/api/v1/interview_questions', (request, response) => {
  const { message, user_id, company_id } = request.body
  const interview_question = { message, user_id, company_id, created_at: new Date }

  database('interview_questions').insert(interview_question)
  .then(() => {
    database('interview_questions').select()
    .then(interview_question => {
      response.status(200).json(interview_question)
    })
  })
  .catch(error => {
    response.status(422).send('Could not post the interview question')
  })
})

// post an reviews
app.post('/api/v1/reviews', (request, response) => {
  const { message, user_id, company_id } = request.body
  const review = { message, user_id, company_id }

  database('reviews').insert(review)
  .then(() => {
    database('reviews').select()
    console.log(review)
    .then(review => {
      response.status(200).json(review)
    })
  })
  .catch(error => {
    response.status(422).send('Could not post the review')
  })
})

// post an salary
app.post('/api/v1/salaries', (request, response) => {
  const { message, user_id, company_id } = request.body
  const salary = { message, user_id, company_id, created_at: new Date }

  database('salary').insert(salary)
  .then(() => {
    database('salary').select()
    .then(salary => {
      response.status(200).json(salaries)
    })
  })
  .catch(error => {
    response.status(422).send('Could not post the salary')
  })
})

// update company name
app.put('/api/v1/companies/:id', (request, response) => {
  const { id } = request.params
  const { name, industry, num_of_emp, tech_stack } = request.body
  const company = { name, industry, num_of_emp, tech_stack }
  const updated_at = new Date

  database('companies').where('id', id).update(company)
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

// delete company
app.delete('/api/v1/companies/:id', (request, response) => {
  const { id } = request.params

  database('companies').where('id', id).select()
  .then((company) => {
    if (company.length === 0) {
      response.status(404).send('Could not find that company')
    } else {
      database('locations').where('company_id', id).delete()
      database('interview_questions').where('company_id', id).delete()
      database('reviews').where('company_id', id).delete()
      database('salaries').where('company_id', id).delete()
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

// delete interview_question
app.delete('/api/v1/interview_questions/:id', (request, response) => {
  const { id } = request.params

  database('interview_questions').where('id', id).select()
  .then((interview_question) => {
    if (interview_question.length === 0) {
      response.status(404).send('Could not find that interview question')
    } else {
      database('interview_questions').where('id', id).delete()
      .then(() => {
        database('interview_questions').select()
        .then(interview_questions => response.status(200).json(interview_questions))
      })
      .catch((error) => {
        console.error('error: ', error)
      });
    }
  })
})

// delete reviews
app.delete('/api/v1/reviews/:id', (request, response) => {
  const { id } = request.params

  database('reviews').where('id', id).select()
  .then((reviews) => {
    if (reviews.length === 0) {
      response.status(404).send('Could not find that review')
    } else {
      database('reviews').where('id', id).delete()
      .then(() => {
        database('reviews').select()
        .then(reviews => response.status(200).json(reviews))
      })
      .catch((error) => {
        console.error('error: ', error)
      });
    }
  })
})

// delete salaries
app.delete('/api/v1/salaries/:id', (request, response) => {
  const { id } = request.params

  database('salaries').where('id', id).select()
  .then((salaries) => {
    if (salaries.length === 0) {
      response.status(404).send('Could not find that salary')
    } else {
      database('salaries').where('id', id).delete()
      .then(() => {
        database('salaries').select()
        .then(salaries => response.status(200).json(salaries))
      })
      .catch((error) => {
        console.error('error: ', error)
      });
    }
  })
})

if (!module.parent) {
  app.listen(app.get('port'), () => {
    console.log(`BYOB is running on ${app.get('port')}.`)
  })
}

module.exports = app;
