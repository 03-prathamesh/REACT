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