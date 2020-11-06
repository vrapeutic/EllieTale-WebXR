AFRAME.registerComponent("dsmove", {
  
  init: function()
  {
    
    var newpos, random;
    var el = this.el;
    var box = document.querySelectorAll(".Box");//Array of targets
    var ds = document.getElementById("myDs");// distractor element
    var time=0;
    var count=-1;
var isCounting=true;
    console.log(box + " this " + ds);

    // level 2
 /*let startDsMovement= function cycle(index) 
    {

      setTimeout(function() 
      {
      
  random=Math.floor(Math.random() * Math.floor(box.length));  
  
   newpos=box[random].getAttribute("position");// restor next target for distractor
   
  ds.setAttribute("animation","property:position; to:"+(newpos.x+1)+" 0.5 "+newpos.z+" dur:1000"); 
  
  //ds.setAttribute("position",{x:newpos.x,y:newpos.y,z:newpos.z})  ;
  
  console.log(index+" here "+box[random].getAttribute("position").x+"ds "+ds.getAttribute("position").x)
  
       //`cycle()` 
       // index++; // Increment the index
  
        if (index >= box.length) 
        {
             
             index = 0; // Set it back to `0` when it reaches `3`
          }
          
          cycle(index);
    //cycle(++index % 3);
    
      }, 2000);
  }
    
  startDsMovement( box.length);
  */

    //for level three
    if(isCounting==true) {
      count=  setInterval(function() {
       
         document.getElementById("dstime").setAttribute("value", time); 
          time++;
        }, 1000);       
  }

    ds.setAttribute("position", { x: ds.getAttribute("position").x, y:ds.getAttribute("position").y, z:ds.getAttribute("position").z });

    let advancedDsMovement = function newCycle() 
    {
      
      random = Math.floor(Math.random() * Math.floor(box.length - 1));
      
      newpos = box[random].getAttribute("position");

    
    
      ds.setAttribute(
        "animation",
        "property:position; to:" +
          (newpos.x + 1) +
          " 0.5 " +
          newpos.z +
          " dur:5000"
      );

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
