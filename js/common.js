// save to browser storage
function saveToLocalStorage(key, value){
  localStorage.setItem(key, JSON.stringify(value));
}

// read from browser storage
function readFromLocalStorage(key, defaultValue){
  var value = localStorage.getItem(key);
  if(value == null){
    return defaultValue;
  }else{
    return JSON.parse(value);
  }
}



// ⭐ highlight current page in navbar
var links=document.querySelectorAll("nav a");
var current=window.location.pathname.split("/").pop();

for(var i=0;i<links.length;i++){
 var link=links[i].getAttribute("href");

 if(link==current){
   links[i].classList.add("active");
 }
}

function setupNavbar(){

 var btn=document.getElementById("hamburger");
 var menu=document.getElementById("mobileMenu");

 if(btn && menu){
  btn.addEventListener("click",function(){
   menu.classList.toggle("open");
  });
}
}

window.addEventListener("DOMContentLoaded",setupNavbar);

/* ===== NAVBAR MOBILE MENU ===== */
document.addEventListener("DOMContentLoaded", function(){

  var btn = document.getElementById("hamburger");
  var menu = document.getElementById("mobileMenu");

  if(btn && menu){
    btn.onclick = function(){
      if(menu.style.display === "flex"){
        menu.style.display = "none";
      } else {
        menu.style.display = "flex";
      }
    };
  }

});

if("serviceWorker" in navigator){
 navigator.serviceWorker.register("service-worker.js")
 .then(function(){
   console.log("Service Worker Registered");
 });
}
