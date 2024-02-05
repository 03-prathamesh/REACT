# part-3]: Laying the Foundation(REACT-FUNDAMENTALS WHICH ARE IMP)


**1]React-Element:**
- In React, a React Element is a lightweight, immutable object that represents a single element in the virtual DOM (Document Object Model). React Elements are the building blocks of React.React Elements are typically created using JSX or the React.createElement function. applications, and they describe what you want to see on the screen. 
- A React Element is an object that describes a piece of the UI.
- in js , **react element is just a OBJECT** , you can see it in the conssole
- React Element is a lightweight, immutable **object** that represents a single element in the virtual DOM (Document Object Model). React Elements are the building blocks of React applications, and they describe what you want to see on the screen.
- A React Element is typically created using JSX syntax or the React.createElement function. It describes what the DOM (broweser's DOM or html Webpage) should look like, and React takes care of updating the actual DOM efficiently.
- React element is **not a html element**
- react element at the end is **object**
- **React Elements are objects that describe what you want the UI to look like.**
- React Elements are created using `**JSX**` or the `**React.createElement function**`.
- **when we render this React-element to DOM(on WEBPAGE or BROWSER), It become HTML-element(HTML)**
- Rendering to the DOM in React means updating the actual HTML on a web page based on changes in your React application's virtual representation (virtual DOM)----------------------------------------------------**Document: Refers to an HTML or XML document.Object: Represents each element or piece of content in the document.**

- the DOM represents the HTML(which you Browser understands) or XML document as a tree-like structure where each element in the document is an object, and the relationships between elements are captured in the tree's hierarchy.
- **Rendering to the DOM in the context of React refers to the process of taking the virtual representation of your UI, which is maintained by React in memory (known as the virtual DOM), and updating the actual HTML elements on the web page.**
- Once React identifies the necessary changes, it updates the actual HTML elements in the browser's Document Object Model (DOM).

**2]process of React_element converted to HTML element**
- when we did **React.createElement**, it(React.createElement or JSX) created a react element means it created a **object**. ----------------------------------when we do **root.render(heading)**, the powerfull library **ReactDOM.createRoot** takes this object and converts it to an **HTML-element** and push it to the Browser
- when i say push it , it will **REPLACE** everything that is inside that **id="root" div in index.html** with whatever i am rendering from here-**root.render()**

- **`const myElement = <h1>Hello, React!</h1>`;------`ReactDOM.render(myElement, document.getElementById('root'));`** or `const root=ReactDOM.createRoot(document.getElementById("root"));root.render(heading);`

- `import React from 'react';`-`const element = <h1>Hello, React!</h1>`;In this example, the <h1>Hello, React!</h1> part is JSX, and it represents a React Element. The element variable holds this React Element, which can be rendered into the actual DOM using React's rendering methods.


- the **myElement variable** is a React Element created using JSX syntax.The **ReactDOM.render function(ReactDom function)** renders the React Element (myElement) to the HTML element with the ID 'root' in the real DOM(browsers html webpage).The result is that "Hello, React!" will be displayed in the HTML element with the ID 'root' on the web page.**

- When you write React code, it's like creating a blueprint for your webpage. When you run that code, React takes your blueprint and transforms it into HTML, which is what browsers understand. So, React essentially turns your plan (React code) into the actual building (HTML) that people see when they visit your website.

- React itself converts React code to HTML. When you write React code, you're essentially describing the structure and behavior of your UI using JSX (a syntax extension for JavaScript). When you run your React application, React's **root.render()** takes care of transforming(converting) your JSX(react) code into actual HTML that can be understood broweser  and then render it to the web-browser(DOM).
- **ReactDOM.render()** is the key method that triggers the conversion of React code (JSX) into HTML and updates the browser's DOM accordingly. 
- **react-code or react-element is render onto the DOM(browsers'html or wepage)as HTML element**

- **root.render is converting everything to HTMl and render it to DOM(web-broweser as html)**. this are the main fundamentals- by akshay saini
- This  root.render method is part of the ReactDOM library(package) in React



**3] JSX:**
- JSX is a **React-Element**
- jsx is **not react**, if your code is readable that doesnt means react is not making it readable it means jsx is making it readable 
- it is HTML or XML like syntax
- It is a Syntax extension for JS which is used to create the **React Elements**
- jsx is not html inside JS. it is a **HTML like syntax(similar to html)** which is used to create the REACT-ELEMENTS.
- it is a **Syntax-Extension** which allows you to write HTML-like code within your JavaScript files, making it easier to describe the structure of your UI components on the web.
- JSX gets transpiled into JavaScript code(JS object which browser can understand) by tools like Babel before it is executed in the browser.

- **eg-** `<h1>Namaste React</h1> ` **this is jsx**.

- const jsxHeading= `<h1>Namaste React</h1>` Here **jsxHeading** is the **React-Element**


- instead of writing **`const jsxHeading=React.createElement("h1",{id:"heading"},"namaste react");`-------------------**  jsx provides the easy way to define and describe(create) the **react element**.

- A React Element is typically created using JSX syntax or the React.createElement function.

**4] Babel:**-
- babel is a `compiler` or `Transpiler` which takes the `JSX` and converts or compiler(transpile) into the code that `browser(JS engine)`can understand.
- js engine will not understand the jsx piece of code.so this jsx code get transpile(compiled) or converted  before goes to the **JSX engine** with the help of babel. **Parcel do it for us**
- **jsx code** get transpiled or converted into the **React.createElement** code ie connverted into the **object** then this **React.create Element(object)** then rendered onto the DOM as an **HTMl element**.(basically react converts this code into HTML and this render this HTML to the browser)
- jsx at the end is **React.createElement(3 param)** thats why console.log(jsxHeading)--this is created by "jsx" and console.log(heading)--this is created by React.createEememt willl print **OBJECT(is both are object(same))**.
- Babel is cconverting you JSX to React.createElement("h1",{id:"read"},"heading").
- **parcel** is manager of babel , it manages the babel
- babel reads every jsx code **one by one (token by token)** like <  after this h1 after this again >


**5] JSX is not HTML? how**:
- in html if i want to give class we simpel write class="classname", but in JSX if you have to give class to that React-Element you have to give as-`<h1 id="heading" className="myClass">This is jsx code</h1>`.
- after this in html go to insect and inside .root id(div) you will see **H1 tag** which has class="myClass".----`<h1 id="heading" class="myClass">This is jsx code</h1>`.    we gave **className** and it(jsx and classname) gets converted as HTML element as "class".

- if you want to give `attribute to JSX` you have to use `CamelCase`. ed-tabIndex="". it got converted into tabindex in html as a attribute

**6] React-components:**
- There are 2 types of components in react------------------------------------------------**1]Class-Based Components**-------------------------------------------------------------**2]Functional Components**.

**1]Class-Based Components:**-this are the old way of writing code. classbase components uses **JS classes** to create class-based components






**2] Functional Components**- everyone uses functional components today, functional Components uses **JS functions** to create components.
- react -functional component is just a normal **`Java-script Function`** which returns some piece of **react-element or jsx code **- by ak saini
- whenever you are creating any functional component or any React-component **Name is with CAPITAL LETTER first**, this is the react way to understand it is a React-Component.
- A functional Component is a **normal Java-script Function which returns a Piece of JSX(which returns some JSX-element(React-element))**
- React functional Component is a JS Function  which returns some piece of JSX code. a function which return some jsx code is a functional Component.
- if a functions returning a **React-Element(jsx)**is a functional-Components
- A React functional component is a type of component in React that is defined using a JavaScript function. Functional components are simpler and more concise than class components, and they are commonly used for presentational components that don't have state or lifecycle methods.
- `const HeadingComponent=()=>{ return <h1>This is react functional component</h1>}`
- here **HeadingComponent ** is a functional Component.
- alternate syntax to this is- `const HeadingComponent=()=><h1 className="Headings">This is react functional component</h1>`.You dont have to write return , it will automatically write.This is a perfectly valid functional-component.

- `roots.render(<HeadingComponent/>);` // this is how react-component get render into the DOM(HTML or browwser's webpage)

- **root.render** is converting everything to HTML and then browser is RENDERGING it.

**Component composition**:

```
const HeadingComponent =()=>{     //functional component is a normal JS arrow function which return some JSX    
 

     return <h1>Namaste React functional-Component</h1>
}; 



```

 ```jsx
    const HeadingTwo = () => {
    return (
    <div id="Container">
       <HeadingComponent />
       <headingComponent></headingComponent>
       {headingComponent()}
       {/*this 3 things are the same things*/}
       {/*one moer way to write above syntax*------ <headingComponent></headingComponent>     
       you can write it any no.of times /}
       {/*i can call this headinComponent inside it-------{headinComponent()}, it will work same as above.because functinoal component at the end is normal js function*/}
       {/* This is how I can render my HeadingComponent inside my HeadingTwo component.
    After this, all the JSX code inside HeadingComponent (functional component) will come over here. */}
       <h1 className="Child-Heading">This is my React component inside div</h1>
    </div>
    );
    }
```

   this is a component composition which means **rendering one functinoal component inside other functional Component**. All the jsx code of HeadingComponent(functional-component) get replaced in headingTwo componet(after div).

- following is how this all **React-code(React-Elements)** get converted into the html Element(browsers'html or DOM).**react-code or react-element is get converted and render onto the DOM(browsers'html or wepage)as HTML element with the hrlp of root.render() method**

![Alt Text](https://raw.githubusercontent.com/03-prathamesh/REACT/main/03-laying%20the%20foundation/images/sc.png)



**7] JS inside React**:
- **{}** in this curly paranthesis you can inject any java-script code in reacct.
- writing **java-script** inside **JSX** is very powerfull thing , you can make best UI using this.
- {} in this parentesis you can give any piece of js code, it will work
- eg-
```
const number=10000;
 const NormalComp= function(){
    {number} //this is how you can write js in jsx.you can also put it inside any jsx element
    <h2>{number}</h2>
    return <h2>THis is two heading</h2>
} 
```

**8] how to put REACT-ELEMENT into the Component:**

```
    const title =(  //reacct-element
        <h1 className="heading" tabIndex="5">
            This is a namaste React-element
        </h1>
    );     //remember semicolon is ump


    const FunctComp=()=>(   //react-functional component  
        // you dont need to write the return statement inside it
        <div id="container">
            {title}  
            {/* everything that is inside title, will come over here */}
            <h1>Namaste React-functional Component</h1>
        </div>

    );
```
![Alt Text](https://raw.githubusercontent.com/03-prathamesh/REACT/main/03-laying%20the%20foundation/images/sc3.png)
- this is how you put in your **react-element** inside your **component**.


**8]How to put React-Element inside React-Element**-
```

const elem=<span>React element1</span>

const title=(
    {elem}
    //jsx of elem will come here 
    <h1 className="second">
      this is a heading in title component
    </h1>
)

```
**9] you have to initialise anything(react-component) before using it , after initialisation you can use only**
**At the end all react is Java-script**