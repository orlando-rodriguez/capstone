
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('articles_table').del()
    .then(function () {
      // Inserts seed entries
      return knex('articles_table').insert([
        {id: 1,
          datePublished: '2018-06-01',
          title: 'greatArticleTitle',
          author: 'Orlando',
          body: 'Lorem Ipsum Dolor fa so la di do fa so la di do fa so la di do',
          image: '/'
        }, {id: 2,
          datePublished: '2018-06-02',
          title: 'Amazing Title',
          author: 'Orlando',
          body: 'Lorem Ipsum Dolor fa so la di do fa so la di do fa so la di do',
          image: '/'
        }, {id: 3,
          datePublished: '2018-06-03',
          title: 'WOW Title',
          author: 'Orlando',
          body: 'Lorem Ipsum Dolor fa so la di do fa so la di do fa so la di do',
          image: '/'
        }
      ]).then(() => {
        return knex.raw('ALTER SEQUENCE articles_table_id_seq RESTART WITH 4;')
      })
    })
}
