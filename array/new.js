const newArray= [1,2,'3','abhay']
// console.log(newArray);

//adding the array element++++++++

newArray.push('aditya',45,70.3)
// console.log(newArray);

// removing the element+++++++++++

newArray.pop();
console.log(newArray);
console.log(newArray.pop());
console.log(newArray);

//shift element+++++++++++++++++++

newArray.shift();
console.log(newArray);

//unshift the array++++++++++++++++

newArray.unshift(23);
console.log(newArray);

//slice and splice+++++++++++++++++
//it doesn't manipulate the original array

const arr= [3,4,5,6,7,1]
const slicearr= arr.slice(1,3);
console.log(arr);
console.log(slicearr);


//splice array
//Splice will manipulate the original array while getting the splice element 

const splicearr=arr.splice(1,3);
console.log(arr);
console.log(splicearr);


//we can use "PUSH" element to add to array but the main arraqy will treat that array,
//as a new array element. 
//we s hould use "CONCAT" instead of "PUSH"

const anotherarr= [1,2,3,[4,5,2,9,[33,566,43]]]
