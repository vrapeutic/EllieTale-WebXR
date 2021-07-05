AFRAME.registerComponent("advancedmovenment", {


    init: function() {

        var target = document.querySelectorAll(".Box"); //Array of targets
        var ds = document.getElementById("myDistractor"); // distractor element
        var timer = 0;
        var count = -1;
        var isCounting = true;
        console.log(target + " this " + ds + document.getElementById("level").getAttribute("value"));

        //for level three
        console.log("clicked");
        var partical = document.getElementById("distractingPartical");
        partical.setAttribute("visible", "true");

        partical.setAttribute("position", document.getElementById("targetthree").getAttribute("position"));
        document.getElementById("myDistractor").setAttribute(
            "animation",
            "property:position; to:" + (document.getElementById("targetthree").getAttribute("position").x + 1) +
            " 0 " +
            document.getElementById("targetthree").getAttribute("position").z + "delay:5000; dur:8000"

        );
        if (isCounting == true) {
            count = setInterval(function() {

                document.getElementById("dstime").setAttribute("value", timer);
                timer++;
            }, 1000);
        }

        let advancedDsMovement = function newRandomMovenment() {
            document.getElementById("distractingPartical").setAttribute("visible", "false");

            randomIndexTarget = Math.floor(Math.random() * Math.floor(target.length));

            if (target[randomIndexTarget].getAttribute("position").x != ds.getAttribute("position").x) {
                randomIndexTarget = randomIndexTarget;
            } else {
                randomIndexTarget--;

            }
            nextTargetPosition = target[randomIndexTarget].getAttribute("position");

            var distractingTaskCounter = document.getElementById("dscounter").getAttribute("value");

            distractingTaskCounter++;

            document.getElementById("dscounter").setAttribute("value", distractingTaskCounter);





            // ds.setAttribute('aabb-collider','enabled',true);
            console.log(ds);
            ds.setAttribute(
                "animation",
                "property:position; to:" +
                (nextTargetPosition.x + 1) +
                " 0.1 " +
                nextTargetPosition.z +
                "  begin:bounce-start;end:bounce-stop;dur:2000"
            );

            console.log("dscounter: " + distractingTaskCounter);
            document
                .getElementById("Fairy")
                .setAttribute("animation", "enabled", true);

            console.log(
                randomIndexTarget +
                " here " +
                target[randomIndexTarget].getAttribute("position").x +
                "ds " +
                ds.getAttribute("position").x
            );
            return randomIndexTarget;

        };
        ds.addEventListener('animationcomplete', e => {

            document
                .getElementById("Fairy")
                .setAttribute("animation", "enabled", false); // to stop fairy movement until the player respond to distractor
            if (isCounting == false) {
                count = setInterval(function() {

                    document.getElementById("dstime").setAttribute("value", timer);
                    timer++;
                }, 1000);
                /* if (
          e.target.components["aabb-collider"]["intersectedEls"]
            .map(x => x.id)
            .includes(target[randomIndexTarget].id) 
          
          )
          { 
  
      /*        document
            .getElementById("myDistractor")
            .setAttribute("animation", "enabled", false); 
        }*/

            }
            ds.addEventListener("click", advancedDsMovement)
            if (document.getElementById("distractingPartical").getAttribute('visible') != true) {
                AddPartical();

            }


            console.log(e);

            //  document .getElementById("myDistractor")
            //S    ds.setAttribute('aabb-collider','enabled',false);



            // ds.removeEventListener("hitstart"); 


        });

        ds.addEventListener("hitend", e => {


            //  document.getElementById("distractingPartical").parentNode.removeChild(document.getElementById("distractingPartical"));
            clearInterval(count);
            isCounting = false;


        });

        function AddPartical() {

            var distractingPartical = document.getElementById("distractingPartical");
            distractingPartical.setAttribute("visible", "true");
            distractingPartical.setAttribute("position", nextTargetPosition);

            // ds.addEventListener("click", advancedDsMovement)

        }
    }
})