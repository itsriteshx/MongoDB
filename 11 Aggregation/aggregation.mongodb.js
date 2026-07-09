// db.products.find(
//     {
//         brand:'Apple'
//     },
//     {
//         name:1,
//         price:1,
//         category:1,
//         brand:1,
//         _id:0
//     }
// ).sort({price:-1})

db.products.aggregate([
    {
        $match: {
            brand: "Apple"
        }
    },
    {
        $project: {
            name: 1,
            price: 1,
            category: 1,
            brand: 1,
            _id: 0
        }
    },
    {
        $sort: {
            price: -1
        }
    }
])