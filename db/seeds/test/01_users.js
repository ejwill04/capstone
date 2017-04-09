exports.seed = function(knex, Promise) {
  return knex('users').del()
  .then(() => {
    return Promise.all([
      knex('users').insert({
        name: "Elijah Williams",
        github: "username: ejwill04 password: password",
        cohort: "1610",
        slack: "ejwill04",
        company_id: 1,
        remote: true
      }),
      knex('users').insert({
        name: "Bekah Lundy",
        github: "username: blundy password: password",
        cohort: "1610",
        slack: "blunduy",
        company_id: 2,
        remote: false
      }),
      knex('users').insert({
        name: "Devin Beliveau",
        github: "username: dbeliveau password: password",
        cohort: "1610",
        slack: "dbeliveau",
        company_id: 1,
        remote: true
      }),
      knex('users').insert({
        name: "Anna Psitos",
        github: "username: apsitos password: password",
        cohort: "1610",
        slack: "apsitos",
        company_id: 3,
        remote: false
      }),
      knex('users').insert({
        name: "Gabi Procell",
        github: "username: gprocell password: password",
        cohort: "1610",
        slack: "gprocell",
        company_id: 4,
        remote: false
      })
    ]);
  });
};
