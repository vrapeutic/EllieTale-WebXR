<h1 align="center">
  <p align="center">Ellie Tale - WebXR Version.. <a href="https://vrapeutic.github.io/EllieTale-WebXR/">Try it out!</a> 🚀</p>
  <a href="https://giphy.com/"><img src="https://media.giphy.com/media/sPLvCsgHmeRORpXqEB/giphy.gif" alt="Ellie-poster" border="0"></a>
</h1>

<p align="center">
    <!-- <a href="https://app.circleci.com/insights/github/vrapeutic/vrapeutic.github.io/workflows/build/overview?reporting-window=last-90-days&branch=main"><img src="https://circleci.com/gh/vrapeutic/vrapeutic.github.io.svg?style=shield"/></a> -->
    <a href="https://github.com/vrapeutic/vrapeutic.github.io/blob/main/LICENSE"><img src="https://img.shields.io/badge/License-GPL%20v3.0-brightgreen"/></a>
    <a href=""><img src="https://img.shields.io/badge/npm-6.14.13-yellowgreen"/></a>
    <a href=""><img src="https://img.shields.io/badge/Made%20with-%E2%9D%A4-red"/></a>
    <a href="https://docusaurus.io/"><img src="https://img.shields.io/badge/Built%20with-AFrame-brightgreen"/></a>
    <a href="https://github.com/vrapeutic/EllieTale-WebXR/blob/main/CONTRIBUTING.md"><img src="https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg"/></a>
    <br>
    <a href="https://github.com/vrapeutic"><img src="https://img.shields.io/github/stars/vrapeutic?affiliations=OWNER%2CCOLLABORATOR%2CORGANIZATION_MEMBER&style=social"></a>
    <a href="https://twitter.com/myvrapeutic"><img src="https://img.shields.io/twitter/follow/myvrapeutic?style=social"/></a>
    <a><img src="https://img.shields.io/badge/all_contributors-3-orange.svg?style=flat-square"/></a>
</p>

## Description 📝

A gamified **Virtual Reality** theapeutic application, addresses attention skills on various levels. The gameplay consists of a visual target tracking exercise that is designed to address and measure the various variables of attention.

## Story 🎙

**Uncle Noah** is a nice old man, living by himself in the neighborhood. Since he’s living alone, he usually needs help in his everyday activites. He does fishing, farming, growing fruits, and writes books to earn a living.

**Ellie** is a fairy living in the neighborhood. One evening, she saw Uncle Noah while he was working on his garden and she talked to him. When she got to know that he was living and working all by himself, she decided that she’d pass by every day to help him. Ellie has invited the **you** to join her in helping Uncle Noah by unpacking his tools or collecting his objects.

The gameplay occurs in **three unique environments**. Each is composed of a round track on which the player shall reveal hidden items with the help of Ellie that are then collected. Uncle Noah is always present in the environments on the side doing an idle animation, and the items that the player and Ellie find are collected in a container that lies beside Uncle Noah.
The three environments are:

- **Garden**; and the objective is to collect fruits and vegetables
- **Beach**; and the objective is to collect fish and fishing tools
- **Library**; and the objective is to collect letters

## Technologies Used 💻

- [A-Frame](https://aframe.io/)
  - [Animation Mixer](https://www.8thwall.com/8thwall/animation-mixer-aframe)
  - [AABB Colider](https://github.com/supermedium/superframe/tree/master/components/aabb-collider/)
  - [SPE Particles](https://github.com/harlyq/aframe-spe-particles-component)
- HTML, CSS, JavaScript

## Installation Guide 🖥

### Install and run the project locally using NPMv6

## Art
- https://drive.google.com/drive/folders/1Ans338bbWz77XcD9fvwclpxW0s_o6SHC?usp=share_link

---

> node v14.17.2

> npm v6.14.13

- Clone the repository

```sh
git clone https://github.com/vrapeutic/EllieTale-WebXR.git
cd EllieTale-WebXR
```

- Install dependencies

```sh
npm install
```

- Run the project

```sh
npm run dev
```

- Go to the localhost URL specified in the terminal
- Congrats! You're now running the project locally! 🚀

### Install and run the project locally using Dockerv20

---

> docker v20.10.1

- Clone the repository
  `git clone https://github.com/vrapeutic/Ellie-Tale.git`
- Go to the repo's directory
  `cd Ellie-Tale`
- Run `docker pull yahyaalaa/Ellie-tale-webxr:tag` to pull the latet Docker image from our DockerHub public repository, where you will find our available `tags`
- Run `docker run -d -p YOUR_PREFERRED_PORT:3000 --name Ellie-tale --mount type=bind,source="$(pwd)",target=/webxr-code yahyaalaa/Ellie-tale-webxr:tag` command to run the Docker image on your local machine, and at the same time mount the working directory, to apply changes to the image on the fly
- Choose your preferred port in order to run the app on local host
- Go to the localhost:YOUR_PREFERRED_PORT to check your new code modifications
- Hooray! You've got your Docker image-based local development environment ready!

### Run the project on Glitch platform

---

- Go to [Glitch](https://glitch.com/) platform
- Create an account if you don't already have one
- On your dashboard, then click **New project**, then choose the **Import from GitHub** option
- Paste the repo's full [url](https://github.com/vrapeutic/Ellie-Tale.git), then click **Ok**
- You're ready to go!

### Preferred platform

---

If you are going to be using a VR Headset, then we recommend trying the app (either the [hosted version](https://vrapeutic.github.io/EllieTale-WebXR/) or on [Glitch](https://glitch.com/)) on the [Oculus Browser](https://developer.oculus.com/webxr/).

For local development and testing, modern browsers could be used, where mouse and keyboard interactions will be the main source of interaction with the VR environment.

## Contributions 💌

First off, thanks for taking the time to contribute! You can check out our contribution guidelines from this [link](https://github.com/YahyaAlaaMassoud/Ellie-Tale/blob/master/CONTRIBUTING.md).
Please note that this project is released with a Contributor Code of Conduct, which can be found [here](https://www.contributor-covenant.org/version/2/0/code_of_conduct/). By participating in this project you agree to abide by its terms.

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://www.linkedin.com/in/yahya-alaa/"><img src="https://avatars.githubusercontent.com/u/31636106?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Yahya Alaa</b></sub></a><br /><a href="https://github.com/vrapeutic/EllieTale-WebXR/issues?q=author%3AYahyaAlaaMassoud" title="Bug reports">🐛</a> <a href="#ideas-YahyaAlaaMassoud" title="Ideas, Planning, & Feedback">🤔</a> <a href="#infra-YahyaAlaaMassoud" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#mentoring-YahyaAlaaMassoud" title="Mentoring">🧑‍🏫</a> <a href="#projectManagement-YahyaAlaaMassoud" title="Project Management">📆</a></td>
    <td align="center"><a href="https://github.com/hadeergamal1"><img src="https://avatars.githubusercontent.com/u/52928785?v=4?s=100" width="100px;" alt=""/><br /><sub><b>hadeergamal1</b></sub></a><br /><a href="https://github.com/vrapeutic/EllieTale-WebXR/issues?q=author%3Ahadeergamal1" title="Bug reports">🐛</a> <a href="https://github.com/vrapeutic/EllieTale-WebXR/commits?author=hadeergamal1" title="Code">💻</a> <a href="#content-hadeergamal1" title="Content">🖋</a> <a href="#design-hadeergamal1" title="Design">🎨</a> <a href="#ideas-hadeergamal1" title="Ideas, Planning, & Feedback">🤔</a> <a href="#maintenance-hadeergamal1" title="Maintenance">🚧</a></td>
    <td align="center"><a href="https://github.com/alkabbany"><img src="https://avatars.githubusercontent.com/u/48055184?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Ahmad Al-Kabbany</b></sub></a><br /><a href="#business-alkabbany" title="Business development">💼</a> <a href="#content-alkabbany" title="Content">🖋</a> <a href="#mentoring-alkabbany" title="Mentoring">🧑‍🏫</a> <a href="#projectManagement-alkabbany" title="Project Management">📆</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
