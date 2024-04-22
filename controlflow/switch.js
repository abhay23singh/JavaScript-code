const month="october"
switch (month) {
    case "jan":
        console.log("january");
        break;
    case "feb":
        console.log("February");
        break;
    case "mar":
        console.log("March");
        break;
    case "october":
        console.log("October");
        break;

    default:
        console.log("print default");
        break;
}


//+++++++++++++++++++ Truthy & Falsy Values +++++++++++++++++++++


//false value
// false, 0, -0, BigInt, 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

//Nullish coaleshing Operator (??): null undefined 

let val1;
// val1 = 5 ?? 10;
// val1 =   null ?? 10;
val1 = undefined ?? 5;
console.log(val1);
