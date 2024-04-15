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

const arr= [3,4,5,6,7,1]
const slicearr= arr.slice(1,3);
console.log(slicearr);
console.log(arr);
//splice array
const splicearr=arr.splice(1,3);
console.log(splicearr);
console.log(arr);

