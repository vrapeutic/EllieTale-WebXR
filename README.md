
# AFrame


# aframe-demo
 Illytale  - aframe version

**<span style="text-decoration:underline;">Project Description:</span>**

This is a module in which the player and Illy, the fairy, help uncle Noah collect his tools/objects to do his daily work.

To know more about this module check this [link](https://drive.google.com/file/d/1Bl0U1to2vOZ4wd83phxHcwpTrgiWfMjf/view?usp=sharing)

**<span style="text-decoration:underline;">Installation</span>**:

#**method one:**

Step1:

 Download/clone the SocketIO-server repository from GitHub from [here](https://github.com/vrapeutic/AFrame/archive/main.zip)

Step2: 

Download :

-[Beach Environment model](https://drive.google.com/file/d/1QI7H7heW761S-Un1MNy-AFDvCc9DlYxS/view?usp=sharing)

-[Garden Environment model](https://drive.google.com/file/d/1Os7X02KIhb5uQKyPvJ9pbYp_RHNeMDkC/view?usp=sharing) 

-[Library Environment model](https://drive.google.com/file/d/1xFMej5Fe3EDfrUfc0tmhQzgftJG6Pwsm/view?usp=sharing)

Step3:

 Add them to "assets\model" folder in this project

Step4: 

Download Visual Studio Code from [here](https://code.visualstudio.com/download)

Step5:

Open Visual Studio Code and install Live Server Extension from  [here](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

Step6: 

Open project folder with Visual Studio Code

**#method two:**

Step1:

 Go to [glitch](https://glitch.com/)

Step2: 

Create an account

Step3: 

On your dashboard click New project then click Import from GitHub

Step4: 

Paste the full [url](https://github.com/vrapeutic/AFrame.git) of this repository and click ok

Step5:

Download :

-[Beach Environment model](https://drive.google.com/file/d/1QI7H7heW761S-Un1MNy-AFDvCc9DlYxS/view?usp=sharing)

-[Garden Environment model](https://drive.google.com/file/d/1Os7X02KIhb5uQKyPvJ9pbYp_RHNeMDkC/view?usp=sharing) 

-[Library Environment model](https://drive.google.com/file/d/1xFMej5Fe3EDfrUfc0tmhQzgftJG6Pwsm/view?usp=sharing)

Step6: 

Add them to "assets\model" folder in this project

**<span style="text-decoration:underline;">Components:</span>**

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

**<span style="text-decoration:underline;">Test :</span>**

**#method one:**

With Visual Studio Code open the project select html\index.html and with right click select open with live server

**#method two:**

Open the project on glitch from your dashboard ,Click on Show icon then open html\index.html

**<span style="text-decoration:underline;">Technology:</span>**

A-Frame -Html -Javascript 
