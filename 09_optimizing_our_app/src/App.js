import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import img1 from "../images/logo.jpg"
import im2 from "../images/healthy-food.webp"
import im3 from "../images/kfc.webp"
import Header  from "./components/Header";
import Body  from "./components/Body";
import RestaurantCard from "./components/RestaurantCard";
import About from "./components/About";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
// these all 3 are components provides by the react-router-dom library
import Error from "./components/Error";
import Restaurant_menu from "./components/Restaurant_menu";
// import Grocery from "./components/Grocery";
// lets create a functional component





//------------------------------------- one more way to pass data as a props to the component dynamically----------------g
// suppose i have to pass this all data , so should i pass it 1 by 1 restName, cuisine, NO!
// i can pass my resObjApi object( all data of this resObjApi) directly over there 
// instead of passing like this- <RestaurantCard restName="meghana-foods"  cuisine="Biryani, North India , Asian" img={im2} />
// <RestaurantCard 
//     restData={restData}
//     />

// so in the restaurantCard component you can get in props you can get this restData which is object and const{restData}=props
// now from restData we can use all the data of this resObjApi like type, delieverytime by foloowing syntax
// <h3>{restData.type}</h3>
// <h4>{restData.data.rating}</h4>
// const resObjApi={   //ths resObjApi is js object
//     type:"restuarant",
//     data:{
//         type:"f",
//         id:"334475",
//         delieveryTime:36,
//         rating:"4-stars"
//     }
// };


// API of swiggy


// };   -------------API data of  DOMINOS PIZZHA ONLY






const AppLayout=()=>{

    return (
        <div className="app">
           <Header/>
           <Outlet/>
           {/* you will not see this outlet in your HTML, outler will be replace by the components according to the ROUTS */}
           {/* <Body/> */}
           {/* <About/> */}
        </div>

    );

};


// normal-routing
// const appRouter=createBrowserRouter([

//     {
//         path:"/",
//         element:<AppLayout/>,
//         errorElement:<Error/>         //react-router-dom library gives up this feature to represent error message or page   

//     },
//     // we have configured our About-us page also
//     {

//         path:"/about",
//         element:<About/>
//     }

// ]);


// children-routing

const Grocery=lazy(()=>import("./components/Grocery"));


const appRouter=createBrowserRouter([

        {
            path:"/",
            element:<AppLayout/>,
            errorElement:<Error/>,         //react-router-dom library gives up this feature to represent error message or page   
            children:[


                {
                   path:"/",
                   element:<Body/>,


                },

                {
                    // if i go to about page, this <ABout/> will go and fill that OUTLET which we used(defined) or called in the Applayout(parent)component
                    
                    path:"/about",  
                    element:<About/>
                }
                ,{

                    path:"/restaurants/:w",       //here : is used for dynamic routing after : , whetever you type it will redirect to the Restaurant_menu page or component, and instead of w you can use any variable_name 
                    element:<Restaurant_menu/>
                },  
                {
                    path:"/grocery",
                    element:<Suspense fallback={<h1>Loading the page , wait for secc</h1>}><Grocery/></Suspense>
                },



            ],
            
        },
        // we have configured our About-us page also
        
    
    ]);



const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout/>);

root.render(<RouterProvider router={appRouter}/>);