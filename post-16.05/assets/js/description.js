const box = document.querySelector(".box");

fetch("https://northwind.vercel.app/api/customers/" +window.location.hash.slice(1))
.then(res => res.json())
.then(data => {
    console.log(window.location.hash.slice(1));
console.log(data.name);
console.log("https://northwind.vercel.app/api/customers#" +window.location.hash.slice(1));
const newcard = document.createElement("div");
const card2 = document.createElement("div");
const link = document.createElement("a");
const link2 =document.createElement("a");
link.appendChild(link2);
newcard.classList.add("newcard");
       
        link2.href = "./cardpage.html#"+ data.id;
        card2.classList.add("card2");
        link2.innerHTML="description"
 
        
        const br2 = document.createElement("br");
        const br3 = document.createElement("br");
        card2.innerHTML = data.companyName;
        card2.appendChild(br2);
        newcard.appendChild(br3);

        

       newcard.appendChild(card2);
       card2.appendChild(link);
       box.appendChild(newcard);

});