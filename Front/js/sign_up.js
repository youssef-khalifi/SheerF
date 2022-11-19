
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




 
//    fetch('http://localhost:8080/api/v1/don/getall').then((data)=>{

//    return data.json();

//    }).then((completedata)=>{

//     let data1="";
//     completedata.map((values)=>{

//         data1+=` <div id="card">
//         <h1 class="title">${values.name}</h1>
//         <img src="" alt="img" id="myImg">
//         <p>${values.description}</p>
//         <p class="category">${values.client.email} </p>
//         <p class="category">${values.client.numero} </p>
//         <p class="price">${values.publicationDate}</p>
//     </div>`
//     });
//     document.getElementById("cards").innerHTML=data1;

//    }).catch((err)=>{
//     console.log(err);
//    })





//    fetch('http://localhost:8080/api/v1/don/getbycategorie?id=5').then((data)=>{

//    return data.json();

//    }).then((completedata)=>{

//     let data1="";
//     completedata.map((values)=>{

//        if(values.choix =="email"){
//         data1+=` <div class="col">
// 		<div class="card shadow-sm">
// 		 <img class="d-block w-100" src=${values.image}  alt="Second slide">
// 		 <div class="card-body">
    
// 		  <div class="col d-flex align-items-start">
    

// 			<div >
// 			  <h4 class="fw-bold mb-0">${values.name}</h4>
// 			  <br>
// 			  <p>${values.description}</p>
// 			</div>
// 		  </div>
    
// 		</div>
// 		  <div class="card-body">
     
// 			<ul class="list-group list-group-flush">
// 			  <li class="list-group-item">${values.categorie.nom}</li>
// 			  <li class="list-group-item">${values.client.ville}</li>
// 			  <li class="list-group-item">${values.client.email}</li>
            
// 			</ul>
// 			<br>
//             <small> Posted ${values.publicationDate}  by ${values.client.nom} ${values.client.prenom} </small>
    
// 		  </div>
// 		</div>
// 	  </div>`
//        }else if(values.choix =="number"){
//         data1+=` <div class="col">
// 		<div class="card shadow-sm">
// 		 <img class="d-block w-100" src=${values.image}  alt="Second slide">
// 		 <div class="card-body">
    
// 		  <div class="col d-flex align-items-start">
    

// 			<div >
// 			  <h4 class="fw-bold mb-0">${values.name}</h4>
// 			  <br>
// 			  <p> ${values.description}</p>
// 			</div>
// 		  </div>
    
// 		</div>
// 		  <div class="card-body">
     
// 			<ul class="list-group list-group-flush">
// 			  <li class="list-group-item">${values.etat}</li>
// 			  <li class="list-group-item">${values.client.ville}</li>
// 			  <li class="list-group-item">${values.client.numero}</li>
            
// 			</ul>
// 			<br>
//             <small>Posted ${values.publicationDate} by ${values.client.nom} ${values.client.prenom}  </small>
// 		  </div>
// 		</div>
// 	  </div>`
//        }
//     });
//     document.getElementById("cards").innerHTML=data1;

//    }).catch((err)=>{
//     console.log(err);
//    })

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

$( "#abt" ).click(function() {


  
  window.location.href =" About.html";
  
 
  
})

$( "#login" ).click(function() {


  
  window.location.href =" Page_Sin_In.html";
  
 
  
})

