// function sayHello(name, surname, age){
//     console.log("I am "  + name+ " " + surname+ " I am " + age);
// }

// sayHello("Milana", "Rzazada.", "22");

// sayHello()


// function calc(a,b) {
//     return a+b;

// }

// let result = calc(1,7);
// console.log(result);

// function calcNumsWithDecleration(a,b) {
//     return a+b;

// }
//  let calcNumsWithExpression = function (a,b) {
//     return a+b;

//  }

//  let calcNums =(a,b)=> (a+b);

//  console.log(calcNumsWithDecleration(1,4));
//  console.log(calcNumsWithExpression(1,4));
//  console.log(calcNums(1,4));

// 2 ededin toplanmasi
// function sum(a, b) {
//    return a + b;

// }

// console.log("cem", sum(3, 6));


// //2 eddin hasili
// function product(a, b) {
//    return a * b;

// }
// console.log("hasil", product(4, 6));


// //2 ededin bolunmesi
// function bolme(a, b) {
//    return a / b;

// }
// console.log("bolme", bolme(36, 6));


// //2 ededin chixilmasi

// function chixma(a, b) {
//    return a - b;

// }
// console.log("chixma", chixma(89, 62));

// //2 ededin muqayisesi
// function muqayise(a, b) {
//    if (a >= b) {
//       return a;
//    }
//    else {
//       return b;
//    }

// }

// console.log("en boyuk eded", muqayise(85, 54));


// //obyekt kimi chapa chixarma
// function obj(name, surname) {
//    return { name, surname }
// }

// console.log(obj("Milana", "Rzazada"));

// //4 ededin array kimi chap olunmasi

// function arr(a, b, c, d) {
//    return [a, b, c, d]

// }

// console.log(arr(2, 5, 6, 7));




//8  arrayin elementleri arasinda * olan ve stringe chevirmek
// let array = [1, 2, 3, 4, 5];
// function makestring(arr) {
//    let ifade = "";
//    for (let i = 0; i < arr.length; i++) {
//       ifade += arr[i] + "*";
//    }
//    ifade = ifade.substring(0, ifade.length - 1);
//    console.log(ifade);
// }
// makestring(array);

// //10

// function maksimum(arr) {
//    arr = [3, 5, 2, -8, 5, 92, -3]
//    let max = arr[0];
//    for (let i = 0; i < arr.length; i++) {
//       if (arr[i] > max) {
//          max = arr[i];

//       }
//    }
//    return max


// }
// console.log(maksimum(arr));

// //11

// function cemleme(arr) {
//    arr = [3, 5, 2, -8, 5, 92, -3]
//    let sum = 0
//    for (let i = 0; i < arr.length; i++) {
//       sum += arr[i]
//    }
//    return sum
// }
// console.log("arrayin elementlerinin cemi:", cemleme(arr));

// //12
// let arr1 = [3, 5, 2, -8, 5,  92, -3];

// function beraberelement(arr1) {
//    let beraber = [];
//    for (let i = 0; i < arr1.length; i++) {
//       for (let j = i + 1; j < arr1.length; j++) {
//          if (arr1[i] === arr1[j]) {

//             beraber.push(arr1[i]);

//          }
//       }
//    }
//    return beraber;
// }

// console.log("beraber elemtlerden ibaret array: ", beraberelement(arr1));


// //13

// function say(arr1) {
//    let count = [];
//    for (let i = 0; i < arr1.length; i++) {
//       for (let j = i + 1; j < arr1.length; j++) {
//          if (arr1[i] === arr1[j]) {

//             count++;

//          }
//       }
//    }
//    return count;
// }

// console.log("beraber elemetlerin: ", say(arr1));


// //14
let arr2 = [2, 9, -5, -4, "AzerBaycan", true, "LANKARAN", "LimOn", 182, 4, false, undefined, 98];

// function Types(arr) {
//    let numberArr = [];
//    let stringArr = [];
//    let booleanArr = [];
//    let undefinedArr = [];

//    for (let i = 0; i < arr.length; i++) {
//       if (typeof arr[i] === "number") {
//          numberArr.push(arr[i]);
//       } 
//       else if (typeof arr[i] === "string") {
//          stringArr.push(arr[i]);
//       } 
//       else if (typeof arr[i] === "boolean") {
//          booleanArr.push(arr[i]);
//       } 
//       else if (typeof arr[i] === "undefined") {
//          undefinedArr.push(arr[i]);
//       }
//    }

//    return [numberArr, stringArr, booleanArr, undefinedArr];
// }

// console.log(Types(arr2));





// //15

//  function TYPES(arr) {
//     let number_Arr = [];
//     let string_Arr = [];
//     let boolean_Arr = [];
//     let undefined_Arr = [];

//     for (let i = 0; i < arr.length; i++) {
//        if (typeof arr[i] === "number") {
//           number_Arr.push(arr[i]);
//        } 
//        else if (typeof arr[i] === "string") {
//           string_Arr.push(arr[i]);
//        } 
//        else if (typeof arr[i] === "boolean") {
//           boolean_Arr.push(arr[i]);
//        } 
//        else if (typeof arr[i] === "undefined") {
//           undefined_Arr.push(arr[i]);
//        }
//     }
//     return number_Arr.concat(string_Arr, boolean_Arr, undefined_Arr)
//  }
//  console.log(TYPES(arr2));



//minimum tek elementle maksimum cut elementin yerini deyismek
 let arr = [0, 1, -8, -7, 23, 1, 5, 3, 12, 4, 9, 81, 7, 11, 22, 31, 6];

 let max = arr[0];
 let min = arr[0];
 let maxIndex = 0;
 let minIndex = 0;

 for (let i = 0; i < arr.length; i++) {
   if (arr[i] % 2 == 0 && arr[i] != 0) {
     if (arr[i] > max) {
       max = arr[i];
       maxIndex = i;
     }
     if (max % 2 !== 0) {
       max = arr[i + 1];
     }
   } else if (arr[i] % 2 == 1 || Math.abs(arr[i]) % 2 == 1) {
     if (arr[i] < min) {
       min = arr[i];
       minIndex = i;
     }
   } else if (arr[i] == 0 && i == 0) {
     min = arr[i + 1];
     minIndex += 1;
   }
 }
 arr[maxIndex] = min;
 arr[minIndex] = max;
 console.log(arr);
 console.log(max);
 console.log("index: ",maxIndex);
 console.log(min);
 console.log("index: ",minIndex);


