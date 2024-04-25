const mySum=[1,2,3]

// const mytotal=mySum.reduce(function(acc,currval){
//     console.log(`acc:${acc} and currval:${currval}`);
//     return acc+currval
// },4)
// console.log(mytotal);

const mytotal= mySum.reduce( (acc,currval) => {
    console.log(`acc:${acc} and currval:${currval}`);
    return acc*currval
},2)
console.log(mytotal);

// creating a shoping cart

const shoopingCart= [
    {
        course:"java",
        price:2999
    },
    {
        course:"python",
        price:999
    },
    {
        course:"data science",
        price:5999
    },
    {
        course:"Data Structure",
        price:29990
    },
]
const totalprice= shoopingCart.reduce( (acc,item)=> {
        return acc+ item.price
    },0)
    console.log(totalprice);
