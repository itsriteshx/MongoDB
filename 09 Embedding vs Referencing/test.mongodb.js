use("test")

db.students.insertOne({
    _id:2,
    name:'rahul',
    courses:[
        {
            _id:1,
            name:'BCA',
            price:150000,
            duration:3
        },
    ]
})