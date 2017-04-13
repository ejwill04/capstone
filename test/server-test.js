process.env.NODE_ENV = 'test'

const chai = require('chai')
const expect = chai.expect
const app = require('../server.js')
const chaiHttp = require('chai-http')
const configuration = require('../knexfile')['test']
const database = require('knex')(configuration)

chai.use(chaiHttp)

describe('Server', () => {
  it('should exist', () => {
    expect(app).to.exist
  })
})

const beforeAndAfterEach = () => {
  beforeEach((done) => {
    database.migrate.rollback()
    .then(() => {
      database.migrate.latest()
      .then(() => {
        return database.seed.run()
        .then(() => {
          done();
        })
      })
    })
  })

  afterEach((done) => {
    database.migrate.rollback()
    .then(() => {
      done();
    })
  })
}

describe('GET /api/v1/users', () => {
  beforeAndAfterEach()

  it('should respond back with all users', (done) => {
    chai.request(app)
    .get('/api/v1/users')
    .end((err, res) => {
      if(err) { return done(err) }
      expect(res).to.have.status(200);
      expect(res).to.be.json;
      expect(res.body).to.be.a('array');
      expect(res.body).to.have.length(5);
      done()
    })
  })
})

describe('GET /api/v1/locations', () => {
  beforeAndAfterEach()

  it('should respond back with all locations', (done) => {
    chai.request(app)
    .get('/api/v1/locations')
    .end((err, res) => {
      if(err) { return done(err) }
      expect(res).to.have.status(200);
      expect(res).to.be.json;
      expect(res.body).to.be.a('array');
      expect(res.body).to.have.length(6);
      done()
    })
  })
})

describe('GET /api/v1/locations/:state', () => {
  beforeAndAfterEach()

  it('should respond back with locations, companies, and users', (done) => {
    chai.request(app)
    .get('/api/v1/locations/CO')
    .end((err, res) => {
      if(err) { return done(err) }
      expect(res).to.have.status(200);
      expect(res).to.be.json;
      expect(res.body).to.be.a('object');
      expect(res.body.companies).to.have.length(6);
      expect(res.body.locations).to.have.length(6);
      expect(res.body.users).to.have.length(5);
      done()
    })
  })
})

describe('GET /api/v1/companies', () => {
  beforeAndAfterEach()

  it('should respond back with all companies', (done) => {
    chai.request(app)
    .get('/api/v1/companies')
    .end((err, res) => {
      if(err) { return done(err) }
      expect(res).to.have.status(200);
      expect(res).to.be.json;
      expect(res.body).to.be.a('array');
      expect(res.body).to.have.length(6);
      done()
    })
  })
})

describe('GET /api/v1/interview_questions', () => {
  beforeAndAfterEach()

  it('should respond back with all interview_questions', (done) => {
    chai.request(app)
    .get('/api/v1/interview_questions')
    .end((err, res) => {
      if(err) { return done(err) }
      expect(res).to.have.status(200);
      expect(res).to.be.json;
      expect(res.body).to.be.a('array');
      expect(res.body).to.have.length(6);
      done()
    })
  })
})

describe('GET /api/v1/salaries', () => {
  beforeAndAfterEach()

  it('should respond back with all salaries', (done) => {
    chai.request(app)
    .get('/api/v1/salaries')
    .end((err, res) => {
      if(err) { return done(err) }
      expect(res).to.have.status(200);
      expect(res).to.be.json;
      expect(res.body).to.be.a('array');
      expect(res.body).to.have.length(5);
      done()
    })
  })
})

describe('GET /api/v1/reviews', () => {
  beforeAndAfterEach()

  it('should respond back with all reviews', (done) => {
    chai.request(app)
    .get('/api/v1/reviews')
    .end((err, res) => {
      if(err) { return done(err) }
      expect(res).to.have.status(200);
      expect(res).to.be.json;
      expect(res.body).to.be.a('array');
      expect(res.body).to.have.length(5);
      done()
    })
  })
})

describe('GET /api/v1/users/:id', () => {
  beforeAndAfterEach()

  it('should respond back with a particular user', (done) => {
    chai.request(app)
    .get('/api/v1/users/1')
    .end((err, res) => {
      if(err) { return done(err) }
      expect(res).to.have.status(200);
      expect(res).to.be.json;
      expect(res.body).to.be.a('array');
      expect(res.body).to.have.length(1);
      done()
    })
  })

  beforeAndAfterEach()

  it('should respond back with a 404 when user not found', (done) => {
    chai.request(app)
    .get('/api/v1/users/199')
    .end((err, res) => {
      if(err) {
        expect(err).to.have.status(404);
        done()
     }
    })
  })
})

describe('GET /api/v1/companies/:id', () => {
  beforeAndAfterEach()

  it('should respond back with a particular company', (done) => {
    chai.request(app)
    .get('/api/v1/companies/1')
    .end((err, res) => {
      if(err) { return done(err) }
      expect(res).to.have.status(200);
      expect(res).to.be.json;
      expect(res.body).to.be.a('array');
      expect(res.body).to.have.length(1);
      done()
    })
  })

  beforeAndAfterEach()

  it('should respond back with a 404 when company not found', (done) => {
    chai.request(app)
    .get('/api/v1/companies/199')
    .end((err, res) => {
      if(err) {
        expect(err).to.have.status(404);
        done()
     }
    })
  })
})

describe('GET /api/v1/interview_questions/:id', () => {
  beforeAndAfterEach()

  it('should respond back with a particular interview question', (done) => {
    chai.request(app)
    .get('/api/v1/interview_questions/1')
    .end((err, res) => {
      if(err) { return done(err) }
      expect(res).to.have.status(200);
      expect(res).to.be.json;
      expect(res.body).to.be.a('array');
      expect(res.body).to.have.length(1);
      done()
    })
  })

  beforeAndAfterEach()

  it('should respond back with a 404 when interview question not found', (done) => {
    chai.request(app)
    .get('/api/v1/interview_questions/199')
    .end((err, res) => {
      if(err) {
        expect(err).to.have.status(404);
        done()
     }
    })
  })
})

describe('GET /api/v1/reviews/:id', () => {
  beforeAndAfterEach()

  it('should respond back with a particular review', (done) => {
    chai.request(app)
    .get('/api/v1/reviews/1')
    .end((err, res) => {
      if(err) { return done(err) }
      expect(res).to.have.status(200);
      expect(res).to.be.json;
      expect(res.body).to.be.a('array');
      expect(res.body).to.have.length(1);
      done()
    })
  })

  beforeAndAfterEach()

  it('should respond back with a 404 when review not found', (done) => {
    chai.request(app)
    .get('/api/v1/reviews/199')
    .end((err, res) => {
      if(err) {
        expect(err).to.have.status(404);
        done()
     }
    })
  })
})

describe('GET /api/v1/salaries/:id', () => {
  beforeAndAfterEach()

  it('should respond back with a particular salary', (done) => {
    chai.request(app)
    .get('/api/v1/salaries/1')
    .end((err, res) => {
      if(err) { return done(err) }
      expect(res).to.have.status(200);
      expect(res).to.be.json;
      expect(res.body).to.be.a('array');
      expect(res.body).to.have.length(1);
      done()
    })
  })

  beforeAndAfterEach()

  it('should respond back with a 404 when salary not found', (done) => {
    chai.request(app)
    .get('/api/v1/salaries/199')
    .end((err, res) => {
      if(err) {
        expect(err).to.have.status(404);
        done()
     }
    })
  })
})

describe('POST /api/v1/users', () => {
  beforeAndAfterEach()

  it('should post a new user', (done) => {
    let user = { name: 'Testing Name' }
    chai.request(app)
    .post('/api/v1/users')
    .send(user)
    .end((err, res) => {
      if(err) { return done(err) }
      expect(res).to.have.status(200);
      expect(res).to.be.json;
      expect(res.body).to.be.a('array');
      expect(res.body).to.have.length(6);
      done();
    })
  })

  beforeAndAfterEach()

  it('should return an error if missing param', (done) => {
    let user = { thing: '123' }
    chai.request(app)
    .post('/api/v1/users')
    .send(user)
    .end((err, res) => {
      expect(res).to.have.status(422);
      expect(res.text).to.equal('Did not receive correct body params');
      done();
    })
  })
})

describe('POST /api/v1/companies', () => {
  beforeAndAfterEach()

  it('should post a new company', (done) => {
    let company = {
      name: 'Glengarry Glen Ross',
      industry: 'Nowhere',
      num_of_emp: 2,
      tech_stack: '[JavaScript, Ruby]',
      remote_ok: true
    }
    chai.request(app)
    .post('/api/v1/companies')
    .send(company)
    .end((err, res) => {
      if(err) { return done(err) }
      expect(res).to.have.status(200);
      expect(res).to.be.json;
      expect(res.body).to.be.a('string');
      expect(res.body).to.equal('company received');
      done();
    })
  })

  beforeAndAfterEach()

  it('should return an error if missing body param', (done) => {
    let company = {
      user_id: 1,
    }
    chai.request(app)
    .post('/api/v1/companies')
    .send(company)
    .end((err, res) => {
      expect(res).to.have.status(422);
      expect(res.text).to.equal('Did not receive correct body params');
      done();
    })
  })
})
describe('POST /api/v1/locations', () => {
  beforeAndAfterEach()

  it('should post a new location', (done) => {
    let location = {
      id: 1,
      city: "Greely",
      state: "CO",
      country: "US",
      company_id: 1
    }
    chai.request(app)
    .post('/api/v1/locations')
    .send(location)
    .end((err, res) => {
      if(err) { return done(err) }
      expect(res).to.have.status(200);
      expect(res).to.be.json;
      expect(res.body).to.be.a('string');
      expect(res.body).to.equal('location received');
      done();
    })
  })

  beforeAndAfterEach()

  it('should return an error if missing body param', (done) => {
    let location = {
      user_id: 1,
    }
    chai.request(app)
    .post('/api/v1/locations')
    .send(location)
    .end((err, res) => {
      expect(res).to.have.status(422);
      expect(res.text).to.equal('Did not receive correct body params');
      done();
    })
  })
})

describe('POST /api/v1/interview_questions', () => {
  beforeAndAfterEach()

  it('should post a new interview question', (done) => {
    let interview_questions = {
      message: 'Just do it!',
      user_id: 1,
      company_id: 1
     }
    chai.request(app)
    .post('/api/v1/interview_questions')
    .send(interview_questions)
    .end((err, res) => {
      if(err) { return done(err) }
      expect(res).to.have.status(200);
      expect(res).to.be.json;
      expect(res.body).to.be.a('array');
      expect(res.body).to.have.length(7);
      done();
    })
  })

  beforeAndAfterEach()

  it('should return an error if incorrect user_id', (done) => {
    let interview_questions = {
      message: 'Just do it!',
      user_id: 456768,
      company_id: 1
    }
    chai.request(app)
    .post('/api/v1/interview_questions')
    .send(interview_questions)
    .end((err, res) => {
      expect(res).to.have.status(422);
      done();
    })
  })

  beforeAndAfterEach()

  it('should return an error if incorrect company_id', (done) => {
    let interview_questions = {
      message: 'Just do it!',
      user_id: 1,
      company_id: 123545464
    }
    chai.request(app)
    .post('/api/v1/interview_questions')
    .send(interview_questions)
    .end((err, res) => {
      expect(res).to.have.status(422);
      done();
    })
  })
})

describe('PUT /api/v1/companies/:id', () => {
  beforeAndAfterEach()

  it('should update a company', (done) => {
    let company = {
      name: 'Glengarry Glen Ross',
      industry: 'Nowhere',
      num_of_emp: 5,
      tech_stack: '[do shit]'
    }
    chai.request(app)
    .put('/api/v1/companies/1')
    .send(company)
    .end((err, res) => {
      if(err) { return done(err) }
      expect(res).to.be.json;
      expect(res).to.have.status(200);
      expect(res.body).to.be.a('array');
      expect(res.body).to.have.length(1);
      expect(res.body[0].name).to.be.equal(company.name);
      expect(res.body[0].industry).to.be.equal(company.industry);
      expect(res.body[0].num_of_emp).to.be.equal(company.num_of_emp);
      expect(res.body[0].tech_stack).to.be.equal(company.tech_stack);
      done();
    })
  })

  it('it should only update what is passed in the body', (done) => {
    let originalName;
    let originalIndustry;
    let originalNum_of_emp;
    let originalTech_stack;

    chai.request(app)
    .get('/api/v1/companies/1')
    .end((err, res) => {
      if(err) { return done(err) }
      originalName = res.body[0].name;
      originalIndustry = res.body[0].industry;
      originalNum_of_emp = res.body[0].num_of_emp;
      originalTech_stack = res.body[0].tech_stack;
      expect(res).to.have.status(200);
      expect(res).to.be.json;
      expect(res.body).to.be.a('array');
      expect(res.body).to.have.length(1);
    })

    let updateCompany = {
      name: 'Glengarry Glen Ross',
    }

    chai.request(app)
    .put('/api/v1/companies/1')
    .send(updateCompany)
    .end((err, res) => {
      if(err) { return done(err) }
      expect(res).to.have.status(200);
      expect(res).to.be.json;
      expect(res.body).to.be.a('array');
      expect(res.body).to.have.length(1);
      expect(res.body[0].name).to.be.equal(updateCompany.name);
      expect(res.body[0].industry).to.be.equal(originalIndustry);
      expect(res.body[0].num_of_emp).to.be.equal(originalNum_of_emp);
      expect(res.body[0].tech_stack).to.be.equal(originalTech_stack);
      done();
    })
  })

  xit('it should not update anything if no body', (done) => {
    let originalName;
    let originalIndustry;
    let originalNum_of_emp;
    let originalTech_stack;

    chai.request(app)
    .get('/api/v1/companies/1')
    .end((err, res) => {
      if(err) { return done(err) }
      originalName = res.body[0].name;
      originalIndustry = res.body[0].industry;
      originalNum_of_emp = res.body[0].num_of_emp;
      originalTech_stack = res.body[0].tech_stack;
      expect(res).to.have.status(200);
      expect(res).to.be.json;
      expect(res.body).to.be.a('array');
      expect(res.body).to.have.length(1);
    })

    chai.request(app)
    .put('/api/v1/companies/1')
    .send()
    .end((err, res) => {
      if(err) { return done(err) }
      expect(res).to.have.status(200);
      expect(res).to.be.json;
      expect(res.body).to.be.a('array');
      expect(res.body).to.have.length(1);
      expect(res.body[0].name).to.be.equal(originalName);
      expect(res.body[0].num_of_emp).to.be.equal(originalNum_of_emp);
      expect(res.body[0].industry).to.be.equal(originalIndustry);
      expect(res.body[0].tech_stack).to.be.equal(originalTech_stack);
      done();
    })
  })
})

describe('GET /api/v1/interview_questions/company/:company_id', () => {
  beforeAndAfterEach()

  it('should respond with all interview_questions for a given company', (done) => {
    chai.request(app)
    .get('/api/v1/interview_questions/company/1')
    .end((err, res) => {
      if(err) { return done(err) }
      expect(res).to.have.status(200);
      expect(res).to.be.json;
      expect(res.body).to.be.a('array');
      expect(res.body).to.have.length(1);
      done()
    })
  })

  beforeAndAfterEach()

  it('should respond back with a 404 when company not found', (done) => {
    chai.request(app)
    .get('/api/v1/interview_questions/company/2349')
    .end((err, res) => {
      if(err) {
        expect(err).to.have.status(404);
        done()
     }
    })
  })
})

describe('GET /api/v1/salaries/company/:company_id', () => {
  beforeAndAfterEach()

  it('should respond with all salaries for a given company', (done) => {
    chai.request(app)
    .get('/api/v1/salaries/company/1')
    .end((err, res) => {
      if(err) { return done(err) }
      expect(res).to.have.status(200);
      expect(res).to.be.json;
      expect(res.body).to.be.a('array');
      expect(res.body).to.have.length(1);
      done()
    })
  })

  beforeAndAfterEach()

  it('should respond back with a 404 when company not found', (done) => {
    chai.request(app)
    .get('/api/v1/salaries/company/2349')
    .end((err, res) => {
      if(err) {
        expect(err).to.have.status(404);
        done()
     }
    })
  })
})

describe('GET /api/v1/reviews/company/:company_id', () => {
  beforeAndAfterEach()

  it('should respond with all reviews for a given company', (done) => {
    chai.request(app)
    .get('/api/v1/reviews/company/1')
    .end((err, res) => {
      if(err) { return done(err) }
      expect(res).to.have.status(200);
      expect(res).to.be.json;
      expect(res.body).to.be.a('array');
      expect(res.body).to.have.length(1);
      done()
    })
  })

  beforeAndAfterEach()

  it('should respond back with a 404 when company not found', (done) => {
    chai.request(app)
    .get('/api/v1/reviews/company/2349')
    .end((err, res) => {
      if(err) {
        expect(err).to.have.status(404);
        done()
     }
    })
  })
})

describe('DELETE /api/v1/companies/:id', () => {
  beforeAndAfterEach()

  xit('should DELETE a company', (done) => {
    chai.request(app)
    .delete('/api/v1/companies/1')
    .end((err, res) => {
      if(err){ return done(err) }
      expect(res).to.have.status(200)
      expect(res.body).to.have.length(2)
      done()
    })
  })

  it('should respond with an error if that company does not exist', (done) => {
    chai.request(app)
    .delete('/api/v1/companies/548552')
    .end((err, res) => {
      expect(err).to.have.status(404)
      expect(err.response.error.text).to.be.equal('Could not find that company')
      done()
    })
  })
})

describe('DELETE /api/v1/interview_questions/:id', () => {
  beforeAndAfterEach()

  it('should DELETE an interview question', (done) => {
    chai.request(app)
    .delete('/api/v1/interview_questions/1')
    .end((err, res) => {
      if(err){ return done(err) }
      expect(res).to.have.status(200)
      expect(res.body).to.have.length(5)
      done()
    })
  })

  it('should respond with an error if that interview question does not exist', (done) => {
    chai.request(app)
    .delete('/api/v1/interview_questions/548552')
    .end((err, res) => {
      expect(err).to.have.status(404)
      expect(err.response.error.text).to.be.equal('Could not find that interview question')
      done()
    })
  })
})

describe('DELETE /api/v1/salaries/:id', () => {
  beforeAndAfterEach()

  it('should DELETE a salary', (done) => {
    chai.request(app)
    .delete('/api/v1/salaries/1')
    .end((err, res) => {
      if(err){ return done(err) }
      expect(res).to.have.status(200)
      expect(res.body).to.have.length(4)
      done()
    })
  })

  it('should respond with an error if that salary does not exist', (done) => {
    chai.request(app)
    .delete('/api/v1/salaries/548552')
    .end((err, res) => {
      expect(err).to.have.status(404)
      expect(err.response.error.text).to.be.equal('Could not find that salary')
      done()
    })
  })
})

describe('DELETE /api/v1/reviews/:id', () => {
  beforeAndAfterEach()

  it('should DELETE a review', (done) => {
    chai.request(app)
    .delete('/api/v1/reviews/1')
    .end((err, res) => {
      if(err){ return done(err) }
      expect(res).to.have.status(200)
      expect(res.body).to.have.length(4)
      done()
    })
  })

  it('should respond with an error if that review does not exist', (done) => {
    chai.request(app)
    .delete('/api/v1/reviews/548552')
    .end((err, res) => {
      expect(err).to.have.status(404)
      expect(err.response.error.text).to.be.equal('Could not find that review')
      done()
    })
  })
})
