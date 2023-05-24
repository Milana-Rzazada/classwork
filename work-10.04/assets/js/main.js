// for (let i = 256; i>1; i=i/2){
//     console.log("i: " , i);
// }

// for (let i=1; i<10; i++){
//     if(i===4){
//         console.log("sert odendi");
//         break;
//     }
//     console.log("i :" , i);
// }

// for (let i=1; i<10; i++){
//     if(i===2|| i===7 || i===9){
        
// continue;    }

//     console.log("i :" , i);
// }

// let num=1;
// while(num<=100000){
//     num=num*10;
//     if(num===1000){
//         break;
//     }
//     console.log("num: ",num);
// }

// let num=1;
// while(num<=100000){
//     num=num*10;
//     if(num===10 || num===1000){
//         continue;
//     }
//     console.log("num: ",num);
// 



//  let a=1;
//  let b=2;
//  let c=3;

//  if(a<b+c && a>b-c && b<a+c && b>a-c && c<a+b && c>a-b){
    
//          console.log("3bucaqdir");
//  }
//  else{
//      console.log("3bucaq deyil!");
//  }

// let a=5;
// let b=4;
// let c=4;

// if(a===b && b===c && a===c){
//     console.log("berabertereflidir");
// }
// else{
//     console.log("beraberterefli deyil");
// }


//  for (let i=1; i<=99; i++){
//      if(i % 6 === 0){
//          console.log("i: ", i);
        
//      }
    
//  }


// for(let i=1; i<=99; i++){
//     if(i%10===4){
//         console.log("i: ",i);
//     }
// }


// for(let i=1; i<=99; i++){
//     if(i%10 === Math.floor(i/10)){
//         console.log("i: ", i);
//     }
// }


// for(let i=11; i<=99; i+=11){
//     console.log(i);
// }

// console.log("6-ci");

// for(let i=10; i<=99; i++){
//     if(i%10 != Math.floor(i/10))
//     console.log("i: ", i);
// }


// console.log("7ci");
// for(let i=1; i<=10; i++){
//     for(let j=1; j<=10; j++){
//         console.log(i, "*", j, "=", i*j);
//     }
// }

// console.log("8ci");
// let h=1;
// for (let i=1; i<=3; i++){
//     h*=i;
// }

// console.log(h);


console.log("9-cu");
let s=0;
let fibo1 = 0;
let fibo2 = 1;
console.log(fibo1, fibo2);
for(let i=1; i<=20; i++){
s=fibo1+fibo2;
fibo1=fibo2;
fibo2=s;
console.log(s);}