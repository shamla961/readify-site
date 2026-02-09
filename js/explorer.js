setupNavbar();

var grid = document.getElementById("booksGrid");

function displayBooks(){
 if(!grid) return;

 grid.innerHTML="";

 for(var i=0;i<BOOKS.length;i++){
   var b=BOOKS[i];

   var card=document.createElement("div");
   card.className="book-card";


   card.innerHTML=
   "<img src='"+b.image+"' style='width:120px;height:160px'><br>"+
   "<b>"+b.title+"</b><br>"+b.author;

   // CLICK → MODAL
   card.onclick=(function(book){
     return function(){
       openModal(book);
     }
   })(b);

   grid.appendChild(card);
 }
}

displayBooks();


// MODAL FUNCTION
function openModal(book){

 var modal=document.getElementById("bookModal");
 if(!modal) return;

 modal.style.display="block";

 document.getElementById("mTitle").innerText=book.title;
 document.getElementById("mSynopsis").innerText=book.synopsis;

 // prequels
 var pre=document.getElementById("mPrequels");
 pre.innerHTML="";
 if(book.prequels.length==0){
   pre.innerHTML="<li>None</li>";
 }else{
   for(var i=0;i<book.prequels.length;i++){
     pre.innerHTML+="<li>"+book.prequels[i]+"</li>";
   }
 }

 // sequels
 var seq=document.getElementById("mSequels");
 seq.innerHTML="";
 if(book.sequels.length==0){
   seq.innerHTML="<li>None</li>";
 }else{
   for(var i=0;i<book.sequels.length;i++){
     seq.innerHTML+="<li>"+book.sequels[i]+"</li>";
   }
 }

 // reviews
 var table=document.getElementById("reviewTable");
 table.innerHTML="<tr><th>Name</th><th>Rating</th><th>Comment</th></tr>";

 for(var i=0;i<book.reviews.length;i++){
   var r=book.reviews[i];
   table.innerHTML+="<tr><td>"+r.name+"</td><td>"+r.rating+"</td><td>"+r.comment+"</td></tr>";
 }
}


// CLOSE MODAL
var close=document.getElementById("closeModal");
if(close){
close.onclick=function(){
 document.getElementById("bookModal").style.display="none";
};
}

var search = document.getElementById("searchBox");
var genre = document.getElementById("genreFilter");
var clearBtn = document.getElementById("btnClear");

function filterBooks(){
 var text = search.value.toLowerCase();
 var g = genre.value;

 var arr=[];

 for(var i=0;i<BOOKS.length;i++){
   var b=BOOKS[i];

   var matchText =
   b.title.toLowerCase().includes(text) ||
   b.author.toLowerCase().includes(text);

   var matchGenre = (g=="all" || b.genre==g);

   if(matchText && matchGenre){
     arr.push(b);
   }
 }

 showFiltered(arr);
}

// show filtered books
function showFiltered(list){
 grid.innerHTML="";

 for(var i=0;i<list.length;i++){
   var b=list[i];

   var card=document.createElement("div");
   card.className="book-card";

   card.innerHTML=
   "<img src='"+b.image+"' style='width:120px;height:160px'><br>"+
   "<b>"+b.title+"</b><br>"+b.author;

   card.onclick=(function(book){
     return function(){
       openModal(book);
     }
   })(b);

   grid.appendChild(card);
 }
}

if(search) search.addEventListener("input",filterBooks);
if(genre) genre.addEventListener("change",filterBooks);

if(clearBtn){
clearBtn.onclick=function(){
 search.value="";
 genre.value="all";
 displayBooks();
};
}
