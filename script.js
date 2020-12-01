// A JavaScript program is a list of statements to be executed by a computer.
// $(selector).animate({params},speed,callback);
// JavaScript animations are done by programming gradual changes in an element's style.
// The changes are called by a timer. When the timer interval is small, the animation looks continuous.

var i = 0;
var txt = "hometext";
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("hometext").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}



// // Get the modal
// var modal = document.getElementById("myModal");

// // Get the button that opens the modal
// var btn = document.getElementById("btn");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks the button, open the modal 
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

// window.onscroll = function() {myFunction()};

// var navbar = document.getElementById("site-header");
// var sticky = navbar.offsetTop;

// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }