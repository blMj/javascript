// for,while and Do while loops

// for loop
// a+=1,a++ means same
for(let i=0;i<=99;i++){
    // console.log(i);
};

// while loop
let r=0;
while(r<100){
    // console.log(r);
    r++
};

// do while loop
// instead while loop do while loop is use because,it will run weather condiition is true or false 

let o = 0;
// do{
//     // console.log(o+1);
//     o++
// }while(o<10);

// break

// do{
//     if (o==55){
//         break;
//     }
//      console.log(o);
//     o++
// }while(o<100);


// continue


// while running you can see 54 is missing
do{
    if (o==54){
        o+=1
        continue;
    }
    // console.log(o);
    o++
}while(o<100);

// both are same
let arr=[3,4,5,6,7,8,9,0]
for(let i=0;i<arr.length; i++ ){
    const element=arr[i]
    console.log(element);
};

// arr.forEach(function(element){
//     console.log(element);
// })
arr.forEach(function(element,index,array){
    console.log(element,index,array);
});




//name is object and blMj is key 
let obj={
    name:'blMj',
    type:'none',
    age:-99,
    os:'kali' ,
}
for(let key in obj){
    console.log(`The ${key} of object is ${obj [key]}`);
};