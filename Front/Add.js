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

var nam = document.getElementById("Name");
var quantite = document.getElementById("quantite");
var description = document.getElementById("description");
var picture = document.getElementById("picture");

var category = document.forms.myForm.inlineRadioOptions;
var condition = document.forms.myForm.condition;
var choix = document.forms.myForm.choix;


$( "#makedonation" ).click(function() {

  var today = new Date();
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    

    
    
if( nam.value ==='' || nam.value ==null || quantite.value ==='' || quantite.value ==null || description.value ==='null' || description.value ==null
 || category.value ===''  || category.value ==null || category.value ===""  || category.value ==null || condition.value ===""  || condition.value ==null
 || choix.value ===""  || choix.value ==null
 ){



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


  if( category.value =="food"){

          var don = {
                name: $("#Name").val(),
                quantite: $("#quantite").val(),
                etat: document.forms.myForm.condition.value,
                description: $("#description").val(),
                image:  $("#picture").val(),
                choix: document.forms.myForm.choix.value,
                publicationDate:date,
                categorie: {
                  id:5,
                 
                },
                client:{
                  id:id,
                  
                }
            }
            
       
    
            $.ajax({
                      url: 'http://localhost:8080/api/v1/don/save',
                      type: 'post',
                      dataType: 'json',
                      contentType: 'application/json',
                      success: function (data) {
                          console.log(data);
                      },
                      data: JSON.stringify(don)
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
                    title: 'Donation Posted successfully'
                  })
                 
                  setTimeout(function(){
                    window.location.href =" Add.html";
                 }, 3000);
            
    console.log("save")
    
    
      }else if( category.value =="item"){
       
    
        var don = {
          name: $("#Name").val(),
          quantite: $("#quantite").val(),
          etat: document.forms.myForm.condition.value,
          description: $("#description").val(),
          image:  $("#picture").val(),
          publicationDate:date,
          choix :  document.forms.myForm.choix.value,
          categorie: {
            id:6,
           
         
          },
          client:{
            id:id,
            
          }
      }
      
     
    
      $.ajax({
                url: 'http://localhost:8080/api/v1/don/save',
                type: 'post',
                dataType: 'json',
                contentType: 'application/json',
                success: function (data) {
                    console.log(data);
                },
                data: JSON.stringify(don)
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
              title: 'Donation Posted successfully'
            })
           
            setTimeout(function(){
              window.location.href =" Add.html";
           }, 3000);
            
    
      }
      
  console.log("save")
    


}

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

$( "#logout" ).click(function() {


  window.location.href ="Page_Sin_In.html";
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