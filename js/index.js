var nextTargetPosition = 1,
    randomIndexTarget = 1;
var target = document.querySelectorAll(".Box"); //Array of targets
console.log(target.length);
var fairyPositionx = 1;
var fairyPositionz = 1;
var fairyPositiony = 1;
var start_session_time = new Date().toLocaleString();
// var Tas = 7.5;
// var implusivityScore;
// var omissionScore;
// var Ds;
// var responseTime;
var levelType;
// var Tir, end_session_time, AAS, TFD, timeTaken;
var issent = false;
var gardenPartical;
var soundEls = "mySound";
var _level = "1";
var _enviro = "Beach";
var _time = "0";
var gameHTMLFile = {
    environment: '',
}



function set_language(lang) {
    sessionStorage.setItem('langauage', lang);

    var data = {
        funcName: 'set_language',
        params: [
            lang
        ]
    }

}

function set_level(level) {
    sessionStorage.setItem('level', level);
    //  alert(sessionStorage.getItem('level'));
    var data = {
        funcName: 'set_level',
        params: [
            level
        ]
    }
    _level = level;
}

function set_environment(enviro) {
    sessionStorage.setItem('enviro', enviro);
    //  alert(sessionStorage.getItem('level'));
    var data = {
        funcName: 'set_environment',
        params: [
            enviro
        ]
    }
    _enviro = enviro;
    $(document).ready(function() {
        //fetch text file
        $.get('./html/' + _enviro + '.html', function(data) {
            gameHTMLFile['environment'] = data;
        });
    });
}

function set_timer(time) {
    sessionStorage.setItem('timer', time);
    //  alert(sessionStorage.getItem('level'));
    var data = {
        funcName: 'set_timer',
        params: [
            time
        ]
    }
    _time = time;
}
$(document).ready(function() {
    //fetch text file
    $.get('./html/' + _enviro + '.html', function(data) {
        gameHTMLFile['environment'] = data;
    });
});

function start_game() {
    var gameDiv = document.getElementById('game');
    // window.open('game.html',"_self");

    var data = {
        funcName: 'start_game',
        params: []
    }
    console.log(_level + _enviro + _time)

    var drMenuDiv = document.getElementById('dr-menu');

    drMenuDiv.style.visibility = 'hidden';
    gameDiv.style.visibility = 'visible';


    document.getElementById('injectable').innerHTML = gameHTMLFile['environment']
        //   document.querySelector('a-scene').setAttribute('vr-mode-ui', 'enabled', false)
}