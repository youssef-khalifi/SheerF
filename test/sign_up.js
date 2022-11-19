$(function () {
  $(window).on('scroll', function () {
      if ( $(window).scrollTop() > 10 ) {
          $('.navbar').addClass('active');
      } else {
          $('.navbar').removeClass('active');
      }
  });
});



var email = document.getElementById("email");
var prenom = document.getElementById("prenom");
var Name = document.getElementById("name");
var ville = document.getElementById("ville");
var password = document.getElementById("password");
var password2 = document.getElementById("password2");
var numero = document.getElementById("numero");




var mail_format =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

var n = document.getElementById("numero").value;


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
  
    
  
    
    
if( Name.value ==='' || Name.value ==null || prenom.value ==='' || prenom.value ==null || password.value ==='null' || password.value ==null
|| ville.value ===''  || ville.value ==null  || numero.value ===''  || numero.value ==null || email.value ===""  || email.value ==null ){
   
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

    

}else if(password.value == password2.value  ){
 
    if(email.value.match(mail_format) ){
        console.log("equal")
        var person = {
                  nom: $("#name").val(),
                  prenom: $("#prenom").val(),
                  ville: $("#ville").val(),
                  email: $("#email").val(),
                  password: $("#password").val(),
                  numero: $("#numero").val(),
                  role:{
                    id:1,
                    name:"user"
                  }
              }
      
            
      
              $.ajax({
                  url: 'http://localhost:8080/api/v1/client/save',
                  type: 'post',
                  dataType: 'json',
                  contentType: 'application/json',
                  success: function (data) {
                      console.log(data);
                  },
                  data: JSON.stringify(person)
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
                title: 'Signed up successfully'
              })
             
              setTimeout(function(){
                window.location.href =" Page_Sin_In.html";
             }, 3000);
        
      }
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
            icon: 'info',
            title: 'Passwords Do Not Match '
          })
    
    }





});
        
// navbar controller

$( "#home" ).click(function() {

    
  window.location.href ="Home.html";

  
})


$( "#about" ).click(function() {

    
  window.location.href ="AboutSheer.html";

  
})



$( "#login" ).click(function() {


    
  window.location.href ="Page_Sin_In.html";
  
 
  
})



