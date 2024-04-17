//{} // this defined the scope of program

let a=300 // this is a global scope, so that we can run it anywhere in code

if(true){
    const a=10
    let b=20
    // console.log(a);
}
// console.log(a);
// console.log(b); //it give us error because "b" is decleared as a block scope


//Nested Scope++++++++++++++++++++++++++

function one(){
    const a="abhay"
    function two() {
        b="pratap"
        // console.log(a);
    }
    two()
// console.log(b);
}
one()


//++++++++++++++++++Intrsting funtion declearation +++++++++++++++++++++


console.log(add_two(5))
function add_two(num){
    return num+1
}

// console.log(numbers(120))  // this is a turm called hosting 
const numbers= function (num){
    return num+1
}
console.log(numbers(120))
