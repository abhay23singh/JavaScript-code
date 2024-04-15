//singelton object++++++++++ 

// const app1=new app1()


//non-singelton object++++++

const app2 ={}
app2.id="123abc"
app2.name="ABHAY"
app2.isloggedIn= false

// console.log(app2);

//object deconstruction+++++++++++

const course ={
    coursename:"JS course",
    price:2000,
    courseInstructor:"Hitesh"
}
const{courseInstructor:Instructor}=course
console.log(Instructor);


//