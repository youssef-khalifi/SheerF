$(function () {
  $(window).on('scroll', function () {
      if ( $(window).scrollTop() > 10 ) {
          $('.navbar').addClass('active');
      } else {
          $('.navbar').removeClass('active');
      }
  });
});


var id_client = sessionStorage.getItem("id_client");
let iddon = 0;
console.log(id_client);





let output='';
 const url ='http://localhost:8080/api/v1/don/getbyclient?id='+id_client;
 
 
 const renderpposts = (posts) =>{
     posts.forEach(post => {
         output+=`
     <div class="card">
    
     <div class="card-body" data-id=${post.id}>
   
     <h4>
                 ${post.name} 
     </h4>
     <ul class="list-group list-group-flush">
     <li class="list-group-item"> ${post.categorie.nom}</li>
     <li class="list-group-item"> ${post.description}</li>
     <li class="list-group-item"> ${post.etat}</li>
   </ul>
   <p><small>Posted :${post.publicationDate}</small></p>
    <br>
     
         <button type="button" class="btn btn-outline-info" id="delete-post">Delete</button>
         
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

     id_client = e.target.parentElement.dataset.id;
    iddon = 	e.target.parentElement.dataset.id ;

    // delete client
    
    //DELETE

    if(DeleteButtonIsPressed){

     console.log(iddon)
     Swal.fire({
       title: 'Are you sure?',
       
       icon: 'warning',
       showCancelButton: true,
       confirmButtonColor: '#0085d6',
       cancelButtonColor: '#d33',
       confirmButtonText: 'Yes, delete it!'
     }).then((result) => {
       if (result.isConfirmed) {
         fetch(`http://localhost:8080/api/v1/don/deletebyid?id=${iddon}`,{
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
       title: 'Donation deleted Successfully'
     })
     setTimeout(function(){
       window.location.href =" Homea.html";
    }, 3000);
       }
     })


        
        
    
    }
})


$( "#logout" ).click(function() {


   
	window.location.href ="Admin.html";
  sessionStorage.clear();
  
   
})