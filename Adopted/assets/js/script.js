
const select1 = document.querySelectorAll(".select1");
const textname = document.querySelectorAll(".textname");
const textcontent=document.querySelectorAll(".textcontent")
//console.log(textcontect)

textname.forEach(el => {
    el.addEventListener("click", function (e) {
        textcontent.forEach(elem=>{
            console.log(elem)
            elem.style.display="none"
        })
        //console.log("clicked",e.target.parentElement.nextElementSibling)
        e.target.parentElement.nextElementSibling.style.display="block";
        e.target.parentElement.nextElementSibling.style.transition="500ms";

        //e.target.parentElement.children[1].classList.toggle("text");
        // e.target.parentElement.parentElement.classList.toggle("select11");

// console.log(e.target);
    });
});