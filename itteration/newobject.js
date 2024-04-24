// if we want to itterate in object then we use (For In) loop

const myObject={
    py:'Python',
    cpp:'C++',
    rb:'Ruby',
    swift:'Swift by Apple'
}
// console.log(myObject);
for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

// In intteration there are 2 different types of loop 
//for in loop & for of loop
//In (for In) loop it take value directly but in (for of) loop it take keys

