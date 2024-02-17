# lets Get Classy

**Class-Based Components:**-
- `a class-based component is a class which extends React.Component and it has render() method that returns some piece of JSX. `
- this **React.Component**is basically a class which is given to us by REACT and UserClass is inheriting some properties from it.
- we have to import this React.Component from 'react'.
- this React.Component class is there(defined) inside the 'react' package(dependency).

**difference between class-based components and functional-components**-
```
#class-based components

import React from 'react';

    class UserClass extends React.Component{
          render(){
             return(
                <div className="user-card" >
                    <h2>Name:Prathamesh</h2>
                    <h3>contact:8767167820</h3>
                </div>

             );
          }   
    }

    export default UserClass

#this is the jsx (inside return) which will be converted into HTMl and render(displayed) on to the webpage(UI)


```


```
#functional components 
       
       const User=()=>{
          return(
              <div className="user-card" >
                  <h2>Name:Prathamesh</h2>
                  <h3>contact:8767167820</h3>
              </div>
          );
       };

       export default User;


#this is the jsx (inside return) which will be converted into HTMl and render on to the webpage(UI)


```


**How we can create STATES(state-variables)in Class-Based Components:**
- `we use UseState() hook to create states in functional as well as class-based components`.
- lets see how we can create state-variable in class-based components(with help of UseState() hook).
- `calling or invoking the functional component means you are loading or rendering that functional component on the UI (dom or webpage).`
- when i am loading this class-based components on our webpage that means `I am creating Instance of that class.`
- when i am loading class-based components onto the webpage,i am creating instance of that class and giving it some PROPS,`whenever you create instance of class that constructor inside the class will called.`and this is the best place to receive props. and this is the best place to create state-variables also.
- `if you have to create state-variables(states) for your class-based components, you will create it in the CONSTRUCTOR of that class.`
- so in class-based components , there was no any UseState() hook to create STATES(state-variables).
- there was another way to create states(state-variables) inside class-based components.`this.state` was used to create state-variables in class-based components. `state is reserved keyword here`. this `state is basically big whole object which containts state-variables`
```
     this.state={
       count:0,
     }

     //here count is a state-variable which has initial value 0

     #this is how we create a state-variables(states)inside class-based components
     # how to use this count(state-variable to access its value)
     <h1>the count is :{this.state.count}</h1>

     # how to destructure it
     const {count}=this.state;
    <h1>the count is :{count}</h1>
```

**we can create as many state-variables(states)as we want**
- in functional components
```
const[count]=useState(0);  //intital value of count
const[count2]=useState(1);  //initital valie of count2

#in functional component, reacct uses BIG ONE OBJECT to keep all this state-variable(states)
```
- in Class-based components.
```
    this.state={
        count:0,
        count2:1,  //count2's default or initial value is 2
        
    };
    //this  this.state(only state) is big object which hold all the state-variables
    //how to use it 
    destructure this
    const{count,count2}=this.state;
    <h3>{count}</h3>
    <h3>{count2}</h3>

```
- this is how we create multiple state-variables in class and functinal based components.

**lets see how we can update the state-variables:**
- in functional-components:
```
    const [count,setCount]=useState(0);
    #here setCount is a function which is used to update(change the value of )the state-variable(count).
    setCount(3);
    #now the value of count(state-variable)is 3
```
- in class-based components:
```
      this.state={
         count:0,
         count2:2,

      };

      #react gives a special function- this.setState() to update(change) the value of state-variable,inside this this.setState() we will pass an OBJECT, this object will containt the updated value of your state-variable.
      #lets update the value of count(state-variable of class-based component)
      

      this.setState({   //{} this is object inside setState()
          count:this.state.count+1;
      })

      
     
```


 - `whenever i am changing the value of state-variable(whenever i am clicking on the increase-count button),react will just update(change) the specific portion of HTML by finding the difference between the virtual DOM and actual DOM and does not touch any other existing code (just update the code which is changed) and then react will re-render(loads) the whole component on The Dom(webpage)`. this is how react works behind the scenes.
 - whenever this change button will click , react will trigger that reconciliation process, it wil find the diff between DOMs, update the state-variable and it will re-render the whole component , this is reconciliation process. thats how react will work.


**alternate syntax of class-based component**
```
 //instead of doing React.Component you can desteuctor like following and use only Component
     import {component} from "react";
     Class About extends Component{

         render(){

             return;
         }
     }

```

**Lifecycle of React Class-Based Components:(how class-based component works)**
- loaded (updated, render) on webpage means `Mounted ` on webpage. so lets see how this class-based components get MOUNTED(LOADED) on the webpage.
-  when the class-based component get called (instantiated)or loaded on the  webpage(your application), `its constructor first gets called`. the first thing when the class loads is `constructor is called.`
- once the constructor is called then  the `render() is called`.



**class-based component has one more method like render() method and constructor which is ComponentDidMount()**-
- this is another method which react-class based components gives to us.
-  `so basically when class-based component is loaded(or get called), constructor of that first get called or executed , then its render method is called, then once this class-based component MOUNTED(RENDER OR LOADED) on the DOM Or webpage or UI, then this componentDIdMount is called or get executed`

- **how class-based component work(lifecycle of class based components)**
  - `constructor` get called 
  - `render() method` called or executed
  - `ComponentDidMount` whenever this class based component get render on the UI or DOM then this method get called.
  - in this order this functions get called or class-bassed component  get loaded or rendered onto the DOM.

**Parent-child relationship in class-based component**
- lets see in what order they gets executed
```
   - Parent constructor will be called or get executed first
   - parent render() method get called or executed- 
   - child constructor
   - child render
   - child component did Mounted- once the rendeting of child class based component get fingished on the DOM (once the class-based component has been mounted on the DOM)then this get called
   - parent component did mount
```

**react class-based component Lifecycle when you have more than one childrens or siblings (in which order this lifecycle works):**
```
    - parent constructor
    - parent render()
    - firstChild constructor
    - firstChild render()
    - secondChild constructor
    - secondChild render()
    - firstChildComponent Did Mount
    - SecondChildComponent Did Mount
    - ParentComponent Did Mount
```

**Use of componentDidMount()**
- there are some things that we do once the component(class-based component)get render(loaded) onto the DOM (UI) or webpage(once the component mounted successfully on the DOM)
- `it is mainly use to make the API calls` because the component get render on the dom first  quickely then we make the API calls  and then render the data.
- i want to render the class-based component as fast(quickly) as possible then make the API call and then fill the data or render the data . this is the reason we make API calls in the componentDidMount.

   
