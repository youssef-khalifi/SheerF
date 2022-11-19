$(function () {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 10 ) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }
    });
});






$( "#home" ).click(function() {


    
    window.location.href =" Home.html";
    
   
    
 })

 $( "#about" ).click(function() {


    
    window.location.href =" AboutSheer.html";
    
   
    
 })

 
 $( "#login" ).click(function() {


    
    window.location.href ="Page_Sin_In.html";
    
   
    
 })

 $( "#signup" ).click(function() {


    
    window.location.href ="Page_Sign_Up.html";
    
   
    
 })