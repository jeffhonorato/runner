const menuIcone = document.querySelector(".js-icone-menu");
menuIcone.addEventListener("click", () => {
    const nav = document.querySelector(".js-nav-menu"); 
    nav.classList.toggle("ativo");
})