// const javascript = document.getElementById("javascript");
// javascript.style.color = "green";
// javascript.style.backgroundColor = "yellow";
// javascript.style.display = "flex";
// javascript.style.justifyContent = "center";
// javascript.style.alignItems = "center";
// javascript.style.fontSize = "60px";
// console.log(javascript.innerHTML);

// const javascript = document.getElementById("javascript");
// const btn = document.getElementById("btn")

// btn.addEventListener("click",function(){
//     const newElement  = document.createElement("h2");
//     let deyer = prompt("deyer");
//     newElement.innerText = deyer
//     newElement.style.border = "2px solid green"
//     javascript.appendChild(newElement);
// })


// javascript.onclick =function () {
//     javascript.style.color = "red";
//     alert("hello");
    
// }

// javascript.addEventListener("click",function(){
//     alert("1ci add event listenerden gelen");
//     javascript.style.color = "red";
// })

document.body.style.backgroundColor = "yellow";

const add = document.getElementById("add");
add.style.fontSize = "24px";
add.style.backgroundColor = "green";

const task1 = document.getElementById("task1")
task1.style.color = "brown";
task1.style.backgroundColor = "lightblue"
task1.innerHTML +=" text";

const task2 = document.getElementById("task2")
task2.style.color = "blue";
task2.style.backgroundColor = "yellow"
task2.innerHTML +=" text";


const task3 = document.getElementById("task3")
task3.style.color = "red";
task3.style.backgroundColor = "green"
task3.innerHTML +=" text";

const content = document.getElementById("tasks");
console.log(content.children);


 const x= document.getElementById("add").parentElement.nodeName;
console.log(x);

let btn = document.createElement("button");
btn.innerHTML = "Delete";
task1.appendChild(btn);

let btn1 = document.createElement("button");
btn1.innerHTML = "Edit";
task1.appendChild(btn1);

let btn2 = document.createElement("button");
btn2.innerHTML = "Delete";
task2.appendChild(btn2);

let btn3 = document.createElement("button");
btn3.innerHTML = "Edit";
task2.appendChild(btn3);


let btn4 = document.createElement("button");
btn4.innerHTML = "Delete";
task3.appendChild(btn4);

let btn5 = document.createElement("button");
btn5.innerHTML = "Edit";
task3.appendChild(btn5);



const text2 = document.getElementById("text");
add.addEventListener("click",function () {
    console.log(text2.value);
    text2.value="";

    
})





