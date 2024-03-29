import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";




const Restaurant_menu=()=>{
    // const params=useParams();  it will give the valur of :w(what user has typed(eg 123) in url for this dynamic routing)
    //    const params=useParams();
    //console.log(params.w);
    //we are diretly destructuring on fly, instead of writing params.w i can write direcyly w to access this
    const {w}=useParams();
    console.log(w);
 
    // lets pss this w in URL
    const [restMenuInfo,setRestMenuInfo]=useState(null);

    useEffect(()=>{
          fetchMenu();
    },[])
    
    const fetchMenu= async()=>{           //asynnc function FetchData()

        const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.61610&lng=73.72860&restaurantId="+w+"&catalog_qa=undefined&submitAction=ENTER");
        const json_data=await data.json();
        console.log(json_data);
        // console.log(json_data.data.cards[0].card.card.info.name);
      
        setRestMenuInfo(json_data);
    }

 
    // lets destructure the information from API
      
    
     if(restMenuInfo===null){
        return(
         <div>
            <Shimmer/>
            {/* <h1>loading!!!!!!!!!!</h1> */}
         </div>
        )
     }



    
     const{name,cuisines,costForTwoMessage,cloudinaryImageID}=restMenuInfo.data.cards[0].card.card.info;
//    console.log(name);
    //  for menu
     const{itemCards}=(restMenuInfo.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card);
    //  console.log(itemCards);
     return(
        <div>
            <h1>Restaurant name:{name}</h1>
            <h2>{cuisines.join(",")}</h2>
            <h3>{costForTwoMessage}</h3>

            <h1>Menu:</h1>
            {/* <h3><li>{itemCards[0].card.info.name}-{itemCards[0].card.info.price}</li></h3> 
            <h3><li>{itemCards[1].card.info.name}-{itemCards[1].card.info.price}</li></h3> 
            <h3><li>{itemCards[2].card.info.name}-{itemCards[2].card.info.price}</li></h3> 
            <h3><li>{itemCards[3].card.info.name}-{itemCards[3].card.info.price}</li></h3>
            instead of this , do the following  */}
            <ul>
                {itemCards.map((item)=>(
                    <li key={item.card.info.id}>
                        {item.card.info.name}
                        {item.card.info.price/100}
                    </li>
                ))}

                
            </ul>
            

        </div>
        
     )
     


};


export default Restaurant_menu;