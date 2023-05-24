const btn = document.getElementById("btn")

btn.addEventListener('click', function onClick(event) {

  randomBackground = () => {
    let x = Math.floor(Math.random() * 256)
    let y = Math.floor(Math.random() * 256)
    let z = Math.floor(Math.random() * 256)
    let bgColor = `rgb(${x}, ${y}, ${z})`
    document.body.style.background = bgColor;
  }

  randomBackground()
  document.body.style.backgroundColor = 'randomBackground';

  const para = document.createElement("p");
  para.innerHTML = prompt("Adinizi daxil edin");
  para.style.border = "2px solid blue";
  para.style.color = "white";

  const removeButton = document.createElement("button");
  removeButton.innerHTML = 'x';
  removeButton.addEventListener('click', function(){
    para.remove();
  
  });
  para.appendChild(removeButton)
  document.getElementById("myDIV").appendChild(para);

  const deletall = document.getElementById("deletall");
  deletall.addEventListener('click', function(){
    myDIV.innerHTML = "";
  })

  const upping = document.getElementById("upping");

  upping.addEventListener("click", function (){
    para.ontimeupdate()
  });


})




const box = document.getElementById("box");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

let x = 0;
btn1.addEventListener("click", function () {

  x++;
  box.innerHTML = x;

});

btn2.addEventListener("click", function () {
  let eded = x <= 0 ? 0 : x--;
  console.log(eded);

  box.innerHTML = eded;
});


