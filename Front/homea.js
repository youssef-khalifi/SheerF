$(function () {
  $(window).on('scroll', function () {
      if ( $(window).scrollTop() > 10 ) {
          $('.navbar').addClass('active');
      } else {
          $('.navbar').removeClass('active');
      }
  });
});
$( "#logout" ).click(function() {


   
	window.location.href =" Admin.html";
   
  
   
})


  $('#exampleModal').on('show.bs.modal', function (event) {
		var button = $(event.relatedTarget) // Button that triggered the modal
		var recipient = button.data('whatever') // Extract info from data-* attributes
		// If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
		// Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
		var modal = $(this)
	   
		modal.find('.modal-body input').val(recipient)
	  })
  

    var mail_format =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var id = sessionStorage.getItem("id");
  var id_client = 0;

  
     
 
   
  
  
  
  
  
  
  

  
  $( "#donations" ).click(function() {
  
  
     
    alert("working on it")
    
   
    
  })
  // footer
  
  $( "#add" ).click(function() {


 var email = document.getElementById("email");
var prenom = document.getElementById("prenom");
var Name = document.getElementById("name");
var ville = document.getElementById("ville");
var password = document.getElementById("password");
var password2 = document.getElementById("password2");
var numero = document.getElementById("numero");


$( "#send" ).click(function() {

  if(email.value==="" || email.value==null || prenom.value ==="" || prenom.value==null
  ||  Name.value ==="" ||  Name.value==null  ||  ville.value ==="" ||  ville.value==null
  ||  password.value ==="" ||  password.value==null  ||  password2.value ==="" ||  password2.value==null
  ||  numero.value ==="" ||  numero.value==null ){

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

  }else if(password.value == password2.value){

    // test de format
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
            }else{
              // send data

              var person = {
                nom: $("#name").val(),
                prenom: $("#prenom").val(),
                ville: $("#ville").val(),
                email: $("#email").val(),
                password: $("#password").val(),
                numero: $("#numero").val(),
                role:{
                  id:2,
                  name:"Admin"
                }
            }
    
          
    
            $.ajax({
                url: 'http://localhost:8080/api/v1/admin/save',
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
              title: 'Manager Added Successfully'
            })
           
            setTimeout(function(){
              window.location.href =" Homea.html";
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







})


   





   //fin
    
  })
  
  



//   $( "#users" ).click(function() {
  
  
     
//  // const postslist = document.querySelector(".post-list");
// let output='';
// const url ='http://localhost:8080/api/v1/client/getall';


// const renderpposts = (posts) =>{
// 	posts.forEach(post => {
// 		output+=`
//     <div class="card">
//     <div class="card-header">
//     <img src="images/profile-icon-9.png" alt="ballons" />
//     </div>
//     <div class="card-body" data-id=${post.id}>
//     <span class="tag tag-purple">${post.role.name} </span>
//     <br>
    
//     <h4>
//                 ${post.nom} ${post.prenom}
//     </h4>
//     <p>
//              City : ${post.ville}
//     </p>
//                 <button type="button" class="btn btn-outline-warning" id="delete-post">Delete</button>
//     </div>
//   </div>


// 		`;
// 	});

// 	cards.innerHTML = output;


// }


// //GET

// fetch(url)
// .then(res => res.json())
// .then(data =>  renderpposts(data))

// //delete
// cards.addEventListener('click' , (e) => {

// 	e.preventDefault();

// 	let DeleteButtonIsPressed = e.target.id == 'delete-post';

// 	let id_d = e.target.parentElement.dataset.id;

// 	// delete client
	
// 	//DELETE

// 	if(DeleteButtonIsPressed){
// 		fetch(`http://localhost:8080/api/v1/client/deletebyid?id=${id_d}`,{
// 			method:'DELETE',
// 		})
// 			.then(res => res)
//       const Toast = Swal.mixin({
//         toast: true,
//         position: 'top-end',
//         showConfirmButton: false,
//         timer: 3000,
//         timerProgressBar: true,
//         didOpen: (toast) => {
//           toast.addEventListener('mouseenter', Swal.stopTimer)
//           toast.addEventListener('mouseleave', Swal.resumeTimer)
//         }
//       })
      
//       Toast.fire({
//         icon: 'success',
//         title: 'User delete Successfully'
//       })
//       setTimeout(function(){
//         window.location.href =" homea.html";
//      }, 3000);
		
    
// 	}


// })
   
   
    
//   })



  

  // data


 // const postslist = document.querySelector(".post-list");
 let output='';
 const url ='http://localhost:8080/api/v1/client/getall';
 
 
 const renderpposts = (posts) =>{
     posts.forEach(post => {
         output+=`
     <div class="card">
     <div class="card-header">
     <img src="images/profile-icon-9.png" alt="ballons" />
     </div>
     <div class="card-body" data-id=${post.id}>
   
     <h4>
                 ${post.nom} ${post.prenom}
     </h4>
     <ul class="list-group list-group-flush">
     <li class="list-group-item"> ${post.email}</li>
     <li class="list-group-item"> ${post.numero}</li>
     <li class="list-group-item"> ${post.ville}</li>
   </ul>
    <br>
     
         <button type="button" class="btn btn-outline-danger" id="delete-post">Delete</button>
         <br>
         <button type="button" class="btn btn-outline-info" id="donation-post">Donations</button>
     </div>
   </div>
 
 
         `;
     });
 
     cards.innerHTML = output;
 
 
 }
 
 
 //GET
 
 fetch(url)
 .then(res => res.json())
 .then(data =>  renderpposts(data))
 
 //delete
 cards.addEventListener('click' , (e) => {
 
     e.preventDefault();
 
     let DeleteButtonIsPressed = e.target.id == 'delete-post';
     let DonationButtonIsPressed = e.target.id == 'donation-post';
 
     let id_client = e.target.parentElement.dataset.id;
 
     // delete client
     
     //DELETE
 
     if(DeleteButtonIsPressed){

      console.log(id_client)
      Swal.fire({
        title: 'Are you sure?',
        
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#0085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:8080/api/v1/client/deletebyid?id=${id_client}`,{
            method:'DELETE',
        })
            .then(res => res)
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
        title: 'User deleted Successfully'
      })
      setTimeout(function(){
        window.location.href =" Homea.html";
     }, 3000);
        }
      })


         
         
     
     }



     // donations 

     if(DonationButtonIsPressed){
      sessionStorage.setItem("id_client", id_client);
      window.location.href =" Donations.html";

     }
 
 
 })