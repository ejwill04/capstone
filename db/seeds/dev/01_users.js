exports.seed = function(knex, Promise) {
  return knex('users').del()
  .then(() => {
    return Promise.all([
      knex('users').insert({
        name: "Pat Wentz",
        github: "",
        cohort: "1605",
        slack: "",
        company_id: 1,
        remote: false
      })
      knex('users').insert({
        name: "Heidi Hoopes",
        cohort: "1511",
        company_id: 2,
        github: "",
        slack: "",
        remote: ""
      })
      knex('users').insert({
        name: "Patrick Hardy",
        cohort: "1602",
        company_id: 2,
        github: "",
        slack: "",
        remote: ""
      })
      knex('users').insert({
        name: "Ashwin Rao",
        cohort: "1602",
        company_id: 3,
        github: "",
        slack: "",
        remote: ""
      })
      knex('users').insert({
        name: "Ryan Travitz",
        cohort: "1608",
        company_id: 4,
        github: "",
        slack: "",
        remote: ""
      })
      knex('users').insert({
        name: "Gurusundesh Khalsa",
        cohort: "1602",
        company_id: 4,
        github: "",
        slack: "",
        remote: ""
      })
      knex('users').insert({
        name: "David Stinnette",
        cohort: "1510",
        company_id: 4,
        github: "",
        slack: "",
        remote: ""
      })
      knex('users').insert({
        name: "Tyler Komoroske",
        cohort: "1508",
        company_id: 4,
        github: "",
        slack: "",
        remote: ""
      })
      knex('users').insert({
        name: "Charlie Kaminer",
        cohort: "1603",
        company_id: 4,
        github: "",
        slack: "",
        remote: ""
      })
      knex('users').insert({
        name: "MaryJane Valade",
        cohort: "1606",
        company_id: 5,
        github: "",
        slack: "",
        remote: ""
      })
      knex('users').insert({
        name: "Matthew Hecker",
        cohort: "1507",
        company_id: 6,
        github: "",
        slack: "",
        remote: ""
      })
      knex('users').insert({
        name: "Jeneve Parrish",
        cohort: "1602",
        company_id: 7,
        github: "",
        slack: "",
        remote: ""
      })
      knex('users').insert({
        name: "Dan Winter",
        cohort: "1510",
        company_id: 8,
        github: "",
        slack: "",
        remote: ""
      })
      knex('users').insert({
        name: "Torie Joy-Warren",
        cohort: "1508",
        company_id: 9,
        github: "",
        slack: "",
        remote: ""
      })
      knex('users').insert({
        name: "Chris Concannon",
        cohort: "1605",
        company_id: 10,
        github: "",
        slack: "",
        remote: ""
      })
      knex('users').insert({
        name: "Paul Nguyen",
        cohort: "1606",
        company_id: 10,
        github: "",
        slack: "",
        remote: ""
      })
      knex('users').insert({
        name: "Justin Pease",
        cohort: "1510",
        company_id: 4,
        github: "",
        slack: "",
        remote: ""
      })
      knex('users').insert({
        name: "Matt Kaufman",
        cohort: "1608",
        company_id: 11,
        github: "",
        slack: "",
        remote: ""
      })
      knex('users').insert({
        name: "Joshua Washke",
        cohort: "1602",
        company_id: 12,
        github: "",
        slack: "",
        remote: ""
      })
      knex('users').insert({
        name: "Kimiko Kano",
        cohort: "1511",
        company_id: 13,
        github: "",
        slack: "",
        remote: ""
      })
      knex('users').insert({
        name: "Lacey Knaff",
        cohort: "1608",
        company_id: 14,
        github: "",
        slack: "",
        remote: ""
      })
      knex('users').insert({
        name: "Kyle Misencik",
        cohort: "1606",
        company_id: 15,
        github: "",
        slack: "",
        remote: ""
      })
      knex('users').insert({
        name: "Jeff Duke",
        cohort: "1606",
        company_id: 16,
        github: "",
        slack: "",
        remote: ""
      })
      knex('users').insert({
        name: "Ryan Flach",
        cohort: "1605",
        company_id: 17,
        github: "",
        slack: "",
        remote: ""
      })
      knex('users').insert({
        name: "",
        cohort: "",
        company_id: ,
        github: "",
        slack: "",
        remote: ""
      })
      knex('users').insert({
        name: "",
        cohort: "",
        company_id: ,
        github: "",
        slack: "",
        remote: ""
      })
      knex('users').insert({
        name: "",
        cohort: "",
        company_id: ,
        github: "",
        slack: "",
        remote: ""
      })
      knex('users').insert({
        name: "",
        cohort: "",
        company_id: ,
        github: "",
        slack: "",
        remote: ""
      })
      knex('users').insert({
        name: "",
        cohort: "",
        company_id: ,
        github: "",
        slack: "",
        remote: ""
      })
      knex('users').insert({
        name: "",
        cohort: "",
        company_id: ,
        github: "",
        slack: "",
        remote: ""
      })
      knex('users').insert({
        name: "",
        cohort: "",
        company_id: ,
        github: "",
        slack: "",
        remote: ""
      })
      knex('users').insert({
        name: "",
        cohort: "",
        company_id: ,
        github: "",
        slack: "",
        remote: ""
      })
      knex('users').insert({
        name: "",
        cohort: "",
        company_id: ,
        github: "",
        slack: "",
        remote: ""
      })
      knex('users').insert({
        name: "",
        cohort: "",
        company_id: ,
        github: "",
        slack: "",
        remote: ""
      })
      knex('users').insert({
        name: "",
        cohort: "",
        company_id: ,
        github: "",
        slack: "",
        remote: ""
      })
      knex('users').insert({
        name: "",
        cohort: "",
        company_id: ,
        github: "",
        slack: "",
        remote: ""
      })
      knex('users').insert({
        name: "",
        cohort: "",
        company_id: ,
        github: "",
        slack: "",
        remote: ""
      })
      knex('users').insert({
        name: "",
        cohort: "",
        company_id: ,
        github: "",
        slack: "",
        remote: ""
      })
      knex('users').insert({
        name: "",
        cohort: "",
        company_id: ,
        github: "",
        slack: "",
        remote: ""
      })
      knex('users').insert({
        name: "",
        cohort: "",
        company_id: ,
        github: "",
        slack: "",
        remote: ""
      })
      knex('users').insert({
        name: "",
        cohort: "",
        company_id: ,
        github: "",
        slack: "",
        remote: ""
      })
      knex('users').insert({
        name: "",
        cohort: "",
        company_id: ,
        github: "",
        slack: "",
        remote: ""
      })
      knex('users').insert({
        name: "",
        cohort: "",
        company_id: ,
        github: "",
        slack: "",
        remote: ""
      })
      knex('users').insert({
        name: "",
        cohort: "",
        company_id: ,
        github: "",
        slack: "",
        remote: ""
      })
      knex('users').insert({
        name: "",
        cohort: "",
        company_id: ,
        github: "",
        slack: "",
        remote: ""
      })
      knex('users').insert({
        name: "",
        cohort: "",
        company_id: ,
        github: "",
        slack: "",
        remote: ""
      })
      knex('users').insert({
        name: "",
        cohort: "",
        company_id: ,
        github: "",
        slack: "",
        remote: ""
      })
      knex('users').insert({
        name: "",
        cohort: "",
        company_id: ,
        github: "",
        slack: "",
        remote: ""
      })
      knex('users').insert({
        name: "",
        cohort: "",
        company_id: ,
        github: "",
        slack: "",
        remote: ""
      })
    ]);
  });
};
