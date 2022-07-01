var coding = ["hard", "easy", "joy", "money"];
var print = "<ul>";
coding.forEach(myFunction);
print += "</ul>";
document.getElementById("try").innerHTML = print;
function myFunction(value){
    print += "<li>" + value + "</li>"
}

var trying = ["some", "try", "fail", "and", "win"]
var text = "";
for(i = 0; i < trying.length; i++){
    text += trying[i] + "<br>";
    document.getElementById("keepTrying").innerHTML = text;
};


var names = ["john", "ali", "usman", "umar"];
var txt = "";

for(i = 0; i < names.length; i++){
    txt += names[i - 2] + "<br>";
    document.getElementById("name").innerHTML = txt;
    console.log(names)
}

var myPoints = [2, 45, 6, 75, 24];
document.getElementById("demo").innerHTML = myFunction(myPoints);

function myFunction(arr){
    var len = arr.length;
    var max = -Infinity;
    while(len --){
        if(arr[len] > max){
            max = arr[len];
        }
    }
    return max
}


const userName = 'jude';

