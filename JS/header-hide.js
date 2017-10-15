// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.navbar').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
},);

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        setTimeout(function() {
          $('.navbar').removeClass('nav-down').addClass('nav-up');
          document.getElementById('backToTop').style.visibility = "hidden";
        },);
            
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('.navbar').removeClass('nav-up').addClass('nav-down');
            if (pageYOffset >= 800) {
                document.getElementById('backToTop').style.visibility = "visible";
            } else {
         document.getElementById('backToTop').style.visibility = "hidden";
            }
        }
    }
    
    lastScrollTop = st;
}