import React from "react"
import ReactDOM from "react-dom"


// jsx- if you want to write jsx in a single line then use following syntax
// const heading=<h1 className="myClass">This is my heading</h1>       //here h1 is jsx and heading is the REACT-ELEMENT

// if you want to write jsx in multiple lines then you should wrap it inside the brackets like following- because babel need to understand from where this j
// jsx is starting and from where it is ending 


//heading is react element, and reacct-element at the end is OBJECT
const heading =(
      <h1 className="myClass">This is my Heading</h1>
);
console.log(heading);    //both React.createElement and jsx they are object

// METHOD-1
// React-Functional components
const HeadingComponent =()=>{     //functional component is a normal JS arrow function which return some JSX    
 

     return <h1>Namaste React functional-Component</h1>
}; 

//React functional Component is a JS Function  which returns some piece of JSX code. a function which return some jsx code is a functional Component
const fn=()=> true;// this mean this function fn is returnign true

// so instead of writing line 20 to 24

const HeadingCp=()=> <h1>Namaste React funtional Component</h1>



// how can i render my functional-component ini the root(of html)


// component composition.
const HeadingTwo=()=>{

 return   <div id="Container">
        <HeadingComponent />   
        {/* this is how i can  render my HeadingComponent inside my HeadingTwo component. after this all the jsx code inside 
        HeadingComponet(functional-component will come over here    )  */}
        <h1 className="Child-Heading">This is my React-component inside div</h1>
    </div>
}

// METHOD-2
// you can create normal functions als

const NormalComp= function(){

    return <h2>THis is two heading</h2>
}

// METHOD-3
// another way of writing arrow function(dont need to write return)
const NormalComp2=()=>(
  <div>    
    {/*  When you have multiple JSX elements to render in a component, they should be enclosed within a single parent element. (like div) */}
    <NormalComp/>
    <h3>This is the third heading</h3>
  </div>
); //remember semicolon is IMP at the end.

// ------------------------------how to put react-element inside the react functional-component-------------------------
const title =(
    <h1 className="heading" tabIndex="5">
        This is a namaste React-element
    </h1>
);     //remember semicolon is ump


const FunctComp=()=>(   
    // you dont need to write the return statement inside it
    <div id="container">
        {title}  
        {/* everything that is inside title, will come over here */}
        <h1>Namaste React-functional Component</h1>
    </div>

);








const roots=ReactDOM.createRoot(document.getElementById('root'));
// roots.render(heading);

roots.render(<FunctComp/>); // this is how react-component get converted into HTML by root.render() and then  render into the DOM(HTML or browwser's webpage)



