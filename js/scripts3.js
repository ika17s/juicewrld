window.onscroll = function() {scrollFunctionside()};

function scrollFunctionside() {
  var x = document.getElementById("d1")
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      x.style.display = "block";
  } else {
      x.style.display = "none";   
  }
}