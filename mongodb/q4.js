

db.employees.insertMany([
    {
        name: "David Lee",
        email: "david.lee@gmail.com",
        department: "HR",
        salary: 2765,
        location: ["WA", "OR"],
        date: Date(),
    },
    {
        name: "Rafeal",
        email: "rafeal@gmail.com",
        department: "Admin",
        salary: 1500,
        location: ["AZ", "TX"],
        date: Date(),
    }
])

db.employees.insertMany([
     {
        name: "Emma Stone",
        email: "emma.stone@gmail.com",
        department: "Design",
        salary: 3300,
        location: ["FL", "SC"],
        date: Date(),
    },
    {
        name: "Brian Smith",
        email: "brian.smith@gmail.com",
        department: "Sales",
        salary: 2980,
        location: ["MI", "OH"],
        date: Date(),
    },
])



db.employees.find();
db.employees.find().skip(1);
db.employees.find().skip(1).limit(1);
db.employees.find({ department: "IT" });

db.employees.find(
  { department: { $eq: "IT" } },
  { _id: 0, name: 1, salary: 1 }
);

db.employees.find({ salary: { $gt: 3000 } }, { _id: 0, name: 1, salary: 1 });

db.employees.find({ salary: { $gte: 3000 } }, { _id: 0, name: 1, salary: 1 });

db.employees.find({ salary: { $lt: 3000 } }, { _id: 0, name: 1, salary: 1 });

db.employees.find(
  { salary: { $lte: 3000 }, department: "IT" },
  { _id: 0, name: 1, salary: 1 }
);

db.employees.find(
  { $or: [{ salary: { $lte: 3000 } }, { department: "IT" }] },
  { _id: 0, name: 1, salary: 1 }
);

db.employees.find(
    {$or:[{},{}]}
)

db.employees.find({department:{$eq:"IT"}})

db.employees.find({department:{$ne:"IT"}})



db.employees.updateOne(
    {email: "mike@gmail.com"},
    {salary: 5000}
)


db.employees.updateMany(
    {},
    {$set:{points:1}}
)


db.employees.updateMany(
    {department:"IT"},
    {$inc:{points:1}}
)


db.employees.updateMany(
    {department:"IT"},
    {$pull:{points:7}}
)
db.employees.updateMany(
    {department:"IT"},
    {$push:{points:7}}
)


db.employees.updateMany(
    {},
    {$addToSet:{location:"LA"}}
)


db.employees.updateMany(
  {},
  { $set: { points: [3] } }
)
