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

**Shimmer UI:**-
- In React, implementing a shimmer effect involves rendering a placeholder component with a shimmer animation while waiting for the actual content to be fetched or loaded. This technique improves the user experience by providing a sense of progress and activity during loading times.
- consider we have react useEffect hook which takes data from API, so API will take some time to load, till that we have to present fake UI to improve user experiece untill we get the data from API and render it on the UI, this is the main use of SHIMMER UI.

**Conditional Rendering:**
- **rendering something on the UI basis on some conditions**
- Conditional rendering in React refers to displaying different UI components or elements based on certain conditions( untill state_variable containt empty value)
- Conditional rendering in React is a technique where components render different content based on specified conditions.
- it allows you to show or hide elements, change their appearance, or render alternative content based on the state or props of the component. This helps create dynamic user interfaces that respond to changes in data or user interactions
- Suppose we have the useState() and useEffect() hooks in our application. useEffect() is used for fetching data from an API, and the function provided by useState() then assigns the value of this API data to the state variable ListOfRest. Until the API fetches the data, the value of the state variable remains empty.
- 
```
const [listOfRest,setListOfRest]=useState([]);  //intitally ListOfRest if empty.

  useEffect(()=>{
       fetchData();
   },[]);

    const fetchData=async()=>{
         const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");   // this is the main swiggy API data we are fetching.
         //from our local host we are calling swiggys API
         //this fetch will return us promise and then we will resolve this promise with the help f aync ans await instead of .then() and .catch() method
         const json=await data.json();
         console.log(json);

         setListOfRest(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);  //we will get the live data of swiggy into our application(this is the live data coming from swiggy API)
    }

```
-Until the API fetches the data, the value of the state variable is empty. Therefore, we use shimmering UI until the API retrieves data from Swiggy. For instance, we conditionally display "Loading" until the API fetches data from Swiggy(ie when state_variable==empty ie containt no value), which is known as conditional rendering. After fetching the data, and as soon as that component(where useEffect is used) renders on the UI, setListOfRest will update the value of the state variable ListOfRest. listOfRest will then contain all the data from Swiggy fetched via the API (such as restaurant information), which will be rendered on the UI, and the conditional rendering condition becomes false.
```
<!-- this is the conditional rendering -->
if(listOfRest.length===0){
      return (
      // <h1>Loading............</h1>
         <Shimmer/>
      )
    }
```
- virtual dom is object representation of jsx(actual-dom)

- `whenever state_variable get updates or changes or modified, react triggers a reconciliations cycle that is means react finds the diff between older v-dom of body component and new vdom of body()component(let say we defined useState() in body component) with the help of diff -algo and it see that input value is chnages and it updates input value and then it(react) re-render that whole component(where useState() is defined here body) again on the UI(html webpage) `
- react is re-rendering whole body component in this example, but it is updating only inpput-box value inside the dom
- thats why react is s fast and quicky renders component on UI.`react does efficinent rendering process , efficient DOM-manipulation very fastly.`