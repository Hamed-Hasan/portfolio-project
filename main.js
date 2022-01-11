  /**
   * Back to top button
   */
//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// cursor

AOS.init();

// typed js

var typed = new Typed('.element', {
  strings: [ 'Hamed Hasan', 'Mern Stack Web Developer','Designer'],
  // smartBackspace: true,
  typeSpeed: 60,
  loop: true,
  backSpeed: 60,// Default value
});