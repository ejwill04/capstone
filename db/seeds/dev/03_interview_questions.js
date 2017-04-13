exports.seed = function(knex, Promise) {
  return knex('interview_questions').del()
  .then(() => {
    return Promise.all([
      knex('interview_questions').insert({
        message: "I hate orange juice",
        user_id: 1,
        created_at: new Date,
        company_id: 1
      }),
      knex('interview_questions').insert({
        message: "I love dogs",
        user_id: 2,
        created_at: new Date,
        company_id: 2
      }),
      knex('interview_questions').insert({
        message: "Where are my glasses?",
        user_id: 3,
        created_at: new Date,
        company_id: 3
      }),
      knex('interview_questions').insert({
        message: "What is 100-10",
        user_id: 1,
        created_at: new Date,
        company_id: 3
      }),
      knex('interview_questions').insert({
        message: "How long is Taylor's beard today?",
        user_id: 2,
        created_at: new Date,
        company_id: 3
      }),
      knex('interview_questions').insert({
        message: "What kind of bear is best?",
        user_id: 5,
        created_at: new Date,
        company_id: 4
      })
    ]);
  });
};
