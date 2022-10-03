
        let menu=document.querySelector("#menu-icon");
        console.log(menu)
        let navbar=document.querySelector(".navbar");
        console.log(navbar)
        menu.addEventListener("click", function (){
            navbar.classList.toggle("active");
        });
        window.onscroll=() =>{
        navbar.classList.remove("active")
        };
   