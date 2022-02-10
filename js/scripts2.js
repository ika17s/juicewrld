window.onscroll = function() {scrollFunctionside()};

function scrollFunctionside() {
  var x = document.getElementById("thd")
  var y = document.getElementById("dp")
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      x.style.marginLeft = "40%";
      x.style.opacity = "1"
      y.style.marginLeft = "49.5%";
      y.style.opacity = "1";
  } else {
      x.style.marginLeft = "0%";
      x.style.opacity = "0"
      y.style.marginLeft = "0%";
      y.style.opacity = "0";
  }
}