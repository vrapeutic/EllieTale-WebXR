/*var xhr = new XMLHttpRequest();
var url = "https://jsonplaceholder.typicode.com/posts?userId=1" ;
xhr.open("GET", url, true);
xhr.setRequestHeader("Content-Type", "application/json");
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var json = JSON.parse(xhr.responseText);
        console.log(xhr.status);
    }
};
xhr.send();*/

function convertHMS(value) {
  const sec = parseInt(value, 10); // convert value to number if it's string
  let hours = Math.floor(sec / 3600); // get hours
  let minutes = Math.floor((sec - hours * 3600) / 60); // get minutes
  let seconds = sec - hours * 3600 - minutes * 60; //  get seconds
  // add 0 if value < 10; Example: 2 => 02
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  return hours + ":" + minutes + ":" + seconds; // Return is HH : MM : SS
}

AFRAME.registerComponent("timer", {
  init: function () {
    start_session_time = new Date().toLocaleString();

    var time = 0;
    var count = -1;
    var startSession = 0;

    var mysession = setInterval(function () {
      document.getElementById("session").setAttribute("value", startSession);

      startSession++;
    }, 1000);
    mysession;
    console.log(this.el.id); //"1PASH9A5579282 "
    if (count == -1) {
      count = setInterval(function () {
        document.getElementById("session").setAttribute("value", time);
        time++;
      }, 1000);
    }
    document.getElementById("session").addEventListener("click", (e) => {
      clearInterval(count);
      //count=-1;
    });
    document.getElementById("session").addEventListener("click", (e) => {
      //clearInterval(count);
      count = -1;
      count = setInterval(function () {
        document.getElementById("session").setAttribute("value", time);
        time++;
      }, 1000);
    });

    document.getElementById("reload").addEventListener("click", () => {
      StatsDictionery();
    });
    document.getElementById("endAud").addEventListener("sound-ended", () => {
      StatsDictionery();
      //  window.open('finalPage.html',"_self");
    });
    issent = true;
  },
  remove: function () {
    console.log("bye bye");
  },
});

function StatsDictionery() {
  setTimeout(() => {
    location.reload();
  }, 6000);
}
