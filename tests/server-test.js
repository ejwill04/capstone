const chai = require('chai')
const expect = chai.expect
const app = require('../server.js')
const chaiHttp = require('chai-http')
// const configuration = require('../knexfile')['test']
// const database = require('knex')(configuration)

chai.use(chaiHttp)

describe('Server', () => {
  it('should exist', () => {
    expect(app).to.exist
  })
})

describe('GET /api/v1/users', () => {
  beforeEach((done) => {
    database.migrate.rollback()
    .then(() => {
      database.migrate.latest()
      .then(() => {
        return database.seed.run()
        .then(() => {
          done()
        })
      })
    })
  })
})
