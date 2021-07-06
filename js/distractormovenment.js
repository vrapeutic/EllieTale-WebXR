AFRAME.registerComponent("moverandomly", {

    init: function() {

        var target = document.querySelectorAll(".Box"); //Array of targets
        var ds = document.getElementById("myDistractor"); // distractor element
        ds.setAttribute('aabb-collider', 'enabled', false);


        const startDsMovement = function randommovenmet() {

            setTimeout(function() {

                randomIndexTarget = Math.floor(Math.random() * Math.floor(target.length));

                nextTargetPosition = target[randomIndexTarget].getAttribute("position"); //  next target for distractor

                ds.setAttribute("animation", "property:position; to:" + (nextTargetPosition.x - 1) + " 0 " + nextTargetPosition.z + " dur:4000");

                console.log(randomIndexTarget + " here " + target[randomIndexTarget].getAttribute("position").x + "ds " + ds.getAttribute("position").x)


                if (randomIndexTarget >= (target.length - 1)) {

                    randomIndexTarget = 0;
                    ds.setAttribute("animation", "property:position; to:" + (target[randomIndexTarget].getAttribute("position").x - 1) + " 0 " + target[randomIndexTarget].getAttribute("position").z + " dur:4000");
                    // Set it back to `0` when it reaches `3`
                }
                console.log("i'm here 2")

                randommovenmet();

            }, 6000);
        }

        startDsMovement();

    }
})