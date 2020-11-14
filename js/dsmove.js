AFRAME.registerComponent("dsmove", {
  
  init: function()
  {
    
    var newpos, random;
    var el = this.el.parentElement;
    var box = document.querySelectorAll(".Box");//Array of targets
    var ds = document.getElementById("myDs");// distractor element
    var time=0;
    var count=-1;
    var isCounting=true;
    console.log(box + " this " + ds+document.getElementById("level").getAttribute("value"));

//for level three


    if(isCounting==true) {
      count=  setInterval(function() {
       
         document.getElementById("dstime").setAttribute("value", time); 
          time++;
        }, 1000);       
  }

   ds.setAttribute("position", { x:- 42.5, y:0.7, z:4});

    let advancedDsMovement = function newCycle() 
    {
      
      random = Math.floor(Math.random() * Math.floor(box.length - 1));
      
      newpos = box[random].getAttribute("position");

     var dscounetr=document.getElementById("dscounter").getAttribute("value");
          dscounetr++;
      document.getElementById("dscounter").setAttribute("value", dscounetr);
    
      ds.setAttribute(
        "animation",
        "property:position; to:" +
          (newpos.x + 1) +
          " 0.5 " +
          newpos.z +
          " dur:5000"
      );
     console.log("dscounter: "+dscounetr);
      document
        .getElementById("Taxi")
        .setAttribute("animation", "enabled", true);

      console.log(
        random +
          " here " +
          box[random].getAttribute("position").x +
          "ds " +
          ds.getAttribute("position").x
      );
    };
    el.addEventListener("hitstart", e => {
      console.log("col");
      console.log(
        e.target.id,
        "col with",
        e.target.components["aabb-collider"]["intersectedEls"].map(x => x.id)
      );

      document
        .getElementById("Taxi")
        .setAttribute("animation", "enabled", false);// to stop fairy movement until the player respond to distractor
        console.log("i'm here 3")

    
        if (isCounting==false) {
           count=  setInterval(function() {
       
          document.getElementById("dstime").setAttribute("value", time); 
           time++;
         }, 1000); 
        }
       
 
      el.addEventListener("mousedown", advancedDsMovement);
    });
    el.addEventListener("hitend", e => {
  clearInterval(count);
 isCounting=false;
    });
 
}
  
});
