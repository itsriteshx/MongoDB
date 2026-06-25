use("test")
// db.users.insertMany([
//     {
//         name: "Rahul Sharma",
//         age: 22,
//         city: "Delhi",
//         email: "rahul@gmail.com",
//         phone: "9876543210",
//         isActive: true
//     },
//     {
//         name: "Priya Singh",
//         age: 27,
//         city: "Mumbai",
//         email: "priya@yahoo.com",
//         isActive: true
//     },
//     {
//         name: "Amit Verma",
//         age: 30,
//         city: "Delhi",
//         email: "amit@gmail.com",
//         phone: "9123456780",
//         isActive: false
//     },
//     {
//         name: "Sneha Gupta",
//         age: 24,
//         city: "Kolkata",
//         email: "sneha@gmail.com",
//         phone: "9988776655",
//         isActive: true
//     },
//     {
//         name: "Rohit Kumar",
//         age: 29,
//         city: "Patna",
//         email: "rohit@yahoo.com",
//         isActive: true
//     },
//     {
//         name: "Ankit Raj",
//         age: 21,
//         city: "Patna",
//         email: "ankit@gmail.com",
//         phone: "8899776655",
//         isActive: false
//     },
//     {
//         name: "Neha Agarwal",
//         age: 26,
//         city: "Delhi",
//         email: "neha@gmail.com",
//         phone: "8877665544",
//         isActive: true
//     },
//     {
//         name: "Riya Das",
//         age: 23,
//         city: "Mumbai",
//         email: "riya@gmail.com",
//         isActive: true
//     },
//     {
//         name: "Karan Malhotra",
//         age: 31,
//         city: "Bangalore",
//         email: "karan@yahoo.com",
//         phone: "9988112233",
//         isActive: false
//     },
//     {
//         name: "Pooja Mishra",
//         age: 28,
//         city: "Lucknow",
//         email: "pooja@gmail.com",
//         phone: "7766554433",
//         isActive: true
//     }
// ])


// q1
// db.users.find({city:"Delhi"})


// q2
// db.users.find({age:{$gt:25}})


// q3
// db.users.find({age:{$lte:30}})


//q4
// db.users.find({city: {$ne:"Mumbai"}})


//q5
// db.users.find({$and:[{age:{$gt:20}} ,{age:{$lt:30}}]})
// db.users.find({age:{$gt:20,$lt:30}})

//q6
// db.users.find({},
//     {name:1,email:1,_id:1}
// )

//q7
// db.users.find({
//     name: {$regex:"^R"}
// })
// db.users.find({
//     name:/^R/
// })

//q8
 db.users.find({
    email:/gmail/
})

