
(function ($) {
    "use strict";

    
    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    

})(jQuery);



$( "#test" ).click(function() {


   
    window.location.href ="Page_Sign_Up.html";

    
  })

// footer

$( "#home" ).click(function() {


     window.location.href =" Home.html";

     
   })
   


   $( "#about" ).click(function() {
   
   
     window.location.href =" AboutSheer.html";
     
     
   })
   
   $( "#signup" ).click(function() {
   
   
     
     window.location.href ="Page_Sign_Up.html";
     
    
     
   })


   //header
   $(function () {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 10 ) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }
    });
  });

  // traitement

  
  function clientbyEmail(){
                    
    $.get("http://localhost:8080/api/v1/client/getbyemail", 

    { 
      email: $("#userEmail").val() }, // put your parameters here
    function(data){
      console.log(data);
      console.log(data.id);
      
      sessionStorage.setItem("id", data.id);
    
      
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
        title: 'Signed in successfully'
      })
     
      setTimeout(function(){
        window.location.href =" Home_page.html";
     }, 3000);
      

 
    }
 
     
 );
}


var email = document.getElementById("userEmail");
var password = document.getElementById("userPassword");


var mail_format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;



$( "#button" ).click(function() {

 
 

// test de format de email
if(!email.value.match(mail_format)){
const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  
  Toast.fire({
    icon: 'info',
    title: 'Email Format example@gmail.com'
  })
}

// test if inputs not null
if(email.value === "" || email.value ==null || password.value==="" || password.value == null  ){
const Toast = Swal.mixin({
toast: true,
position: 'top-end',
showConfirmButton: false,
timer: 2000,
timerProgressBar: true,
didOpen: (toast) => {
  toast.addEventListener('mouseenter', Swal.stopTimer)
  toast.addEventListener('mouseleave', Swal.resumeTimer)
}
})

Toast.fire({
icon: 'warning',
title: 'Inputs Required'
})
    
}else{


  

    $.get("http://localhost:8080/api/v1/client/chekUser", 

    { 
      email: $("#userEmail").val(), password: $("#userPassword").val() }, // put your parameters here
    function(data){
 
     console.log("doing the test");
 
      if(data  ){
       console.log("wellcom");

      clientbyEmail();
      
      }else{
        
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'error',
          title: 'User Not Found'
        })

      }
    },
   
 );
  

}

  




    });
    
