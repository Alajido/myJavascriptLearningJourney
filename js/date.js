function showDate(){
    var showDate = new Date();
    document.getElementById("demo").innerHTML = showDate;
    console.log(showDate);
}


// The seven parameters of the date methods represents the thisYear, month, day, hours, minutes, seconds and milliseconds.
// you can omit some values and return the specific values of the date you wants. e.g you can only display the year and the month. etc

var thisYear = new Date(2022, 7, 8, 11, 47, 23, 9);
console.log(thisYear);

// new Date(dateString).
var d = new Date("july 06, 2022 12:01:00")
document.getElementById("demo2").innerHTML = d;

var dt = new Date();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
document.getElementById("demo3").innerHTML = months[dt.get()];

var toDay, someDay, text;
toDay = new Date();
someDay = new Date();
someDay.setFullYear(2030, 0, 10);
if (someDay > toDay){
    text = "hello";
}
else{
    text = "bye";
}
