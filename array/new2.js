const newArray=[1,2222,3,30,7,332,0]
const newArray2=[5,44]
console.log( newArray.concat(newArray2));

// /find prime index+++++++++++++++++++++

function isPrime(element) {
    if (element % 2 === 0 || element < 2) {
      return false;
    }
    for (let factor = 3; factor <= Math.sqrt(element); factor += 2) {
      if (element % factor === 0) {
        return false;
      }
    }
    return true;
  }
  
  console.log(newArray2.findIndex(isPrime)); // -1, not found
  console.log([4, 6, 7, 9, 12].findIndex(isPrime)); // 2 (array[2] is 7)

  //sorting+++++++++++++++++

  const stringArray = ["Blue", "Humpback", "Beluga"];
  console.log(stringArray.sort());

  function aditya(a,b){
    return b-a;
  }

  console.log(newArray.sort(aditya));