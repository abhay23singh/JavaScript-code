const arrow={
    username:"Abhay",
    price:999,

    welcomeMessage :function (){
        console.log(`${this.username}, welcome to website!`);
        console.log(this); 
        // "This" keyword tell us the current context,means it talked about the current values 
    }
}
 arrow.welcomeMessage()
arrow.username="vansh"
 arrow.welcomeMessage()

 console.log(this);

// it give us an empty object becauese there is no values in global object
// and it runs on Node.js environment

// But it give a windows object in browser because it already exist in browser

function thisfun() {
    username:"Abhay"
    console.log(this.username);
}
thisfun()//we can not use "this" function in a "funtion" it give us "undefined value"
        //But can use it in a object


const arrow2=function() {
    username:"Abhay"
    console.log(this.username);
}
arrow2()// it also give "undefined value"

//++++++++++++++++++ Arrow Functions ++++++++++++++++++

const arrow3 =() => {
    username:"Abhay"
    console.log(this.username);
}
arrow3()


//++++++++++++++++++ Basic Arrow Function ++++++++++++++++++

const addtwo= (num1,num2) => {// explicit return , when we use {}
    return num1+num2
}
// console.log(addtwo(4,6));

//+++++++ implicit RETURN ++++++++

// const addTwo= (num1,num2) => (num1+num2)

const addTwo= (num1,num2) => ({username:"Abhay"}) 
console.log(addTwo(4,6));