// const name = "Milana_Rzazada";
// const parol = "Mln01rzzd";
// let username;
// let userparol;
// username = prompt("Adinizi daxil edin:");
// userparol = prompt("parolu daxil edin:");
// if (name === username && parol === userparol ){
//     alert("Xosh gelmisiniz!");
// }
// else if(name === username || parol === userparol){
// alert("Ad ve ya parolu yeniden daxil edin!");
// }
// else{
//     alert("Ad ve ya parol yanlishdir!");
// }

// prompt("Adiniz nedir?");
// alert("Salam Milana");
// confirm("Bu doğrudur mu?");
// console.log("Rzazada");

//calculyator

// let usernum1;
// let usernum2;
// let emeliyyat;
// usernum1 = +prompt("birinci ededi daxil edin!");
// usernum2 = +prompt("ikinci ededi daxil edin!");
// emeliyyat = prompt("emeliyyati daxil edin!");
// if (emeliyyat === "+"){
//     console.log(usernum1 + usernum2);
// }
// else if(emeliyyat === "*"){
//     console.log(usernum1 * usernum2);
// }
// else if(emeliyyat === "-"){
//     console.log(usernum1 - usernum2);
// }
// else if(emeliyyat === "/"){
//     console.log(usernum1 / usernum2);
// }
// else {
//     console.log("bele emeliyyat yoxdur!");
// }


//AYLAR
// let month = prompt("ayin adini daxil edin!");


// if(month === "January" || month === "March" || month === "July" || month === "August" || month === "October" || month === "December"  ){
//     alert(`${month}` + " has 31 days");
// }
// else if(month === "February"){
//     alert("February has 28 or 29 days");
// }
// else if(month === "April" || month === "June" || month === "September" === month === "November"){
//     alert( `${month}` + " has 30 days");
// }


// else{
//     alert("Bele ay yoxdur!");
// }



//Ededin cut ve ya tek olmasini yoxlayin
// let number;
// number = +prompt("ededi daxil edin!")
// if(number%2 !== 0){
//     alert("eded tekdir!");
// }
// else if(number === 0){
//     alert("eded ne cutdur ne de tek!");
// }
// else{
//     alert("eded cutdur!");
// }

//azalan sira ve ya artan sira

let a;
let b;
let c;
a = +prompt("birinci ededi daxil edin!");
b = +prompt("ikinci ededi daxil edin!");
c = +prompt("üçüncü ededi daxil edin!")
if(a>=b && b>=c && a>=c){
    alert("azalan sira: " + `${a} ` + `${b} ` + `${c}`  +" artan sira: " + `${c} ` + `${b} ` + `${a}`);
    // alert("artan sira:" + `${c} ` + `${b} ` + `${a}`);
}
else if(a>=b&&c>=b&&a>=c){
    alert("azalan sira: " + `${a} ` + `${c} ` + `${b}` + " artan sira: " + `${b} ` + `${c} ` + `${a}`);
    // alert("artan sira:" + `${b} ` + `${c} ` + `${a}`);
}
else if(b>=a&&b>=c&&a>=c){
    alert("azalan sira: " + `${b} ` + `${a} ` + `${c}` + " artan sira: " + `${c} ` + `${a} ` + `${b}`);
    // alert("artan sira:" + `${c} ` + `${a} ` + `${b}`);
}
else if(b>=a&&b>=c&&c>=a){
    alert("azalan sira: " + `${b} ` + `${c} ` + `${a}` + " artan sira: " + `${a} ` + `${c} ` + `${b}`);
    // alert("artan sira:" + `${a} ` + `${c} ` + `${b}`);
}
else if(c>=a&&c>=b&&a>=b){
    alert("azalan sira: " + `${c} ` + `${a} ` + `${b}` + " artan sira: " + `${b} ` + `${a} ` + `${c}`);
    // alert("artan sira:" + `${b} ` + `${a} ` + `${c}`);
}
else if(c>=a&&c>=b&&b>=a){
    alert("azalan sira: " + `${c} ` + `${b} ` + `${a}` + " artan sira: " + `${a} ` + `${b} ` + `${c}`);
    // alert("artan sira:" + `${b} ` + `${c} ` + `${a}`);
}
else{
    alert("ədədlər bir birinə bərabərdir!");
}