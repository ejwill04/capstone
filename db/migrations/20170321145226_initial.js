exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('companies', function(table){
            table.increments('id').primary();
            table.string('name');
            table.string('industry');
            table.string('num_of_emp');
            table.string('tech_stack');
            table.boolean('remote_ok');
            table.timestamps();
        }),

        knex.schema.createTable('users', function(table) {
            table.integer('id').primary();
            table.string('name');
            table.string('github_url');
            table.string('github_avatar');
            table.string('email')
            table.string('cohort');
            table.string('slack');
            table.integer('company_id')
                 .references('id')
                 .inTable('companies');
            table.boolean('remote');
            table.timestamps();
        }),

        knex.schema.createTable('locations', function(table){
          table.increments('id').primary();
          table.string('city');
          table.string('state');
          table.string('country');
          table.boolean('remote');
          table.integer('company_id')
               .references('id')
               .inTable('companies');
        }),

        knex.schema.createTable('interview_questions', function(table){
            table.increments('id').primary();
            table.text('message');
            table.integer('user_id')
                 .references('id')
                 .inTable('users');
            table.integer('company_id')
                 .references('id')
                 .inTable('companies');

            table.timestamps();
        }),

        knex.schema.createTable('reviews', function(table){
            table.increments('id').primary();
            table.text('message');
            table.integer('user_id')
                 .references('id')
                 .inTable('users');
            table.integer('company_id')
                 .references('id')
                 .inTable('companies');

            table.timestamps();
        }),

        knex.schema.createTable('salaries', function(table){
            table.increments('id').primary();
            table.integer('amount');
            table.string('emp_position');
            table.integer('user_id')
                 .references('id')
                 .inTable('users');
            table.integer('company_id')
                 .references('id')
                 .inTable('companies');

            table.timestamps();
        })
    ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
      knex.schema.dropTable('salaries'),
      knex.schema.dropTable('reviews'),
      knex.schema.dropTable('interview_questions'),
      knex.schema.dropTable('locations'),
      knex.schema.dropTable('users'),
      knex.schema.dropTable('companies')
    ])
};
