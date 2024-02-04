# exploring HOOKS in react

**1]SRC  folder:**
- react does not have opinions on how you put files into folders. its on you how you how you want to keep your FOLDER-structure.
- used for maintaining our code to easily understand what is in our react-app, easily understand of folder-structure of our react-application  & for **structuring** our REACT-APP.
- even if you dont create SRC folder it will not affect on your application (apl's functionality), you application will run as it is ,  it just use to organize our code to make it production ready and make our react-applications source code more **understandable and readable** .
- SRC folder is just used to organize the source code of our react application to easily understand it.
- The src folder in React is the main source directory where you organize and store the source code of your application, including components, modules, and entry point files. It serves as the central location for writing and managing the code that defines the structure and behavior of your React app.

**components folder:**
-  we need to organize our code to make our react-application production ready, so to organize our code , we create `src` folder , and we create . `components` folder in that and we put all our `FUNCTIONAL COMPONENTS` in the components folder with each component with seperate file with the extension `.js` or `.jsx`  or `.tsx`, all three are at the end is js to organize our code and make our applications sourcde code more **understandable and redable**.
- then we export it in each component file for importinng it, to **import** it anywhere we need to **export** it first.
- suppose we want to use this component in app.js, then we need to simply **import** it first from this src/components folder.

**utils(config) folder:**
- utils means **utilities** that can be used all across of your application(react-app) like any `API_LINK`, `logo IMAGES`.
- we should keep all the hard-coded things which can be used all-over across in our application in the utils folder  with each have seperate .js extension file in it.
- so whenever we want to use this utilities , we just need to first **export** it in that file itself and whenever we want to use it we should just **import**it,



**2] 2 ways(types) of `EXPORT` & `IMPORT`:**
- 1]**default IMPORT and EXPORT:**
   - `import component from "path";`
   - `export default component_name;` on the last line of the file where that component(functional-component) is defined.
   
- 2]**named-IMPORT and EXPORT:**
  - `import {spec component_name} from "path";`
  - `export const header=()=>{
    return jsx };`
  - here in export directly write before the definition of that component.

**REACT-HOOKS:**
- react hook is normal JS utility function is given to us by REACT.its a pre-build.
- In React, hooks are special functions that let you use state and other React features in functional components, making it easier to manage and update your component's data and behavior. 
- `react-hooks is used to keep the state_variable in sync with the UI, means if we modify the state_variable(of any component), it will get modified on the webpage(ui) as well , our UI also get updated when you update or modify this state_variable, this is the main super-power of react`
- ex- usestate() which is one of best react-hook gives you powerfull **state-variables**
- there are multiple hooks in react,2 very IMP HOOKS-
  - `1]useState()`- 
  - `2]useEffect()`-

-**1]useState() Hook:**-
  - used to generate(create) `state-variables` in react. 
  - import the useState()- `import {useState} from "react"`
  - state variable maintains the state of your application. maintains the state of your components.
  - eg- `const[ListOfRestaurant]=useState();`
  - when you call `useState()`, **It will give you a state variable**, so how do you receive the state variable with the help of above syntax-`const [ListOfRestaurant]=useState();`
  - this is how you create a state variable.
  - this **ListOfRestaurant** is a state variable.(super-powerfull react variable).
  - this stat variable is like `const ListOfRestaurant`. both are same only syntax for creating state variable is different. so `const ListOfRestaurant`used for create **normal react/js variable** &  `const [ListOfRestaurant]` is used for creatting **state variable**.
  - whatever we pass `useState([])` in this useState [] , becomes the default value of this state variable.
  we pass default value in usestate in this [] brackets.
  - **you can use this variable normally**
  - `react is only good at DOM operations to make UI fast using less code, that how we build large-scale applications fast using react.`
  - **render-in react:**- whenever a state-variable updates or changes , reaact re-renders the component. i will very quickly **re-render** the component. `this is the power of state-variable`.
  - `whenever a state-variable get updates/changes or modifies , react will re-render our component and quickly updates the UI(html code) as well`.
- `as soon as i refresh my web-page(changed my state-variable) react will automatically re-render(refresh) that component very quickly and fast.React keeps you DATA_LAYER in sync with the UI_LAYER(html webpage)`
   - lets see how it(react) is doing this(above this which i have  written).
   **1] reconciliation Algorithm(REACT-FIBER):**

   - **virtual dom:**- it is representation of the actual DOM(html webpage or UI). 
     - virtual DOM is basically **react-element(objects). this object is basically react-virtual dom.**.
     - it is normal JS object.
     - it is not a actual dom but a representation of actual dom.
     - example: following is virtual DOM(representation of ) of simple  DOM(html webpage) which content only one div tage and h1 inside that tag.
      ```
      jsx- (consider any jsx function)
      return (
        <div className="div">
          <h1 className="heading">This is a heading</h1>
        </div>
      );
      ```

  **Diff-Algorithm:**-
   - it basiccally finds out the difference between the 2 virtual DOM's ie the **UPDATED VIRTUAL DOM (updated due to state-variable or HOOKS)** and **EXHISTING(PREVIOUS) virtual-dom**.
   - suppose my **res-container** div have 7 restaurants. so this is existring(old) virtual-dom. and i have react-hook or state-variable whhich whenever i click on button it only displays(renders) the restaurant which have more than 3 ratigs on the UI(dom, or html webpage), so this is NEW virtual dom (updating UI with restaurant greater than 3 rating), this dom will containt only eg 3 restauratnts(3 div) which has more than 3 rating(h1 represent rating inside div.).
   - so old virtual dom gets updated to 3 restaurant elements(div tags only 3) after react-hook. 
   - **so this diff-algo try to find out the difference between the old virtual-dom and new virtual DOM**. what will be the diffrece 4 nodes(4 div tags), it will then calculate the difference **and it will then Actually updated the virtual-DOM on every rendered cycle**
   - when every time my **state_variable**changes,react is keeping an eye on this state_variable,reacct tracks these,and consontly monitors these state_variable,it constantly checking these, as soon as it updates , react will find out the diff with help of diff_algo and updates(render on the UI or DOM)the UI,
    - what diff algo will do , once it find out the difference between old and new virtual DOM(objects) then it will update (render) the actual DOM and thats how **react-becomes faster**.
    - `react keeps a track of all these UI, all these DOM nodes(html tags or all these html) as a VIRTUAL-DOM`
    - **after clicking on the button, react uses these diff algo to find the diff between old and new dom (2 objects), it find out earlier there were 7 restaurant(eg 7 div), now there are only 3 restaurant which has rating more that 4 (3 div consider here), when it find out the difference between these 2 objects , it(react ) actually updatess(renders)the DOM with the help of these DIff_algo.** , thats why react is fast.
    - `that is whenever there is any change in state_variable , REACT will find out the differenece between virtual DOM (old and updated) & it will RE_RENDER our components or It will Updates the V_DOM(updatess the HTML elements on the virtual_DOM(eg-updates 3 divb instead of 7 div in v_DOM)).`

  
**this whole algorithm is known as reconciliation algorithm(REACT-FIBER)**
- whenever something changes on the UI , it is known as **reconciliation**.




**Why REACT is fast:**
- react is fast becausse it has `VIRTUAL_DOM`
- `react is fast because it can do faster DOM manipulation, it can do Efficient DOM manipulation,`
- react is fast because react is doing efficient, fast DOM manipulation because it has VIRTUAL_DOM by using react-fiber(explain whole process diff_algo , virtual_dom(old and new) with the help of DIFF_ALGO, state_variable all).
- react can efficiently finds out the difference betweeen virtual DOM and updatess the UI (react will automatically re-render you component on UI),and react do it very quickly. this is efficient DOM manipulation.
- when every time my **state_variable**changes,react is keeping an eye on this state_variable,reacct tracks these,and consontly monitors these state_variable,it constantly checking these, as soon as it updates , react will find out the diff with help of diff_algo and updates(render on the UI or DOM)the UI,reacct do this updates or chanegs on the UI very efficiently and quickly.THis is the core job of react and this is why react is fast,



