const inputss = document.querySelector("#myInput");
const box = document.querySelector(".box");
//const unorder = document.getElementById("myUL");
async function data() {
    const res = await fetch("https://restcountries.com/v3.1/all#" + window.location.hash);
    const data = await res.json();
    let arr = [0];
    for (let j = 0; j < data.length; j++) {
        const list = document.createElement("li");
        const about = document.createElement("a");
        const newcard = document.createElement("div");
        const card2 = document.createElement("div");
        newcard.classList.add("newcard");
        about.innerHTML = "About";
        about.href = "./card.html#" + data[j].name.common;
        const br2 = document.createElement("br");
        const br3 = document.createElement("br");
about.classList.add("link");
       
        list.innerText = data[j].name.common;
        card2.appendChild(br2);
        newcard.appendChild(br3);
        //newcard.appendChild(card2);
        card2.appendChild(about);
      // box.appendChild(newcard);
        list.appendChild(about);
        box.appendChild(list);
        arr.push(list);

        list.classList.add("list");

        // list.addEventListener("click", function(f){
        //     const box = document.querySelector(".box");
        //     fetch("https://restcountries.com/v3.1/all/" + window.location.hash.slice(1))
        //         .then(res => res.json())
        //         .then(data => {
        //             for (let i = 0; i < data.length; i++) {
        //                 console.log(data[i]);
        //                 const newcard = document.createElement("div");
        //                 const card2 = document.createElement("div");
        //                 const link = document.createElement("a");
        //                 newcard.classList.add("newcard");
        //                 link.innerHTML = "About";
        //                 link.href = "./card.html#" + data[i].name.common;

        //                 const br2 = document.createElement("br");
        //                 const br3 = document.createElement("br");

        //                 card2.appendChild(br2);
        //                 newcard.appendChild(br3);

        //                 newcard.appendChild(card2);
        //                 card2.appendChild(link);
        //                 box.appendChild(newcard);
        //                 list.appendChild(box);



        //             }
        //         });
        // });

    }


    inputss.addEventListener("keyup", function (e) {
        //console.log(inputss.value)
        for (i = 1; i < arr.length; i++) {
            //const txtValue =list.innerText;
            if (
                arr[i].innerText.toUpperCase().includes(inputss.value.toUpperCase())
            ) {
                arr[i].style.display = "block";

            } else {
                arr[i].style.display = "none";
            }
        }
    });


}
data();

