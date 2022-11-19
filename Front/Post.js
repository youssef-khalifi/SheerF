
var nam = document.getElementById("Name");
var quantite = document.getElementById("quantite");
var description = document.getElementById("description");
var picture = document.getElementById("picture");

var category = document.forms.myForm.inlineRadioOptions;
var condition = document.forms.myForm.condition;


 

$( "#makedonation" ).click(function() {


    if(nam.value === "" || nam.value ==null || quantite.value==="" || quantite.value == null || description.value === "" || description.value ==null 
    || picture.value==="" || picture.value == null || category.value==="" || category.value == null  || condition.value==="" || condition.value == null ){
       
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
        icon: 'success',
        title: 'Donation make successfuly'
      })

    

     
  
        
    }

  })
  