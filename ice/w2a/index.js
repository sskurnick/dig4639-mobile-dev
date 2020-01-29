var x = 0;
console.log("Test");
function scopeDemo() {
    console.log(x)
    let a = 3, b = 4, c = 5;
    console.log(a);
    console.log(b);
    console.log(c);
    var x = 2;
    if(true) {
        var x = 0;
    }
}

function runOnLoad()
{
<<<<<<< HEAD
    //console.log(x);
=======
    // console.log(x);
>>>>>>> 5d8fe604b09a7977b9cf21310e957ee9c41efca7
    var submitButton = document.getElementById("submitButton");
    submitButton.addEventListener("click",onClick);
    var submitButton = document.getElementById("");
}
var a = 0;
a = 10;
console.log(a);
function onClick() {
    console.log("clicked!");
}
window.addEventListener("DOMContentLoaded", runOnLoad);