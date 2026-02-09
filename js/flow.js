setupNavbar();

var input = document.getElementById("completedBook");
var btn = document.getElementById("btnAddCompleted");
var output = document.getElementById("completedOutput");

// show list on page load
showCompleted();

if(btn){
btn.addEventListener("click", function(){

 var book = input.value.trim();

 if(book==""){
   output.innerText="Enter book name";
   return;
 }

 var list = readFromLocalStorage("completedBooks", []);

 list.push(book);

 saveToLocalStorage("completedBooks", list);

 input.value="";
 showCompleted();
});
}


function showCompleted(){

 var list = readFromLocalStorage("completedBooks", []);

 if(list.length==0){
   output.innerText="No completed books yet";
   return;
 }

 output.innerText="Completed: " + list.join(", ");
}
// 🎵 PLAY/PAUSE WITH GREEN BUTTON
var soundBtn = document.getElementById("btnSound");
var audio = document.getElementById("cozyAudio");

if(soundBtn && audio){
soundBtn.addEventListener("click", function(){

  if(audio.paused){
    audio.play();
  }
  else{
    audio.pause();
  }

});
}
