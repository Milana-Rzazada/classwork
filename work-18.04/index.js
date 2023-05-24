//let arr = [1, 3, 4, 5, 6, 7, 8, 5, 4, 3, 2, 0];
//let arr1 = [45, 67, 54, 3, 2, 1, 56];
//let arr2 = [45, 67,  2, 1, 5,"lankaran", "baki", "masalli",54, 6,3, "lerik", "astara"];


//console.log("sort: ", arr2.sort());

//console.log("concat: " , arr.concat(arr1));

//console.log("copywithin:", arr.copyWithin(7,2));

//console.log("entries: ", arr.entries());

//console.log("every: ", arr.every(x=>x===8));

//console.log("fill: ", arr.fill(8));

//console.log("find: ", arr.find(x=>x>2));

//console.log("findindex: ", arr.findIndex(x=> x===2));

//arr.forEach(x=> console.log(x));

//console.log("join: ", arr.join("/"));

//console.log("forEach: " , arr.forEach(x=>console.log(x)));

//console.log(("map: ", arr.map(x=>x*3)));

//console.log("filter: ", arr.filter(x=>x>2));

//console.log("reverse: ", arr.reverse());

//console.log("sort: ", arr.sort());

//console.log("every: ", arr.every(x=>x===2));

//console.log("some: ", arr.some(x=>x===2));

//console.log("include: ", arr.includes(2));

//console.log("find: ", arr.find(x=>x>2));

//console.log("indexof: ", arr.indexOf(5));

// const arr = [
//          {
//            id: 4,
//            supplierId: 2,
//            categoryId: 3,
//            quantityPerUnit: "48 - 6 oz jars",
//            unitPrice: 22,
//            unitsInStock: 53,
//            unitsOnOrder: 0,
//            reorderLevel: 0,
//            discontinued: true,
//            name: "Chef Anton's Cajun Seasoning",
//            supplier: {},
//            category: {
//              id: 3,
//              description: "Desserts candies and sweet breads",
//              name: "Confections",
//            },
//          },
//          {
//            id: 5,
//            supplierId: 2,
//            categoryId: 2,
//            quantityPerUnit: "36 boxes",
//            unitPrice: 21.35,
//            unitsInStock: 0,
//            unitsOnOrder: 0,
//            reorderLevel: 0,
//            discontinued: true,
//            name: "Chef Anton's Gumbo Mix",
//          },
//          {
//            id: 6,
//            supplierId: 3,
//            categoryId: 2,
//            quantityPerUnit: "12 - 8 oz jars",
//            unitPrice: 25,
//            unitsInStock: 120,
//            unitsOnOrder: 0,
//            reorderLevel: 25,
//            discontinued: false,
//            name: "Grandma's Boysenberry Spread",
//          },
//          {
//            id: 7,
//            supplierId: 3,
//            categoryId: 7,
//            quantityPerUnit: "12 - 1 lb pkgs.",
//            unitPrice: 30,
//            unitsInStock: 15,
//            unitsOnOrder: 0,
//            reorderLevel: 10,
//            discontinued: false,
//            name: "Uncle Bob's Organic Dried Pears",
//          },
//          {
//            id: 8,
//            supplierId: 3,
//            categoryId: 2,
//            quantityPerUnit: "12 - 12 oz jars",
//            unitPrice: 40,
//            unitsInStock: 6,
//            unitsOnOrder: 0,
//            reorderLevel: 0,
//            discontinued: false,
//            name: "Northwoods Cranberry Sauce",
//          },
//          {
//            id: 9,
//            supplierId: 4,
//            categoryId: 6,
//            quantityPerUnit: "18 - 500 g pkgs.",
//            unitPrice: 97,
//            unitsInStock: 29,
//            unitsOnOrder: 0,
//            reorderLevel: 0,
//            discontinued: true,
//            name: "Mishi Kobe Niku",
//          },
//          {
//            id: 10,
//            supplierId: 4,
//            categoryId: 8,
//            quantityPerUnit: "12 - 200 ml jars",
//            unitPrice: 31,
//            unitsInStock: 31,
//            unitsOnOrder: 0,
//            reorderLevel: 0,
//            discontinued: false,
//            name: "Ikura",
//          },
//          {
//            id: 2,
//            supplierId: 1,
//            categoryId: 1,
//            quantityPerUnit: "24 - 12 oz bottles",
//            unitPrice: 19,
//            unitsInStock: 17,
//            unitsOnOrder: 40,
//            reorderLevel: 25,
//            discontinued: false,
//            name: "Chang",
//          },
//          {
//            id: 3,
//            supplierId: 1,
//            categoryId: 2,
//            quantityPerUnit: "12 - 550 ml bottles",
//            unitPrice: 10,
//            unitsInStock: 13,
//            unitsOnOrder: 70,
//            reorderLevel: 25,
//            discontinued: false,
//            name: "Aniseed Syrup",
//          },
//          {
//            id: 11,
//            supplierId: 5,
//            categoryId: 2,
//            quantityPerUnit: "1 kg pkg.",
//            unitPrice: 21,
//            unitsInStock: 22,
//            unitsOnOrder: 30,
//            reorderLevel: 30,
//            discontinued: false,
//            name: "Queso Cabrales 2",
//            supplier: {
//              id: 5,
//              companyName: "Cooperativa de Quesos 'Las Cabras'",
//              contactName: "Antonio del Valle Saavedra",
//              contactTitle: "Export Administrator",
//              address: {
//                street: "Calle del Rosal 4",
//                city: "Oviedo",
//                region: "Asturias",
//                postalCode: 33007,
//                country: "Spain",
//                phone: "(98) 598 76 54",
//              },
//            },
//            category: {
//              id: 4,
//              description: "Cheeses",
//              name: "Dairy Products",
//            },
//          },
//          {
//            id: 12,
//            supplierId: 5,
//            categoryId: 4,
//            quantityPerUnit: "10 - 500 g pkgs.",
//            unitPrice: 38,
//            unitsInStock: 86,
//            unitsOnOrder: 0,
//            reorderLevel: 0,
//            discontinued: false,
//            name: "Queso Manchego La Pastora",
//          },
//          {
//            id: 13,
//            supplierId: 6,
//            categoryId: 8,
//            quantityPerUnit: "2 kg box",
//            unitPrice: 6,
//            unitsInStock: 24,
//            unitsOnOrder: 0,
//            reorderLevel: 5,
//            discontinued: false,
//            name: "Konbu",
//          },
//          {
//            id: 14,
//            supplierId: 6,
//            categoryId: 7,
//            quantityPerUnit: "40 - 100 g pkgs.",
//            unitPrice: 23.25,
//            unitsInStock: 35,
//            unitsOnOrder: 0,
//            reorderLevel: 0,
//            discontinued: false,
//            name: "Tofu",
//          },
//          {
//            id: 15,
//            supplierId: 6,
//            categoryId: 2,
//            quantityPerUnit: "24 - 250 ml bottles",
//            unitPrice: 15.5,
//            unitsInStock: 39,
//            unitsOnOrder: 0,
//     reorderLevel: 5,
//            discontinued: false,
//            name: "Genen Shouyu",
//          },
//        ];

//        console.table(arr.sort(function (a,b){return (a.id>b.id)? 1 : (b.name>a.name)? -1 :0;}));
    

let students = [
    {
      ad: "Senuber",
      soyad: "Besirzade",
      yas: "23",
      kesir: false,
      hobbies: ["gitara", "resm", "mahni"],
    },
    {
      ad: "Zeyneb",
      soyad: "Xanizade",
      yas: "20",
      kesir: false,
      hobbies: ["musiqi", "gezmek"],
    },
    {
      ad: "Yusif",
      soyad: "Memmedov",
      yas: "28",
      kesir: false,
      hobbies: ["xarici dil", "alqoritm"],
    },
    {
      ad: "Cavid",
      soyad: "Zeynalov",
      yas: "22",
      kesir: false,
      hobbies: ["seir yazmaq", "xarici olkeler"],
    },
    {
      ad: "Yusif",
      soyad: "Tagiyev",
      yas: "23",
      kesir: false,
      hobbies: ["oyun", "futbol", "voleybol"],
    },
    {
      ad: "Adil",
      soyad: "Sefizade",
      yas: "21",
      kesir: false,
      hobbies: ["futbol", "voleybol", "at capmaq", "tarixi faklarla maraqlanmaq"],
    },
    {
      ad: "Adil",
      soyad: "Mediyev",
      yas: "28",
      kesir: false,
      hobbies: ["kofe duzeltmek", "jazz"],
    },
    {
      ad: "Vasif",
      soyad: "Ejderov",
      yas: "20",
      kesir: true,
      hobbies: ["futbol oynamaq", "masin surmek"],
    },
  ];

//1
//   function viewname(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i].ad);

//     }
    
//   }
//   viewname(students);


//2

// function adsoyad(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log("<"+arr[i].ad + " " + arr[i].soyad+">");        
//     }
// }
// adsoyad(students);


//3

// function ages(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].yas>24) {
//             console.log("<"+arr[i].ad + " " + arr[i].soyad+ " " +arr[i].yas+">");
//         }        
//     }
// }
// ages(students)



//4
// function kesr(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i].kesir === true)   {
//             console.log(`<${arr[i].ad +" "+ arr[i].hobbies}>`);
//         }     
//     }
// }
// kesr(students);

//5
// function tekrarlanma(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i+1; j < arr.length; j++) {
//             if(arr[i].ad === arr[j].ad)        {
//                 console.log(`<${arr[i].ad +" "+ arr[i].soyad}>`  +" "+`<${arr[j].ad +" "+ arr[j].soyad}>`);
//                         }
//         }
        
//     }
// }
// tekrarlanma(students)



//6

let arr1 = ["a", "e", "ə", "i",  "o", "ö", "u", "ü"];
  
     function saitler(arr) {
      let cavab = [];
      for (let i = 0; i < arr.length; i++) {
        let surname = arr[i].soyad.toLowerCase();
        let count = 0;
        for (let j = 0; j < surname.length; j++) {
          if (arr1.includes(surname[j])) {
            count++;
          }
        }
        if (count > 3) {
          cavab.push(arr[i].ad + " " + arr[i].soyad);
        }
      }
return cavab;   
 }
console.log(saitler(students));
    

//7
//function soyadOv(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i].soyad[arr[i].soyad.length-1] == "v" && arr[i].soyad[arr[i].soyad.length-2] == "o")  {
//             console.log(`<${arr[i].ad +" "+ arr[i].soyad}>`);
//         }      
//     }
// }
// soyadOv(students);