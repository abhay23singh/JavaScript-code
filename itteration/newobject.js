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