//function body
// function sayHi(){
//     console.log("hi.....how r u ?");
// }

// let sayHi = function(){
//     console.log("I am a function stored in sayHi !!");
// }

//function call
// sayHi();

// console.log(sayHi());

// let value = sayHi();
// console.log(value);

// console.log(sayHi);


//HIGH ORDER FUNCTIONS : functions which accept functions as a argument !
//callback functions : functions which are passed into a functions as a argument !

function getFirstName(fullname){
    // firstname = fullname.split(" ")[0];
    // return firstname;
    firstname = fullname.split(" ");
    return firstname[0];
}

function getLastName(fullname){
    // lastname = fullname.split(" ")[1];
    // return lastname;
    lastname = fullname.split(" ");
    return lastname[1];
}

function sayHi(fullname,fun){
    let name = fun(fullname);
    console.log(name);
}

sayHi("Devender Kumar",getFirstName);
sayHi("Nitesh prajapati",getLastName);




