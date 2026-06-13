// use("shopApp")
// db.users.updateMany({city: "Bhagalpur"},
//   {$set: {city: "Mumbai"}}
// )


// use("ecommerce")
// // db.products.updateOne(
// //   {},
// //   {$set:{price: 4000}}
// // )


// // db.products.updateMany(
// //   {},
// //   {$set:{stock: 27}}
// // )
// db.products.updateMany(
//   {category:"electronics"},
//   {$inc:{stock:5}}
// )


use("shopApp")
db.users.updateOne(
  {email:"ravi@gmail.com"},
  {$set:{email: "ravikumar@gmail.com"}}
)
 