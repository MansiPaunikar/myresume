var areaofcircle = function(r){
    return 3.14*r*r;
}
console.log(areaofcircle(7));

// arrow function
var areaofcircle1 = (r)=> {
    return 3.14*r*r;
}
console.log(areaofcircle(7));

// callback function
var fun = (x)=> {
    x();
}
var fun1 = ()=> {    
    console.log("In fun1()");
}
fun(fun1);
var fun2 = ()=> {
    console.log("In fun2")}
fun(fun2);
fun(() => {
    console.log("I am function without name!!")
});

var fun3 = (even,odd,num)=> {
    if(num %2 == 0)
       even(num);
    else 
        odd(num);  

}

fun3((x) => {
    console.log(x + " is even")
}, (y)=> {
    console.log(y + " is odd")
},11);
