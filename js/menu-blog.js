const btnFechar = document.querySelector(".js-btn-fecharBlog");
const btnDescubra = document.querySelector(".js-btn-descubraAqui");
const scrollBarra = document.querySelector(".js-scroll-barra");

btnDescubra.addEventListener("click", () => {
   const blog = document.querySelector(".js-blog-corrida"); 
   blog.classList.add("ativo");
   scrollBarra.classList.add("ativo") 
});

btnFechar.addEventListener("click", () => {
    const blog = document.querySelector(".js-blog-corrida"); 
    blog.classList.remove("ativo");
    scrollBarra.classList.remove("ativo") 
 });



