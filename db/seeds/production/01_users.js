exports.seed = function(knex, Promise) {
  return knex('users').del()
  .then(() => {
    return Promise.all([
      knex('users').insert({
        name: "Elijah Williams",
      }),
      knex('users').insert({
        name: "Chelle Tuerk",
      }),
      knex('users').insert({
        name: "Dan Grund",
      }),
      knex('users').insert({
        name: "Eldridge Rasmussen",
      }),
      knex('users').insert({
        name: "Julianna Sprinkle",
      }),
      knex('users').insert({
        name: "Gillian Goudy",
      }),
      knex('users').insert({
        name: "Ha Netto",
      }),
      knex('users').insert({
        name: "Despina Nantz",
      }),
      knex('users').insert({
        name: "Bob Dylan",
      }),
      knex('users').insert({
        name: "Bob Marley",
      }),
      knex('users').insert({
        name: "Bob Johnson",
      }),
      knex('users').insert({
        name: "Bob Dole",
      }),
      knex('users').insert({
        name: "Bob Evans",
      }),
      knex('users').insert({
        name: "Tyrone Wells",
      }),
      knex('users').insert({
        name: "Justin Vernon",
      }),
      knex('users').insert({
        name: "Sufjan Stevens",
      }),
      knex('users').insert({
        name: "Tom Brady",
      }),
      knex('users').insert({
        name: "Tom Jones",
      }),
      knex('users').insert({
        name: "Tim Tebow",
      }),
      knex('users').insert({
        name: "Jeff Buss",
      }),
      knex('users').insert({
        name: "Mike Lambo",
      }),
      knex('users').insert({
        name: "Rachel Williams",
      }),
      knex('users').insert({
        name: "Hannah Williams",
      }),
      knex('users').insert({
        name: "Isaiah Williams",
      }),
      knex('users').insert({
        name: "Janelle Williams",
      }),
      knex('users').insert({
        name: "John Williams",
      }),
      knex('users').insert({
        name: "Paul Williams",
      }),
      knex('users').insert({
        name: "Levi Williams",
      }),
      knex('users').insert({
        name: "Herb Williams",
      }),
      knex('users').insert({
        name: "Noah Pedron",
      })
    ]);
  });
};
