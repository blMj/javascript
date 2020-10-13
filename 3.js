// datatypes


// -----------------Primitive datatype-------------
// strng
let name="mouse";
console.log('my name is '+name);
console.log('datatype is '+(typeof name));

// number  
let marks=43;
console.log('data type is '+(typeof marks));

// boolean
let lve=true;
console.log('datatype is '+(typeof lve));

// null
let nul=null;
console.log('datatype is '+(typeof nul));

// undefined
let undef=undefined;
console.log('datatype is '+(typeof undef));


// --------------------reference datatype--------------
// arrays
myarr=[1,2,3,4];
console.log('datetype is '+(typeof myarr)
);

// object literals
let mark = {
    pika: 43,
    mine: 77,
    goldduck:99,
}
console.log( typeof mark);


// function
function findname() {
    
}
console.log( typeof findname);

// date
let date = new Date();
console.log(typeof date);