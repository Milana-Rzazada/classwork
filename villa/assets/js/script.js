let icon = document.querySelector(".icon");
let list = document.querySelector("ul");
let contact = document.querySelector(".contact");
let connect = document.querySelector(".connect");

icon.addEventListener("click",function(){
    list.classList.toggle("list");
    contact.classList.toggle("contact");
    connect.classList.toggle("connect");
});