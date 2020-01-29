console.log("Hello World");
var x = [1];
function scopeDemo(x1) {
    console.log(x1);
    console.log(x);
    let a = 3, b = 4, c = 5;
    x1[0] = 500;
    console.log(a);
    console.log(b);
    console.log(c);
    if(true) {
        var x = 0;
    }
}
<<<<<<< HEAD

=======
>>>>>>> 5d8fe604b09a7977b9cf21310e957ee9c41efca7
scopeDemo(x);
console.log(x);