$(function () {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 10 ) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }
    });
});


var question = document.getElementById("Question");


$( "#send" ).click(function() {



    var question = {
        name: $("#Question").val(),
        
    }
    
   
  
    $.ajax({
              url: 'http://localhost:8080/api/v1/question/save',
              type: 'post',
              dataType: 'json',
              contentType: 'application/json',
              success: function (data) {
                  console.log(data);
              },
              data: JSON.stringify(question)
          });
    
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'success',
            title: 'Your Question saved Successfully'
          })
          setTimeout(function(){
            window.location.href =" About.html";
         }, 3000);
         
        
 })


$( "#add" ).click(function() {


    
    window.location.href =" Add.html";
    
   
    
 })

$( "#home" ).click(function() {


    
    window.location.href =" Home_Page.html";
    
   
    
 })

 $( "#about" ).click(function() {


    
    window.location.href =" About.html";
    
   
    
 })

 
 $( "#profil" ).click(function() {


    
    window.location.href =" User_page.html";
    
   
    
 })
 $( "#logout" ).click(function() {


   
	window.location.href =" Page_Sin_In.html";
   
  
   
})

 $( "#donations" ).click(function() {
  
  
     
  window.location.href =" Donation.html";
  
 
  
})

 // footer

$( "#hom" ).click(function() {


    window.location.href =" Home_Page.html";
   
    
  })
  
  $( "#abt" ).click(function() {
  
  
    window.location.href =" About.html";
   
    
  })
  
  $( "#prfl" ).click(function() {
  
  
     
    window.location.href =" User_page.html";
    
   
    
  })