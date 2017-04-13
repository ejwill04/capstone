exports.seed = function(knex, Promise) {
  return knex('reviews').del()
  .then(() => {
    return Promise.all([
      knex('reviews').insert({
        message: "This place sucks",
        user_id: 1,
        created_at: new Date,
        company_id: 1
      }),
      knex('reviews').insert({
        message: "This place is awesome",
        user_id: 2,
        created_at: new Date,
        company_id: 2
      }),
      knex('reviews').insert({
        message: "There's free beer here",
        user_id: 3,
        created_at: new Date,
        company_id: 3
      }),
      knex('reviews').insert({
        message: "I like tacos",
        user_id: 4,
        created_at: new Date,
        company_id: 3
      }),
      knex('reviews').insert({
        message: "Dude where's my car",
        user_id: 5,
        created_at: new Date,
        company_id: 3
      })
    ]);
  });
};
