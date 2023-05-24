
const quiz = document.querySelector(".quiz");
const bashla = document.getElementById("bashla");
const suallar = document.querySelector(".elaveet");


bashla.addEventListener("click", function(e){
  async function getdata2() {
    const quiz = document.querySelector(".quiz");
    const res = await fetch("http://localhost:3000/suallar");
    const data = await res.json();
    let count=0;
   let arr = [];
    for (let i = 0; i < data.length; i++) {
      const sual = document.createElement("tr");
      const ad = document.createElement("td");
      ad.innerHTML = data[i].sual;
      sual.appendChild(ad);
      // const xett1 = document.createElement("hr");
      // sual.appendChild(xett1);
  
      const sorguA = document.createElement("td");
      sorguA.innerHTML ="A) " + data[i].VariantA;
      sorguA.classList.add("sorgu");
      sual.appendChild(sorguA);
      // const xett2 = document.createElement("hr");
      // sual.appendChild(xett2);
  
      const sorguB = document.createElement("td");
      sorguB.innerHTML ="B) " + data[i].VariantB;
      sorguB.classList.add("sorgu");
      sual.appendChild(sorguB);
      // const xett3 = document.createElement("hr");
      // sual.appendChild(xett3);
  
      const sorguC = document.createElement("td");
      sorguC.innerHTML ="C) " + data[i].VariantC;
      sorguC.classList.add("sorgu");
      sual.appendChild(sorguC);
      // const xett4 = document.createElement("hr");
      // sual.appendChild(xett4);
  
      const sorguD = document.createElement("td");
      sorguD.innerHTML ="D) " + data[i].VariantD;
      sorguD.classList.add("sorgu");
      sual.appendChild(sorguD);
      // const xett5 = document.createElement("hr");
      // sual.appendChild(xett5);
  
      const sorguE = document.createElement("td");
      sorguE.innerHTML ="E) " + data[i].VariantE;
      sorguE.classList.add("sorgu");
      sual.appendChild(sorguE);
      // const xett6 = document.createElement("hr");
      // sual.appendChild(xett6);

     sual.classList.add("text");
         
        
     quiz.appendChild(sual);
     
      sual.addEventListener("click",function(e){
        //console.log(e.target);
        const cvb = e.target;
       arr.push(cvb);
        if(cvb.innerHTML === data[i].cavab){
          console.log("ok");
          count++;
          
        }
        else{
          console.log("no");
        }
        console.log(count);
    
        //console.log(arr[i].innerHTML);

        //console.log(data[i].cavab);
  
      //console.log(cvb.innerHTML);
  
        });
        const netice = document.createElement("button");
        netice.innerHTML="Scor";
        netice.addEventListener("click",function(el){
         // quiz.classList.toggle("count");
         console.log(count);
         if(arr[i].innerHTML ===data[i].cavab){
          el.target.style.backgroundColor = "green";
          sual.style.backgroundColor = "green";
          sual.style.color="white";

         }
         else{
          el.target.style.backgroundColor = "red";
          sual.style.backgroundColor = "red";
          sual.style.color="white";


         }
       sual.innerHTML ="Sizin düzgün cavabların sayı: " + count;
        });
        quiz.appendChild(netice);
     
       //console.log(arr);
  
      
      
    }
  
   
    }
   
    

    
  
  getdata2();
    e.preventDefault();
});

// bashla.addEventListener("click", function(e){
//   async function getdata() {
//     const quiz = document.querySelector(".quiz");
//     const res = await fetch("http://localhost:3000/suallar");
//     const data = await res.json();
//     let count=0;
//     let arr =[];
//     quiz.addEventListener("click",function(e){
//       console.log(e.target);
//       const cvb = e.target;
//     arr.push(cvb);
    
//       if(arr.cvb === data.cavab){
//         console.log("ok");
//         count++;
//       }
//       else{
//         console.log("no");
//       }
//       console.log(count);

    

//      });
 
//   console.log(arr);
    
//   }
//   getdata();
//   e.preventDefault();
//   });


