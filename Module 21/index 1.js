let a = 15 ;
let b = 5 ;
document.write( a + b + "<br/>") ;  // Output : 20 ;
document.write( a - b + "<br/>") ;  // Output : 10 ;
document.write( a * b + "<br/>") ;  // Output : 75 ;
document.write( a / b + "<br/>") ;  // Output : 3 ;
document.write( a % b + "<br/>") ;  // Output : 0 ;

// JavaScript এ ৮ ধরনের Data Type আছেঃ

- String
- Number
- Bigint
- Boolean
- Undefined
- Null
- Symbol
- Object

// Types of JavaScript Operators

-   Arithmetic 
-   Assignment 
-   Comparison 
-   Logical 
-   String 
-   Conditional (Ternary) 
-   Bitwise 
-   Type 

// Function 

// 1.   Regular function 

function hi(a,b){
    document.write(a+b) ;
}
hi(10,20) ;

// Output : 30.

// 2.   Arrow function

message = (m,n) => {
    document.write(m-n) ;
}
message(30,15) ;

// Output : 15.

// 3.   IIF function

(() =>{
    document.write("I am a Imidieat Invoked Function") ;
})()

// Output : I am a Imidieat Invoked Function.

// 4.   Anonymous function

let myFun =(a,b) => {
    document.write(a+b) ;
}
myFun(20,55) ;

Output : 75.

// 5.   Function Return

function addTwo(a,b){
    let sum = a+b ;
    return sum;
}
let res = addTwo(20,8) + 41 ;
document.write(res) ;

// Output : 69