const body=document.querySelector("body"),navItems=document.querySelectorAll(".nav-item"),menuCheckbox=document.querySelector("#menu");let ubicacionPrincipal=window.pageYOffset,header=document.querySelector("header"),nav=document.querySelector("nav");const home=document.querySelector("#home");function inputChecked(){menuCheckbox.checked=!1}function scrollNav(){let e=document.querySelector("header");window.addEventListener("scroll",function(){body.getBoundingClientRect().top<0?e.classList.add("bg-black","shadow-xl"):e.classList.remove("bg-black","shadow-xl")})}window.addEventListener("scroll",function(){let e=window.pageYOffset;home.getBoundingClientRect().bottom<0&&(ubicacionPrincipal>=e?header.classList.remove("inset-down"):header.classList.add("inset-down"),ubicacionPrincipal=e),inputChecked()}),document.addEventListener("DOMContentLoaded",function(){scrollNav()}),navItems.forEach(function(e){e.addEventListener("click",inputChecked)});