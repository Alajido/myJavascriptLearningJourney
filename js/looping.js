// const number = window.prompt(Number("Enter a number: "));
// console.log(Math.sqrt(number))
// console.log(Math.sqrt(64))

// for (let i = 0; i <= 12; i++){
//     if (i === 0){
//         console.log(i + " is even")
//     }else if (i % 2 === 0){
//         console.log(i + " is even")
//     }else{
//         console.log(i + " is odd")
//     }  
// }


var myList = [1,2,3,4,5,6,7,9,10,11,12];
myList.forEach(myFunction);
// console.log(myList); 
function myFunction(){
    for (x in myList){
        if (x === 0){
            console.log(x + " is even")
        }
        else if (x % 2 === 0){
            console.log(x + " is even")
        }else{
            console.log(x + " is odd")
        }
    }
}

// let getEvenNumbers = (num) => {
//     if (num % 2 === 0) {
//         document.writeln(num + "<br />");
//     }
// }
    
// const arr = [1, 2, 3, 4, 5, 6];
// arr.forEach(getEvenNumbers);



function clearScreen(){
    if (result.value === ""){
        document.getElementById("message")
    }else{
        alert("hello")
    }
}

function testing(){
    const test = "1234567890qwertyuiop"
    var pass = '';

    for (let i = 1; i <= 8; i++){
        let randomValue = Math.floor(Math.random() * test.length)
        pass += randomValue
    }
return valueses
}

result = testing()
console.log(testing)