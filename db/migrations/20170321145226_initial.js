exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('users', function(table) {
            table.increments('id').primary();
            table.string('name');

            table.timestamps();
        }),

        knex.schema.createTable('companies', function(table){
            table.increments('id').primary();
            table.string('name');
            table.string('city');
            table.string('state');

            table.timestamps();
        }),

        knex.schema.createTable('comments', function(table){
            table.increments('id').primary();
            table.string('message');
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
      knex.schema.dropTable('comments'),
      knex.schema.dropTable('companies'),
        knex.schema.dropTable('users')
    ])
};
