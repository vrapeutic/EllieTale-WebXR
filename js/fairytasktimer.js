AFRAME.registerComponent('fairytasktimer', {

  init: function() 
  {

var timer=0;
var count=-1;
var target = document.querySelectorAll(".Box");//Array of targets

  let taskTimer=()=>{
    count=  setInterval(function() {
 
  document.getElementById("tasktime").setAttribute("value", timer); 
  timer++;
 }, 1000); 
  } 
 
taskTimer();
target.forEach(element => {

  element.addEventListener("hitstart", e => 
    { 

if(e.target.components["aabb-collider"].map(x => x.id)!==null)
{
    console.log(
      e.target.id,
      "hit witth ",
      e.target.components["aabb-collider"]["intersectedEls"].map(x => x.id)
    );
}

    if (
      e.target.components["aabb-collider"]["intersectedEls"]
        .map(x => x.id)
        .includes("Fairy")){
          
    

          taskTimer();
      
         }})

 });


  }}) 