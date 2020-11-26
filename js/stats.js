
 var start_session_time=new Date().toLocaleString();
 var tpicalTime=60;
 var Tas=7.5;
 var implusivityScore ;
 var omissionScore;
 var Ds;
 var responseTime;
 var levelType;
 var Tir,end_session_time,Tas,AAS,TFD,timeTaken;  
 var issent=false;
 
 /*var xhr = new XMLHttpRequest();
var url = "https://jsonplaceholder.typicode.com/posts?userId=1" ;
xhr.open("GET", url, true);
xhr.setRequestHeader("Content-Type", "application/json");
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var json = JSON.parse(xhr.responseText);
        console.log(xhr.status);
    }
};
xhr.send();*/
 function convertHMS(value) {
  const sec = parseInt(value, 10); // convert value to number if it's string
  let hours   = Math.floor(sec / 3600); // get hours
  let minutes = Math.floor((sec - (hours * 3600)) / 60); // get minutes
  let seconds = sec - (hours * 3600) - (minutes * 60); //  get seconds
  // add 0 if value < 10; Example: 2 => 02
  if (hours   < 10) {hours   = "0"+hours;}
  if (minutes < 10) {minutes = "0"+minutes;}
  if (seconds < 10) {seconds = "0"+seconds;}
  return hours+':'+minutes+':'+seconds; // Return is HH : MM : SS
}
if(  document.getElementById("level").getAttribute("value")===2){
  document.getElementById("dsmove").parentNode.removeChild( document.getElementById("dsmove"));
}
else if(document.getElementById("level").getAttribute("value")===3){
  document.getElementById("ds").parentNode.removeChild( document.getElementById("ds"));

}
else{
  document.getElementById("ds").parentNode.removeChild( document.getElementById("ds"));
  document.getElementById("dsmove").parentNode.removeChild( document.getElementById("dsmove"));

}
AFRAME.registerComponent('timer', {
  
  init: function() 
  {
    
   // var time=0;
  //var count=-1;
var startSession=0;
var start_session_time=new Date().toLocaleString();
 var mysession=setInterval(function()  {
  
 
  document.getElementById("session").setAttribute("value", startSession); 

  startSession++;
var data=  new Date().toLocaleString();
console.log(document.getElementById("Targets").children.length);
}, 1000);
mysession;
    console.log(this.el.id)//"1PASH9A5579282 "
  if(count==-1) {
    count=  setInterval(function() {
     
       document.getElementById("time").setAttribute("value", time); 
        time++;
      }, 1000);       
}
document.getElementById("mybeach").addEventListener("click",e=>{
  clearInterval(count);
  //count=-1;
})
document.getElementById("Taxi").addEventListener("click",e=>{
  //clearInterval(count);
  count=-1;
  count=  setInterval(function() {
     
    document.getElementById("time").setAttribute("value", time); 
     time++;
   }, 1000); 
})

    },
    tick: function(){
    
     end_session_time=new Date().toLocaleString();
    var calculate= function newStats()
    {

      
    Tar=document.getElementById("inps").getAttribute("value")/(document.getElementById("Targets").children.length);
     timeTaken=convertHMS(document.getElementById("session").getAttribute("value"));
    if (Tar == 0){
    implusivityScore = 1;}
   else
   {
      implusivityScore =(1*(-Tar))*((Math.log10(Tir)-1)+Math.pow(10,-5));
   }
    AAS=document.getElementById("tasktime").getAttribute("value")/document.getElementById("taskcounter").getAttribute("value");
   if (AAS != 0)
   { 
    omissionScore = Tas /Math.pow(10,-5);
   }
    TFD = AAS - Tas;
   if (document.getElementById("level").getAttribute("value")==1)
   {
       Ds = 0;
   }
   else
   {
       Ds = (1 - (TFD / Tas));
   }
   if(document.getElementById("level").getAttribute("value")==2 || document.getElementById("level").getAttribute("value")==1)
   {
     responseTime= AAS;
   }
   else if (document.getElementById("level").getAttribute("value")==3)
   {
responseTime=(document.getElementById("tasktime").getAttribute("value")/document.getElementById("taskcounter").getAttribute("value")+
document.getElementById("dstime").getAttribute("value")/document.getElementById("dscounter").getAttribute("value"))/2;
   }

   if (document.getElementById("counter").getAttribute("value")!=0)
   {
        levelType = "Closed"; 
       Tir=timeTaken/document.getElementById("counter").getAttribute("value");

   }
   else
   {
       levelType = "Opend";   
       Tir= timeTaken/tpicalTime;
   }
   
   console.log("levelType "+levelType+" end : "+end_session_time+" AAS "+AAS+ " response "+responseTime+" Start"+start_session_time+" Ds "+Ds+" timeTaken "+timeTaken+" tar" +Tar)
    }
   if(issent===false)
   {
document.getElementById("targetfour").addEventListener("mousedown",calculate);
issent=true;
    }
   /* if(issent===true){
    document.getElementById("targetfour").removeEventListener("mousedown",calculate);
}*/
},
    remove: function () {
    console.log("bye bye")
    }
  }); 

