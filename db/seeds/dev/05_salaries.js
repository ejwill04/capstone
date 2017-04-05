exports.seed = function(knex, Promise) {
  return knex('salaries').del()
  .then(() => {
    return Promise.all([
      knex('salaries').insert({
        "amount": 80000,
        "user_id": 1,
        created_at: new Date,
        "company_id": 1,
        "emp_position": "software engineer"
      }),
      knex('salaries').insert({
        "amount": 120000,
        "user_id": 2,
        created_at: new Date,
        "company_id": 2,
        "emp_position": "front-end devloper"
      }),
      knex('salaries').insert({
        "amount": 200000,
        "user_id": 3,
        created_at: new Date,
        "company_id": 3,
        "emp_position": "back-end engineer"
      })
    ]);
  });
};
