import RestaurantCard from "./RestaurantCard";
import restaurants from "../utils/mockData";
import { useState, useEffect  } from "react";




const Body=()=>{

  //local state variable(listOfRest).
//   we can create state_variable using Use_state(); 
// setListOfRest is special state_variable in react ,
   const [listOfRest,setListOfRest]=useState(restaurants);


   useEffect(()=>{
       fetchData();
   },[]);

    const fetchData=async()=>{
         const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");   // this is the main swiggy API data we are fetching.
         //from our local host we are calling swiggys API
         //this fetch will return us promise and then we will resolve this promise with the help f aync ans await instead of .then() and .catch() method
         const json=await data.json();
         console.log(json);

         setListOfRest(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);  //we will get the live data of swiggy into our application
    }



    return(
   
       <div className="body">
   
            <div className="filter">
               <button
                className="Filter-btn"
                onClick={()=>{
                  const filtered_list=listOfRest.filter(
                     (restsss)=>restsss.info.avgRating > 4
                  );
                  setListOfRest(filtered_list);
                }}
                >Top-Rated Restuarants</button>
            </div>
            <div className="res-container">
               
   
   
               {/* <RestaurantCard restName="meghana-foods"  cuisine="Biryani, North India , Asian" img={im2} />
               <RestaurantCard restName="KFC"  cuisine="burger, biryani and fast-food" img={im3} /> */}
              {/* here RESTNAME and CUISINE are props which we are passing to out RestaurantCard functinal component 
                 React will WRAP all of these props as on OBJECT and over the RestuarantCard component(props of component)
              */}
   
                 {/* <RestaurantCard restdata={restaurants[0]}/>
                 <RestaurantCard restdata={restaurants[1]}/>
                 <RestaurantCard restdata={restaurants[3]}/>
                 <RestaurantCard restdata={restaurants[4]}/>
                 <RestaurantCard restdata={restaurants[5]}/>
                 <RestaurantCard restdata={restaurants[6]}/>
                 <RestaurantCard restdata={restaurants[7]}/>
                 <RestaurantCard restdata={restaurants[8]}/>
                 <RestaurantCard restdata={restaurants[9]}/>
                 <RestaurantCard restdata={restaurants[10]}/>
                 <RestaurantCard restdata={restaurants[11]}/>
                 <RestaurantCard restdata={restaurants[12]}/>
                 <RestaurantCard restdata={restaurants[13]}/>
                 <RestaurantCard restdata={restaurants[14]}/>
                 <RestaurantCard restdata={restaurants[15]}/> instead of doing above use .map() method of js */}
                 {/* <RestaurantCard restdata={restaurants[9]}/> */}

                 {
                  listOfRest.map((rest)=>(
                     <RestaurantCard restdata={rest}/>
                  ))
                 }
   
   
                 
   
                 
            </div>
       </div>
   
   
    );
   };


export default Body;