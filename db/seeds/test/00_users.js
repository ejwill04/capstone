exports.seed = function(knex, Promise) {
  return knex('users').del()
  .then(() => {
    return Promise.all([
      knex('users').insert({
        name: "Elijah Williams",
        github: "username: ejwill04 password: password",
        cohort: "1610",
        slack: "ejwill04",
        companies: "[Facebook, Google, SpaceX]",
        remote: true
      }),
      knex('users').insert({
        name: "Bekah Lundy",
        github: "username: blundy password: password",
        cohort: "1610",
        slack: "blunduy",
        companies: "[Facebook, Google, SpaceX]",
        remote: false
      }),
      knex('users').insert({
        name: "Devin Beliveau",
        github: "username: dbeliveau password: password",
        cohort: "1610",
        slack: "dbeliveau",
        companies: "[Apple, NASA, Wall Street]",
        remote: true
      })
    ]);
  });
};
