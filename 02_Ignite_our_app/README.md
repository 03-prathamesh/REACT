# structure-flow  of React project(app) to ignite our app

--initially you have **index.html**, **index.css** & **App.js**

**STEP-1]  npm init** ->  this command is to add NPM to our react project or react app
after doing this **package.json()** file will get create.

**STEP-2]**  **INSTALL PARCEL(BUNDLER):**  
- parcel is a dependency(package) , this dependency is known as **BUNDLER** which we need in our project.
- to include parcel in our project we have to install it with the help of the following command: which is **npm install -D parcel**   
- -D means you are installing parcel as dev dependency not as normal dependency  
- our app in basically installing parcel from npm which is on remote.npm containts all the packages , we are installing(fetching) parcel from there
- npm manages all the packages (dependency) like libraries , utilities or any configuration that out project neeeds

- after this **package-lock.json()** file and **node_modeule** folder will get created

- even-if you delete **NODE_MODULES, DIST and CACHE** folder it can regenerate using **npm install**, it will install everything in node_modules  

**step-4]**  **start or run our app**

- to run(start) our app on the hosted server, you can use the following command- **npx parcel index.html**   

- after executing or running this command, **dist** and **.parcel-cache** folder get created  

- **parcel** basically go to the index.html and build a **DEVELOPMENT_BUILD** for our app and it HOST that DEV_BUILD to local host(at server) 1234

- This is how we are able to access our react-application at local host 1234

     
**STEP-6]**- **install "react" and "react-dom"instead of using cdn links to add core react and react-dom package to our application**

- to install react and react-dom package we do the following - **npm install react** and **npm install react-dom.**

- **react** and **react-dom** are **packages(dependencies)** that our project needs to include **REACT(REACT.create element and REACT_DOM.createROOT and render) in our project**

- we get this react package(dependency) and react-dom package in **package.json()** as a configuration.

- example: package.json() will containt following.    "dependency":{
     "react":"^18.2.0",
     "react-dom":^18.2.0
    }

- How easy it is to include or get **library or dependency** in our project using **NPM**

- we have installed **react** and **react-dom** in our **NODE-MODULES(it basically stores all the packages in it that our project needs, it containt all the packages that our project need or rely on)**.Node module containt 2 folders - **react** and **react-dom**
- **How do I use react and react-dom in my code (App.js):**
  We can use them using **import React from "react"** and **import ReactDOM from "react-dom"**.

- this **"react"** refers to react inside our node module. both of them will come from my node_modules


**step-7]** **Tell the browser that APP.js is not a normal browser script(its not a normal file) its a MODULE** in your index.html:
- **<script src="App.js" type="module"></script>**

**step-8]** **npmstart** or **npm run start**
- in package.json() you have a section as **"scripts"**. Create a script for starting our project in **DEV_MODE**
- "script":{
      "start":"parcel index.html",
      "build":"parcel build index.html"
    }


- Now you can use **npm start** or **npm run start** to run(start) your application on the local host (server) 1233 instead of **npx parcel index.html**

- npm run start basicall BTS execute the package parcel with index.html because we have configured in our **package.json()** in **script**.

- now project is started on the **development server**







