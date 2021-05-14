$(window).scroll(function () {
    $('nav').toggleClass('scrolling-active', $(this).scrollTop() > 100);
})