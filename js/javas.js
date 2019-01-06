/*jslint browser: true*/
/*global $, window,jQuery,document,AOS */

$(document).ready(function () {
    
    "use strict";
    
    // Smooth-Scroll
    $("nav a, header .intro a").on('click', function (event) {

        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

      
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
   
                window.location.hash = hash;
            });
        }
    });
    
    
    //
    $("nav .collapse ul li").on("mouseover", function () {
        $(this).addClass("active").siblings().removeClass("active");
    });
    
   
    
    //SPINNER LOADING
    
    $(window).on("load", function () {
        
        $(".overlay, .spinner").fadeOut(10000, function () {
            $("body").css("overflow", "auto");
           
        });
    });
    
    //fit text
    jQuery("#responsive_headline").fitText();
    
    //fade effect
    AOS.init();
    
    
    //progress bar
    
    
    
    $(".skills .stats .progress .progress-bar").each(function () {
        $(this).animate({
            width: $(this).attr("data-pro")
        }, 2000);
    });
    
    
    
    
});