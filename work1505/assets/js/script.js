const btn = document.querySelector(".btn");

btn.addEventListener("click", function(e){
    const comment = {
        text: "test comment",
        article_id: 3
    };
    const Khanim = {
        name: "Khanim",
        age: 22,
        education: "LDU"
    }
    console.log(JSON.stringify(Khanim));
      const options = {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(Khanim)
      }
      fetch("http://localhost:3000/suallar", options)
          .then(response => { return response.json() })
          .then(data => {
              console.log(data)
          });
e.preventDefault();
})