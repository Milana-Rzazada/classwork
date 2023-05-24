const formcst = document.querySelector("#formcst");

formcst.addEventListener("submit", function (e) {
  e.preventDefault();
    //form.classList.toggle("form");
    const sual = document.querySelector("#sual").value;
    const VariantA = document.querySelector("#VariantA").value;
    const VariantB = document.querySelector("#VariantB").value;
    const VariantC = document.querySelector("#VariantC").value;
    const VariantD = document.querySelector("#VariantD").value;
    const VariantE = document.querySelector("#VariantE").value;
    const cavab = document.querySelector("#cavab").value;



   
    fetch('http://localhost:3000/suallar', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        sual: sual,
        VariantA: VariantA,
        VariantB: VariantB,
        VariantC: VariantC,
        VariantD: VariantD,
        VariantE :VariantE,
        cavab :cavab

            
      })
    }).then(res => res.json())
      .then(res => console.log(res));
  
  });
