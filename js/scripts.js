
window.setTimeout(function() {
    $(".alert").fadeTo(500, 0).slideUp(500, function(){
        $(this).remove(); 
    });
}, 1200);

var x = document.getElementById("wlc")

    var date = new Date();  
    var hour = date.getHours();    
    if (hour < 12) {  
      x.innerHTML = "Good morning"; 

    } else if (hour < 17) {  
      x.innerHTML = "Good afternoon";  
    }
     else {  
      x.innerHTML = "Good Evening";  
    } 

    //------------//
     
 
$(window).on("load",function(){
     $(".loader-wrapper").fadeOut("slow");
});

window.onscroll = function() {scrollFunctionside()};

function scrollFunctionside() {
  var x = document.getElementById("banner")
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("sidenav").style.left = "0px";
    x.style.filter = "blur(0px)";
  } else {
    document.getElementById("sidenav").style.left = "-250px";
    x.style.filter = "blur(5px)";
  }
}

var l = document.getElementById('img')
window.onload = function(){
   setInterval(function(){
       l.style.opacity = "1.0";
   }, 1400);
};


//-----------------
