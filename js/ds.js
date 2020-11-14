
AFRAME.registerComponent("ds", {
  
    init: function()
    {
  
      var newpos, random;
      var box = document.querySelectorAll(".Box");//Array of targets
      var ds = document.getElementById("myDs");// distractor element

      console.log(box + " this " + ds+document.getElementById("level").getAttribute("value"));
  
     // level 2

    console.log(document.getElementById("level").getAttribute("value"))
     let startDsMovement= function cycle(index) 
      {
  
        setTimeout(function() 
        {
    // ds.setAttribute("position", { x: ds.getAttribute("position").x, y:ds.getAttribute("position").y, z:ds.getAttribute("position").z });
   
    random=Math.floor(Math.random() * Math.floor(box.length));  
    
     newpos=box[random].getAttribute("position");// restor next target for distractor
     
    ds.setAttribute("animation","property:position; to:"+(newpos.x+1)+" 0.5 "+newpos.z+" dur:5000"); 
    
   // ds.setAttribute("position",{x:newpos.x,y:newpos.y,z:newpos.z})  ;
    
    console.log(index+" here "+box[random].getAttribute("position").x+"ds "+ds.getAttribute("position").x)
    
         //`cycle()` 
         // index++; // Increment the index
    
          if (index >= box.length) 
          {
               
               index = 0; // Set it back to `0` when it reaches `3`
            }
            console.log("i'm here 2")
  
            cycle(index);
      //cycle(++index % 3);
      
        }, 2000);
    }
      
    startDsMovement( box.length);

    }})