$(function () {
  $(window).on('scroll', function () {
      if ( $(window).scrollTop() > 10 ) {
          $('.navbar').addClass('active');
      } else {
          $('.navbar').removeClass('active');
      }
  });
});


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


// navbar 

$( "#home" ).click(function() {

    
  window.location.href ="Home.html";

  
})


$( "#about" ).click(function() {

    
  window.location.href ="AboutSheer.html";

  
})



$( "#signup" ).click(function() {


    
  window.location.href ="Page_Sign_Up.html";
  
 
  
})
