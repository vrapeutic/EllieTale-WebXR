AFRAME.registerComponent("showitem", {
  
 init: function() 
  {
    
    let fairy = document.querySelector("#Taxi");
    var el = this.el;

    let selectRandomItem = () => 
    {
      
      var score;
      var index; //to store index for the array of targets
      var item, random;
   
      el.removeEventListener("click", ()=>{selectRandomItem()});
      el.remove(el.firstElementChild);


      item = document.querySelectorAll(".items");
      random = Math.floor(Math.random() * Math.floor(item.length));
      console.log(item[random]);
      score = document.getElementById("score").getAttribute("value");
      
      index = score;
      
      item[random].setAttribute("position", {
        x: this.el.getAttribute("position").x,
        y: this.el.getAttribute("position").y+2,
        z: this.el.getAttribute("position").z
      });
    
      item[random].setAttribute("Visible", true);

      if (index <= document.querySelectorAll(".BoxParent").length+1) 
      {
        
        index++;
      } 
      
      else 
      {
        
        index = 3;
      }

      var xpos = this.el.parentElement.children[index].getAttribute("position").x-3;
      var zpos = this.el.parentElement.children[index].getAttribute("position") .z;
  

      setTimeout(() => 
      {
        
        score++;
        
      document.getElementById("score").setAttribute("value", score);
        
        fairy.setAttribute(
          "animation",
          "property:position; to:" + xpos + " 0.8 " + zpos + "; dur:1500"
        );//move Fairy to next Target
        
        console.log(
          random + " count : " + item.length + fairy.getAttribute("position").z
        );
       
        item[random].className = "new";
        
      }, 1000);
   
      setTimeout(() => 
      {
        
        item[random].remove();
        
      }, 2000);
    };
    

        el.addEventListener('componentchanged', function(evt)
        {
      
        console.log(evt.detail.name);

        if (evt.detail.name === "showitem") 
        {
        
          console.log("a box element has been changed");
          console.log(el)
       
        el.addEventListener("click",() =>{
        
       
          selectRandomItem();
        
        
        });
   
        }
      
      });
  }
  
});
