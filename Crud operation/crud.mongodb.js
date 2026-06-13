// Basic Command of mongoDB
// db
// show dbs
// use .....
// show collections
// 

// const res1=show("dbs")
// const res2=use("ecommerce")

// console.log(res1)
// console.log(res2)

show("dbs")
use("ecommerce")
show("collections")

db.users.insertOne({
    name:"alpha"
})


