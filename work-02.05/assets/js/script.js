const formcst = document.querySelector(".formcst");
const inputtext = document.querySelector(".inputtext");
const searchinput = document.querySelector(".searchinput");
const allcountry = document.querySelector(".allcountry");
let count = document.querySelector(".count");


allcountry.addEventListener("click", function () {
    //console.log("salam");
    fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => {
            for (let i = 0; i < data.length; i++) {
                //console.log(data[i].name.common);
                const newcont = document.createElement("div");
                newcont.classList.add("country");
                count.classList.add("country")
                newcont.classList.add("content")
                let paytaxt = document.createElement('span');
                paytaxt.innerHTML = "Ölkənin paytaxtı: " + data[i].capital;
                newcont.appendChild(paytaxt);

                let resim = document.createElement('img');
                resim.src = data[i].flags.png;
                newcont.appendChild(resim);

                let ad = document.createElement('span');
                let xett2 = document.createElement('hr');
                ad.innerHTML = data[i].name.common;
                newcont.appendChild(ad);
                newcont.appendChild(xett2);
                ad.classList.add("ad");

                let qita = document.createElement('p');
                let xett3 = document.createElement('hr');
                qita.innerHTML = "Yerləşdiyi qitə: " + data[i].region;
                newcont.appendChild(qita);
                newcont.appendChild(xett3);

                let money = document.createElement('p');
                let xett4 = document.createElement('hr');
                money.innerHTML = "Valyuta: " + data[i].currencies;
                newcont.appendChild(money);
                newcont.appendChild(xett4);

                let car = document.createElement('p');
                let xett5 = document.createElement('hr');
                car.innerHTML = "Maşın seriyası: " + data[i].car.signs;
                newcont.appendChild(car);
                newcont.appendChild(xett5);

                let ehali = document.createElement('p');
                let xett1 = document.createElement('hr');
                ehali.innerHTML = "Ölkənin əhalisi: " + data[i].population;
                newcont.appendChild(ehali);
                newcont.appendChild(xett1);

                let phone = document.createElement('p');
                phone.innerHTML = "Nömrə başlığı: " + data[i].idd.root + data[i].idd.suffixes;
                newcont.appendChild(phone);
                count.appendChild(newcont);
            }
        });
});

searchinput.addEventListener("click", function () {

    console.log(inputtext.value);
    fetch("https://restcountries.com/v3.1/name/" + inputtext.value)
        .then(res => res.json())
        .then(data => {
            for (let i = 0; i < data.length; i++) {
                //console.log(data[i].name.common);
                const newcont = document.createElement("div");
                newcont.classList.add("country");
                count.classList.add("country")
                newcont.classList.add("content")
                let paytaxt = document.createElement('span');
                paytaxt.innerHTML = "Ölkənin paytaxtı: " + data[i].capital;
                newcont.appendChild(paytaxt);

                let resim = document.createElement('img');
                resim.src = data[i].flags.png;
                newcont.appendChild(resim);

                let ad = document.createElement('span');
                let xett2 = document.createElement('hr');
                ad.innerHTML = data[i].name.common;
                newcont.appendChild(ad);
                newcont.appendChild(xett2);
                ad.classList.add("ad");

                let qita = document.createElement('p');
                let xett3 = document.createElement('hr');
                qita.innerHTML = "Yerləşdiyi qitə: " + data[i].region;
                newcont.appendChild(qita);
                newcont.appendChild(xett3);

                let money = document.createElement('p');
                let xett4 = document.createElement('hr');
                money.innerHTML = "Valyuta: " + data[i].currencies.name;
                newcont.appendChild(money);
                newcont.appendChild(xett4);

                let car = document.createElement('p');
                let xett5 = document.createElement('hr');
                car.innerHTML = "Maşın seriyası: " + data[i].car.signs;
                newcont.appendChild(car);
                newcont.appendChild(xett5);

                let ehali = document.createElement('p');
                let xett1 = document.createElement('hr');
                ehali.innerHTML = "Ölkənin əhalisi: " + data[i].population;
                newcont.appendChild(ehali);
                newcont.appendChild(xett1);

                let phone = document.createElement('p');
                phone.innerHTML = "Nömrə başlığı: " + data[i].idd.root + data[i].idd.suffixes;
                newcont.appendChild(phone);
                count.appendChild(newcont);
            }
        });
});