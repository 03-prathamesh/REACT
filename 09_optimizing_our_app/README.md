## optimizing our App

**single-responsibility principle:**
- The Single Responsibility Principle (SRP) is a principle in software development that states that a class or module or function(component) should have only one reason to change, meaning it should have only one responsibility or job. This principle helps keep code modular, maintainable, and easier to understand by promoting separation of concerns.
- each component should have the single responsibility.
- eg- suppose we have `restaurantMenu` component , so the so the `only job of restaurantMenu should have to be displaying the restaurant menu on UI.thats all`, this is the single responsibility of the restaurantMenu component.
- `for each component that we create in react, we should give it a single-responsibility`, and we should not do alot of thing in our component


- `Modularity means you breakdown your code into small-small and diffrerent modules so that your code becomes more maintainable and more testable`
- `so if you write code in modular fashion , if you follow the single-responsibility principle then what happens is you get features of reusuability so your code becomes more reusable, your code becomes more maintainable and your code becomes more testable.`
- this are the important things that we get if we follow the `single-responsibility principle`


**Custom-Hooks:**
- `React hooks are predefined utility functions provided by the React library. These functions are already defined(code of that perticaular hook is already written in the library itseld) within the react-library, and we simply import and use them(use spec functionality of that specific perticular hook ) in our code without the need to create or define them ourselves`
- we dont have to worry about the implementation(how the logic og this hook is implemented or created using code or how the code for this hook is written or defined) of the react-hooks , this are already implemented or defined(code) in the react-library itseld with .js file, we simple use the functionality of the specific hook by just importing it in our code from react(react-library).
- `Hooks are special java-script functions which are just given to us by react(we dont have to write code of that, we just use it wehenevr we want, react has already defined that hook), their are few hooks like useparamsm, useState()`
- custom hooks means `we can create our own Custom Hooks`