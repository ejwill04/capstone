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
    let company = { name: 'Glengarry Glen Ross', city: 'Nowhere', state: 'CO' }
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
})

describe('POST /api/v1/comments', () => {
  beforeAndAfterEach()

  it('should post a new comment', (done) => {
    let comment = { message: 'Just do it!', user_id: 1, company_id: 1 }
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
})
