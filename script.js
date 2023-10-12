//Arithmetic operators
//let x= 100+50 //literals
//x= a + b //variables
// operand, operator, and operand
//modulus operator (%) returns the division remainder
/*let a=5
let b=2
let z= a%b
console.log(z)
a++
a--
console.log (a)
//Icrement, decrement, exponentiation operators
let a=5
let b=2
let z= a**b
console.log(z)
a++
a--
console.log (a)

// Operator predence

let a=100+50*3
console.log(a)
//multiplication and division have higher precedence than addition and subtraction
let x=(100+50) * 3
console.log(x);
x=100+50-3
let y=100/50+2*125
console.log (y)
console.log(x)// when multiple operators are used together and with the same precedence, such as - and + and * and /, they are evaluated from left to right

// Numbers: only one type of numbers in JS as they can be written either with a decimal or without a decimal.

let x= 0.2 +0.1 // floating point arithmetics are not always accurate
console.log (x)
let y= ((0.2 * 10)+ (0.1*10))/10 // instead of dividing floating point numbers directly, it helps to first multiply them
console.log(y)

let x= 10
let y= 20
let z = "The result is: " +( x +y) // the result is 30
z= "The result is: " + x + y // the result  produced will be "the result is: 1020"
console.log (z) 
z="30"
let result=x+y+z
console.log(result)// the JavaScript interpreter works from left to right


// Numeric strings operations
let x= "100"
let y= "50"
let z = (x+y) // fails because JS uses the + operator to concatenate strings hence the interpreter concatenates the strings instead of trying to convert them into numbers as it does with other operations
z=(x/y) // all other operations except + are successfull when JS tries to convert the strings to numbers
console.log (z)


//arithmetic operations on non-numeric strings
let a= 100/ "Apple" // the result is NaN
a= 100/ "10" // the result is 10 since JS attempts to convert the string "10" to the number 10
console.log (a)


//outputing numbers from base 2 to base 36
let myNumber = 32
myNumber = myNumber.toString(10) // JavaScript default for displaying numbers is base 10
console.log(myNumber)

// Useful number methods
const lotsOfDecimal= 1.77773433333
const twoDecimalPlaces= lotsOfDecimal.toFixed(3)
console.log(twoDecimalPlaces)

const btn= document.querySelector("button")
const txt=document.querySelector("p")

btn.addEventListener("click", updateBtn);
function updateBtn(){
    if (btn.textContent==="Start machine"){
       btn.textContent="stop machine";
       txt.textContent="The machine has started!"
    }
    else{
        btn.textContent="Start machine"
        txt.textContent="The machine is stopped"
    }
}   */
console.log(23+7)
console.log(2+4+4+4+3+3)
console.log((4+6+9)/77)
let a=10
console.log(a)
console.log(9*a)
let b=7*a
console.log(b)
const max=57
const actual=max-13
const percentage=actual/max
console.log(percentage)
let num1=10
let num2=5
let sum=num1+num2
let difference=num1-num2
let product =num1*num2
let quotient=num1/num2
let remainder=num1%num2
console.log("Sum:", sum)
console.log("Difference", difference)
console.log("product:", product)
console.log("Quotient", quotient)
console.log("Remainder:", remainder)

let isGreater=num1>num2
let andResult=true&&false
let orResult=true||false
let notResult=!true

console.log("Is num1 greater than num2?", isGreater)
console.log("AND Result:", andResult)
console.log("OR Result:", orResult)
console.log("NOT Result:", notResult)