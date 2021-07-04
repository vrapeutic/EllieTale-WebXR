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


  this.el.addEventListener("hitstart", e => 
    {   console.log(
    e.target.id,
    "collided ",
 e.target.components["aabb-collider"]["intersectedEls"].map(x => x.id)
  );
console.log(timer);

    if (
      e.target.components["aabb-collider"]["intersectedEls"]
      .map(x => x.id)
 .includes("targetone,targettwo,targetthree,targetfour")){
          

   
          taskTimer();
      
         }}

 );


  }}) 