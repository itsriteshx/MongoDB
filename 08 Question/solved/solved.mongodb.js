// 1. Find all users from Delhi
db.users.find({ city: "Delhi" })


// 2. Find users whose age is greater than 25
db.users.find({ age: { $gt: 25 } })


// 3. Find users whose age is less than or equal to 30
db.users.find({ age: { $lte: 30 } })


// 4. Find users whose city is not Mumbai
db.users.find({ city: { $ne: "Mumbai" } })


// 5. Find users whose age is between 20 and 30
db.users.find({
  age: { $gte: 20, $lte: 30 }
})


// 6. Show only name and email
db.users.find({}, { name: 1, email: 1, _id: 0 })


// 7. Find users whose name starts with "R"
db.users.find({
  name: /^R/
})


// 8. Find users whose email contains gmail
db.users.find({
  email: /gmail/
})


// 9. Find users whose city field exists
db.users.find({
  city: { $exists: true }
})


// 10. Find users whose phone field does not exist
db.users.find({
  phone: { $exists: false }
})


// 11. Sort users by age ascending
db.users.find().sort({ age: 1 })


// 12. Sort users by age descending
db.users.find().sort({ age: -1 })


// 13. Show first 5 users
db.users.find().limit(5)


// 14. Skip first 10 users and show next 5
db.users.find().skip(10).limit(5)


// 15. Find users whose age is 20, 25, or 30
db.users.find({
  age: { $in: [20, 25, 30] }
})


// 16. Find users whose age is not 20, 25, 30
db.users.find({
  age: { $nin: [20, 25, 30] }
})


// 17. Count total users
db.users.countDocuments()


// 18. Find users whose name is Rahul Sharma and city is Delhi
db.users.find({
  name: "Rahul Sharma",
  city: "Delhi"
})
// OR using $and
db.users.find({
  $and: [
    { name: "Rahul Sharma" },
    { city: "Delhi" }
  ]
})


// 19. Find users whose city is Delhi OR Mumbai
db.users.find({
  $or: [
    { city: "Delhi" },
    { city: "Mumbai" }
  ]
})


// 20. Find users whose age is NOT greater than 30
db.users.find({
  age: { $not: { $gt: 30 } }
})


// 21. Find users whose name ends with "a"
db.users.find({
  name: /a$/
})


// 22. Find users whose email domain is yahoo.com
db.users.find({
  email: /yahoo\.com$/
})


// 23. Find users whose age field type is number
db.users.find({
  age: { $type: "number" }
})


// 24. Find users where age is even
db.users.find({
  age: { $mod: [2, 0] }
})


// 25. Find users whose name length is greater than 5 characters
db.users.find({
  $expr: {
    $gt: [{ $strLenCP: "$name" }, 5]
  }
})


// ******************************************************
// *****************INTERMMEDIATE LEVEL******************
// ******************************************************


// 26. Find products whose price > 1000
db.products.find({
  price: { $gt: 1000 }
})


// 27. Find products whose price is between 500 and 2000
db.products.find({
  price: { $gte: 500, $lte: 2000 }
})


// 28. Find products in category "electronics"
db.products.find({
  category: "electronics"
})


// 29. Find products whose stock < 10
db.products.find({
  stock: { $lt: 10 }
})


// 30. Find products that are out of stock
db.products.find({
  stock: 0
})


// 31. Sort products by price (low → high)
db.products.find().sort({ price: 1 })


// 32. Find top 5 most expensive products
db.products.find().sort({ price: -1 }).limit(5)


// 33. Find products whose name contains "phone"
db.products.find({
  name: /phone/i
})


// 34. Find products whose discount > 20%
db.products.find({
  discount: { $gt: 20 }
})


// 35. Find products not in electronics category
db.products.find({
  category: { $ne: "electronics" }
})


// 36. Find products having tag "gaming"
db.products.find({
  tags: "gaming"
})


// 37. Find products having both "gaming" and "laptop"
db.products.find({
  tags: { $all: ["gaming", "laptop"] }
})


// 38. Find products with exactly 3 tags
db.products.find({
  tags: { $size: 3 }
})


// 39. Add tag "new"
db.products.updateOne(
  { name: "Laptop" },
  { $push: { tags: "new" } }
)


// 40. Remove tag "old"
db.products.updateOne(
  { name: "Laptop" },
  { $pull: { tags: "old" } }
)


// 41. Find orders placed by Rahul
db.orders.find({
  user: "Rahul"
})


// 42. Find orders whose amount > 5000
db.orders.find({
  totalAmount: { $gt: 5000 }
})


// 43. Find orders after 1 Jan 2025
db.orders.find({
  orderDate: { $gt: new Date("2025-01-01") }
})


// 44. Find delivered orders
db.orders.find({
  status: "delivered"
})


// 45. Find orders not cancelled
db.orders.find({
  status: { $ne: "cancelled" }
})


// 🟡 Update Operations (46–50)
// 46. Increase product price by 10%
db.products.updateMany(
  {},
  { $mul: { price: 1.1 } }
)


// 47. Increase stock by 50
db.products.updateMany(
  {},
  { $inc: { stock: 50 } }
)


// 48. Rename price → productPrice
db.products.updateMany(
  {},
  { $rename: { price: "productPrice" } }
)


// 49. Remove discount field
db.products.updateMany(
  {},
  { $unset: { discount: "" } }
)


// 50. Add featured field
db.products.updateMany(
  {},
  { $set: { featured: true } }
)
