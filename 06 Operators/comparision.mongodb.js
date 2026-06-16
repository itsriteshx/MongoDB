use("ecommerce")
//Greater than
db.products.find(
  {price:{$gt: 12.99}},
  {title :1,category:1,price:1})
//Lessthan 
db.products.find(
    {price:{$lt:499.99}},
    { title: 1, category: 1, price: 1 }
);
//Lessthan equal to
db.products.find(
    {price:{$lte:499.99}},
    { title: 1, category: 1, price: 1 }
);
//Equalto
db.products.find(
    {price:{$eq:499.99}},
    { title: 1, category: 1, price: 1 }
);

//Notequalto
db.products.find(
    {price:{$neq:499.99}},
    { title: 1, category: 1, price: 1 }
);

//Greaterthan
db.products.find(
    {price:{$gte:499.99}},
    { title: 1, category: 1, price: 1 }
);