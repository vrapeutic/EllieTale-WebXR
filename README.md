# EillyTale
Ellytale  - aframe version


<a href="https://giphy.com/"><img src="https://media.giphy.com/media/sPLvCsgHmeRORpXqEB/giphy.gif" alt="illy-poster" border="0"></a>



## Project Description
 
A visual target tracking exercise that is designed to address and measure the various variables of attention assessed by the Test of Variables of Attention (TOVA)

### story
Uncle Noah is an old independent man living by himself in the neighborhood. Since he’s living alone, he needs help making ends meet every day. He fishes, farms, grows fruit and writes books to earn money. Illy is a working fairy living in the neighborhood. She saw Uncle Noah in the evening one day while he was working on his garden and she talked to him. When she got to know that he was living and working alone, she decided that she’d pass by every day to help him. Illy invited the player to join her in helping Uncle Noah by unpacking his tools or collecting his objects for him.

The gameplay occurs in Three different environments. Each is composed of a round track on which the player reveals hidden items with Illy that are then collected. Uncle Noah is always present in the environments on the side doing an idle animation for each environment, and the items that the player and Illy find are collected in a container that lies beside Uncle Noah.
The environments are: a garden to collect fruits, a beach to collect fishing tools or fish and a library to collect letters.
### Levels
###  Level One: 
 the player must reveal all objects in less than a specific time period. For each box, the player must open it in less than 1m.
 
###  Level Two DISTRACTOR:
 the player must reveal all objects in less than a specific time period. For each object, the player must reveal it in less than 1m. While collecting the objects with Illy, Noah will walk around on the same track instead of his idle animation as a distractor. The player must ignore uncle Noah and continue revealing objects with Illy.
 
 
 ###	Level Three DISTRACTOR and INTERACTION:
 the player must reveal all objects in less than a specific time period. For each object, the player must reveal it in less than 1m. While collecting the objects with Illy, Noah will walk around on the same track instead of his idle animation as a distractor. After the player is done collecting the objects with Illy, Noah will ask the player to shake or point at an obstacle to reveal more objects. The player should follow uncle Noah’s instructions.
 
To know more about this module check this [link](https://drive.google.com/file/d/1Bl0U1to2vOZ4wd83phxHcwpTrgiWfMjf/view?usp=sharing)

##  Statistics
 In this module we need to collect data from each session to measure the progress of our player [here](https://docs.google.com/document/d/1hfb-5QqN-BFjP4_b4bqCiUYKa5b7ye6Q0TGulNYexKg/edit?usp=sharing) you will find how to calculate this data .

## Installation


* Go to [glitch](https://glitch.com/)
 
* Create an account

* On your dashboard click New project then click Import from GitHub

* Paste the full [url](https://github.com/vrapeutic/AFrame.git) of this repository and click ok

## Components

*  Assets :

you can find all gltf models [here](https://glitch.com/edit/#!/truth-elated-ocicat?path=assets%3A1%3A0) in assets folder

* index.html 

this script contains three buttons each button redirect to one of our environments

* index.js

Here we define most of our variables ,check [Statistics](#Statistics) for more information

* html\Beach.html 

this contains our beach environments' entities (scene-sky- beach-fairy-destructor-score-list of items ..) with all components

* html\Garden.html

this for our garden environments' entities

* html\Library.html 

this for our library environments' entitis

* js\timermanger.js 

that contains “timer” aframe component which is responsible for loading next scene after specific duration

* js\distractormovenment.js

that contains component which mange the distractor random movenment in level two .

* js\distractoradvancedmovenment.js 

that contains component which mange the distractor movenment in level three,in addition to calculate time since distractor hit any target until player response to it

* js\fairytasktimer.js 

this responsible for calculate the time the player takes since the fairy hit the target until the player open it

* js\inpscounter.js 

this responsible for count times that the player doesn’t look at the fairy for more than 3 seconds it helps in collecting data ,check [Statistics](#Statistics)

* js\items.js 

this register an a-frame component which is responsible for choosing random items from the list to show up when the player opens the target and after 10 seconds it will disappear and also this component mange score .

* js\movetotarget.js 

this contains the component which will add light to the target just hitted by the fairy and manage fairy movement when the distractor hits any target .

* js\menu.js

This controls game levels and using a timer or not

* js\stats.js

Here we calculate our [Statistics](#Statistics)

* js\selectenvironment.js

This component responsible for choosing the environment

## Test 

Open the project on glitch from your dashboard ,Click on Show icon 

## Technology

-A-Frame

* animation-mixer
* aabb-collider
* spe-partical

-Html 

-Javascript 
