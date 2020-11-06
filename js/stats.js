

  
AFRAME.registerComponent('timer', {
  
  init: function() 
  {
    
   // var time=0;
  //var count=-1;
var startSession=0;
 var mysession=setInterval(function()  {
  
 
  document.getElementById("session").setAttribute("value", startSession); 

  startSession++;
var data=    new Date().toLocaleString();
console.log(data+"session : "+startSession+"1PASH9A5579282 ");
}, 1000);
mysession;
 /*   console.log(this.el.id)
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
var xhr = new XMLHttpRequest();
var url = "https://dashboard.myvrapeutic.com/api/v1/module_sessions/find_room?" + encodeURIComponent(JSON.stringify({"headset": "1PASH9A0F69301", "vr_module_id": "8"}));
xhr.open("GET", url, true);
xhr.setRequestHeader("Content-Type", "application/json");
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var json = JSON.parse(xhr.responseText);
        console.log(json.headset + ", " + json.vr_module_id);
    }
};
xhr.send();*/
    }}); 