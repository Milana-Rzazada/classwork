const getdata = document.querySelector(".getdata");
const deletedata = document.querySelector(".deletedata");

getdata.addEventListener("click", function(){
async function getdata2(){
    const res = await fetch("https://northwind.vercel.app/api/categories");
    const data = await res.json();
    console.log(data);
}
getdata2();
});

deletedata.addEventListener("click", function(){
async function deletedata2(url,id){
    const res = await fetch(`${url}/${id}`, {method:"delete"});
    const data = await res.json();
    console.log(data);
}
deletedata2("https://northwind.vercel.app/api/categories",3);
});