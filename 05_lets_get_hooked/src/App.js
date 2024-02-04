import React from "react";
import ReactDOM from "react-dom";
import img1 from "../images/logo.jpg"
import im2 from "../images/healthy-food.webp"
import im3 from "../images/kfc.webp"
import Header  from "./components/Header";
import Body  from "./components/Body";
import RestaurantCard from "./components/RestaurantCard";



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
           <Body/>
        </div>

    );

};

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);