const body=document.querySelector("body"),navItems=document.querySelectorAll(".nav-item"),menuCheckbox=document.querySelector("#menu");let ubicacionPrincipal=window.pageYOffset,header=document.querySelector("header");const home=document.querySelector("#home");function inputChecked(){menuCheckbox.checked=!1}function scrollNav(){let e=document.querySelector("header");window.addEventListener("scroll",function(){body.getBoundingClientRect().top<0?e.classList.add("bg-black","shadow-xl"):e.classList.remove("bg-black","shadow-xl")})}window.addEventListener("scroll",function(){if(home.getBoundingClientRect().bottom<0){let e=window.pageYOffset;ubicacionPrincipal>=e?(header.classList.remove("inset-down"),header.classList.remove("md:inset-down2")):(header.classList.add("inset-down"),header.classList.add("md:inset-down2")),ubicacionPrincipal=e}}),document.addEventListener("DOMContentLoaded",function(){scrollNav()}),navItems.forEach(function(e){e.addEventListener("click",inputChecked)});