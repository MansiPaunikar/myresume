//JSON => Javascript Object Notation

/*
    1. Enclosed in curly braces
    2. Contains ',' seperated key value pairs
    3. Each key value is seperated by a :
*/

var s1 = {
  "rno": 1,
  "name":"Mansi",
  "Marks": 80,
  "mobile": ["12345","67890"],
  "address": {"city": "Nagpur","state": "MH", "pin": "440002"},
  "fun": () => {
    console.log("In fun()")

  }
};
var sarr = [
 {
  "rno": 2,
  "name":"Mansi",
  "Marks": 80,
  "mobile": ["12345","67890"],
  "address": {"city": "Nagpur","state": "MH", "pin": "440002"},
  "fun": () => {
    console.log("In fun()")

  }
}, {
  "rno": 3,
  "name":"Mansi",
  "Marks": 80,
  "mobile": ["12345","67890"],
  "address": {"city": "Nagpur","state": "MH", "pin": "440002"},
  "fun": () => {
    console.log("In fun()")

  }
}, {
  "rno": 4,
  "name":"Mansi",
  "Marks": 80,
  "mobile": ["12345","67890"],
  "address": {"city": "Nagpur","state": "MH", "pin": "440002"},
  "fun": () => {
    console.log("In fun()")

  }
}
]


console.log(s1);
console.log(s1.marks);
console.log(s1.mobile);
s1.fun();
console.log(s1.address.state);

console.log(sarr[2]);

for(let i=0; i<sarr.length; i++)
{
    console.log(sarr[i].name)
    sarr[i].fun()
}
/*
    try to represent your resume in json format
*/


var myresume = {
    "personal" : {
        "name": "abd",
        "email": "mansi.paunikar2003@gmail.com"
    }
};