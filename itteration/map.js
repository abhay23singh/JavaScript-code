//++++++++++++++ MAP +++++++++++++++

const map1 = new Map();
map1.set('name1',"Abhay")
map1.set('name2',"Aditya")
map1.set('name3',"Shivam")

// console.log(map1);

for (const [key,value] of map1){
    console.log(key,":-",'value');
}
//maps are itterrable but Objects are not
//In map if we use for in loop then it will give nothing 
