$(document).ready(function(){
     $(window).bind('scroll', function() {
     var navHeight = $( '#top' ).height() - $('nav').height();
       if ($(window).scrollTop() > navHeight) {
         $('nav').addClass('fixed');
         $('.header2').addClass('fixed2');
         $('.fixed2').removeClass("header2");
       }
       else {
         $('nav').removeClass('fixed');
         $('.fixed2').addClass('header2');
         $('.header2').removeClass("fixed2");

       }
    });
  });
