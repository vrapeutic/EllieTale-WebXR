
# Illy Tale - WebXR Version | [Try it out!](https://bit.ly/2LiIM22) 

| master 	| [![Build Status](https://travis-ci.com/YahyaAlaaMassoud/Elly-Tale.svg?token=PBt8ZGdgcipxYrxdNZTr&branch=master)](https://travis-ci.com/YahyaAlaaMassoud/Elly-Tale) 	| Travis CI Build Status 	|
|-	|-	|-	|
___

<p align="center">
<a href="https://giphy.com/"><img src="https://media.giphy.com/media/sPLvCsgHmeRORpXqEB/giphy.gif" alt="illy-poster" border="0"></a>
</p>

## Description
 
A **Virtual Reality** gamified theapeutic application, addresses attention skills on various levels. The gameplay consists of a visual target tracking exercise that is designed to address and measure the various variables of attention assessed by the **Test of Variables of Attention** ([TOVA](https://www.tovatest.com/)).

## Story
**Uncle Noah** is a nice old man, living by himself in the neighborhood. Since he’s living alone, he usually needs help in his everyday activites. He does fishing, farming, growing fruits, and writes books to earn a living. 

**Illy** is a fairy living in the neighborhood. One evening, she saw Uncle Noah while he was working on his garden and she talked to him. When she got to know that he was living and working all by himself, she decided that she’d pass by every day to help him. Illy has invited the **you** to join her in helping Uncle Noah by unpacking his tools or collecting his objects.

The gameplay occurs in **three unique environments**. Each is composed of a round track on which the player shall reveal hidden items with the help of Illy that are then collected. Uncle Noah is always present in the environments on the side doing an idle animation, and the items that the player and Illy find are collected in a container that lies beside Uncle Noah.
The three environments are: 

 - Garden; and the objective is to collect fruits and vegetables
 - Beach; and the objective is to collect fish and fishing tools
 - Library; and the objective is to collect letters

## Levels
###  Level One: 
The player must reveal all objects in less than a specific time period (30, 60, and 90 seconds). Each box must be opened in less than a period of time (60 seconds).
 
###  Level Two (*distractor* included):
The main objective is the same as **Level 1**. However, while collecting the objects with Illy, Noah will walk around on the same track as an animated *distractor*. The player must not be distracted by uncle Noah, and focus to continue revealing objects with Illy.
 
 
 ###	Level Three (*distractor* and *interaction* are included):
The main objective is the same as **Level 2**. However, after the player is done collecting the objects with Illy, Noah will ask the player to shake or point at an obstacle to reveal more objects. The player should follow Uncle Noah’s instructions.
 
To know more about the design of the gamified thepautic VR application, check our [GDD](https://drive.google.com/file/d/1Bl0U1to2vOZ4wd83phxHcwpTrgiWfMjf/view?usp=sharing) (Game Design Document)

##  Statistics
 In each session, we need collect data to measure the progress of the player. More information about the collected information could be found [here](https://docs.google.com/document/d/1hfb-5QqN-BFjP4_b4bqCiUYKa5b7ye6Q0TGulNYexKg/edit?usp=sharing).

## Technologies Used

 - [A-Frame](https://aframe.io/)
	 - [Animation Mixer](https://www.8thwall.com/8thwall/animation-mixer-aframe)
	 - [AABB Colider](https://github.com/supermedium/superframe/tree/master/components/aabb-collider/)
	 - [SPE Particles](https://github.com/harlyq/aframe-spe-particles-component)
 - HTML, CSS, JavaScript

## Installation Guide

### 1 | Install and run the project locally using NPM
---

> node v15.5.0
> npm v7.3.0

 1. Clone the repository `git clone https://github.com/YahyaAlaaMassoud/Illy-Tale.git`
 2. Go to the repo's directory `cd Illy-Tale`
 3. Run `npm install` to install the required dependecies
 4. Run `npm run dev` command to start the WebXR app in your local envirotnment
 5. Go to the localhost URL specified in the terminal
 6. Congrats! You've got your local development environment ready!

### 2 | Install and run the project locally using Docker
---

> docker v20.10.1

 1. Clone the repository 
`git clone https://github.com/YahyaAlaaMassoud/Illy-Tale.git`
 2. Go to the repo's directory 
`cd Illy-Tale`
 3. Run `docker pull yahyaalaa/illy-tale-webxr:tag` to pull the latet Docker image from our DockerHub public repository, where you will find our available `tags`
 4. Run `docker run -d -p YOUR_PREFERRED_PORT:3000 --name illy-tale --mount type=bind,source="$(pwd)",target=/webxr-code yahyaalaa/illy-tale-webxr:tag` command to run the Docker image on your local machine, and at the same time mount the working directory, to apply changes to the image on the fly
 5. Choose your preferred port in order to run the app on local host
 6. Go to the localhost:YOUR_PREFERRED_PORT to check your new code modifications
 7. Hooray! You've got your Docker image-based local development environment ready!

### 3 | Run the project on Glitch platform
---
 1. Go to [Glitch](https://glitch.com/) platform
 2. Create an account if you don't already have one
 3. On your dashboard, then click **New project**, then choose the **Import from GitHub** option
 4. Paste the repo's full [url](https://github.com/vrapeutic/AFrame.git), then click **Ok**
 5. You're ready to go!
 
 ### Preferred platform
 ---
 If you are going to be using a VR Headset, then we recommend trying the app (either the [hosted version](https://bit.ly/2LiIM22) or on [Glitch](https://glitch.com/)) on the [Oculus Browser](https://developer.oculus.com/webxr/).
 
 For local development and testing, modern browsers could be used, where mouse and keyboard interactions will be the main source of interaction with the VR environment.

## Code structures

*  **Assets** directory

	* All GLTF models could be found in [assets folder](https://glitch.com/edit/#!/truth-elated-ocicat?path=assets%3A1%3A0)

* **index.html**

	* Contains three buttons each button redirect to one of our environments

* **index.js**

	* Here we define most of our variables used for [statistics](#Statistics) computation

* **html** directory

	* Contains environments' entities and components for **Garden**, **Beach**, and **Library**. Check [here](https://github.com/YahyaAlaaMassoud/Illy-Tale/blob/master/html/README.md) for more information.
* **js** directory
	* Contains all logic and based on AFrame and JS code. Check [here](https://github.com/YahyaAlaaMassoud/Illy-Tale/blob/master/js/README.md) for more information

## Contributions
First off, thanks for taking the time to contribute! You can check out our contribution guidelines from this [link](https://github.com/YahyaAlaaMassoud/Illy-Tale/blob/master/CONTRIBUTING.md).
