## optimizing our App

**single-responsibility principle:**
- The Single Responsibility Principle (SRP) is a principle in software development that states that a class or module or function(component) should have only one reason to change, meaning it should have only one responsibility or job. This principle helps keep code modular, maintainable, and easier to understand by promoting separation of concerns.
- each component should have the single responsibility.
- eg- suppose we have `restaurantMenu` component , so the so the `only job of restaurantMenu should have to be displaying the restaurant menu on UI.thats all`, this is the single responsibility of the restaurantMenu component.
- `for each component that we create in react, we should give it a single-responsibility`, and we should not do alot of thing in our component


- `Modularity means you breakdown your code into small-small and diffrerent modules so that your code becomes more maintainable and more testable`
- `so if you write code in modular fashion , if you follow the single-responsibility principle then what happens is you get features of reusuability so your code becomes more reusable, your code becomes more maintainable and your code becomes more testable.`
- this are the important things that we get if we follow the `single-responsibility principle`


**Hooks:**
- `React hooks are predefined utility functions provided by the React library. These functions are already defined(code of that perticaular hook is already written in the library itseld) within the react-library, and we simply import and use them(use spec functionality of that specific perticular hook ) in our code without the need to create or define them ourselves`
- we dont have to worry about the implementation about the specific functionality of the spec hook like how this hook is fetching the data, where is the code for that hook is written so that he fetched the data(how the logic og this hook is implemented or created using code or how the code for this hook is written or defined or how this hook is created) of the react-hooks , this are already implemented or defined(code for(of) the functionality of the spec hook or code of that sepec hook is already written) in the react-library itseld with .js file, we simple use the functionality of the specific hook by just importing it in our code from react(react-library). eg- useEffect() hook.
- `The functionality of React hooks or the React Hook, such as useState or useEffect, is indeed written(implemented) inside the React library's source code.`When we say "hooks are implemented(defined) in the react-library itself," we are referring to the process of writing the underlying code that defines the functionality of React hooks, such as useState or useEffect. 
- `When we say "hooks are defined," we mean that the hooks, such as useState or useEffect, are declared and implemented within the React library's source code. This includes writing the actual JavaScript or TypeScript code that defines how these hooks work internally. This implementation ensures that when developers use these hooks in their React applications, they are using the functionality provided by the React library itself without defining or implementing but by just importing it in their code fro react-library`
- impleentation  or code of that functionality of hook is abstracted , only if we have to use functionality of that hook or that hook , then we simply call that hook by writing their name , its implementation are abstracted and defined in the react-library itself. if we want to use that hook we dont need to worry about it implementation we just need to use their functionality , this is the main thieng react-library provides us.
- `Hooks are special java-script functions which are just given to us by react(we dont have to write code of that, we just use it wehenevr we want, react has already defined that hook), their are few hooks like useparamsm, useState()`

**Custom-hooks:**
- custom hooks means `we can create our own Custom Hooks`
- eg- lets say we want to create a hook for fetching the data from API, so the we create our custom hook for this also and the functionality of the hook is fetching the data from the API.
- `we create custom hooks in react in the UTILS folder`, we create seperate file for the seperate hook in utils.
- When creating custom hooks in React,always name the file exactly the same as the hook name.  `whenever you are creating custom hooks,always start with the word *use* with the small case.`then name of the hook. `this is the way for react to know if the function name is starting from small letter use that means it is a HOOk`
- eg:
```
import { useEffect , useState } from "react";


const useRestaurantMenu=(w)=>{

    const [rest,setRest]=useState(null);

    //fetchData
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData= async ()=>{
         const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.61610&lng=73.72860&restaurantId="+w+"&catalog_qa=undefined&submitAction=ENTER");
         const json=await data.json();
         setRest(json);

    }
    return rest;
}

export default useRestaurantMenu;

```

```
 const restMenuInfo=useRestaurantMenu(w);    //we are calling(using ) the custom hook here for fetching the data , we dont worry about its implementation we just need to use its functionality which is fetchign the data , its functionality is defined or implemented(code of that functionality of hook is written)in the useRestaurantMenu.js file under utils folder.
```

**How hooks are working behind the scenes:**
- hooks(take example of useParams here) are simple js utiliity functions are written by some developers of `react-router-dom` or `react` library inside `react-library` or inside `react-router-dom library` and they would have written some logic to get url params and give it back, and developers of react library make these hooks as open-source(they export it and put it on the npm so that the world can use it) so that anyone can import it from react or react-router-dom library and they can use the functionality of spec hook for the specific purpose.(without  writing the implemenetion logic  or code  for functionality of  that hook or without defining it or without needing to write the implementation logic themselves.)

**why we write use before any custom hook**
- We prefix "use" before custom hooks to adhere to the React's convention, indicating that the function is a hook and should follow the rules of Hooks. This naming convention helps React distinguish between regular functions and hooks, ensuring proper functionality and adherence to Hooks' guidelines when used in components. It also enhances code readability, making it clear to other developers that the function is intended to be used as a hook within React components.


-  `Additionally, this naming convention enhances modularity, enabling developers to easily identify and manage hooks separately from other functions, facilitating code organization and maintenance`

**when we build(develop) large scale applications which have thousands of components, and if we want performance of that large scale application to be good, How to make it performant?**
- parcel(bundler), the basic job of bundler is to bundle our applications- `It means it takes all your files and make it into one. ie it bundles all your diff.files into one file.`
- if you go to `dist`folder you will see, this parcel(bundler) will bundle all these files and `generate one single JS file. it will bundle all the ffiles into this one js file.and it will give this one JS file to the BROWSER.and browser loads that page on the UI`
- all your webpage code is pressent in one JS File which your parcel(bundler) has made
- `bundler makes one js file of thousands of components(diff files).`

- **The problem here is size of this 1 JS file(which bundler has made by bundling all other files(cmpponents) into single files) has increases alot , it will decreases performance of your app liek your home will take more time to load----HOW CAN WE OPTIMIZE THIS? below is solution**
**Chunking or Code-splittinng or Dynamic bunndling or Lazy-Loading**
- `Break Down your Application into SMALLER PIECES(smaller js files)`
- `we will make smaller bundles of these files. this process is known as "dynamic bundling"`
- `Code splitting in React is a technique used to split your application's JavaScript bundle into smaller chunks, allowing you to load only the code needed for a particular part of your application when it's needed. Instead of loading the entire application bundle upfront, code splitting dynamically loads additional code as users navigate through the application.This approach improves performance by reducing initial load times and optimizing resource usage. It's particularly useful in large-scale applications where loading all code upfront would result in longer load times and poorer user experience`
- Dynamic bundling in React is used for several reasons:
   - `Optimized Performance: By loading only the required code for each specific user interaction, dynamic bundling optimizes resource usage, leading to faster load times and improved overall performance. This is particularly crucial for large-scale applications with complex codebases.`

   - `Code Splitting: React applications often employ code splitting to split the application into smaller chunks, which are loaded on demand. Dynamic bundling complements code splitting by dynamically bundling together the necessary code chunks at runtime, based on user interactions or application state`.

**Lazy-Loading:**
   - exxample- suppose in our food-ordering app we have grocery component(consider it is big component ). and it has lot of child components inside it, about is also another component(big) in our app , but cconsider her grocery for example
   - this grocery code is still inside my bundle(one js file which parcel has ccreated by bundlingg(merging) all other files or components into this single js files). even if i dont click on grocery(link tag) still it is loaded or has in the bundler(one js file).
   - `I want to logically distribute my application that my Grocery and all the components of Grocery should come from DIfferent Bundle.`
     - lets see how we can do that , how we ccan create seperate bundle for grocery. `I will not import my Grocery component in App.js directly , i will import my Grocery component using LAZY-LOADING.`This means you don't include the Grocery component in the initial bundle. you will include or import the grocery component whenever required in bundler
     - whenever our app will load initially on webpage(home page will load on UI first), i will not load code for grocery, `only when i go to grocery page, then only that grocery code will be there in our App. this is known as LAZY-LOADING`
     - This is lazy-loading in action. It ensures that only the necessary code is loaded when needed, improving performance by reducing the initial load time.
     - ` lazy-loading allows you to split your application into separate bundles, with each section (like Grocery) being loaded only when it's required, leading to faster initial load times and better performance overall.`
      - Lazy loading is like fetching groceries only when you need them. In web development, it means loading certain parts of a website only when the user interacts with them, rather than loading everything at once.each section or component loads only when the user wants to see it, making the app feel faster and more responsive.
     
```
import {lazy} from "react";  //lazy is a fucntion which react libray or package provides us, we just need to import it from react (include in our project or file)

const Grocery = lazy(()=>import(path of the grocery in your file/folder structre of react));

//this import is a function and it taked the path of my grocery component.("./components/Grocery");

now i will not import my grocery like following
// import Grocery from "./components/Grocery";

i will be importing my Grocery component using this lazy function, this lazy function comes from react library and it takes the callback function and this callBack function usess this function IMPORT and impot takes my Grocery path where Grocery component file is created.

```
- `after this, the one js  file(parcel has bundles all the diff files or components into this single file) - index.js(which bunder has made this ) does not have code for grocery component, it has not loaded the code for Grocery component. if i go or click on grocery page, look at network call , we will get new JS file which is the  bundle of this grocery component, means it parcel has created a one single file inside that file it has merged or packaged or bundles the all the child component or diff. seperate files or components of this grocery component` . this 2 files are bundles.

- we now splitted our components into 2 js BUNDLES.now grocery has its own BUNDLE and main bundle(index.js)is seperate. main bundle does not have code for grocery component but grocery bundle(grocery.js) has its own grocery code.
- i am loading the grocery code on demand on the webpage or browser.
  - **suspence:**
      - as soon as i click on the Grocery page, it will take some time to fetch the data of grocery, at that perticular time `that middle state(react try to render grocery and it is not there) that causes that the ERROR`.
    - we use suspence to handle this error.`Suspence`is a component that comes from thte react library. wrap our component (<Grocery/>) into Suspence component. like- <Supence fallback={jsx}><Grocery/><Suspence/>
    - meanwhile our Grocery component is begin loaded, this react is showing the jsx on the webpage for 2 sec(if it takes 2sec to loead Grocery) which is defined in the fallback of Suspence
    - `This lazy loading can make your large sccale application very fast , optimized and performant ,lightweight.--------this type of question is going to ask in interview that how can you make your react-App optimize`
    - `To reduce the bundle size(of index.js single main bundle file which can be loaded on the webpage or loads our whole application on webpage) we do this code splitting`


**loading code on webpage:**
- Loading the necessary code is closely related to bundling because bundling is the process of packaging multiple files or modules together into a single file (or multiple files) for efficient delivery to the browser.
- Loading components refers to the process of bringing in the necessary code for a specific part of your application when it's needed, rather than loading it all at once when the application starts. This is typically done to improve performance and reduce initial load times.
- When we talk about loading the necessary code, it means that we only want to send the code that is required for a particular part of the application to the user's browser. Bundling helps with this process by allowing us to group related code together.

- For example, if your application has different sections like Home, About, and Contact, each with its own JavaScript files containing the necessary components and functionality, bundling allows us to combine these files into separate bundles. Then, when a user visits a specific section, only the bundle containing the code for that section is loaded.

- In short, bundling ensures that the necessary code for each part of the application is packaged together efficiently, making it easier to load only the relevant code when needed, thus improving performance and user experience.
- Imagine you have a large application with various sections like Home, Grocery, and Profile. To optimize performance, you want to load the code for each section(components) separately on the browser or webpage. You decide to use lazy-loading, which means the code for a section is only loaded when that section is accessed by the user.


**bundlinf process and how it loadded on webpage**
- Loading components refers to the process of bringing in the necessary code for a specific part of your application when it's needed, rather than loading it all at once when the application starts. This is typically done to improve performance and reduce initial load times. 
- When components are loaded dynamically, bundling ensures that only the necessary code for each component is bundled together. This means that when a user interacts with a specific part of the application, only the bundle containing the code for that particular component or feature is fetched and loaded. As a result, unnecessary code is not loaded upfront, leading to faster initial load times and improved performance.
- In summary, bundling enables the loading of components on-demand by organizing related code into separate bundles, thereby enhancing the performance of web applications.
- exaample:
```
Imagine you have a large e-commerce application with various sections like Home, Products, and Cart. One of the sections is Grocery. Instead of loading all code upfront, you decide to split your codebase into separate bundles for each section.

Here's how it works with bundling and lazy-loading:

During the build process, your bundler (like Webpack) creates separate bundles for each section of your application. So, you have a bundle for Home, another for Products, one for Cart, and another for Grocery.

When a user visits your website, only the initial bundle containing the code for the Home page is loaded. This keeps the initial load time fast.

As the user navigates to different sections, the corresponding bundles are fetched and loaded dynamically. For instance, when the user clicks on the "Grocery" link, the bundle containing the code for the Grocery section is fetched and loaded at that moment. This is lazy-loading in action.

Bundling helps optimize this process by ensuring that only the necessary code for each section is included in its respective bundle. This improves performance by reducing the amount of code that needs to be loaded initially and allows for more efficient delivery of code chunks as needed.

In summary, bundling your code into separate bundles for each section of your application allows for efficient lazy-loading, where only the necessary code is fetched and loaded when it's needed, leading to better performance and user experience.
```

- alternative for above in short
```
Imagine you have a large e-commerce application with various sections like Home, Products, and Cart. One of the sections is Grocery. Instead of loading all code upfront, you decide to load the code for the Grocery section only when the user navigates to that part of the application.

For example:

Initially, when the user visits the website, only the code for the Home page is loaded.
When the user clicks on the "Grocery" link to view grocery items, then the code specifically related to the Grocery section is fetched and loaded dynamically.
This lazy-loading approach ensures that only the necessary code for the Grocery section is loaded when the user needs it, improving performance and reducing initial load times.
In summary, lazy-loading the Grocery component means that its code is fetched and loaded only when the user accesses the Grocery section of the application, rather than loading it all at once when the application starts.

```

- `Bundling refers to the process of combining multiple JavaScript files, along with their dependencies, into a single file or a set of files known as bundles. These bundles contain the necessary code for different parts of the application. When a user accesses the application in their browser, these bundles are delivered efficiently over the network and loaded into the browser's memory. This approach optimizes the loading process by reducing the number of HTTP requests and minimizing the time required to fetch and parse the code, ultimately improving the application's performance.`
- `Bundling refers to the process of combining multiple JavaScript files, along with their dependencies, into a single file or a set of files known as bundles. These  diff bundles contain the necessary code for different parts(components) of the application. When a user accesses a specific component within the application in their browser, the bundle containing the merged code of their child components for that component is efficiently delivered over the network and loaded into the browser or the webpage. This approach optimizes the loading process by reducing the number of HTTP requests and minimizing the time required to fetch and parse the code, ultimately improving the application's performance.`
