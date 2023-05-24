const box = document.querySelector(".box");

fetch("https://restcountries.com/v3.1/all#" +window.location.hash.slice(1))
.then(res => res.json())
.then(data => {
   // console.log(window.location.hash.slice(1));
//console.log(data.name.common);
//console.log("https://restcountries.com/v3.1/all/" +window.location.hash.slice(1));

const newcard = document.createElement("div");
const card2 = document.createElement("div");
const link = document.createElement("a");
const link2 =document.createElement("a");
link.appendChild(link2);
newcard.classList.add("newcard");
        link2.innerHTML="Back";
        link2.href = "./index.html#";
      console.log(data[0].name);
        
        const br2 = document.createElement("br");
        const br3 = document.createElement("br");
        card2.innerHTML = data[0].name;
        card2.innerHTML = 
        card2.appendChild(br2);
        newcard.appendChild(br3);

       newcard.appendChild(card2);
       card2.appendChild(link);
       box.appendChild(newcard);

});