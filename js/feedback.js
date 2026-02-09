setupNavbar();

var name=document.getElementById("fbName");
var email=document.getElementById("fbEmail");
var msg=document.getElementById("fbMessage");
var btn=document.getElementById("btnSend");
var out=document.getElementById("fbOutput");

if(btn){
btn.addEventListener("click",function(){

 if(name.value==""||email.value==""||msg.value==""){
   out.innerText="Fill all fields";
   return;
 }

 var list=readFromLocalStorage("feedback",[]);
 list.push({n:name.value,e:email.value,m:msg.value});
 saveToLocalStorage("feedback",list);

 out.innerText="Feedback saved!";
 name.value=""; email.value=""; msg.value="";
});
}


// FAQ toggle
var qs=document.querySelectorAll(".faq-q");

for(var i=0;i<qs.length;i++){
 qs[i].addEventListener("click",function(){
   this.parentElement.classList.toggle("open");
 });
}
