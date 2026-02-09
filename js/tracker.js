setupNavbar();

var total=document.getElementById("totalPages");
var read=document.getElementById("pagesRead");
var speed=document.getElementById("speed");
var output=document.getElementById("trackerOutput");
var bar=document.getElementById("progressBar");

var btn=document.getElementById("btnCalc");

if(btn){
btn.addEventListener("click",function(){

 var t=parseInt(total.value);
 var r=parseInt(read.value);
 var s=parseInt(speed.value);

 if(isNaN(t)||isNaN(r)||isNaN(s)){
   output.innerText="Enter valid numbers";
   return;
 }

 var percent=(r/t)*100;
 var days=(t-r)/s;

 output.innerText="Progress: "+percent.toFixed(1)+"% | Days left: "+Math.ceil(days);
 bar.style.width=percent+"%";

 // ⭐ SAVE TO LOCAL STORAGE (JSON)
 saveToLocalStorage("progress",{t:t,r:r,s:s});

});
}



