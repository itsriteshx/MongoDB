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