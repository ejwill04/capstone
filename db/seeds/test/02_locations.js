exports.seed = function(knex, Promise) {
  return knex('locations').del()
  .then(() => {
    return Promise.all([
      knex('locations').insert({
        city: "Houston",
        state: "TX",
        country: "US",
        company_id: 1
      }),
      knex('locations').insert({
        city: "York",
        state: "PA",
        country: "US",
        company_id: 2
      }),
      knex('locations').insert({
        city: "Arlington",
        state: "VA",
        country: "US",
        company_id: 3
      })
    ]);
  });
};
