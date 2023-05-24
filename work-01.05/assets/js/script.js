const btn = document.querySelector(".btn");
const watch = document.querySelector(".watch")



// setTimeout(() => {
//     console.log('salam');
// }, 5000);


// let num = 0;
// let saygac;

// btn.onclick = ()=>{

//     if (btn.innerText === "Stop") {
//         saygac = setInterval(() => {
//                 num++;
//                 watch.innerText=num;
//              }, 1000);
//              btn.innerText = "Start";

//     } else {
//         btn
//     }
// }

// const saygac = setInterval(() => {
//     console.log("kesr is coming");
// }, 1000);

let num = 0;
let saat;
let saygac;
btn.onclick = () => {

    if (btn.innerText === "Start") {
        saygac = setInterval(() => {
            num++;
            watch.innerText = num;

        }, 100);
        btn.innerText = "Stop";

    }
    else {
        btn.innerText = "Start";
        clearInterval(saygac);
    }
};

function secondToMin(sec) {
    let second = sec % 60;
    let minute = (sec - second) / 60;
    minute < 10 ? (minute = "0" + minute) : null;
    second < 10 ? (second = "0" + second) : null;
    return `${minute}:${second}`;
};


