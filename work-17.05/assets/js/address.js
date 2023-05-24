const box= document.querySelector(".box");

fetch("https://northwind.vercel.app/api/customers/"+window.location.hash.slice(1))
.then(res=>res.json())
.then(data =>{
   
       const card = document.createElement("div");
       const card2 = document.createElement("p");
       const card3 = document.createElement("p");
       const text = document.createElement("a");

       card.classList.add("card");
      
       text.innerHTML = "Home";
       text.href = "./index.html";
card.innerHTML ="id: " + data.id;
card2.innerHTML ="City: " + data.address.city;
card3.innerHTML ="Country: "  +data.address.country;


   
     
       card.appendChild(card2);
       card.appendChild(card3);
       box.appendChild(card);
       card.appendChild(text);
      
        
    }
)