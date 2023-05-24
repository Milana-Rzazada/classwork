let countries = document.querySelector(".countries");

async function getdata2() {
    const res = await fetch("https://restcountries.com/v3.1/all");
    const data = await res.json();
    let count = 0;
    for (let i = 0; i < data.length; i++) {
        const list = document.createElement("tr");
        const lists = document.createElement("td");
        count++;
        lists.innerHTML = count;
        list.appendChild(lists);

        const ad = document.createElement("td");
        ad.innerHTML = data[i].name.common;
        list.appendChild(ad);
        const paytaxt = document.createElement("td");
        paytaxt.innerHTML = data[i].capital;
        list.appendChild(paytaxt);
        const population = document.createElement("td");
        population.innerHTML = data[i].population;
        list.appendChild(population);
        const bayraq = document.createElement("td");
        const sekil = document.createElement("img");
        sekil.src = data[i].flags.png;
        sekil.classList.add("img");
        bayraq.appendChild(sekil);
        list.appendChild(bayraq);

        const sil = document.createElement("td");
        const btn = document.createElement("button");
        btn.innerHTML = "delete"
        sil.appendChild(btn);
        list.appendChild(sil);
        btn.addEventListener("click", function () {
            list.remove();
        });


        const editup = document.createElement("td");
        const btn1 = document.createElement("button");
        btn1.innerHTML = "edit"
        editup.appendChild(btn1);
        list.appendChild(editup);

        editup.addEventListener("click", function () {
            const inputtext = document.createElement("td");
            const added = document.createElement("input");
            const btn2 = document.createElement("button");
            btn2.innerHTML = "add";
            added.addEventListener("keyup", function () {
                population.innerHTML = " ";
                population.innerHTML += added.value;
                btn2.addEventListener("click", function () {
                    population.innerHTML = added.value;
                });
                
            });

            inputtext.appendChild(added);
            list.appendChild(inputtext);
            list.appendChild(btn2);

        });

        countries.appendChild(list);

    }
    //console.log(data);

}
getdata2();


