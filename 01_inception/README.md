# understanding Foundation of React


**1] npm**:
-  npm is a **Node Package Manager** which manages all the packages like bundlers in our react application .example- it is used to install the **parcel**.
- it is a standard repository for all the packages. All the packages are **hosted** in npm & npm manages that for you in your project.
- npm is used to install and manage the external libraries or packages(modules or depedencies) that your react project needs

- npm is standard  centralised repository or storage where all the packages or depedencies or libraries are stored(npm containts all the package and depedencies that your project needs or relies on), and npm is located on the remote server on the internet.
  whenever you need any package for your project ,you write **npm install package-name ** and then  npm fetches that package from its remote repo and installs it on your pc  for your project and it also manages that packages(depedencies) which your project needs

- When we say npm is remote, it means that the npm registry is hosted on servers that are not on your local machine. The registry is accessible over the internet, and you can interact with it to download or publish packages.

- **centralised repository**: npm acts as a centralized repository where developers can publish their packages, and other developers can discover and download those packages for use in their projects.


- **Downloading Packages:**  When you use the npm install command to install a package, npm fetches the package from the remote registry and installs it in your project. This allows you to easily bring external code into your project without having to manually download or manage the code yourself.

- **Versioning and Metadata:** The npm registry also keeps track of different versions of packages and metadata associated with each package. This includes information such as the package name, version number, dependencies, and more.


**2] package.json()**: 
- this package.json() is a configuration for our npm
- It keeps track of the versions of the packages(dependencies) that is installed into our system .
- It contains metadata about the project, such as its name, version, description, author, and license.

- It contains the Lists of all the project's dependencies (libraries and tools) and their versions.

- ^(CARET) ~(tilde) "~2.8.3" which represent the current version of the pacckage and dependencies that is installled and package.json() make sure that if 2.8.4 version comes it will installed automatically.

**3] package-lock.json()**:
- it keeps track of the exact versions of the packages or dependencies that is installed on our system
- package-lock.json() keeps a hash or integrity to verify that whatever there is im my local machine is the same version which is deployed to the **production environment**

- it resolves the issue by maintaining the hash like - **my app is working on my local but dont work on the production environment**

- it containts the **exact version of the packages(dependencies) that is installed in our local system**.

- It basically represents the current version of the packages that is being installed on our system that our project is dependent on (project needs).


**4] NODE_MODULES**:

- node-module is a folder where NPM installs all the **dependencies(packages) and Libraries** that our project relies on(project needs) and stores that external packages and libraries into node_modules.

- it containts actual data(actual code ) of the packages
- it is a storage location for all the external libraries and packages that your project depends on ensuring that they are available for use.This could include **react** (at the end it is a package that we need in our projrct), **parcel** and many more.

 - node module folder **keeps track of specific versions of each package your project uses**, this version info is oftern stored in the files **package.json()** & **package-lock.json()**.


**5] .parcel-cache folder**:
- it is used for **faster-builds**
- it is supporting **HMR(HOT MODULE REPLACEMENT)**
- parcel is doing caching to give you faster **development-builds**
- parcel cache basically caching everything you do (like if you make any updation or changes in index.html file ), it is watching all those files , it is caching it so that the **next builds are develop faster**

- basically it takes less time to start the server or(update that changed content on the webpage on the server (where you application is hosted)) 



