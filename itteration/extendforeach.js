// const coding=["js","c++","C","ruby","python"]

// const values = coding.forEach(function(item){
//     console.log(item);
//     return item
// })
// console.log(values);


const myNums=[1,2,3,4,5,6,7,8,9,10]

const nums= myNums.filter((num)=> num > 4) // explicitly return the value
const Nums= myNums.filter((num)=> {
    return num > 4
}) // return should be used to return the value


console.log(nums);

// now we can also do that by using for each 

const myNums2=[1,2,3,4,5,6,7,8,9,10]

myNums2.forEach((nums)=>{
    if(nums > 4){
        console.log(nums);
    }
})



