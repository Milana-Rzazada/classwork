let bg1 = document.querySelector(".bg1");
let back = document.querySelector(".back");

let mastercard = document.querySelector(".mastercard");
 let sun = true;
bg1.addEventListener("click", function(){
   
    if(sun){
    bg1.innerHTML = '<i class="fa-regular fa-moon"></i>';
    document.body.style.background = "grey";
    mastercard.style.backgroundColor = "grey";
    mastercard.style.color = "white";
sun =false;
}
    else{
        bg1.innerHTML = '<i class="fa-regular fa-sun"></i>';
        document.body.style.background = "white";
        mastercard.style.backgroundColor = "white";
        mastercard.style.color = "black";
        sun = true;
    }
});
