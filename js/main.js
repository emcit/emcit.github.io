// mobile navigation

$("#wrapper").click( function() {
	$(".menu").toggleClass("close");
});


// smooth scroll animation (jquery)

var $root = $('html, body');

$('a[href^="#"]').click(function () {
    $root.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);

    return false;
});


// accordion

var accordions = document.getElementsByClassName("accordion");

for (var i = 0; i < accordions.length; i++) {
  accordions[i].onclick = function() {
    this.classList.toggle('is-open');

    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      // accordion is currently open -> close
      content.style.maxHeight = null;
    } else {
      // accordion is currently closed -> open
      content.style.maxHeight = content.scrollHeight + "px";
    }
  }
}
