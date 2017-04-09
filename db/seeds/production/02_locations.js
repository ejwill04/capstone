exports.seed = function(knex, Promise) {
  return knex('locations').del()
  .then(() => {
    return Promise.all([
      knex('locations').insert({
        city: "Greely",
        state: "CO",
        country: "US",
        company_id: 1
      }),
      knex('locations').insert({
        city: "Denver",
        state: "CO",
        country: "US",
        company_id: 2
      }),
      knex('locations').insert({
        city: "Fort Collins",
        state: "CO",
        country: "US",
        company_id: 3
      }),
      knex('locations').insert({
        city: "Boulder",
        state: "CO",
        country: "US",
        company_id: 4
      }),
      knex('locations').insert({
        city: "Denver",
        state: "CO",
        country: "US",
        company_id: 5
      }),
      knex('locations').insert({
        city: "Denver",
        state: "CO",
        country: "US",
        company_id: 6
      })
    ]);
  });
};
