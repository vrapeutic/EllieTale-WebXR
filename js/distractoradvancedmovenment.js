AFRAME.registerComponent("advancedmovenment", {
  

  play: function()
  {

    var target = document.querySelectorAll(".Box");//Array of targets
    var ds = document.getElementById("myDistractor");// distractor element
    var timer=0;
    var count=-1;
    var isCounting=true;
    console.log( target + " this " + ds+document.getElementById("level").getAttribute("value"));

//for level three


    if(isCounting==true) {
      count=  setInterval(function() {
       
         document.getElementById("dstime").setAttribute("value", timer); 
          timer++;
        }, 1000);       
  }

 let advancedDsMovement = function newRandomMovenment() 
    {

        if(document.getElementById("distractingPartical")!=null)
        {
      document.getElementById("distractingPartical").parentNode.removeChild(document.getElementById("distractingPartical"));

     randomIndexTarget = Math.floor(Math.random() * Math.floor(target.length));

     if(target[randomIndexTarget].getAttribute("position").x!=ds.getAttribute("position").x)
     {
       randomIndexTarget=randomIndexTarget;
     }
     else{
            randomIndexTarget--;

     }
     nextTargetPosition =target[randomIndexTarget].getAttribute("position");

    var distractingTaskCounter=document.getElementById("dscounter").getAttribute("value");
         
      distractingTaskCounter++;

      document.getElementById("dscounter").setAttribute("value", distractingTaskCounter);
 
      ds.setAttribute(
        "animation",
        "property:position; to:" +
          ( nextTargetPosition.x-1)+
          " 0.2 " +
           nextTargetPosition.z +
          " dur:1000"
      );    
   
     console.log("dscounter: "+distractingTaskCounter);
      document
        .getElementById("Fairy")
        .setAttribute("animation", "enabled", true);

      console.log(
         randomIndexTarget +
          " here " +
           target[ randomIndexTarget].getAttribute("position").x +
          "ds " +
          ds.getAttribute("position").x
      );
      return  randomIndexTarget;
    }
    };
    ds.addEventListener("hitstart", e => {
  
      document
        .getElementById("Fairy")
        .setAttribute("animation", "enabled", false);// to stop fairy movement until the player respond to distractor

        if (isCounting==false) {
           count=  setInterval(function() {
       
          document.getElementById("dstime").setAttribute("value", timer); 
           timer++;
         }, 1000); 
       /*  if (
          e.target.components["aabb-collider"]["intersectedEls"]
            .map(x => x.id)
            .includes(target[randomIndexTarget].id) 
          
          )
          {
            document
            .getElementById("myDistractor")
            .setAttribute("animation", "enabled", false);
        }
  */
      var distractingPartical = document.createElement("a-entity")
      distractingPartical.setAttribute("spe-particles","texture:../images/particles/snowflake.png; color: #0000FF, #00FFFF, #FFFFFF; particle-count: 1000; acceleration: 0 -6 0;")
      distractingPartical.setAttribute("spe-particles","opacity: 2, 2, 0; velocity: 0 2 0; size: 2, 2, 0; velocity-spread: 2 0 2;") ;
         distractingPartical.setAttribute("id", "distractingPartical")
        distractingPartical.setAttribute("position", 
        ( nextTargetPosition.x+1) +
        " 1 " +
         nextTargetPosition.z )
      
         document.querySelector('a-scene').appendChild(distractingPartical);


        }
        if(document.getElementById("distractingPartical")!=null)
        {
       ds.addEventListener("click", advancedDsMovement); 
       
       }

    });
 
    ds.addEventListener("hitend", e => {
  clearInterval(count);
 isCounting=false;
 
 if(document.getElementById("distractingPartical")!=null)
 {
 
document.getElementById("distractingPartical").parentNode.removeChild(document.getElementById("distractingPartical"));
        
     } });
 
} 
});
