// if else conditionals and switches 
// if else condition is use to make logic
// const age='18';
// const age=18;
// const age=28;
// const age=38;
// const age=43;
const age=0;
// const vary = 30;
const drive=true;

// === is use to when you exact the value and in int not a string(type is equal to the given type) ("")
// if (age===43){
//     console.log("you are below the age")
if (age!=4){
    console.log("you are below the age");
}
// else if(age===43){
//     console.log("you are is equal to the given age");
// }
// !== (type is equal to the given type)("")
if(age!==43){
    console.log("you is not equal to 65");
}

else {
    console.log("you are above the age");
}


// here !== is use because if vary is define then print if statement and to the print else statement(!== vary undefined nahi hoga then print is else other one) 
if (typeof vary !== 'undefined' ){
    console.log("vary is define");

}
else{
    console.log("vary is not define");
}



// &&(and) when both are true , ||(or) when both are flase
// if (drive && age<18){
//     console.log('yes you can drive');
// }
// else{
//     console.log('you cannot drive');
// }
// if (drive || age>18){
//     console.log('yes you can drive');
// }
// else{
//     console.log('you cannot drive');
// }




// console.log(age== 18? 'Age is 18' : 'Ag is not 18')


// switches
switch (age) {
    case 18:
        console.log('you are 18')
        
        break;
    case 28:
        console.log('you are 28')
        
        break;
    case 38:
        console.log('you are 38')
        
        break;

    default:
        console.log('your age is not define')
        break;
}



