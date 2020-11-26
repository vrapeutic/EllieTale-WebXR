AFRAME.registerComponent('closedtime', {

  play: function() 
     {
       
 var timeleft =document.getElementById("counter").getAttribute("value");
 var downloadTimer = setInterval(function(){
   if(timeleft <= 0){
     clearInterval(downloadTimer);

   }
   document.getElementById("counter").setAttribute("value",timeleft) ;
   timeleft -= 1;   
     console.log(timeleft);

   if(timeleft==0){
     window.location.href="index.html";
 }
 }, 1000);
 
 
 var s = new Date()
 console.log(s.getHours()+timeleft);
 }}) 