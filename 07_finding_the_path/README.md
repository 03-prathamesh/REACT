# Finding the Path:

### more about useState() and UseEffect() hook-

**How useEffect() works:**
- we import useState() and useEffect() from `react library`.
`import {useState, useEffect} from react;`
- this is how useState() and useEffect() hook called.
- let say i have `header component`, inside that i have defined useEffect() hook.
- useEffect() is called using 2 Arguments: **first argument is CALLBACK() function(arrow function) and second argument is dependency array- [].**
```
  useEffect(()=>{
     console.log("UseEffect called");
  },[]);
```
- when  this useEffect get called or executed.
  - 1] **if there is no dependency array inside useEffect then** `this useEffect basically called after  every rendering of that header-component(where useEffect is defined)`
  
    ```
        useEffect(()=>{
          console.log("UseEffect called");
        });
    ```
     - **that is when every time the header will get rendered on UI, my useEffect will be called and get executed**. my useEffect is getting called and executed after every render of the header component when the dependency array is not there.

  - 2] **What if there is EMPTY-DEPENDENCY ARRAY- []**: `if dependency array is empty , then useEffect called and get executed(its callback function code get executed) only on intial render of that component(when the page or that component loads(imp- render & loads same) on the UI).`
      ```
       useEffect(()=>{
           console.log("UseEffect called");
      },[]);
      ```
  - 3]**What if we put something in the DEPENDENCY_ARRAY:**- `then useEffect only be called when the dependency changes`.
    - we can have a dependency as `state-variable`.
    ```
       const[btnNameReact,setBtnNameReact]=useState("login");
       useEffect(()=>{
          console.log("UseEffect called");
      },[btnNameReact]);

    ```
    - if the dependency is btnNameReact(state-variable),`here , useEffect() is called everyTime when this btnNameReact(state-variable) gets updated, modified or changed.`
    - **if dependency is on btnNameReact, that means whenever my btnNameReact changes(its state changes),my useEffect will be called**
    - whenever state of this state-variable(btnNameReact) changes, my useEffect will get called at that timme. ie `my UseEffect() get called  everytime when state of state-variable get changes(meams state-variable get updateed, or modified).`

**how to use useState():**
- `always call(define or create) your useState hook inside the component only`.
- `useState() is used to create local state-variables into your functional-components .`
- try to call the hooks on the top of the component's body.so that you dont have lot of inconsistencies in your code. it helps react to understand it properly.
- `never use or create your useState() hook in IF_ELSE or LOOPS`.

**useRouter() hook:**
- this hook used in providing the exact information about the routing-errro(if someone typed wrong URL).


### ROUTING-how to creates different ROUTS in our REACT-APPLICATION(how we can create multiple URL routs for creating different webpage).

- how we can create different routs in our react-APPLICATION, for that we are using `npm javascript library`, this library is known as `REACT ROUTER DOM`
- how to install react-router library into our react-code.how to install `npm package` into our code.
`npm install react-router-dom`
- package-lock and package.json( ) will containt this package or dependency.
- **how we can use this library:**-
- `whenever you want to develop ROUTS, you have to create ROUTING-CONFIGURATION.`, for that i will import `import {createBrowserRouter} from "react-router-dom;"`
- `configuration means that some information that will define what will happen on a specific route. information that will tell the browser router that what will happen on a specific path, eg- suppose if i am calling about,what should happen if i call that route or URL `
- this **createBrowserRouter** will create browser configuration for US. we are creating configuration in this createBrowserRouter[]
- example of how to create configuration:
- createBrowserRouter takes some configuration, configuration is list(array(list) of object)(list of configuration) ,each and every object defines a different path and what should happen on that path.
```
const appRouter= createBrowserRouter([
      {

        path:"/",
        element:<AppLayout />,
        <!-- this configuration is tellling  whenever my path is this- "/" then load my AppLayout component -->
      },
      {

        path:"/about",
        element:<about />,
      },


]);

```
- this is how we create a configuration, but just creating a configuration dont work, `we will have to pass this configuration, we will have to provide this configuration to render it onto the page`
- to provide this configuration to render it , i have one more imp **component** that i can import from `react-router-dom` ie `RouterProvider.`
- `react-router-dom gives us this functionality by giving us the component which is known as RouterProvider`
- we have to import it from react-router-dom library(package or dependency) which we have installed earlier.
- `this router provider will actually provide this routing configuration to our app.`
- how it is providing this routing configuration to our app `by rendering RouterProvider with the configuration which we have created(in this exa-appRouter is configuration which we have creater with the help of createBrowserRouter)`
```
   root.render(<RouterProvider route={appRouter} />);
```
- here we are provideing our appRouter configuration to the RouterProvider.

**More about packages(libraries or dependency)-**
- npm provides again one more imp library or package which is `react-router-dom`, we installed it already.
- `in react, each package has or provdes predefined-COMPONENTS or UTILITIES. these are predefined in that library itself. if we want to use it , we need to import that components or utilities from that library into our App.js(or wherever you want to use it).`
- in our example, `In react-router-dom library, the BrowserRouter component is not created using a function called createBrowserRouter. Instead, it's a predefined component provided by the library itself. When you import BrowserRouter from react-router-dom, you're importing a component(for use in your file or app) that is already implemented(defined or created) within the library.`
- **if we want to use that component, we dont need to define again , we just need to import it in our appl, like our component are defined in component folder and we import it to use in any another file , this is same but diff is this component are defined in its library itseld(here react-router-dom), so to use it we need to import it(eg-react-router-dom libries's createBrowserRouter component) from that library into our file or application(wheere we want to use it)**
```
import { createBrowserRouter,RouterProvider } from "react-router-dom";
```
- `npm has all the libraries(packages) installed in it, npm stores this libraries on the local remote-server or repositories, whenever you want it npm fetches from that remote server(database where it has stored) and installed it in your application(react-appl)`

**react-router-dom library(package or dependency) also provides functionality such as `errorElement` which is used to display the error page when user type wrong URL.**

**react-router-dom gives us an access to IMP Hook(which is a function but every hook has different and specific purpose)-`useRouteError()`:**
- this is the hook which is given to use by **react-router-dom library**
- this hook gives the more information about the error.
- with the help of this hook , we can display better error message on our webpage(UI) .it can be **routeFail Error**, **network erro**.
- how to import it in error component:
```
   import{useRouteError} from "react-router-dom";
```
- `so we can read the messages using useRouteError hook and we can shor the specific detail to the user about the error`
- how to use it:
```
    const err=useRouteError(); 
    //this is how we can call this hook
    //this err is OBJECT
```
- **now it will give us all the error in our path, react-router will catch and give it to us as a form of OBJECT**


**Link-component provided by react-router-dom library:**
- how to import it,
`import {link} from "react-router-dom";`
- link component exactly work as the same as **anchor tag**
- this link tag at the end in converted to anchor tag and render it on UI(in htmlit containt  anchor tag instead of Link tag)
- `<link to="/about">About-me</link>`
- `so link-component is used to redirect(navigate) to the page(URL) without Reloading the Page.`
- when i will go to the about-me page, my page will not get refreshed.my whole page will not refresh
- link will do not `reload(refresh)` the page.
- `whenever you are navigating to a different route(URL), so always use a link component, it will naviagate you to the spec page without reloading or refreshing the whole page.`
- thats why our react application is known as `single page application.`

**Routing-**
- `In React, routing refers to the process of determining which UI components to display based on the URL or user navigation. It allows you to create single-page applications (SPAs) where different parts of your application's UI are rendered based on the URL, without having to reload the entire page.`

**2-types of Routing in web-application**
- 1]`client-side routing`- we just dont refresh our page and route(nevigate) to the spec page or URL(when i click in about-us it just loads that component(about component)), it does not make any network call.
- i am not fetching a page, thats why this is called as "client-side routing."
- we are implementing client-side routing in reacct, so via client side routing our react-application is single page.
- 2]`server-side routing`- server-side routing means you make a network call(by clicking on about anchor tag(to load that page)) & about.html page(consider example) coming from the server by refreshing your whole page and render on to your UI. this is sserver side routing.

**dynamic-routing:**
- `In React Router, the : symbol is used to indicate a dynamic parameter in the URL path. When you define a route with a path like /user/:id, it means that the part of the URL after /user/ is dynamic and can be anything.`
- for example-/user/123 will match
- /user/abc will also match
- `The :id syntax tells React Router to capture whatever value is in that part of the URL and pass it as a parameter to the component specified in the route.`
- you can give any name after this :. like :resID,or id 
- **How to read this dynamic routing info or value or data(:resid) which is typed by user(in URL)**
  - `useParams Hook` is used to read or access the info or data of this dynamic routing.
  - 
  ```
      // const params=useParams();  it will give the valur of :w(what user has typed(eg 123) in url for this dynamic routing)
    //    const params=useParams();
    //console.log(params.w);
    //we are diretly destructuring on fly, instead of writing params.w i can write direcyly w to access this
    const {w}=useParams();
    console.log(w);
 
    // lets pss this w in URL

  ```