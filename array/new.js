const newArray= [1,2,'3','abhay']
 console.log(newArray);

//adding the array element++++++++

newArray.push('aditya',45,70.3)
console.log(newArray);

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

const new_another=anotherarr.flat(Infinity);
console.log(new_another);

// changing any type of data into array and cheking their type 

console.log(Array.isArray("abhay"));
console.log(Array.from("abhay"));
//we can take anything here  it will change into array

console.log(Array.from({name: "abhay"})); // we have to tell them that we use key or values array then it will not give empty array

