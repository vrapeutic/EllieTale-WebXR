
# AFrame
# aframe-demo
Illytale  - aframe version


<a href="https://giphy.com/"><img src="https://media.giphy.com/media/sPLvCsgHmeRORpXqEB/giphy.gif" alt="illy-poster" border="0"></a>



**<span style="text-decoration:underline;">Project Description:</span>**

This is a module in which the player and Illy, the fairy, help uncle Noah collect his tools/objects to do his daily work.

To know more about this module check this [link](https://drive.google.com/file/d/1Bl0U1to2vOZ4wd83phxHcwpTrgiWfMjf/view?usp=sharing)

## Installation



* Go to [glitch](https://glitch.com/)
 
* Create an account

* On your dashboard click New project then click Import from GitHub

* Paste the full [url](https://github.com/vrapeutic/AFrame.git) of this repository and click ok


## Components

* html\index.html -this script contains three buttons each button redirect to one of our environments

* html\Beach.html -this contains our beach environments' entities (scene-sky- beach-fairy-destructor-score-list of items ..) with all components

* html\Garden.html - this for our garden environments' entities

* html\Library.html - this for library environments' entitis

* js\closetime.js - that contains “closetime” aframe component which is responsible for loading next scene after specific duration

* js\dsmove.js - that contains dsmove component which mange the distractor movement in level two and three,in addition to calculate time since distractor hit any target until player response to it

* js\fairy.js - this responsible for calculate the time the player takes since the fairy hit the target until the player open it

* js\inpscounter.js - this responsible for count times that the player doesn’t look at the fairy for more than 3 seconds

 * js\items.js - this register an a-frame component which is responsible for choosing random items from the list to show up when the player opens the target and after 10 seconds it will disappear and also this component mange score .

 * js\movetotarget.js - this contains the component which will add light to the target just hitted by the fairy and manage fairy movement when the distractor hits any target .

* js\stats.js- this component for getting a tell us when the session starts and ends and it will be responsible for APIs integration.

## Test 


Open the project on glitch from your dashboard ,Click on Show icon then open html\index.html

## Technology

A-Frame -Html -Javascript 
