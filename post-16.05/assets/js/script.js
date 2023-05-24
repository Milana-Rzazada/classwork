const box = document.querySelector(".box");


fetch("https://northwind.vercel.app/api/customers#" + window.location.hash)
    .then(res => res.json())
    .then(data => {
        for (let i = 0; i < data.length; i++) {
            console.log(data[i]);
            const newcard = document.createElement("div");
            const card2 = document.createElement("div");
            const link = document.createElement("a");
            newcard.classList.add("newcard");
            link.innerHTML = "detaila get";
            link.href = "./cardpage.html#" + data[i].id;
            

            const br2 = document.createElement("br");
            const br3 = document.createElement("br");
            card2.innerHTML = data[i].companyName;
            card2.appendChild(br2);
            newcard.appendChild(br3);

            newcard.appendChild(card2);
            card2.appendChild(link);
            box.appendChild(newcard);



        }
    });