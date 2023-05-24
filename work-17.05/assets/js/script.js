const box= document.querySelector(".box");

fetch("https://northwind.vercel.app/api/customers#"+window.location.hash.slice(1 ,2))
.then(res=>res.json())
.then(data =>{
    for (let i = 0; i < data.length; i++) {
       console.log(data[i]);
       const card = document.createElement("div");
       const card2 = document.createElement("p");
       const card3 = document.createElement("p");
       const text = document.createElement("a");

       card.classList.add("card");
     
       text.innerHTML = "About";
       text.href = "./about.html#" +data[i].id;
card.innerHTML = data[i].id;

       card.appendChild(text);
       card.appendChild(card2);
       card.appendChild(card3);
       box.appendChild(card);
       

        
    }
})