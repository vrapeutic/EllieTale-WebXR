
AFRAME.registerComponent('menu', {
  init :function(){
  
    var firtTargetPos=document.getElementById("targetone").getAttribute("position");
    var lastTargetPos=document.getElementById("targetfour").getAttribute("position");
   console.log(document.getElementById("selectenvironment").getAttribute("value"))
  
  //select level menu
  
   let  disableMenu=function Disable(){
  
  document.getElementById("boxLevel").parentNode.removeChild( document.getElementById('boxLevel'))
  document.getElementById('boxLevel1').parentNode.removeChild(document.getElementById('boxLevel1'))
  document.getElementById('boxLevel2').parentNode.removeChild(document.getElementById('boxLevel2'))
  
  }
  let checkLevel=function fcheckLevel(){
    
  
    // set fairy position to target one
    document.getElementById("Fairy").setAttribute(
   "animation",
   "property:position; to:"+(firtTargetPos.x+1)+
   " 0.3 " +
   firtTargetPos.z+"; dur:1000"
  )
  fairyPositionx=firtTargetPos.x + 1;
  fairyPositionz=firtTargetPos.z;
  
  //level three (Set distractor component and partical )
  if(  document.getElementById("level").getAttribute("value")==3){ 
    
  //  document.getElementById("ds").parentNode.removeChild( document.getElementById("ds"));
   
  document.getElementById("myDistractor").setAttribute(
   "animation",
   "property:position; to:"+(lastTargetPos.x+0.5)+
   " 0.3 " +
   lastTargetPos.z+"; dur:2000"
  
  ) 
       var partical=document.createElement("a-entity")
  partical.setAttribute("spe-particles","texture:../images/particles/snowflake.png; color: #0000FF, #00FFFF, #FFFFFF; particle-count: 1000; acceleration: 0 -6 0;")
  partical.setAttribute("spe-particles","opacity: 2, 2, 0; velocity: 0 2 0; size: 2, 2, 0; velocity-spread: 2 0 2;") 
  partical.setAttribute("id", "distractingPartical")
   partical.setAttribute("position", 
          (lastTargetPos.x+1) +
          " 1 " +
         lastTargetPos.z )
         setTimeout(() => {
                   document.querySelector('a-scene').appendChild(partical);
  
         },3500); 
  document.getElementById("myDistractor").setAttribute('advancedmovenment',"enabled",true)
  document.getElementById("myDistractor").setAttribute('visible',true);
  
   
  console.log(document.getElementById("myDistractor").getAttribute("position").z+ " target "+lastTargetPos.z);
  
  }
  //level two (Set distractor component and remove other components  )
  
  else if(document.getElementById("level").getAttribute("value")==2)
  {
  document.getElementById("myDistractor").setAttribute('moverandomly',"enabled",true)
  var old_element = document.getElementById("myDistractor");
  var new_element = old_element.cloneNode(true);
  old_element.parentNode.replaceChild(new_element, old_element);
  document.getElementById("myDistractor").setAttribute('visible',true);
  level=2
  console.log(document.getElementById("myDistractor")+ level);
  
  // console.log(document.getElementById("myDistractor").childElementCount)
  
  document.getElementById("myDistractor").setAttribute(
    "animation",
    "property:position; to:"+(lastTargetPos.x + 1) +
    " 0.5 " +
    lastTargetPos.z +" dur:1000"
  )
  }
  
  //level one (set distractor without any movement)
  else
  {
  
  var old_element = document.getElementById("myDistractor");
  var new_element = old_element.cloneNode(true);
  old_element.parentNode.replaceChild(new_element, old_element);
  document.getElementById("myDistractor").setAttribute('visible',true);
  console.log(document.getElementById("myDistractor"));
  
  }
  }  
  //level menu buttons's events
  
  document.getElementById('boxLevel').addEventListener("click",e => 
  {
  checkLevel();
  disableMenu();
  console.log(document.getElementById("counter").getAttribute("value"))
  
  
  });
  document.getElementById('boxLevel1').addEventListener("click",e => 
  {
  checkLevel();
  disableMenu();
  console.log(document.getElementById("level").getAttribute("value"))
  
  
  });
  document.getElementById('boxLevel2').addEventListener("click",e => 
  {
  checkLevel();
  disableMenu();
  console.log(document.getElementById("level").getAttribute("value"))
  
  });
  
  
  
    //select timer menu
  
    if(document.querySelectorAll('.timer')!="undefined"){
  
    document.querySelectorAll('.timer').forEach(element => {
      element.addEventListener("click",e => {
        document.getElementById("counter").setAttribute('timecounter',"enabled")
   selectTimer();
      })
    });
  let selectTimer= function time(){
    
  document.getElementById("boxtimer").parentNode.removeChild(document.getElementById('boxtimer'))
  document.getElementById('boxtimer1').parentNode.removeChild(document.getElementById('boxtimer1'))
  document.getElementById('boxtimer2').parentNode.removeChild(document.getElementById('boxtimer2'))
  document.getElementById('noTimer').parentNode.removeChild(document.getElementById('noTimer'))
  //document.getElementById("LevelsButton").setAttribute("visible",true)
  
  }
   }
  }
  })
  