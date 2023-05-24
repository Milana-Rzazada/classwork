("use strcit");

// const arr = ["Milana", "Rzazada", "Sadiq"];

// console.log(arr);

// console.log("arrayin uzunlugu: ", arr.length);
// console.log(arr[arr.length-1]);
// console.table(arr);

// const arr = ["Milana", "Rzazada", "Sadiq" , 1, 2,3,4,7,9, "salam"];
// for (let i = 0; i< arr.length; i++) {
//     console.log(arr[i]);
    
// }

// let search = "salam";
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i] === search){
//         console.log(i, arr[i]);
//         break;

//     }
    
// }

// let arr=[];
// for(let i = 2; i<=20; i+=2){
//      arr.push(i);

// }
// console.log(arr);


// let number = 12345;
// let text = number.toString();
// let result = "";
// for(let i=0; i<text.length; i++){
//     result=result+ text[i]
//     console.log(text[i]);
// }
// console.log(result);




//  let arr = 455667;
//  let text= arr.toString();
//  let max=text[0];
//  for(let i=0; i<text.length; i++){
//      if(text[i]>max){
//          max=text[i];

        
//      }
    
//  }
//  console.log(max);




// let number = 12355;
// let text = number.toString();
// let cem=0;
// let hasil=1;
// let orta=0;
// for(let i=0; i<text.length; i++){
//     hasil*=text[i]
//     cem+=+text[i];
//     orta = Math.floor(cem/text.length); 
// }
// console.log(hasil ,cem, orta);



let number = 789654123;
let bolen = [];
for (let i = 1; i <= number; i++) {
  if (number % i === 0) {
    bolen.push(i);
  }
}
console.log(bolen);


