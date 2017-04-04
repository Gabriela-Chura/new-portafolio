
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
// fake loader
let progress = 0;
const fakeLoaderInterval = window.setInterval(function() {
  const $lp = $('.loading-progress');
  progress = progress + getRandomArbitrary(10, 25)
  $lp.css('transform', `translateX(${progress}%)`);

  if (progress >= 75) {
    window.clearInterval(fakeLoaderInterval);
    $lp.css('transform', 'translateX(100%)');
    setTimeout(() => $('.loading').css('transform', 'translateY(calc(100% + 10px))'), 400);
  }
}, getRandomArbitrary(100, 500));




(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){ 
            $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

})(jQuery);
