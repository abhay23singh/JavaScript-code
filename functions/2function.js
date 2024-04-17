// Shoping Cart 

// (...) Rest operator 
//by using this we can use multiple value in form of array 

function calculateCarPrice(...num1){
    return num1

}
console.log(calculateCarPrice(200,300,500))

//object handeling in function

const user ={
    username:"abhay",
    price:199
}

function handelObject(anyobject){
    console.log(`User is ${anyobject.username} and price is ${anyobject.price}.`);
}

// handelObject(user)
handelObject({
    username:"ABHAY",
    price:199
})

//Array handeling in js function

const newarray=[200,300,400,500]

function secondvalue(getArray){
    return getArray
}
// console.log(secondvalue(newarray));
console.log(secondvalue([200,300,400,500]))f