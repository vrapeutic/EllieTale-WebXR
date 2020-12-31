AFRAME.registerComponent("ontriggertarget", {
  
  init: function() 
  {

    //fairy trigger target
    
    let triggerTarget = () => 
    {
       var taskcounter=document.getElementById("taskcounter").getAttribute("value");

        this.el.setAttribute("showitem", "enabled",true);
       
        if (this.el.firstElementChild==null)
        {
        var el = document.createElement('a-light');
        el.setAttribute("type", "point");
        el.setAttribute("id","myLight");
        el.setAttribute("intensity",0.5);
        el.setAttribute("position",{x:0,y:5,z:0});
       // el.setAttribute("color", "#1dd4ed")
        this.el.appendChild(el);
       }
        taskcounter++;
        document.getElementById("taskcounter").setAttribute("value", taskcounter);
       // console.log(this.el.getAttribute("animation-mixer")+"TaskCounter"+taskcounter)
    
    }
    //level three speacial case if ds hit the target not the fairy 
    this.el.addEventListener("hitstart", e => 
      {
      
      console.log("collide");
      console.log(
        e.target.id,
        "collided ",
        e.target.components["aabb-collider"]["intersectedEls"].map(x => x.id)
      );

      if (
        e.target.components["aabb-collider"]["intersectedEls"]
          .map(x => x.id)
          .includes("Fairy") &&
        !e.target.components["aabb-collider"]["intersectedEls"]
          .map(x => x.id)
          .includes("myDistractor")
      )
      { 
        
        triggerTarget();
        console.log("hi start go"+this.el.firstElementChild);

        setTimeout(() => 
        {
          
          this.el.removeAttribute("movetotarget");
          
        }, 1200);
        
      }
      if (
        e.target.components["aabb-collider"]["intersectedEls"]
          .map(x => x.id)
          .includes("Fairy") &&
        e.target.components["aabb-collider"]["intersectedEls"]
          .map(x => x.id)
          .includes("myDistractor")
      )
      {
        console.log("hey you");
         if(document.getElementById("distractingPartical")!=null)
       {
        var distractingPartical = document.createElement("a-entity")
        distractingPartical.setAttribute("spe-particles","texture:../images/particles/snowflake.png; color: #0000FF, #00FFFF, #FFFFFF; particle-count: 1000; acceleration: 0 -6 0;")
        distractingPartical.setAttribute("spe-particles","opacity: 1, 1, 0; velocity: 0 1 0; size: 1, 1, 0; velocity-spread: 1 0 1;") 
        distractingPartical.setAttribute("id", "distractingPartical")
       distractingPartical.setAttribute("position", 
       ( nextTargetPosition.x+2) +
       " 1 " +
        nextTargetPosition.z )
    setTimeout(() => {
              document.querySelector('a-scene').appendChild(distractingPartical);

    }, 1000);
       

       }
      


      }
    });
   
    this.el.addEventListener("hitend", e => 
    {
     
      console.log("collide");
      console.log(
        e.target.id,
        "collided with",
        e.target.components["aabb-collider"]["intersectedEls"].map(x => x.id)
      );

      if (
        e.target.components["aabb-collider"]["intersectedEls"]
          .map(x => x.id)
          .includes("myDistractor")
      ) 
      {
        
     //   this.el.setAttribute("color", "green");
        console.log("Hitted by Ds ");
       
      }

      if (
        e.target.components["aabb-collider"]["intersectedEls"]
          .map(x => x.id)
          .includes("Fairy") &&
        !e.target.components["aabb-collider"]["intersectedEls"]
          .map(x => x.id)
          .includes("myDistractor")
      ) 
      { 
        
       
        //triggerTarget();
       
    
        setTimeout(() => 
      {
          
          this.el.setAttribute("movetotarget","enabled",false);
          
        }, 1200);
        
      }
      
    });
  }
});
