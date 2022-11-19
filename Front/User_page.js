$(function () {
  $(window).on('scroll', function () {
      if ( $(window).scrollTop() > 10 ) {
          $('.navbar').addClass('active');
      } else {
          $('.navbar').removeClass('active');
      }
  });
});


var mail_format =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

var id = sessionStorage.getItem("id");

var prenom = document.getElementById("prenom");
var ville = document.getElementById("ville");
var email = document.getElementById("email");
var nom = document.getElementById("name");

var numero = document.getElementById("numero");
var Id = document.getElementById("id");
var password = document.getElementById("password");


var role = document.getElementById("role");

var password = document.getElementById("password");
var email2 = document.getElementById("email2");
var nom2 = document.getElementById("name2");

var num=0;
var em=0;
var vi=0;

$.get("http://localhost:8080/api/v1/client/getbyid?id="+id, 

      
       function(data){
          
           
           nom.value = data.nom;
		   prenom.value = data.prenom;
		   numero.value = data.numero;
		   email.value = data.email;
		   ville.value = data.ville;
		   role.value = data.role.name;
		   password.value = data.password;
		   nom2.innerHTML += data.nom +" "+ data.prenom;
		   email2.innerHTML += data.email;

		   num=numero.value;
		   em=email.value;
		   vi= ville.value;
		
       }
       
    );
    

	// alert

	$('#exampleModal').on('show.bs.modal', function (event) {
		var button = $(event.relatedTarget) // Button that triggered the modal
		var recipient = button.data('whatever') // Extract info from data-* attributes
		// If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
		// Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
		var modal = $(this)
	   
		modal.find('.modal-body input').val()
	
	  })


	$( "#edit" ).click(function() {

		var numero_edit = document.getElementById("numero_edit");
		var ville_edit = document.getElementById("ville_edit");
        var email_edit = document.getElementById("email_edit");
		var password_edit = document.getElementById("password_edit");
		var password_edit2 = document.getElementById("password_edit2");
		
		
		numero_edit.value = num;
		ville_edit.value = vi;
		email_edit.value = em;



		$( "#send" ).click(function() {

//tes de email format 

 

				//test de null sur les text
				if(numero_edit.value==="" || numero_edit.value==null || ville_edit.value ==="" || ville_edit.value==null
				 ||  password_edit.value ==="" ||  password_edit.value==null  ||  email_edit.value ==="" ||  email_edit.value==null ){

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

				 }else if(password_edit.value == password_edit2.value){

            // test de format de email
   if(!email_edit.value.match(mail_format)){
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
          }else{

            $.post("http://localhost:8080/api/v1/client/updateClient", 
  
					{ 
					  id: id, numero: $("#numero_edit").val(),ville: $("#ville_edit").val(),password: $("#password_edit").val(),email: $("#email_edit").val() }, // put your parameters here
					function(data){
				  
					 
				  
					  if(data  ){
					
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
							title: 'Update Successful!'
						  })
						  setTimeout(function(){
							location.reload();
						 }, 3000)
					  
					  }
					})

          }


					
					//fin

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
					
        
					}
					
				


		
	)})
	




// var x = document.getElementById("test");
  
// var prenom = document.getElementById("prenom");
// var ville = document.getElementById("ville");
// var email = document.getElementById("email");
// var nom = document.getElementById("name");
// var numero = document.getElementById("numero");
// var Id = document.getElementById("id");
// var password = document.getElementById("password");


//     var id = sessionStorage.getItem("id");
// console.log(id);



// $.get("http://localhost:8080/api/v1/client/getbyid?id="+id, 

      
//        function(data){
//            console.log(data);
//            ville.value = data.ville;
//            prenom.value = data.prenom;
//            email.value = data.email;
//            nom.value = data.nom;
//            numero.value = data.numero;
       
//            password.value = data.password;
          
          
//        }
       
//     );
    
  

//      $( "#button" ).click(function() {

      

//         document.getElementById('password1').style.visibility="visible"; 
//         document.getElementById('password').removeAttribute('readonly');
//         document.getElementById('numero').removeAttribute('readonly')
        
//         document.getElementById('ville').removeAttribute('readonly');

//         document.getElementById('verify_email').style.visibility="visible";
    

//     document.getElementById('btn').style.visibility="visible";
    
//     $( "#btn" ).click(function() {

//       if(password.value != password1.value){
                
                
//     const Toast = Swal.mixin({
//         toast: true,
//         position: 'top-end',
//         showConfirmButton: false,
//         timer: 2000,
//         timerProgressBar: true,
//         didOpen: (toast) => {
//           toast.addEventListener('mouseenter', Swal.stopTimer)
//           toast.addEventListener('mouseleave', Swal.resumeTimer)
//         }
//       })
      
//       Toast.fire({
//         icon: 'info',
//         title: 'Passwords Do Not Match'
//       })
//     }

// // test if inputs = null

// if(password.value==="" || password.value==null || password1.value ==="" || password1.value==null || ville.value ==="" || ville.value==null
// || numero.value ==="" || numero.value==null){
                
                
//     const Toast = Swal.mixin({
//         toast: true,
//         position: 'top-end',
//         showConfirmButton: false,
//         timer: 2000,
//         timerProgressBar: true,
//         didOpen: (toast) => {
//           toast.addEventListener('mouseenter', Swal.stopTimer)
//           toast.addEventListener('mouseleave', Swal.resumeTimer)
//         }
//       })
      
//       Toast.fire({
//         icon: 'warning',
//         title: 'Inputs Required'
//       })

// }else  if(password.value == password1.value){
                
               
//   $.post("http://localhost:8080/api/v1/client/updateClient", 
  
//   { 
//     id: id, numero: $("#numero").val(),ville: $("#ville").val(),password: $("#password").val() }, // put your parameters here
//   function(data){

//    console.log("doing the test");

//     if(data  ){
//      console.log("wellcom");

//      const Toast = Swal.mixin({
//       toast: true,
//       position: 'top-end',
//       showConfirmButton: false,
//       timer: 3000,
//       timerProgressBar: true,
//       didOpen: (toast) => {
//         toast.addEventListener('mouseenter', Swal.stopTimer)
//         toast.addEventListener('mouseleave', Swal.resumeTimer)
//       }
//     })
    
//     Toast.fire({
//       icon: 'success',
//       title: 'Update Successful!'
//     })
//     setTimeout(function(){
//       location.reload();
//    }, 3000);
    
//     }else{
//       const Toast = Swal.mixin({
//         toast: true,
//         position: 'top-end',
//         showConfirmButton: false,
//         timer: 2000,
//         timerProgressBar: true,
//         didOpen: (toast) => {
//           toast.addEventListener('mouseenter', Swal.stopTimer)
//           toast.addEventListener('mouseleave', Swal.resumeTimer)
//         }
//       })
      
//       Toast.fire({
//         icon: 'error',
//         title: 'Update Failed'
//       })
//     }


  
//   }
    
        
//      )}
    
        
//      });
  
   


   
//     })

    $( "#add" ).click(function() {


    
      window.location.href =" Add.html";
      
     
      
   })

    $( "#profil" ).click(function() {


    
      window.location.href =" User_page.html";
      
     
      
   })

   $( "#home" ).click(function() {


    
    window.location.href =" Home_Page.html";
    
   
    
 })

     $( "#about" ).click(function() {


    
      window.location.href =" About.html";
      
     
      
   })

   $( "#logout" ).click(function() {


   
	window.location.href =" Page_Sin_In.html";
	sessionStorage.clear();
  
   
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