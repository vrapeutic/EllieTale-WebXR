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
        var el = document.createElement('a-entity');
        el.setAttribute("area-light", "intensity:10; width:8; height:2; color: #1fdbbb;showHelper:false");
        el.setAttribute("id","myLight");
        el.setAttribute("position",{x:0,y:0.7,z:0.5});
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
        
       
      //  triggerTarget();
       
    
        setTimeout(() => 
      {
          
          this.el.setAttribute("movetotarget","enabled",false);
          
        }, 1200);
        
      }
      
    });
  }
});
