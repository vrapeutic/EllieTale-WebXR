AFRAME.registerComponent("dsmove", {
  

  play: function()
  {
    console.log("please move")
    var newpos; 
    var random=0;
    var el = this.el;
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

 //  ds.setAttribute("position", { x:- 42.5, y:0.7, z:4});
 let advancedDsMovement = function newCycle() 
    {

      document.getElementById("DsPartical").parentNode.removeChild(document.getElementById("DsPartical"));

      random = Math.floor(Math.random() * Math.floor(box.length - 1));
      console.log(random);
      newpos = box[random].getAttribute("position");

     var dscounetr=document.getElementById("dscounter").getAttribute("value");
         
      dscounetr++;
      document.getElementById("dscounter").setAttribute("value", dscounetr);
 
      ds.setAttribute(
        "animation",
        "property:position; to:" +
          (newpos.x ) +
          " 0.5 " +
          newpos.z +
          " dur:5000"
      );    
   
     console.log("dscounter: "+dscounetr);
      document
        .getElementById("Taxi")
        .setAttribute("animation", "enabled", true);
// 
    /* */
      console.log(
        random +
          " here " +
          box[random].getAttribute("position").x +
          "ds " +
          ds.getAttribute("position").x
      );
      return random;
    
    };
    ds.addEventListener("hitstart", e => {
    //  console.log("col");
    /*  console.log(
        e.target.id,
        "col with",
        e.target.components["aabb-collider"]["intersectedEls"].map(x => x.id)
      );*/
      document
        .getElementById("Taxi")
        .setAttribute("animation", "enabled", false);// to stop fairy movement until the player respond to distractor

        if (isCounting==false) {
           count=  setInterval(function() {
       
          document.getElementById("dstime").setAttribute("value", time); 
           time++;
         }, 1000); 

      var  partical=document.createElement("a-entity")
         partical.setAttribute("spe-particles","texture:../images/particles/snowflake.png; color: #0000FF, #00FFFF, #FFFFFF; particle-count: 1000; acceleration: 0 -6 0;")
         partical.setAttribute("spe-particles","opacity: 2, 2, 0; velocity: 0 2 0; size: 2, 2, 0; velocity-spread: 2 0 2;") 
         partical.setAttribute("id", "DsPartical")
        partical.setAttribute("position", 
        (newpos.x+1.5) +
        " 1 " +
        newpos.z )
           document.querySelector('a-scene').appendChild(partical);

      

      // box[random].appendChild(partical);
        }
//advancedDsMovement;
       // document.getElementById("DsPartical").parentNode.removeChild(document.getElementById("DsPartical"));
   
          document.getElementById("DsPartical").addEventListener("mousedown", advancedDsMovement);

       
      
    });
  ds.addEventListener("hitend", e => {
  clearInterval(count);
 isCounting=false;
  // partical.parentNode.removeChild(partical) ; 
 
document.getElementById("DsPartical").parentNode.removeChild(document.getElementById("DsPartical"));
        
   });
 
},
remove: function () {
  
},

  
});
