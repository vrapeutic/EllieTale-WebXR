AFRAME.registerComponent("showitem", {
  init: function () {
    let fairy = document.querySelector("#Fairy");
    var el = this.el;
    target = document.querySelectorAll(".Box");
    let sounds = document.querySelectorAll(".itemsSound");
    let selectRandomItem = () => {
      if (el.firstElementChild.id != null) {
        //check if this target has light
        var score;
        var index; //to store index for the array of targets
        var item, random;
        var fairyPosition = fairy.getAttribute("position");
        document
          .getElementById(el.firstElementChild.id)
          .parentNode.removeChild(
            document.getElementById(el.firstElementChild.id)
          ); //destoy light from current target
        var soundEls = document.querySelectorAll("[sound]");
        var pos = this.el.getAttribute("position");
        var rotation = this.el.getAttribute("rotation");
        soundEls.forEach((soundEl) => {
          soundEl.components.sound.stopSound();
        });
        el.setAttribute("showitem", "enabled", false);

        this.el.setAttribute("movetotarget", "enabled", false);
        let randomSound = Math.floor(Math.random() * Math.floor(sounds.length));
        console.log(sounds[0]);

        this.el.setAttribute(
          "animation-mixer",
          "repetitions:1; clampWhenFinished:false"
        );

        fairy.setAttribute(
          "animation",
          "property:position; to:" +
            (fairyPosition.x + 1) +
            " " +
            (fairyPosition.y + 2) +
            " " +
            (fairyPosition.z - 1) +
            "; dur:1000"
        );
        this.el.setAttribute("aabb-collider", "enabled", false);
        item = document.querySelectorAll(".items");
        random = Math.floor(Math.random() * Math.floor(item.length));

        score = document.getElementById("score").getAttribute("value");
        //this.el.appendChild(item[random]);
        //  fairy.components.sound.stopSound();

        sounds[randomSound].setAttribute(
          "position",
          fairy.getAttribute("position")
        );

        sounds[randomSound].components.sound.playSound();

        index = score;

        document
          .getElementById(sounds[randomSound].id)
          .addEventListener("sound-ended", function () {
            var soundEls = document.querySelectorAll("[sound]");

            soundEls.forEach((soundEl) => {
              soundEl.components.sound.stopSound();
            });
            item[random].firstElementChild.setAttribute(
              "position",
              fairy.getAttribute("position")
            );

            item[random].firstElementChild.components.sound.playSound();
          });

        item[random].firstElementChild.addEventListener(
          "sound-ended",
          function () {
            item[random].firstElementChild.parentNode.removeChild(
              item[random].firstElementChild
            );
          }
        );

        item[random].setAttribute("position", pos);
        item[random].setAttribute("rotation", rotation);
        console.log(pos);
        item[random].setAttribute("Visible", true);
        item[random].setAttribute("animation-mixer", "enabled", true);
        var finalPartical = document.createElement("a-entity");
        finalPartical.setAttribute("gltf-model", "#half");
        finalPartical.setAttribute("animation-mixer", "enabled:true");
        finalPartical.setAttribute("id", "finalPartical");

        this.el.appendChild(finalPartical);
        this.el.addEventListener("animation-finished", () => {
          this.el.setAttribute("animation-mixer", { timeScale: 0 });
        });
        /* var partical=document.createElement('a-entity');
                     partical.setAttribute("spe-particles","texture: ../images/particles/circle.png;color: #0000FF, #00FFFF, #FFFFFF; particle-count: 1000; acceleration: 0 -6 0;")
                     partical.setAttribute("spe-particles","opacity: 2, 2, 0; velocity: 0 4 0; size: 2, 2, 0; velocity-spread: 2 0 2;") 
                     //partical.setAttribute("position","1 3 1")
                     item[random].appendChild(partical);*/

        if (index <= document.querySelectorAll(".Box").length) {
          index++;
        }

        if (index == document.querySelectorAll(".Box").length) {
          fairy.setAttribute("poisition", fairy.getAttribute("position"));
          item[random].firstElementChild.addEventListener(
            "sound-ended",
            function () {
              document
                .getElementById("endAud")
                .setAttribute("position", fairy.getAttribute("position"));

              document.getElementById("endAud").components.sound.playSound();
              console.log(
                index + " len " + document.querySelectorAll(".Box").length
              );
              console.log(this.el.getAttribute("position"));
            }
          );
        }

        setTimeout(() => {
          score++;
          document.getElementById("score").setAttribute("value", score);

          fairyPositionx = target[index].getAttribute("position").x;
          fairyPositiony = target[index].getAttribute("position").y;
          fairyPositionz = target[index].getAttribute("position").z;

          fairy.setAttribute(
            "animation",
            "property:position; to:" +
              (fairyPositionx + 0.7) +
              " " +
              (fairyPositiony + 0.5) +
              " " +
              fairyPositionz +
              "; dur:1000"
          ); //move Fairy to next Target
          fairy.setAttribute(
            "rotation",
            target[index].getAttribute("rotation")
          );

          console.log(
            target[index].getAttribute("position").x -
              1 +
              " count : " +
              fairyPositionx +
              " " +
              fairy.getAttribute("position").x
          );

          item[random].className = "new";
        }, 5000);

        setTimeout(() => {
          item[random].remove();
          document
            .getElementById(el.firstElementChild.id)
            .parentNode.removeChild(
              document.getElementById(el.firstElementChild.id)
            ); //destoy light from current target
          document
            .getElementById(el.firstElementChild.id)
            .parentNode.removeChild(
              document.getElementById(el.firstElementChild.id)
            ); //destoy light from current target
        }, 9000);
      } else {
        console.log("bye");
      }
    };

    el.addEventListener("child-dattached", function (evt) {
      el.removeEventListener("click", () => {
        selectRandomItem();
      });
    });
    el.addEventListener("child-attached", function (evt) {
      console.log(evt.detail.name + el.firstElementChild.id);

      console.log("a box element has been changed");
      console.log(el);

      if (el.firstElementChild.id === "myLight") {
        el.addEventListener("click", () => {
          selectRandomItem();
        });
      }
    });
  },
});
