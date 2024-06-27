let box=document.querySelector(".box")
let btn=document.querySelectorAll(".btns")

box.style.transform="scale(1)"
box.style.transition="all 4s ease"

btn.forEach((btn) => {
    btn.addEventListener('click',()=>
        {
            box.style.display="none";
        
        })
});


