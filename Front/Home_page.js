$(function () {
   $(window).on('scroll', function () {
       if ( $(window).scrollTop() > 10 ) {
           $('.navbar').addClass('active');
       } else {
           $('.navbar').removeClass('active');
       }
   });
});


$( "#add" ).click(function() {


   
   window.location.href =" Add.html";
   
  
   
 })

$( "#home" ).click(function() {


   
   window.location.href =" Home_Page.html";
  
   
})

$( "#about" ).click(function() {


   
   window.location.href =" About.html";
   
  
   
})


$( "#profil" ).click(function() {


   
   window.location.href =" User_page.html";
   
  
   
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

// home (item)
	$( "#item" ).click(function() {

		fetch('http://localhost:8080/api/v1/don/getbycategorie?id=6').then((data)=>{

			   return data.json();
			
			   }).then((completedata)=>{
			  
			    let data1="";
			    completedata.map((values)=>{
			
			       if(values.choix =="email"){
			
			        data1+=`
					
		 <div class="bg-white shadow-xl rounded-lg overflow-hidden" id="test">
		 <div class="bg-cover bg-center h-56 p-4"  style="background-image: url( ${values.image})">
			 <div class="flex justify-end">
				 <svg class="h-6 w-6 text-white fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
					 <path d="M12.76 3.76a6 6 0 0 1 8.48 8.48l-8.53 8.54a1 1 0 0 1-1.42 0l-8.53-8.54a6 6 0 0 1 8.48-8.48l.76.75.76-.75zm7.07 7.07a4 4 0 1 0-5.66-5.66l-1.46 1.47a1 1 0 0 1-1.42 0L9.83 5.17a4 4 0 1 0-5.66 5.66L12 18.66l7.83-7.83z"></path>
				 </svg>
			 </div>
		 </div>
		 <div class="p-4">
			 <p class="uppercase tracking-wide text-sm font-bold text-gray-700">Condition : ${values.etat} </p>
			 <p class="text-3xl text-gray-900">${values.name}</p>
			 <br>
			 <p class="text-gray-700" id="desc">${values.description}</p>
		 </div>
		 <div class="flex p-4 border-t border-gray-300 text-gray-700">
			 <div class="flex-1 inline-flex items-center">
				 <svg class="h-6 w-6 text-gray-600 fill-current mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
				 <path d="M12.438 1.668V7H11.39V2.684h-.051l-1.211.859v-.969l1.262-.906h1.046z"/>
				 <path fill-rule="evenodd" d="M11.36 14.098c-1.137 0-1.708-.657-1.762-1.278h1.004c.058.223.343.45.773.45.824 0 1.164-.829 1.133-1.856h-.059c-.148.39-.57.742-1.261.742-.91 0-1.72-.613-1.72-1.758 0-1.148.848-1.835 1.973-1.835 1.09 0 2.063.636 2.063 2.687 0 1.867-.723 2.848-2.145 2.848zm.062-2.735c.504 0 .933-.336.933-.972 0-.633-.398-1.008-.94-1.008-.52 0-.927.375-.927 1 0 .64.418.98.934.98z"/>
				 <path d="M4.5 13.5a.5.5 0 0 1-1 0V3.707L2.354 4.854a.5.5 0 1 1-.708-.708l2-1.999.007-.007a.498.498 0 0 1 .7.006l2 2a.5.5 0 1 1-.707.708L4.5 3.707V13.5z"/>
			   
				 </svg>
				 <p><span class="text-gray-900 font-bold">${values.quantite}</span> </p>
			 </div>
			 <div class="flex-1 inline-flex items-center">
				 <svg class="h-6 w-6 text-gray-600 fill-current mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
				 <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>

				 </svg>
				 <p><span class="text-gray-900 font-bold">${values.client.ville}</span> </p>
			 </div>
		 </div>
		 <div class="px-4 pt-3 pb-4 border-t border-gray-300 bg-gray-100">
			 <div class="text-xs uppercase font-bold text-gray-600 tracking-wide">Posted ${values.publicationDate} By</div>
			 <div class="flex items-center pt-2">
				 <div class="bg-cover bg-center w-10 h-10 rounded-full mr-3" style="background-image: url(images/profile-icon-9.png)")">
				 </div>
				 <div>
					 <p class="font-bold text-gray-900">${values.client.nom} ${values.client.prenom}</p>
					 <p class="text-sm text-gray-700">${values.client.email}</p>
					 
				 </div>
			 </div>
		 </div>
	 </div>
 

					
			`

			       }else if(values.choix =="number"){
			        data1+=` 
					
		 <div class="bg-white shadow-xl rounded-lg overflow-hidden" id="test">
		 <div class="bg-cover bg-center h-56 p-4"  style="background-image: url( ${values.image})">
			 <div class="flex justify-end">
				 <svg class="h-6 w-6 text-white fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
					 <path d="M12.76 3.76a6 6 0 0 1 8.48 8.48l-8.53 8.54a1 1 0 0 1-1.42 0l-8.53-8.54a6 6 0 0 1 8.48-8.48l.76.75.76-.75zm7.07 7.07a4 4 0 1 0-5.66-5.66l-1.46 1.47a1 1 0 0 1-1.42 0L9.83 5.17a4 4 0 1 0-5.66 5.66L12 18.66l7.83-7.83z"></path>
				 </svg>
			 </div>
		 </div>
		 <div class="p-4">
			 <p class="uppercase tracking-wide text-sm font-bold text-gray-700">Condition : ${values.etat} </p>
			 <p class="text-3xl text-gray-900">${values.name}</p>
			 <br>
			 <p class="text-gray-700" id="desc">${values.description}</p>
		 </div>
		 <div class="flex p-4 border-t border-gray-300 text-gray-700">
			 <div class="flex-1 inline-flex items-center">
				 <svg class="h-6 w-6 text-gray-600 fill-current mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
				 <path d="M12.438 1.668V7H11.39V2.684h-.051l-1.211.859v-.969l1.262-.906h1.046z"/>
				 <path fill-rule="evenodd" d="M11.36 14.098c-1.137 0-1.708-.657-1.762-1.278h1.004c.058.223.343.45.773.45.824 0 1.164-.829 1.133-1.856h-.059c-.148.39-.57.742-1.261.742-.91 0-1.72-.613-1.72-1.758 0-1.148.848-1.835 1.973-1.835 1.09 0 2.063.636 2.063 2.687 0 1.867-.723 2.848-2.145 2.848zm.062-2.735c.504 0 .933-.336.933-.972 0-.633-.398-1.008-.94-1.008-.52 0-.927.375-.927 1 0 .64.418.98.934.98z"/>
				 <path d="M4.5 13.5a.5.5 0 0 1-1 0V3.707L2.354 4.854a.5.5 0 1 1-.708-.708l2-1.999.007-.007a.498.498 0 0 1 .7.006l2 2a.5.5 0 1 1-.707.708L4.5 3.707V13.5z"/>
			   
				 </svg>
				 <p><span class="text-gray-900 font-bold">${values.quantite}</span> </p>
			 </div>
			 <div class="flex-1 inline-flex items-center">
				 <svg class="h-6 w-6 text-gray-600 fill-current mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
				 <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>

				 </svg>
				 <p><span class="text-gray-900 font-bold">${values.client.ville}</span> </p>
			 </div>
		 </div>
		 <div class="px-4 pt-3 pb-4 border-t border-gray-300 bg-gray-100">
			 <div class="text-xs uppercase font-bold text-gray-600 tracking-wide">Posted ${values.publicationDate} By</div>
			 <div class="flex items-center pt-2">
				 <div class="bg-cover bg-center w-10 h-10 rounded-full mr-3" style="background-image: url(images/profile-icon-9.png)")">
				 </div>
				 <div>
					 <p class="font-bold text-gray-900">${values.client.nom} ${values.client.prenom}</p>
					 <p class="text-sm text-gray-700">${values.client.numero}</p>
					 
				 </div>
			 </div>
		 </div>
	 </div>
 

					
			`
			       }
			    });
			    document.getElementById("cards").innerHTML=data1;
			
			   }).catch((err)=>{
			    console.log(err);
			   })
		

	
	})

	  

	 

	$( "#food" ).click(function() {

		fetch('http://localhost:8080/api/v1/don/getbycategorie?id=5').then((data)=>{

			   return data.json();
			
			   }).then((completedata)=>{
			  
			    let data1="";
			    completedata.map((values)=>{
			
			       if(values.choix =="email"){
			
			        data1+=`
					
		 <div class="bg-white shadow-xl rounded-lg overflow-hidden" id="test">
		 <div class="bg-cover bg-center h-56 p-4"  style="background-image: url( ${values.image})">
			 <div class="flex justify-end">
				 <svg class="h-6 w-6 text-white fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
					 <path d="M12.76 3.76a6 6 0 0 1 8.48 8.48l-8.53 8.54a1 1 0 0 1-1.42 0l-8.53-8.54a6 6 0 0 1 8.48-8.48l.76.75.76-.75zm7.07 7.07a4 4 0 1 0-5.66-5.66l-1.46 1.47a1 1 0 0 1-1.42 0L9.83 5.17a4 4 0 1 0-5.66 5.66L12 18.66l7.83-7.83z"></path>
				 </svg>
			 </div>
		 </div>
		 <div class="p-4">
			 <p class="uppercase tracking-wide text-sm font-bold text-gray-700">Condition : ${values.etat} </p>
			 <p class="text-3xl text-gray-900">${values.name}</p>
			 <br>
			 <p class="text-gray-700" id="desc">${values.description}</p>
		 </div>
		 <div class="flex p-4 border-t border-gray-300 text-gray-700">
			 <div class="flex-1 inline-flex items-center">
				 <svg class="h-6 w-6 text-gray-600 fill-current mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
				 <path d="M12.438 1.668V7H11.39V2.684h-.051l-1.211.859v-.969l1.262-.906h1.046z"/>
				 <path fill-rule="evenodd" d="M11.36 14.098c-1.137 0-1.708-.657-1.762-1.278h1.004c.058.223.343.45.773.45.824 0 1.164-.829 1.133-1.856h-.059c-.148.39-.57.742-1.261.742-.91 0-1.72-.613-1.72-1.758 0-1.148.848-1.835 1.973-1.835 1.09 0 2.063.636 2.063 2.687 0 1.867-.723 2.848-2.145 2.848zm.062-2.735c.504 0 .933-.336.933-.972 0-.633-.398-1.008-.94-1.008-.52 0-.927.375-.927 1 0 .64.418.98.934.98z"/>
				 <path d="M4.5 13.5a.5.5 0 0 1-1 0V3.707L2.354 4.854a.5.5 0 1 1-.708-.708l2-1.999.007-.007a.498.498 0 0 1 .7.006l2 2a.5.5 0 1 1-.707.708L4.5 3.707V13.5z"/>
			   
				 </svg>
				 <p><span class="text-gray-900 font-bold">${values.quantite}</span> </p>
			 </div>
			 <div class="flex-1 inline-flex items-center">
				 <svg class="h-6 w-6 text-gray-600 fill-current mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
				 <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>

				 </svg>
				 <p><span class="text-gray-900 font-bold">${values.client.ville}</span> </p>
			 </div>
		 </div>
		 <div class="px-4 pt-3 pb-4 border-t border-gray-300 bg-gray-100">
			 <div class="text-xs uppercase font-bold text-gray-600 tracking-wide">Posted ${values.publicationDate} By</div>
			 <div class="flex items-center pt-2">
				 <div class="bg-cover bg-center w-10 h-10 rounded-full mr-3" style="background-image: url(images/profile-icon-9.png)")">
				 </div>
				 <div>
					 <p class="font-bold text-gray-900">${values.client.nom} ${values.client.prenom}</p>
					 <p class="text-sm text-gray-700">${values.client.email}</p>
					 
				 </div>
			 </div>
		 </div>
	 </div>
 

					
			`

			       }else if(values.choix =="number"){
			        data1+=` 
					
		 <div class="bg-white shadow-xl rounded-lg overflow-hidden" id="test">
		 <div class="bg-cover bg-center h-56 p-4"  style="background-image: url( ${values.image})">
			 <div class="flex justify-end">
				 <svg class="h-6 w-6 text-white fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
					 <path d="M12.76 3.76a6 6 0 0 1 8.48 8.48l-8.53 8.54a1 1 0 0 1-1.42 0l-8.53-8.54a6 6 0 0 1 8.48-8.48l.76.75.76-.75zm7.07 7.07a4 4 0 1 0-5.66-5.66l-1.46 1.47a1 1 0 0 1-1.42 0L9.83 5.17a4 4 0 1 0-5.66 5.66L12 18.66l7.83-7.83z"></path>
				 </svg>
			 </div>
		 </div>
		 <div class="p-4">
			 <p class="uppercase tracking-wide text-sm font-bold text-gray-700">Condition : ${values.etat} </p>
			 <p class="text-3xl text-gray-900">${values.name}</p>
			 <br>
			 <p class="text-gray-700" id="desc">${values.description}</p>
		 </div>
		 <div class="flex p-4 border-t border-gray-300 text-gray-700">
			 <div class="flex-1 inline-flex items-center">
				 <svg class="h-6 w-6 text-gray-600 fill-current mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
				 <path d="M12.438 1.668V7H11.39V2.684h-.051l-1.211.859v-.969l1.262-.906h1.046z"/>
				 <path fill-rule="evenodd" d="M11.36 14.098c-1.137 0-1.708-.657-1.762-1.278h1.004c.058.223.343.45.773.45.824 0 1.164-.829 1.133-1.856h-.059c-.148.39-.57.742-1.261.742-.91 0-1.72-.613-1.72-1.758 0-1.148.848-1.835 1.973-1.835 1.09 0 2.063.636 2.063 2.687 0 1.867-.723 2.848-2.145 2.848zm.062-2.735c.504 0 .933-.336.933-.972 0-.633-.398-1.008-.94-1.008-.52 0-.927.375-.927 1 0 .64.418.98.934.98z"/>
				 <path d="M4.5 13.5a.5.5 0 0 1-1 0V3.707L2.354 4.854a.5.5 0 1 1-.708-.708l2-1.999.007-.007a.498.498 0 0 1 .7.006l2 2a.5.5 0 1 1-.707.708L4.5 3.707V13.5z"/>
			   
				 </svg>
				 <p><span class="text-gray-900 font-bold">${values.quantite}</span> </p>
			 </div>
			 <div class="flex-1 inline-flex items-center">
				 <svg class="h-6 w-6 text-gray-600 fill-current mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
				 <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>

				 </svg>
				 <p><span class="text-gray-900 font-bold">${values.client.ville}</span> </p>
			 </div>
		 </div>
		 <div class="px-4 pt-3 pb-4 border-t border-gray-300 bg-gray-100">
			 <div class="text-xs uppercase font-bold text-gray-600 tracking-wide">Posted ${values.publicationDate} By</div>
			 <div class="flex items-center pt-2">
				 <div class="bg-cover bg-center w-10 h-10 rounded-full mr-3" style="background-image: url(images/profile-icon-9.png)")">
				 </div>
				 <div>
					 <p class="font-bold text-gray-900">${values.client.nom} ${values.client.prenom}</p>
					 <p class="text-sm text-gray-700">${values.client.numero}</p>
					 
				 </div>
			 </div>
		 </div>
	 </div>
 

					
			`
			       }
			    });
			    document.getElementById("cards").innerHTML=data1;
			
			   }).catch((err)=>{
			    console.log(err);
			   })
		

	
	})

	  