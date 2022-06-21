// Iteration of Array in js
// 1 - forEach() method.
// 2- Array.map() method.
// 3- Array.filter() method.
// 4- Array.reduce() method.
// 5- Array.every() method.
// 6- Array.some() method.
// 7- Array.indexOf() method.
// 8- Array.find() method.
// 9- Array .findIndex() method.
// 10- Array lastIndexOf() method.


// 1 - forEach() method.
var txt = "";
var numbers = [1, 3, 6, 8, 78];
numbers.forEach(functionName);
document.getElementById("demo").innerHTML = txt
function functionName(value){
    txt = txt + value + "<br>";
}

var points, text;
points = [1,2.3, 5, 67, 894];
text = "<ul>";
points.forEach(myFunc);
text += "</ul>";
document.getElementById("demo2").innerHTML = text;
function myFunc(value){
    text += "<li>" + value + "</li>"
}


// 2- Array.map() method.
var values = [9, 3, 6, 2, 0, 3];
var SecondValues = values.map(mappingFunction);

function mappingFunction(value, index, arr){
    return value * index;
}
document.getElementById("mapIt").innerHTML = SecondValues;

// 3- filter() method
// var items = ["banana", "apple", "pineapple", "anter", "mango", "strewbarry"];
// var itemsFilter = items.filter(filterItems);
// function filterItems(value, index, arr){
//     return value.length > 5;
// }
// document.getElementById("filterIt").innerHTML = itemsFilter;

var items = [1, 2, 4, 5, 6, 7, 8, 10];
var itemsFilter = items.filter(filterItems);
function filterItems(value, index, arr){
    return value % 2 == 0;
}
document.getElementById("filterIt").innerHTML = itemsFilter;

var fruits = ["apple", "tree", "mango", "banana", "pineapple", "orange", "anter"];
var arrange = fruits.filter(arrangeIt);
function arrangeIt(value, index, arr){
    return value.startsWith("a");
}
document.getElementById("fruits").innerHTML = arrange;

var addition = [2, 56, 885, 3, 68];
var sum = addition.reduce(Summations, 100);
function Summations(total, value){
    return total + value
}
document.getElementById("summation").innerHTML = "The total value is " + sum;

var myFruits, tex, i, flen;
myFruits = ["mango", "yam", "banana","apple"]
flen = myFruits.length;
text = "<ul>";
for(i = 0; i < flen; i++){
    tex += "<li>" + myFruits[i] + "</li>";
    
}
text += "</ul>"
console.log(tex)