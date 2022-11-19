$(function () {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 10 ) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }
    });
  });
  
  var id = sessionStorage.getItem("id");
  let iddon = 0;

  
     
  $( "#add" ).click(function() {
  
  
     
    window.location.href =" Add.html";
    
   
    
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
  $( "#profil" ).click(function() {
  
  
     
    window.location.href =" User_page.html";
    
   
    
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



  

  // data

  

  const postslist = document.querySelector(".posts-list");
let output='';
const url ='http://localhost:8080/api/v1/don/getbyclient?id='+id;


const renderpposts = (posts) =>{
	posts.forEach(post => {
		output+=`
		<div class="card mt-4 col-md-6 bg-ligt" id="card">
		<div class="card-body" data-id=${post.id}>
		  <h5 class="card-title">${post.name}</h5>
    <ul class="list-group list-group-flush" >
      <li class="list-group-item">${post.categorie.nom}</li>
      <li class="list-group-item">${post.client.ville}</li>
      <li class="list-group-item">${post.description}</li>
    </ul>
      <p><small>Posted By : ${post.publicationDate}</small></p>
      <button type="button"  class="btn btn-info" data-toggle="modal" data-target="#exampleModal" id="edit">Update</button><br>
      <button type="button"  class="btn btn-info"  id="delete">Delete</button>
		 
		</div>
	  </div>


		`;
	});

	postslist.innerHTML = output;


}


//GET

fetch(url)
.then(res => res.json())
.then(data =>  renderpposts(data))

//delete
postslist.addEventListener('click' , (e) => {
	
	let DeleteButtonIsPressed = e.target.id =='delete';
  let EditButtonIsPressed = e.target.id =='edit';

 iddon = 	e.target.parentElement.dataset.id ;

	if(DeleteButtonIsPressed){
		

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
        title: 'Your Donation  deleted Successfully'
      })
      setTimeout(function(){
        window.location.href =" Donation.html";
     }, 3000);

      } 
     })


     if(EditButtonIsPressed){
      console.log("es")
     }

    //fin
    
	}
});


$('#exampleModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var recipient = button.data('whatever') // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
 
  modal.find('.modal-body input').val(recipient)
  
})

$( "#send" ).click(function() {
  
  var nam = document.getElementById("name");
  var quantite = document.getElementById("quantite");
  var description = document.getElementById("description");
  var condition = document.getElementById("condition");
  
  var choix = document.getElementById("choix");
 
//   console.log( $("#name").val() +"  "+ iddon+"  "+$("#quantite").val()+" " +$("#description").val());
//  console.log(condition.value +"  "+category.value +" "+choix.value)

    
if( nam.value ==='' || nam.value ==null || quantite.value ==='' || quantite.value ==null || description.value ==='null' || description.value ==null
|| choix.value ===''  || choix.value ==null ||  condition.value ===""  || condition.value ==null){

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



  $.post("http://localhost:8080/api/v1/don/updateDon", 
  
					{ 
					  id: iddon, Name: $("#name").val(),quantite: "5",condition: $("#condition").val(),choose: $("#choix").val(),
            description :$("#description").val()
          }, // put your parameters here
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
                
  // $.post("http://localhost:8080/api/v1/don/updateDon", 
  
  // { 
  //   id: iddon, name: $("#name").val() }, // put your parameters here
  // function(data){

  //  console.log("doing the test");

  //   if(data  ){
  //    console.log("wellcom");

  //    const Toast = Swal.mixin({
  //     toast: true,
  //     position: 'top-end',
  //     showConfirmButton: false,
  //     timer: 3000,
  //     timerProgressBar: true,
  //     didOpen: (toast) => {
  //       toast.addEventListener('mouseenter', Swal.stopTimer)
  //       toast.addEventListener('mouseleave', Swal.resumeTimer)
  //     }
  //   })
    
  //   Toast.fire({
  //     icon: 'success',
  //     title: 'Update Successful!'
  //   })
  //   setTimeout(function(){
  //     location.reload();
  //  }, 3000);
    
  //   }else{
  //     const Toast = Swal.mixin({
  //       toast: true,
  //       position: 'top-end',
  //       showConfirmButton: false,
  //       timer: 2000,
  //       timerProgressBar: true,
  //       didOpen: (toast) => {
  //         toast.addEventListener('mouseenter', Swal.stopTimer)
  //         toast.addEventListener('mouseleave', Swal.resumeTimer)
  //       }
  //     })
      
  //     Toast.fire({
  //       icon: 'error',
  //       title: 'Update Failed'
  //     })
  //   }

  // })
  
})

    // Swal.fire({
    //   title: 'Are you sure?',
      
    //   icon: 'warning',
    //   showCancelButton: true,
    //   confirmButtonColor: '#0085d6',
    //   cancelButtonColor: '#d33',
    //   confirmButtonText: 'Yes, delete it!'
    // }).then((result) => {
    //   if (result.isConfirmed) {
       

    //     fetch(`http://localhost:8080/api/v1/don/deletebyid?id=${iddon}`,{
		// 	method:'DELETE',
		// })
		// 	.then(res => res)

    //   const Toast = Swal.mixin({
    //     toast: true,
    //     position: 'top-end',
    //     showConfirmButton: false,
    //     timer: 3000,
    //     timerProgressBar: true,
    //     didOpen: (toast) => {
    //       toast.addEventListener('mouseenter', Swal.stopTimer)
    //       toast.addEventListener('mouseleave', Swal.resumeTimer)
    //     }
    //   })
      
    //   Toast.fire({
    //     icon: 'success',
    //     title: 'Your Donation  deleted Successfully'
    //   })
    //   setTimeout(function(){
    //     window.location.href =" Donation.html";
    //  }, 3000);

    //   } 
    // })

        
    //   }
    // })
       
        



		
    
	



    // test 
  