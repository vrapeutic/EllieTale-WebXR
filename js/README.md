* **JS files**

	* **js\timermanger.js**: Contains “timer” AFrame component which is responsible for loading next scene after a specific duration

	* **js\distractormovenment.js**: Contains component which mange the distractor random movenments in **Level 2**

	* **js\distractoradvancedmovenment.js**: Contains component which manages the distractor movenment in **Level 3**, in addition to calculate time since distractor hit any target until player responds to it

	* **js\fairytasktimer.js**: Responsible for calculating the time the player took since the fairy hit the target until the player opens it successfully

	* **js\inpscounter.js**: Responsible for count times that the player doesn’t look at the fairy for more than 3 seconds. It is used in collecting data, check [Statistics](#Statistics) section for mre information

	* **js\items.js**: Registers an AFrame component which is responsible for choosing random items from the list to show up when the player opens the target and after 10 seconds it will disappear and also this component mange score

	* **js\movetotarget.js**: Contains the component which will add light to the target just hitted by the fairy and manage fairy movement when the distractor hits any target

	* **js\menu.js**: Controls the game's levels, and whether a timer is used or not

	* **js\stats.js**: Here we calculate our [Statistics](#Statistics)

	* **js\selectenvironment.js**: Responsible for choosing the environment
