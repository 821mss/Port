let contenedor = document.getElementById("contenedor")
let toggle = document.getElementById("toggle");

toggle.addEventListener("click", ()=>{
    toggle.classList.toggle("point")
})
contenedor.addEventListener("click", ()=>{
    contenedor.classList.toggle("point")
})
