let navbar = document.querySelector("#navbarNav");
let lists =  document.querySelectorAll("#navbarNav ul li");
lists.forEach((e)=>{
    e.addEventListener("click",((e)=>{
        navbar.classList.remove("show");
    }))
})