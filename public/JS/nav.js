// ----Variables------
const body = document.querySelector('body'),
  navItems = document.querySelectorAll('.nav-item'),
  menuCheckbox = document.querySelector('#menu');


let ubicacionPrincipal = window.pageYOffset;
let header = document.querySelector('header');
const home = document.querySelector('#home');

// ----Eventos-------
window.addEventListener('scroll', function () {

  if (home.getBoundingClientRect().bottom < 0) {
  let ubicacionActual = window.pageYOffset;
    
    if (ubicacionPrincipal >= ubicacionActual) 
    {
      header.classList.remove("inset-down")
      header.classList.remove("md:inset-down2")
    } 
    else 
    {
      header.classList.add("inset-down");
      header.classList.add("md:inset-down2");
    };

  ubicacionPrincipal = ubicacionActual;
    
  }; 
});

document.addEventListener("DOMContentLoaded", function () {
  scrollNav();
});

navItems.forEach(function (item) {
  item.addEventListener('click', inputChecked);
});

// ----Funciones-------

// Cambia el input a checked cuando se realiza click en un enlace del nav
function inputChecked() {
  menuCheckbox.checked = false;
}

// Agrega la clases al header cuando se encuentra pasa el top de 0px del body
function scrollNav() {
  const header = document.querySelector("header");

  window.addEventListener('scroll', function () {
    if (body.getBoundingClientRect().top < 0) 
    {
      header.classList.add("bg-black", "shadow-xl");
    } 
    else 
    {
      header.classList.remove("bg-black", "shadow-xl");
    }
  });
};