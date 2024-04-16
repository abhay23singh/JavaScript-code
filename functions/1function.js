
function myname(){
console.log("A");
console.log("B");
console.log("H");
console.log("A");
console.log("Y");
}
myname() //myname is REFERENCE , () is Execution 

function add2no(number1,number2){  //(number1,number2) this is parameter
    console.log(number1+number2);
}
add2no(4,5)//4,5 is arguments

function addtwono(number1,number2){

    let result=number1 + number2
    return result
}
const result=addtwono(19,20)
console.log("Result:",result);

