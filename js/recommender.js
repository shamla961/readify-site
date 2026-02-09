setupNavbar();

var genre = document.getElementById("recGenre");
var len = document.getElementById("recLength");
var btnSuggest = document.getElementById("btnSuggest");
var btnAdd = document.getElementById("btnAddList");

var output = document.getElementById("recOutput");
var listOutput = document.getElementById("listOutput");

var currentBook = null;


// SUGGEST BOOK
if(btnSuggest){
btnSuggest.addEventListener("click", function(){

 var g = genre.value;
 var l = len.value;

 var arr = [];

 for(var i=0; i<BOOKS.length; i++){
   var b = BOOKS[i];

   if((g=="all" || b.genre==g) && (l=="all" || b.length==l)){
     arr.push(b);
   }
 }

 if(arr.length==0){
   output.innerText = "No books found";
   return;
 }

 var r = Math.floor(Math.random()*arr.length);
 currentBook = arr[r];

 output.innerText = "Try reading: " + currentBook.title + " by " + currentBook.author;
});
}


// ADD TO READING LIST
if(btnAdd){
btnAdd.addEventListener("click", function(){

 if(currentBook == null){
   alert("Click suggest book first");
   return;
 }

 var list = readFromLocalStorage("readingList", []);

 // CHECK DUPLICATE
 if(list.includes(currentBook.title)){
   output.innerText = "⚠ Book already added!";
   return;
 }

 list.push(currentBook.title);
 saveToLocalStorage("readingList", list);

 output.innerText = "✅ Book added to reading list!";
 showList();
});
}


// SHOW LIST
function showList(){
 var list = readFromLocalStorage("readingList", []);

 if(list.length == 0){
   listOutput.innerText = "No books in reading list";
   return;
 }

 listOutput.innerText = "Reading List: " + list.join(", ");
}

showList();
