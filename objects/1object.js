//OBJECTS are used to create a complex data Structure 


//Singleton
//used to create instance of a class

//object literals

//creating a symbole
const mySym= Symbol("key1")

const jsuser= {
    name:"abhay",
    [mySym]:"mykey1",
    age: 20,
    email:"abhay@google.com",
    location: "kanpur",
    isloggedin:false,
    lastlogindays:["Monday","Tuesday"]
}

console.log(jsuser.email);
console.log(jsuser["age"]);
console.log(jsuser.name);

//change the object value
jsuser.email="abhaypsit@google.com"
console.log(jsuser.email);
//freeezing the object values
Object.freeze(jsuser)
jsuser.email="abhaypsitmca@google.com"//no vchanges in object and no error shown


