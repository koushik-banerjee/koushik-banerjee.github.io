// arrays and methods
// const score = [2, 1, 7, 5, 3];
// console.log(score)
// console.log(score[0])
// score.push(9)
// console.log(score)
// console.log(score.length)
// const newScore = [...score,9]
// console.log(newScore)
// shopping cart app


let score =[2,1,34,5,6,27];


// score.forEach(value,index,array)((val)=>{})
score.forEach((user)=>{
    console.log(user);
})


// const myScore = score.map((val)=>{
//     return 5;
// }) //--> [5,5,5,5,5,5]

const myScore = score.map((val)=>{
    return val+5;
}) //--> [5 will be added to the numbers]

console.log(myScore)

score = score.map((val)=>{
    return val+5;
}) //--> [5 will be added to the numbers]

console.log(score)


const newScore = score.find((value)=> value===2 );
// const newScore = score.find((value)=>{
//     return value>2;
// })


const newScore1 = score.filter((value)=>{
    return value>2;
})

const sum = score.reduce((sum,value)=>{
    return sum+value;
},0)
// here 0 is for sum=0

