                                    // SORTING IN JAVASCRIPT.
// Agenders for the day
// 1- Sorting An Array Of Alphabetical Elemens.
// 2- Sorting An Array Of Numerical Elements
    // a- Using The Compare Function.
    // b- Using The Random Order.
    // c- Using The Math Min/Max Apply Methods TO Return The Highest And Lowest Value In An Array.
    // d- Home Made Method.
    // Sorting An Array Of Object.


// 1- Sorting An Array Of Alphabetical Elemens.
var materials = ["shoes", "apple", "houses", "tables", "swtches", "politics", "computers", "cars", "technology", "wood-works"];
document.getElementById("materials").innerHTML = materials;
function sortItems(){
    document.getElementById("materials").innerHTML = materials.sort();
}

// 2- Sorting An Array Of Numerical Elements Accending order.
var examScores = [33, 97, 100, 3, 1, 45, 91, 23, 58, 209, 57];
document.getElementById("scores").innerHTML = examScores;

function myExamScores(){
    examScores.sort(function(a, b)
    {return a - b})
    document.getElementById("scores").innerHTML = examScores;
};

// 2- Sorting An Array Of Numerical Elements Deccending order.
// The Only Difference Is Subtracting b Fron a
var testScores = [9, 79, 46, 12, 32, 368, -2, 234];
document.getElementById("scores2").innerHTML = testScores;

function myTestScores(){
    testScores.sort(function(a, b)
    {return b - a})
    document.getElementById("scores2").innerHTML = testScores;
};


// b- Using The Random Order.
var numbers = [2, 9, 1, 78, 0, 23, 63, 865];
document.getElementById("numbers").innerHTML = numbers;

function randomSorting(){
    numbers.sort(function(a, b)
    {return 0.5 - Math.random()})
    document.getElementById("numbers").innerHTML = numbers;
}


// c- Using The Math Min/Max Apply Methods TO Return The Highest And Lowest Value In An Array.
var points = [334, 65, 09, 12, 3, 08, 24,];
document.getElementById("higherValue").innerHTML = points;

function getHigherValue(arr){
    return Math.max.apply(null, arr)

}
document.getElementById("values").innerHTML = "The Highest Value Is " + getHigherValue(points);

var scores = [23, 0, 3, 73];
document.getElementById("lowestValue").innerHTML ="The Lowest Value Is " + lowestValue(scores);

function lowestValue(arr){
    return Math.min.apply(null, arr)
}
document.getElementById("scoresvalue").innerHTML = scores;



// d- Home Made Method.
var exams = [23, 4, 64, 75, 3];
document.getElementById("demo").innerHTML ="highest is " + myHomeFunction(exams);
function myHomeFunction(arr){
    var len = arr.length;
    var max = -Infinity;
    while(len --){
        if (arr[length] > max){
            max = arr[len];
        }
    }
    return max
}
var exams = [23, 4, 64, 75, 3];
document.getElementById("demo2").innerHTML ="lowest is " + myHomeFunctionValue(exams);
function myHomeFunctionValue(arr){
    var len = arr.length;
    var min = Infinity;
    while(len --){
        if (arr[length] < min){
            min = arr[len];
        }
    }
    return min
}



var cars = [
    {Brand: "Toyota", year: 2000},
    {Brand: "Honda", year: 2020},
    {Brand: "Benz", year: 2050},
    {Brand: "BMW", year: 2010}
]

function displayCars(){
    document.getElementById("idName").innerHTML =
    cars[0].Brand + " " + cars[0].year + "<br>" +
    cars[1].Brand + " " + cars[1].year + "<br>" +
    cars[2].Brand + " " + cars[2].year + "<br>" +
    cars[3].Brand + " " + cars[3].year
}
displayCars()

function sortCars(){
    cars.sort(function(a, b){return a.year - b.year})
    displayCars()
}

var schools = [
    {state: "kano", fee: 26000},
    {state: "jigawa", fee: 20000},
    {state: "kaduna", fee: 150000},
    {state: "bauchi", fee: 30000}
];

function displaySchool(){
    document.getElementById("secondName").innerHTML =
    schools[0].state + " " + schools[0].fee + "<br>" +
    schools[1].state + " " + schools[1].fee + "<br>" +
    schools[2].state + " " + schools[2].fee + "<br>" +
    schools[3].state + " " + schools[3].fee
}
displaySchool()

function sortSchools(){
    schools.sort(function(a, b)
    {
        var x = a.state.toLowerCase();
        var y = b.state.toLowerCase();
        if (x < y){
            return -1
        }
        if (x > y){
            return 1
        }
        return 0
    })
    displaySchool()
}