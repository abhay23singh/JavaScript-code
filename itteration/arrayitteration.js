const coding=["js","c++","C","ruby","python"]
coding.forEach( function (val)  {
    // console.log(val);
})

// ++++++++++ By using arraow Function+++++++++++

coding.forEach((val) => {
    // console.log(val);
})

coding.forEach(
    (val,index) =>{
        //console.log(val,index);
    }
)

//Objects in Arrays

const myCoding = [
    {
        language:"javascript",
        langfile:"js"
    },
    {
        language:"java",
        langfile:"java"
    },
    {
        language:"Python",
        langfile:"py"
    }

]
myCoding.forEach(
    (item) => {
        console.log(item.language,item.langfile);
    }
)