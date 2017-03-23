exports.seed = function(knex, Promise) {
  return knex('companies').del()
  .then(() => {
    return Promise.all([
      knex('companies').insert({
        created_at: new Date,
        "name": "Zoomdog",
        "city": "Houston",
        "state": "TX"
      }),
      knex('companies').insert({
        created_at: new Date,
        "name": "Brainbox",
        "city": "York",
        "state": "PA"
      }),
      knex('companies').insert({
        created_at: new Date,
        "name": "Livefish",
        "city": "Arlington",
        "state": "VA"
      }),
      knex('companies').insert({
        created_at: new Date,
        "name": "Plajo",
        "city": "Tyler",
        "state": "TX"
      }),
      knex('companies').insert({
        created_at: new Date,
        "name": "Jazzy",
        "city": "Anderson",
        "state": "SC"
      }),
      knex('companies').insert({
        created_at: new Date,
        "name": "Dynazzy",
        "city": "Pompano Beach",
        "state": "FL"
      }),
      knex('companies').insert({
        created_at: new Date,
        "name": "Skyba",
        "city": "Houston",
        "state": "TX"
      }),
      knex('companies').insert({
        created_at: new Date,
        "name": "Skinix",
        "city": "San Antonio",
        "state": "TX"
      }),
      knex('companies').insert({
        created_at: new Date,
        "name": "Cogidoo",
        "city": "Charlotte",
        "state": "NC"
      }),
      knex('companies').insert({
        created_at: new Date,
        "name": "InnoZ",
        "city": "Hartford",
        "state": "CT"
      }),
      knex('companies').insert({
        created_at: new Date,
        "name": "Omba",
        "city": "Washington",
        "state": "DC"
      }),
      knex('companies').insert({
        created_at: new Date,
        "name": "Bubbletube",
        "city": "Columbia",
        "state": "SC"
      }),
      knex('companies').insert({
        created_at: new Date,
        "name": "Jazzy",
        "city": "Tacoma",
        "state": "WA"
      }),
      knex('companies').insert({
        created_at: new Date,
        "name": "Fanoodle",
        "city": "Virginia Beach",
        "state": "VA"
      }),
      knex('companies').insert({
        created_at: new Date,
        "name": "Ailane",
        "city": "Baltimore",
        "state": "MD"
      }),
      knex('companies').insert({
        created_at: new Date,
        "name": "Chatterpoint",
        "city": "Saint Petersburg",
        "state": "FL"
      }),
      knex('companies').insert({
        created_at: new Date,
        "name": "Yodel",
        "city": "Mobile",
        "state": "AL"
      }),
      knex('companies').insert({
        created_at: new Date,
        "name": "Dynazzy",
        "city": "Chicago",
        "state": "IL"
      }),
      knex('companies').insert({
        created_at: new Date,
        "name": "Quatz",
        "city": "Detroit",
        "state": "MI"
      }),
      knex('companies').insert({
        created_at: new Date,
        "name": "Brightdog",
        "city": "Jackson",
        "state": "MS"
      }),
      knex('companies').insert({
        created_at: new Date,
        "name": "Topicshots",
        "city": "Fullerton",
        "state": "CA"
      }),
      knex('companies').insert({
        created_at: new Date,
        "name": "Tazzy",
        "city": "Sacramento",
        "state": "CA"
      }),
      knex('companies').insert({
        created_at: new Date,
        "name": "Eazzy",
        "city": "Fredericksburg",
        "state": "VA"
      }),
      knex('companies').insert({
        created_at: new Date,
        "name": "Gabcube",
        "city": "Rockford",
        "state": "IL"
      }),
      knex('companies').insert({
        created_at: new Date,
        "name": "Livefish",
        "city": "Duluth",
        "state": "GA"
      }),
      knex('companies').insert({
        created_at: new Date,
        "name": "Yakidoo",
        "city": "Austin",
        "state": "TX"
      }),
      knex('companies').insert({
        created_at: new Date,
        "name": "Demizz",
        "city": "Columbia",
        "state": "MO"
      }),
      knex('companies').insert({
        created_at: new Date,
        "name": "Twitternation",
        "city": "Jacksonville",
        "state": "FL"
      }),
      knex('companies').insert({
        created_at: new Date,
        "name": "Roomm",
        "city": "Louisville",
        "state": "KY"
      }),
      knex('companies').insert({
        created_at: new Date,
        "name": "Reallinks",
        "city": "Indianapolis",
        "state": "IN"
      })
    ]);
  });
};
