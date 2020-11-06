AFRAME.registerComponent("ontriggertarget", {
  
  init: function() 
  {

    let triggerTarget = () => 
    {
     
     
        
        this.el.setAttribute("animation-mixer", "enabled:true; loop:once;repetitions: 0");
        this.el.setAttribute("showitem", "enabled",true);

        var el = document.createElement('a-light');
        el.setAttribute("type", "point")
        el.setAttribute("intensity",0.5);
        el.setAttribute("position",{x:0,y:5,z:0});
       // el.setAttribute("color", "#1dd4ed")
        this.el.appendChild(el); 
        
        console.log(this.el.getAttribute("animation-mixer"))
    
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
          .includes("Taxi") &&
        !e.target.components["aabb-collider"]["intersectedEls"]
          .map(x => x.id)
          .includes("myDs")
      )
      { 
        
        triggerTarget();
        console.log("hi start go"+this.el.firstElementChild);

        setTimeout(() => 
        {
          
          this.el.removeAttribute("movetotarget");
          
        }, 1200);
        
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
          .includes("myDs")
      ) 
      {
        
     //   this.el.setAttribute("color", "green");
        console.log("Hitted by Ds ");
        
      }

      if (
        e.target.components["aabb-collider"]["intersectedEls"]
          .map(x => x.id)
          .includes("Taxi") &&
        !e.target.components["aabb-collider"]["intersectedEls"]
          .map(x => x.id)
          .includes("myDs")
      ) 
      { 
        
       
        //triggerTarget();
       
    
        setTimeout(() => 
      {
          
          this.el.removeAttribute("movetotarget");
          
        }, 1200);
        
      }
      
    });
  }
});
