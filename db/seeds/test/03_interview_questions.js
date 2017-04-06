exports.seed = function(knex, Promise) {
  return knex('interview_questions').del()
  .then(() => {
    return Promise.all([
      knex('interview_questions').insert({
        message: "vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc",
        user_id: 1,
        created_at: new Date,
        company_id: 1
      }),
      knex('interview_questions').insert({
        message: "vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc",
        user_id: 2,
        created_at: new Date,
        company_id: 2
      }),
      knex('interview_questions').insert({
        message: "vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc",
        user_id: 3,
        created_at: new Date,
        company_id: 3
      })
    ]);
  });
};
