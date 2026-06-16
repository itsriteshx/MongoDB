use("myusers");

db.user.insertMany([
  { name: "mkl", age: 21 },
  { name: "manas" },
  { age: 33 },
  { name: "rohan", age: 21 },
  { name: "sohan", age: "22" },
  { name: "puneet", age: 33 },
]);

db.user.find({name:{$exists:true}})

db.user.find({age:{$type:'string'}})