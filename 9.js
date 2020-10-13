// function and scopes



// -----------------------function------------------------------------------
// function greet(name,thank='thanks a lot'){
//     console.log(`Happy birthday ${name}
//     ${thank}`);
// };
// function greet(name,thank='thanks a lot'){
//     let msg = `Happy birthday ${name}
//     ${thank}`
//     return msg
// };
const mygreet = function(name,thank='thanks a lot'){
    let msg = `Happy birthday ${name}
    ${thank}`
    return msg
};

let name="Shushant";
let name2="Ronaldo";
// let val = greet(name2,"thank you");
// let val = greet(name,);

// console.log(val);
// if you will not write return msg then console give ouput as undefined
let val = mygreet(name,);
// console.log(val)

// we can my function within the object
// it is also called as anonymous function
const myobj={
    name:'dhoni',
    game:function(){
       return 'cricket'},

};
console.log(myobj.game());

arr=['fruit','vegetables','furniture'];
arr.forEach(function(element,index,array){
    console.log(element,index)
})



// ------------------------------scopes----------------------------------------

// let and const has block level scope block means'{}'
// var has function level scope (global)
var i= 43
if(1){
    let i =234;
    console.log(i)
}

console.log(i);

function ui(name)
{
    let i = 9;
    console.log(i);
    return `This is a ${name} ui`;
}

console.log(ui("harry"), i)