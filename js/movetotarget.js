AFRAME.registerComponent("ontriggertarget", {
  
  init: function() 
  {
    var fairy = document.getElementById("Fairy");

    //fairy trigger target
    let sounds=document.querySelectorAll(".boxsound");

    let triggerTarget = () => 
    {
       var taskcounter=document.getElementById("taskcounter").getAttribute("value");
      if(taskcounter>1)
       {
       let randomSound=Math.floor(Math.random() * Math.floor(sounds.length));
       fairy.setAttribute("sound","src:"+sounds[randomSound].getAttribute("src"));
      fairy.components.sound.playSound();
       
                    fairy.addEventListener('sound-ended', function () {
                      console.log("he");
                      fairy.components.sound.stopSound();
                   

                          });
                  
}  

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
          .includes("Fairy") 
        
      )
      { 
        /*document
        .getElementById("Fairy")
        .setAttribute("animation", "enabled", false);*/
        triggerTarget();
        console.log("hi start go"+this.el.firstElementChild);

        setTimeout(() => 
        {
          
          this.el.setAttribute("movetotarget","enabled",false);
          
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
