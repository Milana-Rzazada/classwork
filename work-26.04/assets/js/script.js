const one = document.querySelector(".one");
const images = document.querySelector(".images");

function computer(comp) {
    let ran = Math.floor(Math.random() *3);
    if(ran === 0){
        return "d";
    }
    else if(ran === 1){
        return "q";
    }
    else {
        return "k";
    }
}

function users(element) {
    element === element.toUpperCase();
    if((element === "d") || (element === "q") || (element === "k")){
        return element;
    }
    else{
        alert("Try again");
    }
}




document.body.addEventListener("keydown", function(e){
    console.log("key", e.key);
    switch(e.key){
        case "d":
            images.src = img[0].src
    }
})