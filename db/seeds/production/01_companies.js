exports.seed = function(knex, Promise) {
  return knex('companies').del()
  .then(() => {
    return Promise.all([
      knex('companies').insert({
        created_at: new Date,
        name: "Zoomdog",
        industry: "Health tech",
        num_of_emp: 20,
        tech_stack: "[JavaScript, Ruby]"
      }),
      knex('companies').insert({
        created_at: new Date,
        name: "Bobs Burgers",
        industry: "burger tech",
        num_of_emp: 200,
        tech_stack: "[JavaScript, Ruby]"
      }),
      knex('companies').insert({
        created_at: new Date,
        name: "dog cat",
        industry: "pet tech",
        num_of_emp: 5,
        tech_stack: "[JavaScript, Ruby]"
      }),
    ]);
  });
};
