const database = require("../connection")
module.exports = {
  list() {
    return database('articles_table')
  },
  create(user) {
    return database("articles_table").insert(user, '*').then(record => record[0])
  },
  update(id, user) {
    return database('articles_table').where('id', id).update(user, '*').then(user => user[0])
  },
  delete(id) {
    return database('articles_table').where('id', id).delete()
  },
  read(id) {
    return database('articles_table').where('id', id).first()
  }
}
