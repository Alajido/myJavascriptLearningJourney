// test in javascript
// converting an array to string in javascript
// shift and unshift method
// splice method
//concatination meyhod
// slice method
//sorting method

// converting array to string 
var myArr = ["morning", "afternoon", "evening", "night"];
document.getElementById("str").innerHTML ="this is tostring method =" + myArr.toString();
document.getElementById("str2").innerHTML ="this is join method  =" + myArr.join("~");

// shift method and unshift
var states = ["kano", "jos", "abuja", "jigawa", "kaduna"];
document.getElementById("shft").innerHTML = states;

function shiftIt(){
    var removed = states.shift();
    document.getElementById("shft").innerHTML = states;
}


// unshifting in js
var locals = ["dkd", "fagge", "dala", "warawa", "kabo"];
document.getElementById("unshft").innerHTML = locals;

function shiftIn(){
    locals.unshift("wudil");
    document.getElementById("unshft").innerHTML = locals;
}

// splice method in js
var cars = ["bmw", "benz", "toyota", "mazda", "honda"];
document.getElementById("splicing").innerHTML = cars.splice(2, 0, "corolla", "truck");
document.getElementById("splicing").innerHTML = cars;


//number(2)
// deleting using the splice method in js
var markets = ["kwori", "farm center", "sabon gari", "dawanau"];
document.getElementById("spliceOut").innerHTML = markets;

function deleteIt(){
    markets.splice(0, 2);
    document.getElementById("spliceOut").innerHTML = markets;
}


// concatination
var ketchen = ["spoons", "plates", "pots", "fork", "gas"];
var ketchen2 = ["fridge", "stove"]
document.getElementById("materials").innerHTML = ketchen.concat(ketchen2);
document.getElementById("materials1").innerHTML = ketchen;

// slice in js
var Schools = ["kust", "north-west", "fud", "buk"];
document.getElementById("slicing").innerHTML = Schools.slice(1);
document.getElementById("slicing1").innerHTML = Schools;

// sorting
var computers = ["hp", "lenovo", "dell", "mac", "galaxy"]
var sorting = document.getElementById("sorts").innerHTML = computers.sort();

var marks = [2, 5, 98, 1, 0, 8644, 2000, 23, 5, -2344];
document.getElementById("sorting").innerHTML = marks;

function numberSort(){
    marks.sort(function(a, b){return a - b})
    document.getElementById("sorting").innerHTML = marks;
}

// sorting using the Math.max.apply method in js
var myScores = [1, 23465, 7, 355, 09, 56, 67];
document.getElementById("max").innerHTML ="my min score is " + myArrayMax(myScores);
function myArrayMax(arr){
    return Math.min.apply(null, arr)
}

var myMarks = [3, 67, 98, 21, 099, 659, 86];
document.getElementById("min").innerHTML = "my higher score is " + myMaxScore(myMarks);
function myMaxScore(arr){
    return Math.max.apply(null, arr)
}

// the best way to get the min and max of the element inside an array in js 
var examScores = [3, 8, 67, 94, 24, 79];
document.getElementById("best").innerHTML ="is " + myMaxExam(examScores);

function myMaxExam(arr){
    var len = arr.length;
    var max = -Infinity;
    while(len --){
        if (arr[len] > max){
            max = arr[len]
        }
    }
    return max
}

var testScores = [2, 57, 97, 3, 77, 6];
document.getElementById("best-min").innerHTML = "my lowest result is " + myTestFunction(testScores);

function myTestFunction(arr){
    var len = arr.length;
    var min = Infinity;
    while (len --){
        if (arr[len] < min){
            min = arr[len]
        }
    }
    return min
}

// sorting array of object based on years in js

var leaders = [
    {fullName: "Rabiu Musa", year:"2012"},
    {fullName: "Umar Abdullahi", year:"2020"},
    {fullName: "Nasir El-rufae", year:"2000"}
]

function displayLeaders(){
    document.getElementById("demo").innerHTML = 
    leaders[0].fullName + " " + leaders[0].year + "<br>" +
    leaders[1].fullName + " " + leaders[1].year + "<br>" +
    leaders[2].fullName + " " + leaders[2].year
}
displayLeaders()

function sortLeaders(){
    leaders.sort(function(a, b)
    {return a.year - b.year})
    displayLeaders()
}

// sorting array of Object based on names in js

var carModel = [
    {type: "Truck", year: 2006},
    {type: "Family", year: 2010},
    {type: "Sports", year: 2005}
]

function displayCarsModel(){
    document.getElementById("demo2").innerHTML = 
    carModel[0].type + " " + carModel[0].year + "<br>" +
    carModel[1].type + " " + carModel[1].year + "<br>" +
    carModel[2].type + " " + carModel[2].year
}
displayCarsModel()

function sortCarModel(){
    carModel.sort(function(a, b){
        var x = a.type.toLowerCase();
        var y = b.type.toLowerCase();
        if (x < y){return -1};
        if (x > y){return 1};
        return 0;
    })
    displayCarsModel()
}