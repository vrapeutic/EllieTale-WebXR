
# AFrame


# aframe-demo
 Illytale  - aframe version
 
assets -  a directory that contains 3d models and textures
 At first you need to download
 Beach.gltf:https://drive.google.com/file/d/1QI7H7heW761S-Un1MNy-AFDvCc9DlYxS/view?usp=sharing
Garden.gltf:https://drive.google.com/file/d/1Os7X02KIhb5uQKyPvJ9pbYp_RHNeMDkC/view?usp=sharing
Library.gltf:https://drive.google.com/file/d/1xFMej5Fe3EDfrUfc0tmhQzgftJG6Pwsm/view?usp=sharing
 
add them to "assets\model" folder  .
 
html\index.html - for now it's for test running code on the browser  with cubes and it will redirect to next environment after 30 mins but it in future it will be our enter point with menus .You can find it here too:
 https://glitch.com/edit/#!/illy-baics?path=index.html%3A1%3A0
 
 html\Beach.html -this contains  our beach environments' entities with full functions
 
 html\Garden.html - this for our garden environments' entities
 
 html\Library.html - this for library environments' entitis
 
 js\closetime.js - that contains “closetime” aframe component which is responsible for loading next scene after specific duration
 
 js\dsmove.js - that contains dsmove component which mange the distractor movement in level two and three,in addition to calculate time since distractor hit any target until player response to it
 
 js\fairy.js - this responsible for calculate the time the player takes since the fairy hit the target until the player open it 
 
 js\inpscounter.js - this responsible for count times that the player doesn’t look at the fairy for more than 3 seconds
 
 js\items.js - this register an aframe component which is responsible for choosing random items from the list to show up when the player open the target and after 10 seconds it will disappear and also this component mange score .
 
 js\movetotarget.js - this contains the component which will add light to the target just hitted by the fairy and manage fairy movement when the distractor hits any target .
 
 js\stats.js- this component for getting a tell us when the session starts and ends and it will be responsible for APIs integration.
 
 
 
To start using the code, you need to start a live server extension in Visual Studio Code and open index.html or any .html page with live server.
=======

