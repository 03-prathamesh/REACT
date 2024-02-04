import RestaurantCard from "./RestaurantCard";
import restaurants from "../utils/mockData";
import { useState } from "react";




const Body=()=>{


   const [listOfRest,setListOfRest]=useState(restaurants);

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