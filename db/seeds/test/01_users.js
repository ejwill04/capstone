exports.seed = function(knex, Promise) {
  return knex('users').del()
  .then(() => {
    return Promise.all([
      knex('users').insert({
        id: 1,
        name: "Elijah Williams",
        github_url: "https://github.com/ejwill04",
        cohort: "1610",
        slack: "ejwill04",
        company_id: 1,
        remote: true
      }),
      knex('users').insert({
        id: 2,
        name: "Bekah Lundy",
        github_url: "https://github.com/ejwill04",
        cohort: "1610",
        slack: "blunduy",
        company_id: 2,
        remote: false
      }),
      knex('users').insert({
        id: 3,
        name: "Devin Beliveau",
        github_url: "https://github.com/ejwill04",
        cohort: "1610",
        slack: "dbeliveau",
        company_id: 1,
        remote: true
      }),
      knex('users').insert({
        id: 4,
        name: "Anna Psitos",
        github_url: "https://github.com/ejwill04",
        cohort: "1610",
        slack: "apsitos",
        company_id: 3,
        remote: false
      }),
      knex('users').insert({
        id: 5,
        name: "Gabi Procell",
        github_url: "https://github.com/ejwill04",
        cohort: "1610",
        slack: "gprocell",
        company_id: 4,
        remote: false
      })
    ]);
  });
};
