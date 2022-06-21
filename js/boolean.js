var x = 6;
document.getElementById("demo").innerHTML = Boolean(x);
var button = document.getElementById("btn");
var body = document.querySelector("body");
button.addEventListener("click", function(){
    body.style.backgroundColor = "blue"
})

var box = document.getElementsByClassName("box");
var colorBtn = document.getElementById("btn2");
var myColorList = ["red", "blue", "green", "pink", "orange", "gray"];
var counter = 0;

colorBtn.addEventListener("click", function(){
    if(counter < myColorList.length){
        counter = 0;
    }
    box.style.backgroundColor = myColorList[counter];
    counter ++
})


var x = 4;
switch(x){
    case 1:
        document.write("monday")
        break
    case 2:
        document.write("tuesday")
        break
    case 3:
        document.write("wednessday")
    case 4:
        document.write("thursday")        
}