exports.seed = function(knex, Promise) {
  return knex('users').del()
  .then(() => {
    return Promise.all([
      knex('users').insert({
        name: "Elijah Williams",
        github: "username: ejwill04 password: password",
        cohort: "1610",
        slack: "ejwill04",
        companies: "[Sports Authority, Google, SpaceX]",
        remote: true
      }),
      knex('users').insert({
        name: "Bekah Lundy",
        github: "username: blundy password: password",
        cohort: "1610",
        slack: "blunduy",
        companies: "[Sphero, Google, SpaceX]",
        remote: false
      }),
      knex('users').insert({
        name: "Devin Beliveau",
        github: "username: dbeliveau password: password",
        cohort: "1610",
        slack: "dbeliveau",
        companies: "[Apple, NASA, Wall Street]",
        remote: true
      }),
      knex('users').insert({
        name: "Anna Psitos",
        github: "username: apsitos password: password",
        cohort: "1610",
        slack: "apsitos",
        companies: "[Sphero, NASA, Wall Street]",
        remote: false
      }),
      knex('users').insert({
        name: "Gabi Procell",
        github: "username: gprocell password: password",
        cohort: "1610",
        slack: "gprocell",
        companies: "[Sphero, NASA, Wall Street]",
        remote: false
      })
    ]);
  });
};
