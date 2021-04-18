 /*---timer---*/
document.addEventListener("DOMContentLoaded", function (event) {
    var fullTime = new Date().getTime() + 13500000; 
    $('.countdown-container').countdown(fullTime, function (event) {
        $(this).html(event.strftime(
        	'<span class="time time_hours">%H</span>'
            +'<span class="dots">:</span>'
            +'<span class="time time_minutes">%M</span>'
            +'<span class="dots">:</span>'
            +'<span class="time time_seconds">%S</span>'));
    })});

 /*---additional info---*/
 if($(window).width() >= 991) {
     $(".shirt_inf_item").hover(
         function () {
             $(this).addClass("active");
         },
         function () {
             $(this).removeClass("active");
         }
     );
     $(".composition_item").hover(
         function () {
             $(this).addClass("active");
         },
         function () {
             $(this).removeClass("active");
         }
     );
 } else {
     $(".shirt_inf_item").click(
         function () {
             if ($(this).hasClass("active")) {
                 $(this).removeClass("active");
             } else {
                 $(".shirt_inf_item").each(function () {
                     $(this).removeClass("active");
                 });
                 $(this).addClass("active");
             }
         });
     $(".composition_item").click(
         function () {
             if ($(this).hasClass("active")) {
                 $(this).removeClass("active");
             } else {
                 $(".composition_item").each(function () {
                     $(this).removeClass("active");
                 });
                 $(this).addClass("active");
             }
         });
 }
 
/*---mobile menu---*/

(function($){
  $(function() {
    $('.menu_icon').on('click', function() {
      $(this).closest('.menu').toggleClass('menu_state_open');
    });
  });
  $(function() {
    $('.menu_links-item').on('click', function() {
      $(this).closest('menu_state_open').toggleClass('.menu');
    });
  });
})(jQuery);


