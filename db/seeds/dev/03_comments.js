exports.seed = function(knex, Promise) {
  return knex('comments').del()
  .then(() => {
    return Promise.all([
      knex('comments').insert({
        "message": "vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc",
        "user_id": 1,
        "company_id": 1
      }),
      knex('comments').insert({
        "message": "urna ut tellus nulla ut erat id mauris vulputate elementum",
        "user_id": 2,
        "company_id": 2
      }),
      knex('comments').insert({
        "message": "at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis",
        "user_id": 3,
        "company_id": 3
      }),
      knex('comments').insert({
        "message": "justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat",
        "user_id": 4,
        "company_id": 4
      }),
      knex('comments').insert({
        "message": "id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus",
        "user_id": 5,
        "company_id": 5
      }),
      knex('comments').insert({
        "message": "est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl",
        "user_id": 6,
        "company_id": 6
      }),
      knex('comments').insert({
        "message": "augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in",
        "user_id": 7,
        "company_id": 7
      }),
      knex('comments').insert({
        "message": "pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec dui",
        "user_id": 8,
        "company_id": 8
      }),
      knex('comments').insert({
        "message": "bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus",
        "user_id": 9,
        "company_id": 9
      }),
      knex('comments').insert({
        "message": "id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in",
        "user_id": 10,
        "company_id": 10
      }),
      knex('comments').insert({
        "message": "vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci",
        "user_id": 11,
        "company_id": 11
      }),
      knex('comments').insert({
        "message": "nulla sed vel enim sit amet nunc viverra",
        "user_id": 12,
        "company_id": 12
      }),
      knex('comments').insert({
        "message": "nulla eget eros elementum pellentesque",
        "user_id": 13,
        "company_id": 13
      }),
      knex('comments').insert({
        "message": "etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut",
        "user_id": 14,
        "company_id": 14
      }),
      knex('comments').insert({
        "message": "fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa",
        "user_id": 15,
        "company_id": 15
      }),
      knex('comments').insert({
        "message": "cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante",
        "user_id": 16,
        "company_id": 16
      }),
      knex('comments').insert({
        "message": "blandit non interdum in ante",
        "user_id": 17,
        "company_id": 17
      }),
      knex('comments').insert({
        "message": "in est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede",
        "user_id": 18,
        "company_id": 18
      }),
      knex('comments').insert({
        "message": "turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula",
        "user_id": 19,
        "company_id": 19
      }),
      knex('comments').insert({
        "message": "in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis",
        "user_id": 20,
        "company_id": 20
      }),
      knex('comments').insert({
        "message": "nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit",
        "user_id": 21,
        "company_id": 21
      }),
      knex('comments').insert({
        "message": "a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl",
        "user_id": 22,
        "company_id": 22
      }),
      knex('comments').insert({
        "message": "nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus",
        "user_id": 23,
        "company_id": 23
      }),
      knex('comments').insert({
        "message": "mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed vel enim sit amet nunc",
        "user_id": 24,
        "company_id": 24
      }),
      knex('comments').insert({
        "message": "rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer",
        "user_id": 25,
        "company_id": 25
      }),
      knex('comments').insert({
        "message": "a suscipit nulla elit ac nulla sed vel enim sit amet nunc viverra",
        "user_id": 26,
        "company_id": 26
      }),
      knex('comments').insert({
        "message": "blandit mi in porttitor pede justo eu massa donec dapibus duis at velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium",
        "user_id": 27,
        "company_id": 27
      }),
      knex('comments').insert({
        "message": "magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien",
        "user_id": 28,
        "company_id": 28
      }),
      knex('comments').insert({
        "message": "ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet",
        "user_id": 29,
        "company_id": 29
      }),
      knex('comments').insert({
        "message": "amet eleifend pede libero quis orci",
        "user_id": 30,
        "company_id": 30
      })
    ]);
  });
};
