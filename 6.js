// array and object




// ----------------------------------------ARRAYS------------------------------------------------
// Array is used to store Element
let marks=[34,43,66,54,48,];
const fruits=['orange','mango','apple','watermelon',''];
const mix=['str',66,[3,7]];
const arr=new Array(23,44,79,'kiwi');
// console.log(marks);
// console.log(fruits[4]);
// console.log(mix);
// console.log(arr.length);
// console.log(Array.isArray(mix));
// when i am putting as a string it show flase
// console.log(Array.isArray('mix'));
// how to change the array element
arr[2] = 90;
// console.log(arr);


let val=marks.indexOf(48);
// console.log(val);

// mutating or modifying arrays
// marks.push(88);
// marks.unshift(33);
// remove the element from starting
// marks.shift();
// splice is  used to remove elements ,when we removing more than on element
// marks.splice(3 ,4);
// marks.reverse();
// this method change the position of real array
let marks2=[1,2,3,4]
marks=marks.concat(marks2)
// console.log(marks);

//-----------------------------------OBJECT----------------------------------------------------
// object is used to store key pair value
let myob={
    name:'blMj',
    work:'programming',
    isactive: true,
    mark:[2,3,45,5,7,5,6,5,6],
}
console.log(myob);
console.log(myob['isactive']);
console.log(myob.isactive);
