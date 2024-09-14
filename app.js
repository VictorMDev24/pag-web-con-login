 

    const fondo = document.querySelector(".fondo")
    const loginlink = document.querySelector(".login-link")
    const resgistrarlink = document.querySelector(".resgistrar-link")
    const btn = document.querySelector(".btn")
    const iconocerrar = document.querySelector(".icono-cerrar")

    resgistrarlink.addEventListener("click", () =>{
        fondo.classList.add('active')
    }) ;


    loginlink.addEventListener("click", () =>{
        fondo.classList.remove('active')
    }); 


    btn.addEventListener("click", () =>{
        fondo.classList.add('active-btn')
    }) ;


    iconocerrar.addEventListener("click", () =>{
        fondo.classList.remove('active-btn')
    }) ;