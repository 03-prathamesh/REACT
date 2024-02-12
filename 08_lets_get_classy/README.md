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
 - whenever this change button will click , react will trigger that reconciliation process, it wil find the diff between DOMs, update the state-variable and it will re-render the whole component , this is reconciliation process. thats how react will work
