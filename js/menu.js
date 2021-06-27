AFRAME.registerComponent('menu', {
    init: function() {
        document.getElementById('level').setAttribute('value', _level);
        //  document.getElementById('selectenvironment').setAttribute('value',_enviro);
        document.getElementById('counter').setAttribute('value', _time);
        document.getElementById("counter").setAttribute('timecounter', "enabled")
        if (_time == 0) {
            document.getElementById('levelTybe').setAttribute('value', "Open");

        } else document.getElementById('levelTybe').setAttribute('value', "Closed");
        //  if (sessionStorage.getItem('lang') == null)

        var firtTargetPos = document.getElementById("targetone").getAttribute("position");
        var lastTargetPos = document.getElementById("targetthree").getAttribute("position");
        var fairy = document.getElementById("Fairy");

        // var mySound = fairy.getAttribute("sound").attrValue.src;



        //select level menu

        let disableMenu = function Disable() {

            document.getElementById("boxLevel").parentNode.removeChild(document.getElementById('boxLevel'))
            document.getElementById('boxLevel1').parentNode.removeChild(document.getElementById('boxLevel1'))
            document.getElementById('boxLevel2').parentNode.removeChild(document.getElementById('boxLevel2'))

        }
        let checkLevel = function fcheckLevel() {
                document.querySelector("#helloAud" + sessionStorage.getItem('lan')).setAttribute("position", fairy.getAttribute("position"));
                document.querySelector("#helloAud" + sessionStorage.getItem('lan')).components.sound.playSound();
                console.log(document.querySelector("#helloAud" + sessionStorage.getItem('lan')).getAttribute("sound").src);


                document.querySelector("#helloAud" + sessionStorage.getItem('lan')).addEventListener('sound-ended', function() {

                    document.querySelector("#enviroAud" + sessionStorage.getItem('lan')).setAttribute("position", fairy.getAttribute("position"));

                    document.querySelector("#enviroAud" + sessionStorage.getItem('lan')).components.sound.playSound();

                });
                document.querySelector("#enviroAud" + sessionStorage.getItem('lan')).addEventListener('sound-ended', function() {

                    document.querySelector("#targetAud" + sessionStorage.getItem('lan')).setAttribute("position", fairy.getAttribute("position"));

                    document.querySelector("#targetAud" + sessionStorage.getItem('lan')).components.sound.playSound();
                });
                document.querySelector("#targetAud" + sessionStorage.getItem('lan')).addEventListener('sound-ended', function() {

                    document.querySelector("#targetAud" + sessionStorage.getItem('lan')).components.sound.stopSound();

                    if (document.getElementById("noah") != null)
                        document.getElementById("noah").parentNode.removeChild(document.getElementById("noah"));
                    document.getElementById("Fairy").setAttribute(
                        "animation",
                        "property:position; to:" + (firtTargetPos.x + 1) +
                        " " + (firtTargetPos.y + 0.5) + " " +
                        firtTargetPos.z + "; dur:1000"
                    )
                    console.log("btmshy");
                    fairy.setAttribute("rotation", document.getElementById("targetone").getAttribute("rotation"));

                    // document.querySelector("#enviroAud" + sessionStorage.getItem('lan')).parentNode.removeChild(document.querySelector("#enviroAud" + sessionStorage.getItem('lan')));
                    // document.querySelector("#helloAud" + sessionStorage.getItem('lan')).parentNode.removeChild(document.querySelector("#helloAud" + sessionStorage.getItem('lan')));

                    // set fairy position to target one

                    fairyPositionx = firtTargetPos.x;
                    fairyPositionz = firtTargetPos.z;

                    //level three (Set distractor component and partical )
                    if (document.getElementById("level").getAttribute("value") == 3) {

                        //  document.getElementById("ds").parentNode.removeChild( document.getElementById("ds"));


                        fairy.setAttribute("rotation", document.getElementById("cam").getAttribute("rotation"));

                        /*
                         */
                        document.getElementById("myDistractor").setAttribute('advancedmovenment', "enabled", true)
                        document.getElementById("myDistractor").setAttribute('visible', true);
                        /* */

                        console.log(document.getElementById("myDistractor").getAttribute("position").z + " target " + lastTargetPos.z);
                        /* var partical= document.getElementById("distractingPartical");
 partical.setAttribute("visible","true");

   partical.setAttribute("position", 
          lastTargetPos )*/
                    }
                    //level two (Set distractor component and remove other components  )
                    else if (document.getElementById("level").getAttribute("value") == 2) {
                        document.getElementById("myDistractor").setAttribute('moverandomly', "enabled", true)
                        var old_element = document.getElementById("myDistractor");
                        var new_element = old_element.cloneNode(true);
                        old_element.parentNode.replaceChild(new_element, old_element);
                        document.getElementById("myDistractor").setAttribute('visible', true);
                        level = 2
                        console.log(document.getElementById("myDistractor") + level);

                        // console.log(document.getElementById("myDistractor").childElementCount)

                        document.getElementById("myDistractor").setAttribute(
                            "animation",
                            "property:position; to:" + (lastTargetPos.x + 1) +
                            " 0.5 " +
                            lastTargetPos.z + " dur:1000"
                        )
                    }

                    //level one (set distractor without any movement)
                    else {

                        var old_element = document.getElementById("myDistractor");
                        var new_element = old_element.cloneNode(true);
                        old_element.parentNode.replaceChild(new_element, old_element);
                        document.getElementById("myDistractor").setAttribute('visible', true);
                        console.log(document.getElementById("myDistractor"));

                    }
                });
            }
            //level menu buttons's events
        checkLevel();
    }
});
/* document.getElementById('boxLevel').addEventListener("click",e => 
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
  },
  
  play() 
  {
    var scene = document.querySelector('a-scene');

    // Button element
    
    
    // Check if scene has loaded, otherwise set up listener for when it does.
   
      scene.addEventListener('enter-vr', addButtonListener);
    
      scene.addEventListener('exit-vr', ()=>{
        console.log("out");
//window.location.href="../index.html";

      });

    // Add our button click listener.
    function addButtonListener() {
   //   enterVRButton.addEventListener('click', function() {
console.log("In");
    }
    
if (navigator.xr) {
/* WebXR can be used! */
// window.location.href="../index.html";
//} else {
/* WebXR isn't available}
  })
} */