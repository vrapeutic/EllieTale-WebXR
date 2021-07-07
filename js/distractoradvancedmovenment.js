AFRAME.registerComponent("advancedmovenment", {


    init: function() {

        var target = document.querySelectorAll(".Box"); //Array of targets
        var ds = document.getElementById("myDistractor"); // distractor element

        console.log(target + " this " + ds + document.getElementById("level").getAttribute("value"));

        //for level three
        console.log("clicked");
        setTimeout(() => {
            var partical = document.getElementById("distractingPartical");
            partical.setAttribute("visible", "true");

            partical.setAttribute("position", document.getElementById("targetthree").getAttribute("position"));
            document.getElementById("myDistractor").setAttribute(
                "animation",
                "property:position; to:" + (document.getElementById("targetthree").getAttribute("position").x + 1) +
                " 0 " +
                document.getElementById("targetthree").getAttribute("position").z + "; dur:2000"
            );
        }, 4000);





        let advancedDsMovement = function newRandomMovenment() {
            document.getElementById("distractingPartical").setAttribute("visible", "false");

            randomIndexTarget = Math.floor(Math.random() * Math.floor(target.length));

            if (target[randomIndexTarget].getAttribute("position").x != ds.getAttribute("position").x) {
                randomIndexTarget = randomIndexTarget;
            } else {
                randomIndexTarget--;

            }
            nextTargetPosition = target[randomIndexTarget].getAttribute("position");








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


            ds.addEventListener("click", advancedDsMovement)
            if (document.getElementById("distractingPartical").getAttribute('visible') != true) {
                AddPartical();

            }


            console.log(e);




        });



        function AddPartical() {

            var distractingPartical = document.getElementById("distractingPartical");
            //  distractingPartical.setAttribute("gltf-model", "#half"); 

            distractingPartical.setAttribute("animation-mixer", "enabled:true");

            distractingPartical.setAttribute("position", nextTargetPosition);
            distractingPartical.setAttribute("visible", "true");

            // ds.addEventListener("click", advancedDsMovement)

        }
    }
})