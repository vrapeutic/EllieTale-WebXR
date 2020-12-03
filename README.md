
# AFrame


# aframe-demo
 Illytale  - aframe version

Project Description:
This is a module in which the player and Illy, the fairy, help uncle Noah collect his tools/objects to do his daily work.
To know more about this module check this link
 
Installation:
#method one:
Step1:
 Download/clone the SocketIO-server repository from GitHub from here
Step2: 
Download :
-Beach Environment model
-Garden Environment model 
-Library Environment model
Step3:
 Add them to "assets\model" folder in this project
Step4: 
Download Visual Studio Code from here
Step5:
Open Visual Studio Code and install Live Server Extension from  here
Step6: 
Open project folder with Visual Studio Code
 
 
#method two:
Step1:
 Go to glitch
Step2: 
Create an account
Step3: 
On your dashboard click New project then click Import from GitHub
Step4: 
Paste the full url of this repository and click ok
Step5:
Download :
-Beach Environment model
-Garden Environment model 
-Library Environment model
Step6: 
Add them to "assets\model" folder in this project
 
Components:
html\index.html -this script contains three buttons each button redirect to one of our environments
html\Beach.html -this contains our beach environments' entities (scene-sky- beach-fairy-destructor-score-list of items ..) with all components
html\Garden.html - this for our garden environments' entities
html\Library.html - this for library environments' entitis
js\closetime.js - that contains “closetime” aframe component which is responsible for loading next scene after specific duration
js\dsmove.js - that contains dsmove component which mange the distractor movement in level two and three,in addition to calculate time since distractor hit any target until player response to it
js\fairy.js - this responsible for calculate the time the player takes since the fairy hit the target until the player open it
js\inpscounter.js - this responsible for count times that the player doesn’t look at the fairy for more than 3 seconds
js\items.js - this register an a-frame component which is responsible for choosing random items from the list to show up when the player opens the target and after 10 seconds it will disappear and also this component mange score .
js\movetotarget.js - this contains the component which will add light to the target just hitted by the fairy and manage fairy movement when the distractor hits any target .
js\stats.js- this component for getting a tell us when the session starts and ends and it will be responsible for APIs integration.
Test :
#method one:
With Visual Studio Code open the project select html\index.html and with right click select open with live server
#method two:
Open the project on glitch from your dashboard ,Click on Show icon then open html\index.html

 
Technology:
A-Frame -Html -Javascript 

