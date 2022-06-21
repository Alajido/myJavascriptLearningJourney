var myArray, text,
myArray = ["Orange", "Apple", "Cars", "Schools"]
myArray.push("I love js")
myArray.pop()

// checking if a value is an array in javascript
document.getElementById("qs").innerHTML = Array.isArray(myArray);
document.getElementById("qs").innerHTML = myArray instanceof Array;

// looping array element in javascript
text = "<ol>";
myArray.forEach(functionName);
text += "</ol>";
document.getElementById("test").innerHTML = text;

function functionName(value){
    text += "<li>" + value + "</li>"
}

// looping through an array in javascript

var names = ["john", "ali", "usman", "umar"];
var txt = "";

for(i = 0; i < names.length; i++){
    txt += names[i] + "<br>";
    document.getElementById("name").innerHTML = txt;
}

var trying = ["some", "try", "fail", "and", "win"]
var text = "";
for(i = 0; i < trying.length; i++){
    text += trying[i] + "<br>";
    document.getElementById("keepTrying").innerHTML = text;
};

// Associative Array in Javascript
var fruits = [];
fruits[0] = "mango";
fruits[1] = "tomato";
fruits[2] = "pineapple";

document.getElementById("asso").innerHTML = fruits.length;

var states = ["kano", "kaduna", "abuja"]
function check(){
    document.getElementById("time").innerHTML = states instanceof Array;
}

// getting the lenght of an element inside an array in javascript
var cars = ["bmw", "toyota", "benz", "honda"]
var getLength = cars.length;
console.log(getLength)
document.getElementById("id-name").innerHTML = cars[1].length;

// converting an arrat to string in javascript
var locations = ["africa", "asia", "america", "latins"]
document.getElementById("str").innerHTML = locations.toString();
document.getElementById("str").innerHTML = locations.join(" % ")

// shift method in javascript i.e removing the first element of an array 
var x = ["food", "drinks", "snacks",]
document.getElementById("shifting").innerHTML = x.shift();
document.getElementById("shifting1").innerHTML = x;

// unshift method in javascript adding element in the first position in an array
var z = ["rainnig", "sunny", "rainbow"]
document.getElementById("unshifting").innerHTML = z;

function toShift(){
    z.unshift("cloudy")
    document.getElementById("unshifting").innerHTML = z;
}


// splice in javascript 
var roomElements = ["chairs", "carpet", "fan", "fridge"]
document.getElementById("splicing").innerHTML = roomElements;

function splicingElements(){
    roomElements.splice(1, 0, "cillings","mats")
    document.getElementById("splicing").innerHTML = roomElements;
}

// removing array elements using the splice methods
var classRoom = ["books", "board", "chairs", "chalk"]
document.getElementById("removed").innerHTML = classRoom;

function removingElements(){
    classRoom.splice(0, 1)
    document.getElementById("removed").innerHTML = classRoom;
}

// concatinating array element in javascript 
var fFrnds = ["ali", "habu"];
var mFrnds = ["ummi", "hafsat"]
var sFnds = ["yusuf", "umar"]
document.getElementById("concat").innerHTML = fFrnds.concat(mFrnds, sFnds);
document.getElementById("concat").innerHTML = fFrnds.concat(["one","two", "three"])


var languages = ["Python", "Php", "Js", "C++"];
var listedItems = "";
for(var j = 0; j < languages.length; j++){
    listedItems += languages[j] + "<br>";
    document.getElementById("try").innerHTML = listedItems;
}

var frameWorks, listed;
frameWorks = ["bootsrap", "tailwind", "react", "angular"];

listed = "<ul>";
frameWorks.forEach(function1);
listed += "<ul/>";
document.getElementById("try2").innerHTML = listed;

function function1(value){
    listed += "<li>" + value + "</li>";
}


// slice nrtthod in javascript which create a new array frome the original one
var homeItems = ["palor", "ketchen", "sitting-room"];
var homeSlice = homeItems.slice(1);
document.getElementById("slicing1").innerHTML = homeItems;
document.getElementById("slicing").innerHTML = homeSlice;

// sorting an array in javascript
var games = ["football", "baseball", "vollyball", "cricket", "polo"];
document.getElementById("sortIt").innerHTML = games;
function sorting(){
    games.sort();
    document.getElementById("sortIt").innerHTML = games; 
}

// sorting numbers in javascript
var numbers = [19, 0, 200, 100, 89, 56, 47, -20];
document.getElementById("num").innerHTML = numbers;

function numericSorting(){
    numbers.sort(function(a,b) {return a - b});
    document.getElementById("num").innerHTML = numbers;
}

// random sorting in javascript
var randomNumbers = [12,3,5,78,05,856];
document.getElementById("random").innerHTML = randomNumbers;

function randomSorting(){
    randomNumbers.sort(function(c,d){return 0.5 - Math.random()})
    document.getElementById("random").innerHTML = randomNumbers;
}

// getting the highest and the smallest value inside javascript array
var lowestValue = [30, 45, 1, 90, 0, -1];
lowestValue.sort(function(a,b){return b - a})
document.getElementById("high").innerHTML = "the highest value is " + lowestValue[0];

var higherMarks = [1, 34, 67, 89,42, 90];
document.getElementById("domo").innerHTML = myArrayMax(higherMarks)

function myArrayMax(arr){
    return Math.max.apply(null, arr)
}
