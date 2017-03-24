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
      expect(res.body).to.have.length(30);
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
      expect(res.body).to.have.length(30);
      done()
    })
  })
})

describe('GET /api/v1/comments', () => {
  beforeAndAfterEach()

  it('should respond back with all comments', (done) => {
    chai.request(app)
    .get('/api/v1/comments')
    .end((err, res) => {
      if(err) { return done(err) }
      expect(res).to.have.status(200);
      expect(res).to.be.json;
      expect(res.body).to.be.a('array');
      expect(res.body).to.have.length(30);
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

describe('GET /api/v1/comments/:id', () => {
  beforeAndAfterEach()

  it('should respond back with a particular comment', (done) => {
    chai.request(app)
    .get('/api/v1/comments/1')
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

  it('should respond back with a 404 when comment not found', (done) => {
    chai.request(app)
    .get('/api/v1/comments/199')
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
      expect(res.body).to.have.length(31);
      done();
    })
  })
})

describe('POST /api/v1/companies', () => {
  beforeAndAfterEach()

  it('should post a new company', (done) => {
    let company = {
      name: 'Glengarry Glen Ross',
      city: 'Nowhere',
      state: 'CO'
    }
    chai.request(app)
    .post('/api/v1/companies')
    .send(company)
    .end((err, res) => {
      if(err) { return done(err) }
      expect(res).to.have.status(200);
      expect(res).to.be.json;
      expect(res.body).to.be.a('array');
      expect(res.body).to.have.length(31);
      done();
    })
  })

  beforeAndAfterEach()

  xit('should return an error if incorrect name', (done) => {
    let company = {
      thing: 123,
      city: 'Nowhere',
      state: 'CO'
    }
    chai.request(app)
    .post('/api/v1/companies')
    .send(company)
    .end((err, res) => {
      expect(res).to.have.status(422);
      done();
    })
  })
})

describe('POST /api/v1/comments', () => {
  beforeAndAfterEach()

  it('should post a new comment', (done) => {
    let comment = {
      message: 'Just do it!',
       user_id: 1,
       company_id: 1
     }
    chai.request(app)
    .post('/api/v1/comments')
    .send(comment)
    .end((err, res) => {
      if(err) { return done(err) }
      expect(res).to.have.status(200);
      expect(res).to.be.json;
      expect(res.body).to.be.a('array');
      expect(res.body).to.have.length(31);
      done();
    })
  })

  beforeAndAfterEach()

  it('should return an error if incorrect user_id', (done) => {
    let comment = {
      message: 'Just do it!',
      user_id: 456768,
      company_id: 1
    }
    chai.request(app)
    .post('/api/v1/comments')
    .send(comment)
    .end((err, res) => {
      expect(res).to.have.status(422);
      done();
    })
  })

  beforeAndAfterEach()

  it('should return an error if incorrect company_id', (done) => {
    let comment = {
      message: 'Just do it!',
      user_id: 1,
      company_id: 123545464
    }
    chai.request(app)
    .post('/api/v1/comments')
    .send(comment)
    .end((err, res) => {
      expect(res).to.have.status(422);
      done();
    })
  })
})

describe('PUT /api/v1/users/:id', () => {
  beforeAndAfterEach()

  it('should update a user\'s name', (done) => {
    let name = 'Eric Saylor'
    chai.request(app)
    .put('/api/v1/users/1')
    .send({ name })
    .end((err, res) => {
      if(err) { return done(err) }
      expect(res).to.have.status(200);
      expect(res).to.be.json;
      expect(res.body).to.be.a('array');
      expect(res.body).to.have.length(1);
      expect(res.body[0].name).to.be.equal(name);
      done();
    })
  })
})

describe('PUT /api/v1/companies/:id', () => {
  beforeAndAfterEach()

  it('should update a company', (done) => {
    let company = {
      name: 'Glengarry Glen Ross',
      city: 'Nowhere',
      state: 'CO',
    }
    chai.request(app)
    .put('/api/v1/companies/5')
    .send(company)
    .end((err, res) => {
      if(err) { return done(err) }
      expect(res).to.have.status(200);
      expect(res).to.be.json;
      expect(res.body).to.be.a('array');
      expect(res.body).to.have.length(1);
      expect(res.body[0].name).to.be.equal(company.name);
      expect(res.body[0].city).to.be.equal(company.city);
      expect(res.body[0].state).to.be.equal(company.state);
      done();
    })
  })

  it('it should only update what is passed in the body', (done) => {
    let originalName;
    let originalCity;
    let originalState;

    chai.request(app)
    .get('/api/v1/companies/5')
    .end((err, res) => {
      if(err) { return done(err) }
      originalName = res.body[0].name;
      originalCity = res.body[0].city;
      originalState = res.body[0].state;
      expect(res).to.have.status(200);
      expect(res).to.be.json;
      expect(res.body).to.be.a('array');
      expect(res.body).to.have.length(1);
    })

    let updateCompany = {
      name: 'Glengarry Glen Ross',
    }

    chai.request(app)
    .put('/api/v1/companies/5')
    .send(updateCompany)
    .end((err, res) => {
      if(err) { return done(err) }
      expect(res).to.have.status(200);
      expect(res).to.be.json;
      expect(res.body).to.be.a('array');
      expect(res.body).to.have.length(1);
      expect(res.body[0].name).to.be.equal(updateCompany.name);
      expect(res.body[0].city).to.be.equal(originalCity);
      expect(res.body[0].state).to.be.equal(originalState);
      done();
    })
  })

  it('it should not update anything if no body', (done) => {
    let originalName;
    let originalCity;
    let originalState;

    chai.request(app)
    .get('/api/v1/companies/5')
    .end((err, res) => {
      if(err) { return done(err) }
      originalName = res.body[0].name;
      originalCity = res.body[0].city;
      originalState = res.body[0].state;
      expect(res).to.have.status(200);
      expect(res).to.be.json;
      expect(res.body).to.be.a('array');
      expect(res.body).to.have.length(1);
    })

    chai.request(app)
    .put('/api/v1/companies/5')
    .send()
    .end((err, res) => {
      if(err) { return done(err) }
      expect(res).to.have.status(200);
      expect(res).to.be.json;
      expect(res.body).to.be.a('array');
      expect(res.body).to.have.length(1);
      expect(res.body[0].name).to.be.equal(originalName);
      expect(res.body[0].city).to.be.equal(originalCity);
      expect(res.body[0].state).to.be.equal(originalState);
      done();
    })
  })
})

describe('PATCH /api/v1/comment/:id', () => {
  beforeAndAfterEach()

  it('should update a comment', (done) => {
    let comment = {
      message: 'What is the meaning of life?'
    }
    chai.request(app)
    .patch('/api/v1/comments/1')
    .send(comment)
    .end((err, res) => {
      if(err) { return done(err) }
      expect(res).to.have.status(200);
      expect(res).to.be.json;
      expect(res.body).to.be.a('array');
      expect(res.body).to.have.length(1);
      expect(res.body[0].message).to.be.equal(comment.message);
      done();
    })
  })
})

describe('GET /api/v1/comments/company/:company_id', () => {
  beforeAndAfterEach()

  it('should respond with all comments for a given company', (done) => {
    chai.request(app)
    .get('/api/v1/comments/company/1')
    .end((err, res) => {
      if(err) { return done(err) }
      expect(res).to.have.status(200);
      expect(res).to.be.json;
      expect(res.body).to.be.a('array');
      expect(res.body).to.have.length(2);
      done()
    })
  })

  beforeAndAfterEach()

  it('should respond back with a 404 when company not found', (done) => {
    chai.request(app)
    .get('/api/v1/comments/company/2349')
    .end((err, res) => {
      if(err) {
        expect(err).to.have.status(404);
        done()
     }
    })
  })
})

describe('GET /api/v1/comments/company/:company_id', () => {
  beforeAndAfterEach()

  it('should respond with total number of comments for a given company', (done) => {
    chai.request(app)
    .get('/api/v1/comments/total/1')
    .end((err, res) => {
      if(err) { return done(err) }
      expect(res).to.have.status(200);
      expect(res).to.be.json;
      expect(res.body).to.be.a('number');
      expect(res.body).to.equal(2);
      done()
    })
  })

  beforeAndAfterEach()

  it('should respond back with a 404 when company not found', (done) => {
    chai.request(app)
    .get('/api/v1/comments/total/2349')
    .end((err, res) => {
      if(err) {
        expect(err).to.have.status(404);
        done()
      }
    })
  })
})

describe('DELETE /api/v1/users/:id', () => {
  beforeAndAfterEach()

  it('should DELETE a user', (done) => {
    chai.request(app)
    .delete('/api/v1/users/2')
    .end((err, res) => {
      if(err){ return done(err) }
      expect(res).to.have.status(200)
      expect(res.body).to.have.length(29)
      done()
    })
  })

  xit('should respond with an error if that user does not exist', (done) => {
    chai.request(app)
    .delete('/api/v1/users/548552')
    .end((err, res) => {
      if(err){ return done(err) }
      expect(res).to.have.status(422)
      done()
    })
  })
})

describe('DELETE /api/v1/companies/:id', () => {
  beforeAndAfterEach()

  it('should DELETE a company', (done) => {
    chai.request(app)
    .delete('/api/v1/companies/4')
    .end((err, res) => {
      if(err){ return done(err) }
      expect(res).to.have.status(200)
      expect(res.body).to.have.length(29)
      done()
    })
  })

  xit('should respond with an error if that company does not exist', (done) => {
    chai.request(app)
    .delete('/api/v1/companies/548552')
    .end((err, res) => {
      if(err){ return done(err) }
      expect(res).to.have.status(422)
      done()
    })
  })
})

describe('DELETE /api/v1/comments/:id', () => {
  beforeAndAfterEach()

  it('should DELETE a comment', (done) => {
    chai.request(app)
    .delete('/api/v1/comments/1')
    .end((err, res) => {
      if(err){ return done(err) }
      expect(res).to.have.status(200)
      expect(res.body).to.have.length(29)
      done()
    })
  })

  xit('should respond with an error if that comment does not exist', (done) => {
    chai.request(app)
    .delete('/api/v1/comments/548552')
    .end((err, res) => {
      if(err){ return done(err) }
      expect(res).to.have.status(422)
      done()
    })
  })
})
