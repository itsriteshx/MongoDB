use("test")
db.products.insertMany([
    {
        name: "Gaming Laptop",
        price: 75000,
        category: "electronics",
        stock: 15,
        discount: 10,
        tags: ["gaming", "laptop", "electronics"]
    },
    {
        name: "Smartphone",
        price: 25000,
        category: "electronics",
        stock: 8,
        discount: 15,
        tags: ["phone", "android", "electronics"]
    },
    {
        name: "Wireless Mouse",
        price: 800,
        category: "accessories",
        stock: 50,
        discount: 5,
        tags: ["mouse", "computer", "electronics"]
    },
    {
        name: "Mechanical Keyboard",
        price: 3500,
        category: "accessories",
        stock: 20,
        discount: 12,
        tags: ["keyboard", "gaming", "computer"]
    },
    {
        name: "LED Monitor",
        price: 12000,
        category: "electronics",
        stock: 5,
        discount: 18,
        tags: ["monitor", "display", "electronics"]
    },
    {
        name: "Office Chair",
        price: 6000,
        category: "furniture",
        stock: 0,
        discount: 20,
        tags: ["chair", "office", "furniture"]
    },
    {
        name: "Gaming Headset",
        price: 4500,
        category: "electronics",
        stock: 12,
        discount: 25,
        tags: ["gaming", "audio", "electronics"]
    }
])



// Q.26
// db.products.find({
//     price:{$gt:1000}
// })

// Q.27
// db.products.find({
//     price:{$gt:500, $lt:2000}
// })


// Q.28
// db.products.find({
//     category:'electronics'
// })

// q.29
// db.products.find({
//     stock:{$lt:10}
// })

// // Q.30
// db.products.find({
//     stock:0
// })

// q31
// db.products.find().sort({price:-1})

// q32
// db.products.find().sort({price:-1}).limit(5)

// q33
// db.products.find({
//     name:/Phone/i
// })

// Q.34
// db.products.find({
//     discount:{$gt:20}
// })

// Q.35
// db.products.find({
//     category:{$ne:'electronics'}
// })
