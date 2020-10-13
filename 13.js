// html element selectors in javascript
// DOM selector
/* two types of element selector
single Element selector
multi Element selector
*/
// single element selector
let element = document.getElementById("myfirst");
// element = element.className;
// element = element.childNodes;
// element = element.parentNode;
// element.style.color = "green";
// element.innerText = ' blMj ';
// element.innerHTML = "<b> blMj </b>";
// console.log(element);

let sec = document.querySelector("#myfirst");
// sec=document.querySelector('.child')
// sec = document.querySelector("b");
// sec = document.querySelector("h1");
// sec = document.querySelector("div");
// sec.style.color = "green";
// console.log(sec);

// multi
// let elems = document.getElementsByClassName("child");
// elems = document.getElementsByClassName("container");
// console.log(elems[0])
// console.log(elems[1])
// console.log(elems[2])

// console.log(elems[0].getElementsByClassName('child'))
elems = document.getElementsByClassName("div");
console.log(elems);
Array.from(elems).forEach((element) => {
  console.log(element);
  element.style.color = "pink";
});

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }