db.employees.insertOne({
  name: "John Smith",
  email: "john@gmail.com",
  department: "IT",
  salary: 1456,
  location: ["FL", "OH"],
  date: Date(),
});



db.employees.insertMany([
    {
        name: "mike Josephs",
        email: "mike@gmail.com",
        department: "IT",
        salary: 2456,
        location: ["FL", "OH"],
        date: Date(),
    },
    {
        name: "Cathy G",
        email: "cathy@gmail.com",
        department: "IT",
        salary: 3456,
        location: ["AZ", "TX"],
        date: Date(),
    }
])



db.employees.find({},{name:1}) // here it means name feild true it will show name field only for all the employees here 1 means true and 0 means false

//show collections


db.user.find({},{_id:false,name:true,age:true}) // here it means name and age feild true it will show name and age field only for all the employees here 1 means true and 0 means false


db.employees.find({department:{$eq:"IT"}},{_id:0,name:1,salary:1});
db.employees.find({salary:{$gt:2000}},{_id:1,name:1,salary:1});
db.employees.find({salary:{$lt:5000}},{_id:1,name:1,salary:1});
db.employees.find({salary:{$lte:3000}},{_id:0,name:1,salary:1});
db.employees.find({$or:[{salary:{$lte:3000}},{department:"IT"}]},{_id:0,name:1,salary:1});
db.employees.find({$and:[{salary:{$lte:3000}},{department:"IT"}]},{_id:0,name:1,salary:1});
db.employees.find(
    {$or:[{},{}]}, // condition
    {} // variable to show
);

db.employees.find({department:{$ne:"IT"}},{_id:0,name:1,salary:1,department:1});
db.employees.find({department:{$in: ["Admin","HR"]}},{_id:0,name:1,salary:1,department:1});
db.employees.find({department:{$nin: ["Admin","HR"]}},{_id:0,name:1,salary:1,department:1});
