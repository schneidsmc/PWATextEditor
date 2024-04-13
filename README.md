
  
<h1 align="center">PWA Text Editor </h1>

<div style= "text-align: center">

  <img src="https://img.shields.io/github/repo-size/schneidsmc/PWATextEditor" />
  <img src="https://img.shields.io/github/languages/top/schneidsmc/PWATextEditor" />
  <img src="https://img.shields.io/github/last-commit/schneidsmc/PWATextEditor" />
<br />


![Javascript Badge](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&labelColor=black)
![Nodemon Badge](https://img.shields.io/badge/nodemon-2C2D72?style=for-the-badge&logo=nodemon&logoColor=white)
![Node Badge](https://img.shields.io/badge/Node.js-%23339933?style=for-the-badge&logo=node.js&labelColor=black)
![Concurrently Badge](https://img.shields.io/badge/Concurrently-4E4E4E?style=for-the-badge&logo=concurrently&logoColor=white)
![Prettier Badge](https://img.shields.io/badge/prettier%20-%20%23F7B93E?style=for-the-badge&logo=prettier&labelColor=black)
![dotenv Badge](https://img.shields.io/badge/dotenv-656565?style=for-the-badge&logo=dotenv&logoColor=white)

</div>

## Description 📚

- What was your motivation? Why did you build this project? What problem does it solve? What did you learn?

This project is built using Progressive Web Applications and Render to deply the project.

This was created using .

## Table of Contents 

- [User-Story](#user-story)
- [Acceptance-Criteria](#acceptance-criteria)
- [Installation](#installation-📋)
- [Usage](#usage-🏁)
- [Demonstration](#demonstration)
- [Author](#author-👋🏽)

## User Story

AS A developer:
I WANT to create notes or code snippets with or without an internet connection SO THAT I can reliably retrieve them for later use

## Acceptance Criteria

GIVEN a text editor web application:
- WHEN I open my application in my editor THEN I should see a client server folder structure
- WHEN I run `npm run start` from the root directory THEN I find that my application should start up the backend and serve the client
- WHEN I run the text editor application from my terminal THEN I find that my JavaScript files have been bundled using webpack
- WHEN I run my webpack plugins THEN I find that I have a generated HTML file, service worker, and a manifest file
- WHEN I use next-gen JavaScript in my application THEN I find that the text editor still functions in the browser without errors
- WHEN I open the text editor THEN I find that IndexedDB has immediately created a database storage
- WHEN I enter content and subsequently click off of the DOM window THEN I find that the content in the text editor has been saved with IndexedDB
- WHEN I reopen the text editor after closing it THEN I find that the content in the text editor has been retrieved from our IndexedDB
- WHEN I click on the Install button THEN I download my web application as an icon on my desktop
- WHEN I load my web application THEN I should have a registered service worker using workbox
- WHEN I register a service worker THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets
- WHEN I deploy to Render THEN I should have proper build scripts for a webpack application

## Installation 📋

Installation for this application begins with cloning the repository to your local machine by typing `git clone https://github.com/schneidsmc/PWATextEditor.git` in the command line. Once you have navigate into that directory and opened it in vsCode, you open an integrated terminal for the root directory of the application and use the `npm i` command in the command line. This will make the installs happen for all of the folders. 

After you have installed all teh necessary dependencies, you run `npm run build` or `npm run start` in the command line to begin the build using the webpack. this will create a dist folder and the comnsole.log will let you know that it is running on port 3000.

Once you open the app you can install it onto your local machine by hitting the install button on the top right. 

Make sure you don't have pop-up blockers blocking the install.

## Usage 🏁

Once you have everything up and running, this is a great application to store notes. You can type and it will store everything so you can close and reopen the app to the same information. 

If you install the PWA from the web server, you can use the application offline.

## Demonstration

[Here](https://pwatexteditor-njc8.onrender.com/) is the deployed link on Render. 
You can click the link above but this is what the URL looks like: https://pwatexteditor-njc8.onrender.com/.

This is a short gif showing the functionality of the PWA.

<img src="./images/Install.gif" alt="Installed and Stored" width="600" height="auto"> 

Here is a screenshot of the Manifest.json.

<img src="./images/Manifest.png" alt="Manifest" width="400" height="auto"> 

Here is a screenshot of the Service Worker.

<img src="./images/ServiceWorker.png" alt="ServiceWorker" width="400" height="auto"> 

Here is a screenshot of the data in IndexedDb.

<img src="./images/IndexedDb.png" alt="IndexedDb" width="400" height="auto"> 

This is a screenshot of the application deployed using Render. You can see the URL.

<img src="./images/Render.png" alt="Render" width="400" height="auto"> 


## Author 👋🏽

Deployed Render URL: [PWA Text Editor]( https://pwatexteditor-njc8.onrender.com/)

Git Hub Repo: [PWA Text Editor](https://github.com/schneidsmc/PWATextEditor.git)

GitHub Username: [schneidsmc](https://github.com/schneidsmc)

📧 Email: schneidsmc@gmail.com

This README was created with ❤️ using README Generator 👏🏽👏🏽

