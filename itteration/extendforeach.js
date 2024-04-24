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
// console.log(nums);


// now we can also do that by using for each 


const myNums2=[1,2,3,4,5,6,7,8,9,10]

myNums2.forEach((nums)=>{
    if(nums > 4){
        // console.log(nums);
    }
})


// Now I am doing this whole thing by using  map method


const myNums3=[1,2,3,4,5,6,7,8,9,10]
const nums2= myNums3.map((num)=>{
    return num + 10
})
// console.log(nums2);

// let's see how to implement chaining 

const myNums4=[1,2,3,4,5,6,7,8,9,10]
const nums3= myNums4
.map((num)=>{
    return num  * 10
})
.map((num)=>{
    return num + 1
})
.filter((num)=>{
    return num > 40
})
console.log(nums3);