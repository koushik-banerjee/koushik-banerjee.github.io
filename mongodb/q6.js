db.employees.find({$or:[{salary:{$gt: 3000}},{department: "IT"}]},{name:1})
db.employees.countDoucument();


db.employees.aggregate([
    {$match: {salary: {$gt: 2000}}},
    {$project: {name:1, salary:1}},
    {$sort : {name:-1}},
    {$limit: 1}
]);


db.employees.updateMany([
    {$},
    
])



db.orders.insertMany([
    {
        empId: ObjectId('685bb906d2c2215b2016c9b5'),
        orderValue:5000
    },
    {
        empId: ObjectId('685bb906d2c2215b2016c9b6'),
        orderValue: 3000
    }]
)



db.employees.aggregate([{
    $lookup: {
        from:"orders",
        localFeild: "_id",
        foreignFeild: "empid",
        as: "orders",

    }
},{$unwind:"$orders"},{$project: {name:1, salary:1, "orders.orderValue": 1}}])



db.empCountry.insertMany([
    {
        empId: ObjectId('685bb906d2c2215b2016c9b5'),
        Country: "India",
    },
    {
        empId: ObjectId('685bb906d2c2215b2016c9b6'),
        Country: "India",
    },
    {
        empId: ObjectId('685bb914d2c2215b2016c9b7'),
        Country: "India",
    },
    {
        empId: ObjectId('685bc9bb742f2e712016c9b5'),
        Country: "India",
    },
    {
        empId: ObjectId('685bc9bb742f2e712016c9b6'),
        Country: "India",
    },
    {
        empId: ObjectId('685bc9f5742f2e712016c9b7'),
        Country: "India",
    },
    {
        empId: ObjectId('685bc9f5742f2e712016c9b8'),
        Country: "India",
    },
])



db.employees.aggregate([{
    $lookup: {
        from:"orders",
        localFeild: "_id",
        foreignFeild: "empid",
        as: "orders",

    }
},{$unwind:"$orders"},{$project: {name:1, salary:1, "orders.orderValue": 1}}])
db.employees.aggregate([
    {
        $lookup: {
            from: "empCountry",
            localField: "_id",
            foreignField: "empId",
            as: "countryInfo"
        }
    },
    {
        $unwind: "$countryInfo"
    },
    {
        $project: {
            name: 1,
            salary: 1,
            country: "$countryInfo.Country"
        }
    }
]);


db.employees.aggregate([
    {$group: {_id: {country: "$country", name: "$name"},
    score: {$sum: "$score"}}},
])