setupNavbar();


//  AUTHOR OF DAY
var authors = [
 "William Shakespeare",
 "Jane Austen",
 "Colleen Hoover",
 "James Clear",
 "Stephen King"
];

var today = new Date().getDate();
var author = authors[today % authors.length];

var authorText = document.getElementById("authorText");
if(authorText){
 authorText.innerText = "Author of the day: " + author;
}


//  ROTATING QUOTES
var quotes = [
 {text:"A reader lives a thousand lives before he dies.", author:"George R.R Martin"},
 {text:"So many books, so little time.", author:"Frank Zappa"},
 {text:"Once you learn to read, you will be forever free.", author:"Frederick Douglass"},
 {text:"Books are a uniquely portable magic.", author:"Stephen King"}
];

var q = document.getElementById("heroQuote");
var a = document.getElementById("heroAuthor");

var i = 0;

function rotate(){
 if(q && a){
   q.innerText = "“" + quotes[i].text + "”";
   a.innerText = "- " + quotes[i].author;
 }

 i++;
 if(i >= quotes.length){
   i = 0;
 }
}

setInterval(rotate, 3000);


// SUBSCRIBE BUTTON
var btn = document.getElementById("btnSubscribe");
var email = document.getElementById("emailBox");

if(btn){
btn.addEventListener("click", function(){

 var value = email.value.trim();

 if(value == ""){
   alert("Please enter your email");
   return;
 }

 if(value.includes("@")==false){
   alert("Enter a valid email");
   return;
 }

 var list = readFromLocalStorage("emails", []);
 list.push(value);
 saveToLocalStorage("emails", list);

 alert("Successfully subscribed to Readify!");
 email.value="";

 
});
}


/* POPUP FOR SUGGESTED BOOKS */
window.addEventListener("DOMContentLoaded", function(){

 var books = document.querySelectorAll(".featured-row img");

 for(var i=0; i<books.length; i++){
   books[i].addEventListener("click", function(){

     var name = this.alt;

     alert(
       "📖 " + name +
       "\n\nRecommended for you!" +
       "\nCheck it in Book Explorer "
     );

   });
 }

});
// QUOTE BANNER IMAGE SLIDESHOW
var quoteImgs=[
 "images/homepage.jpg",
 "images/home2.png",
 "images/home3.jpg",
 "images/home4.png"
];

var qimg=document.getElementById("quoteSlide");
var qi=0;

function changeQuoteImg(){
 if(!qimg) return;

 qimg.src=quoteImgs[qi];

 qi++;
 if(qi>=quoteImgs.length){
   qi=0;
 }
}

setInterval(changeQuoteImg,3000);

