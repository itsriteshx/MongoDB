use("test")

db.products.insertMany([
    {
        name: "Gaming Laptop",
        price: 85000,
        category: "electronics",
        stock: 8,
        discount: 15,
        tags: ["gaming", "laptop", "electronics"],
        reviews: [
            { user: "Rahul", rating: 5 },
            { user: "Amit", rating: 4 },
            { user: "Priya", rating: 5 }
        ]
    },
    {
        name: "Office Laptop",
        price: 55000,
        category: "electronics",
        stock: 12,
        discount: 10,
        tags: ["laptop", "office", "electronics"],
        reviews: [
            { user: "Rahul", rating: 3 },
            { user: "Sneha", rating: 4 }
        ]
    },
    {
        name: "Gaming Mouse",
        price: 1500,
        category: "accessories",
        stock: 30,
        discount: 8,
        tags: ["gaming", "mouse", "computer"],
        reviews: [
            { user: "Amit", rating: 5 },
            { user: "Rahul", rating: 4 }
        ]
    },
    {
        name: "Mechanical Keyboard",
        price: 4000,
        category: "accessories",
        stock: 20,
        discount: 12,
        tags: ["keyboard", "gaming", "computer"],
        reviews: [
            { user: "Priya", rating: 5 },
            { user: "Rahul", rating: 4 }
        ]
    },
    {
        name: "LED Monitor",
        price: 12000,
        category: "electronics",
        stock: 0,
        discount: 2
    }
])


// 61
db.products.find({
    "reviews.user":"Rahul"
})

// Q.62
// db.products.find({
//     'reviews.user':'Rahul',
//     'reviews.rating':5
// })
// or
// db.products.find({
//     reviews:{
//         $elemMatch: {
//             user:'Rahul',
//             rating:5
//         }
//     }
// })

// Q.63
// db.products.find({
//     'reviews.rating': {$gte: 4}
// })

// Q.64
// db.products.find({
//     reviews:{
//         $elemMatch: {
//             rating: {$gte:4}
//         }
//     }
// })

// Q.65
// db.products.find({
//     $expr:{
//         $gt:[{$size:'$reviews'}, 2]
//     }
// })



// Q.66
// db.products.find({
//     price: {$gt:5000},
//     stock: {$lt:10}
// })


// Q.67
// db.products.find({
//     discount: {$gt:10, $lt:30}
// })

// Q.68
// db.products.find({
//     name: /^G/
// })

// Q.69
// db.products.find({
//     name: /Laptop$/
// })

// Q.70
// db.products.find({
//     tags:'gaming'
// })
// 

// Q.71
// db.products.find({
//     tags:{$all:["gaming","laptop"]}
// })

// Q.72
// db.products.find({
//     tags:{$size:3}
// })

// Q.73
// db.products.find({
//     stock: {$mod: [2, 0]}
// })

// Q.74
// db.products.find({
//     $expr:{
//         $gt:[{$strLenCP: '$name'}, 13]
//     }
// })

// Q.75
// db.products.find({
//     discount: {$exists: true}
// })