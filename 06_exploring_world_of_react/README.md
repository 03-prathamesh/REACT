# exploring the world of REACT.

**when to make an API call in REACT(How webapps or UI applications fetch data from backend)**:
 - **1] first approach:** as soon as our page(html webpage) loads,we can make API call ans when we get the data then we can render it on the UI.
 ```
     loads->API->render
 ```
 - **2] second approach:** as soon as the page loads, we will just render the UI, now we will make API call & as soon as we get the result back from the API we will now **re-render** our application with the new data.
```
    loads->render->API->render
```

`in react we will always be using SECOND-APPROACH.this is the better approach and this will give you the better UX.`

- **react is fast because its RENDER-CYCLES are very fast.React RENDERS your UI very fast.**


**useEffect() hook:**
- useEffect function will be called after the  after the component(webpage UI component) has been rendered on the UI.
- it basically takes 2 arguments, one is **call_back Function(arrow function)**& **dependency array.[]**
- example(syntax):
```
   useEffect(()=>{
     console.log("useEffect called");
   },[]);
```
- useffect's callback function will called after your component renders.
- `consider we written this useefffect in body component, so when this body component will load, it will render the component on UI & as soon as the render cycle is finitshed it will called the call_back function(arrow function) which we have passsed into useEffect(), that is "useffect called" will get print.`
- this is how the useEffect() hook works.
- **If you have to do something after rendering the COMPONENT on UI, you have to write it inside arrow(callback)function in useEffect().**
- useEffect hook(arrow function in useeffect hook) get called  after component(which where useffffect is defined) get loaded(rendered) on the webpage(UI) first time