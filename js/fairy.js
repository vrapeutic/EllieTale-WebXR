AFRAME.registerComponent('fairy', {

  init: function() 
  {
// ...
var time=0;
var count=-1;
 var isCounting=true;  

 if(count==-1){
  count=  setInterval(function() {

      document.getElementById("tasktime").setAttribute("value", time); 
       time++;
     }, 1000);   



this.el.addEventListener("hitstart", e => 
    {

    console.log(
      e.target.id,
      "hit witth ",
      e.target.components["aabb-collider"]["intersectedEls"].map(x => x.id)
    );

    if (
      e.target.components["aabb-collider"]["intersectedEls"]
        .map(x => x.id)
        .includes("Taxi")){
            if(count==-1) { 
  console.log("his.el.id");

  count=  setInterval(function() {

     document.getElementById("tasktime").setAttribute("value", time); 
      time++;
    }, 1000);       
        } }})
 this.el.addEventListener("click", e => 
 {



      clearInterval(count);
  count=-1;


})

}  }}) 