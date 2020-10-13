// strings:propertise,methods and template literals

const name ="pika";
// see the space after you 
// const greet="how are you "; or
const greet="how are you";
// console.log(greet + " " + name);
// ------------------------------OR----------------------------
let html;
html = "this is my way " +
        "or sky way ";
// str function
html =html.concat("this ","str2");
// console.log(html);
// console.log(html.length);
// console.log(html.toLowerCase());
// console.log(html.toUpperCase());
// when i am converting in lower or upper it doea mean i am change the string it will remian the same
// console.log(html);
// --------------------------INDEXING------------------------------------------------
// console.log(html.indexOf('is'));
// console.log(html.indexOf('hello'));
// console.log(html.lastIndexOf('is'));
// console.log(html.charAt(2));
// console.log(html.endsWith("str2"));
// console.log(html.startsWith("this"));
// console.log(html.includes("way"));
// console.log(html.substring(0,12));
// console.log(html.slice(-9));
// console.log(html.split(""));
// console.log(html.replace("this","it"));


// -----------------------------template literals--------------------------------------
let fruit1='banana';
let fruit2='mango';
let myhtml=`hello ${name}
        <h1>who is this</h1> , ${greet}, what you want to eat ${fruit1} or ${fruit2}





`;
console.log(myhtml);

document.body.innerHTML=myhtml;