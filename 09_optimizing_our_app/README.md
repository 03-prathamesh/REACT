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