const box= document.querySelector(".box");

fetch("https://northwind.vercel.app/api/customers/"+window.location.hash.slice(1))
.then(res=>res.json())
.then(data =>{

       const card = document.createElement("div");
       const card2 = document.createElement("p");
       const card3 = document.createElement("p");
       const text = document.createElement("a");

       card.classList.add("card");
      
       text.innerHTML = "Address";
       text.href = "./address.html#" +data.id;
card.innerHTML = data.id;
card2.innerHTML = data.companyName;
card3.innerHTML = data.contactName;

   
     
       card.appendChild(card2);
       card.appendChild(card3);
       box.appendChild(card);
       card.appendChild(text);
      
        
    }
)