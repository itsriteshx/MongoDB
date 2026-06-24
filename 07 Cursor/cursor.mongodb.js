use("test")
let arr=[]
for (let i=1; i<=100; i++){
    arr.push({value: i})
}
db.data.insertMany(arr)
const cursor=db.data.find()
console.log(cursor)

console.log(cursor.next())
console.log(cursor.next())
console.log(cursor.next())
console.log(cursor.hasNext())

while(cursor.hasNext()){
    console.log(cursor.next())
}

db.data.find().sort({value:1}) //ascending sort
db.data.find().sort({value:-1}) //descending sort