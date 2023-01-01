function formvalidate(){
    var alert= document.getElementById("alert");
    var form= document.getElementById("form");

    
 


   // name validation
   var name= document.getElementById("name").value;

   if(name==''){
     alert.style.display="block" ;
     alert.innerHTML= "Please enter the Full name";
     return 0;
 
   }
   else{
     alert.style.display= "none";
     
   }
  


//   age validation
   var age= document.getElementById("age").value;
   
  if(age>=18){
    alert.style.display="none";
  }
  else{
    alert.style.display="block";
    alert.innerHTML= "Please enter age above of 18 years"
    return 0;
  }



 // email validation
  var mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  var email= document.getElementById("email").value;
   if(email==''){
    alert.style.display="block";
    alert.innerHTML= "Please enter a email address"
    return 0;
  }
  if(email.match(mailformat)){
    alert.style.display="none";
  }
  
  else{
    alert.style.display="block";
    alert.innerHTML= "Please enter valid email address"
    return 0;
  }

 
   
  // phone number validation
  
  var numberformat = /^\d{10}$/;
  var phone=document.getElementById("phone").value;
  if(phone==''){
    alert.style.display="block";
    alert.innerHTML= "Please enter a number";
    return 0;
  }
  if(phone.match(numberformat)){
    alert.style.display="none";
    
  }
  else{
    alert.style.display="block";
    alert.innerHTML= "Please enter a valid number";
    return 0 ;
    
  }
  var img=document.getElementById("file").value;
  if(img==''){
    alert.style.display="block";
    alert.innerHTML= "Please select document";
    return 0 ;
  }
  
  else{
    alert.style.display="none";
    var alert1= document.getElementById("alert1");
    alert1.style.display="block";
    alert.innerHTML= "Success";

    form.submit(alert1);

  }
 


    



} 
