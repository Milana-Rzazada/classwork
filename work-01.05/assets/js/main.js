fetch("https://restcountries.com/v3.1/name/azerbaijan")
    .then(res => res.json())
    .then(data => {
        const country = document.querySelector(".country");
        let ad = document.createElement('p');
        ad.innerHTML = data[0].name.common;
        country.appendChild(ad);
        ad.classList.add("ad");
        country.classList.add("content");

        let resim = document.createElement('img');
        let xett1 = document.createElement('hr');
        resim.src = 'https://flagcdn.com/w320/az.png';
        country.appendChild(resim);
        country.appendChild(xett1);

        let paytaxt = document.createElement('p');
        let xett2 = document.createElement('hr');
        paytaxt.innerHTML ="Ölkənin paytaxtı: " + data[0].capital[0];
        country.appendChild(paytaxt);
        country.appendChild(xett2);

        let ehali = document.createElement('p');
        let xett3 = document.createElement('hr');
        ehali.innerHTML ="Ölkənin əhalisi: "+ data[0].population;
country.appendChild(ehali);
country.appendChild(xett3);

let qisa = document.createElement('p');
let xett4 = document.createElement('hr');
qisa.innerHTML ="Ölkənin qısa adı: "+ data[0].fifa;
country.appendChild(qisa);
country.appendChild(xett4);

let link = document.createElement('p');
let xett5 = document.createElement('hr');
link.innerHTML = data[0].maps.googleMaps;
country.appendChild(link);
country.appendChild(xett5);

let qonsumuz = document.createElement('p');
let xett6 = document.createElement('hr');
qonsumuz.innerHTML="Qonşular: " +data[0].borders;
country.appendChild(qonsumuz);
country.appendChild(xett6);












        // console.log(data)
        // console.log("olkenin adi:", data[0].name.common)
        // console.log("paytaxt:", data[0].capital[0]);
        // console.log("ehali sayi:", data[0].population);
        // console.log("qisa ad:", data[0].fifa);
        // console.log("ikinci link:", data[0].maps.googleMaps);
        // console.log("qonsular:", data[0].borders);
        // for (let i = 0; i < data[0].borders.length; i++) {
        //     console.log("qonsu:", data[0].borders[i]);

        // }



    });






