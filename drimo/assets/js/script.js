let icon = document.querySelector(".icon");
let list = document.querySelector("ul");
icon.addEventListener("click",function(){
    list.classList.toggle("list");
});

//const icons = document.querySelector(".icons");
const servicepost = document.querySelector(".servicepost");

async function getdata() {
    const res = await fetch("https://restcountries.com/v3.1/all");
    const data = await res.json();
    for (let i = 0; i < 8; i++) {
        let card  = document.createElement("div");
        let countryimage = document.createElement("img");
        countryimage.src = data[i].flags.png;
        countryimage.classList.add("image")
        card.appendChild(countryimage);
        let countryname = document.createElement("p");
        countryname.innerHTML = data[i].name.common;
        card.appendChild(countryname);
        
      

        let text = document.createElement('span');
         text.innerHTML ="Population: " + data[i].population;
         card.appendChild(text);
         const btn = document.createElement("button");
         btn.innerHTML = "Delete";
         card.appendChild(btn);
         btn.addEventListener('click', function(e){
             card.remove();
         });

         const btn2 = document.createElement("button");
         btn2.innerHTML= "Edit";
         card.appendChild(btn2);
         btn2.addEventListener('click', function(e){
            let inputtext = document.createElement("input");
            const btn3 = document.createElement("button");
            btn3.innerHTML = "Add";
    
            inputtext.addEventListener('keyup', function(e){
                text.innerHTML = " ";
                text.innerHTML +=inputtext.value; 
                btn3.addEventListener('click', function(e) {
                text.innerHTML = inputtext.value;
                inputtext.style.display = "none";
                btn3.style.display = "none";
                    


                });
            });
           card.appendChild(btn3);
       card.appendChild(inputtext);
        });

     
         servicepost.appendChild(card);
         card.classList.add("icons")



        
        
    }



}
getdata();

const btn4 = document.createElement("button");
servicepost.appendChild(btn4);
btn4.innerHTML = "Create";
btn4.addEventListener("click", function(e){
    getdata();

});
