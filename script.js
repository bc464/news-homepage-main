const btnNavEl = document.querySelector(".btn-mobile-nav");
const navbarEl = document.querySelector("nav");
btnNavEl.addEventListener("click", function(){
	navbarEl.classList.toggle("nav-open");
});