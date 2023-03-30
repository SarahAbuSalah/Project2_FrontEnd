$(document).scroll(function () {
    if ($(document).scrollTop() >7) {
        $('.navbar').addClass('navbar-bg');
    } else {
        $('.navbar').removeClass('navbar-bg');
    }
})

// $("#mode-switch").on('click', function () {
//     if ($("body").hasClass("dark")) {
//       $("body").removeClass("dark");
//       $("#switch").removeClass("switched");
//     }
//     else {
//       $("body").addClass("dark");
//       $("#switch").addClass("switched");
//     }
//   });  


$('.mode-switch').click(function () {
    $('body').toggleClass('dark')
})
