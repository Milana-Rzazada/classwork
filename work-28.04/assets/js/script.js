// fetch("https://northwind.vercel.app/api/categories")
// .then(res=>res.json())
// .then(data=>console.log(data))


const app = document.querySelector(".app");
const added = document.querySelector(".added");
const todoapp = document.querySelector(".todoapp");
const formcst = document.querySelector(".formcst");


formcst.addEventListener("submit", function (e) {
  const tasks = document.createElement("div");
  tasks.classList.add("task");
  tasks.innerText = added.value;



  const sil = document.createElement("button");
  sil.classList.add("content");
  sil.innerText = "Delete";

  sil.addEventListener('click', function () {
    tasks.remove();

  });


  const edit = document.createElement("button");
  edit.innerText = "Edit";
  edit.classList.add("content");

  edit.addEventListener("click", function () {
    tasks.contentEditable = true;
  });


  formcst.appendChild(tasks);
  tasks.appendChild(sil);
  tasks.appendChild(edit);
  e.preventDefault();
});

