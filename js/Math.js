/* 

Math Object Methods
Method	Description
abs(x)	Returns the absolute value of x
acos(x)	Returns the arccosine of x, in radians
acosh(x)	Returns the hyperbolic arccosine of x
asin(x)	Returns the arcsine of x, in radians
asinh(x)	Returns the hyperbolic arcsine of x
atan(x)	Returns the arctangent of x as a numeric value between -PI/2 and PI/2 radians
atan2(y, x)	Returns the arctangent of the quotient of its arguments
atanh(x)	Returns the hyperbolic arctangent of x
cbrt(x)	Returns the cubic root of x
ceil(x)	Returns x, rounded upwards to the nearest integer
cos(x)	Returns the cosine of x (x is in radians)
cosh(x)	Returns the hyperbolic cosine of x
exp(x)	Returns the value of Ex
floor(x)	Returns x, rounded downwards to the nearest integer
log(x)	Returns the natural logarithm (base E) of x
max(x, y, z, ..., n)	Returns the number with the highest value
min(x, y, z, ..., n)	Returns the number with the lowest value
pow(x, y)	Returns the value of x to the power of y
random()	Returns a random number between 0 and 1
round(x)	Rounds x to the nearest integer
sin(x)	Returns the sine of x (x is in radians)
sinh(x)	Returns the hyperbolic sine of x
sqrt(x)	Returns the square root of x
tan(x)	Returns the tangent of an angle
tanh(x)	Returns the hyperbolic tangent of a number
trunc(x)	Returns the integer part of a number (x)


*/

/*


Math Object Properties
Property	Description
E	Returns Euler's number (approx. 2.718)
LN2	Returns the natural logarithm of 2 (approx. 0.693)
LN10	Returns the natural logarithm of 10 (approx. 2.302)
LOG2E	Returns the base-2 logarithm of E (approx. 1.442)
LOG10E	Returns the base-10 logarithm of E (approx. 0.434)
PI	Returns PI (approx. 3.14)
SQRT1_2	Returns the square root of 1/2 (approx. 0.707)
SQRT2	Returns the square root of 2 (approx. 1.414)

*/


// Math.random() function.

// return a random number from 1 to -1.
function getRandom(){
    document.getElementById("demo").innerHTML = Math.random();
};

// return a random number from 1 - 10.
function getRandomValue(){
    document.getElementById("demo2").innerHTML = Math.floor(Math.random() * 11);  
};
// return a random number from 1 - 10.
function getRandomValues(){
    document.getElementById("demo3").innerHTML = Math.floor(Math.random() * 10) + 1;  
}


// A Proper Random Function

function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}


// return numbers from 1 to 10.
function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


var myName = document.getElementById("name");
function fillIt(){
if (myName.value === ""){
    alert("fill the form");
}
else{
    alert("hello")
}
}