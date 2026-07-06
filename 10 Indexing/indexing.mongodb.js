use("test")

// db.users.createIndex({name:1})
// db.users.getIndexes()


db.users.find({name: "Amit Verma"}).explain("executionStats")