console.log("I'm the intro");

//top to down
//left to right

//data types -> int,char,string,double,float,long,boolean ,big int

//javascript : Number(Int,double,float,big int,long),Boolean(true,false),String('a',"devender"),undefined ,Object

//java,cpp : variables
//datatype variablename = value;
//int a = 10;

//ES6=> Ecma script 6

//let -> block scoped variable
//const -> block scoped variable

let a = 10;
let b = true;
let c = undefined;

console.log(a);
console.log(b);
console.log(c);

//if variable is not assigned a value ,it'll show undefined in intro

let d;
console.log(d);

if(a<"9"){
    // let f = "Devender";
    // console.log(f);
    // a = 20;
    let a =30;
    a++;
    // console.log(a); 
}
// console.log(a);  

//const =>constant
const pi = 3.14;
// pi = 320; //re-assignement in const is not allowed 
// console.log(pi); 

// ==(data type check nhi hota) and === (data type bhi check hoga)

console.log(10 == '10'); //return true

console.log(10 === '10'); //return false

//objects => key value pairs
// let movies = {}; //empty object

let data = {
    name : "devender",
    roll_no : "434",
    class : "cse-6b"
}

//access object keys
//dot notation 
// console.log(data.name);
// console.log(data.roll_no);

let key = "name";

// console.log(data.key); //undefined in object data

//bracket notation
console.log(data[key]);

data.key = "im the new value";

console.log(data);

//keys--- always unique
//values ---can be duplicate

//arrays
//int arr[] = [1,2,3,4];
//int arr[] = new int[10];

// let arr = [10,false,{
//     name : "devender",
//     roll_no : "434"
// },"hey,i'm a value"]

// console.log(arr);

// let arr2 = [10,false,data,"hey,i'm a value",[25,26,59]];

// console.log(arr2[4][1]);

//in loop
for(let k in data){  //k = key
    console.log(k);
}

for(let i =0;i<5;i++){
    console.log(i);
}