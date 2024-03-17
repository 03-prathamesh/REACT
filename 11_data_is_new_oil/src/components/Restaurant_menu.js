import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ResCategory from "./ResCategory";

// Restaurant_menu has single mejor responsibility- displaying the data

const Restaurant_menu=()=>{
    // const params=useParams();  it will give the valur of :w(what user has typed(eg 123) in url for this dynamic routing)
    //    const params=useParams();
    //console.log(params.w);
    //we are diretly destructuring on fly, instead of writing params.w i can write direcyly w to access this
    const {w}=useParams();
    // console.log(w);

    const [showIndex,setShowIndex]=useState(0);
 
   const restMenuInfo=useRestaurantMenu(w);    //we are calling(using ) the custom hook here for fetching the data , we dont worry about its implementation we just need to use its functionality which is fetchign the data 
   console.log(restMenuInfo);

    // lets pss this w in URL

    //now following fetching of data functionality out custom hook  useRestaurantMenu is doing

    // const [restMenuInfo,setRestMenuInfo]=useState(null);

    // useEffect(()=>{
    //       fetchMenu();
    // },[])
    
    // const fetchMenu= async()=>{           //asynnc function FetchData()

    //     const data=await fetch();
    //     const json_data=await data.json();
    //     console.log(json_data);
    //     // console.log(json_data.data.cards[0].card.card.info.name);
      
    //     setRestMenuInfo(json_data);
    // }

 
    // lets destructure the information from API
      
    
     if(restMenuInfo===null){
        return(
         <div>
            <Shimmer/>
            {/* <h1>loading!!!!!!!!!!</h1> */}
         </div>
        )
     }
//bydefault above dont get false below wil get execute , if abouvte get true then below will not get


    //  console.log(restMenuInfo);
     const{name,cuisines,costForTwoMessage,cloudinaryImageID}=restMenuInfo.data.cards[0].card.card.info;
//    console.log(name);
    //  for menu
     const{itemCards}=(restMenuInfo.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card);
    //  console.log(itemCards);

    //  restMenuInfo.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards
    const categories=restMenuInfo.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter(c=>c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    console.log(categories);
    
    // const prev_index=0;
     return(
        <div >  
            <h1 className="text-center font-bold my-5 text-2xl">{name}</h1>
            <h2 className="text-center ">{cuisines.join(",")}. {costForTwoMessage}</h2>
            {/* Categories accordians */}
            {
                categories.map((category,index)=>(
                    < ResCategory data={category?.card?.card} showItems={index===showIndex ? true:false}  setShowIndex={() => setShowIndex(prevIndex => prevIndex === index ? null : index)} />
                    
                ))
            }
         
        </div>
        
     )
     


};


export default Restaurant_menu;