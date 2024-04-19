//Imidiately Invoked Funtion Expression(IIFE)

// () first parenthesis is for Definition 
//() second parenthesis is for invoking the function

(function iif(){
    //this is a named IIFE
    console.log(`DB connect Database`);
})
();   // execution call
//; to end the function call

//we do iife because when we have problem from the global scope 
//like it polluted the code then we use  'IIFE' to remove the polluted codebase

(
   (name) => {
    //This is non named IIFE
        console.log(`DB Connected Database ${name}`);
    }
)("ABHAY")