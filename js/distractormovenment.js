AFRAME.registerComponent("moverandomly", {
  
    init: function()
    {
  
      var target = document.querySelectorAll(".Box");//Array of targets
      var ds = document.getElementById("myDistractor");// distractor element

      console.log(target + " this " + ds+document.getElementById("level").getAttribute("value"));
  
     // level 2

    console.log(document.getElementById("level").getAttribute("value"))
    
    let startDsMovement= function randommovenmet(index) 
      {
  
        setTimeout(function() 
        {
    
       randomIndexTarget=Math.floor(Math.random() * Math.floor(target.length));  
    
       nextTargetPosition=target[ randomIndexTarget].getAttribute("position");//  next target for distractor
     
      ds.setAttribute("animation","property:position; to:"+(nextTargetPosition.x+1)+" 0.2 "+nextTargetPosition.z+" dur:5000"); 
    
      
    console.log(index+" here "+target[ randomIndexTarget].getAttribute("position").x+"ds "+ds.getAttribute("position").x)
    
      
    
          if (index >= target.length) 
          {
               
               index = 0; // Set it back to `0` when it reaches `3`
            }
            console.log("i'm here 2")
  
            randommovenmet(index);
      
        }, 2000);
    }
      
    startDsMovement( target.length);

    }})