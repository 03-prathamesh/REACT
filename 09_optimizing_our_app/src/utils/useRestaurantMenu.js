import { useEffect , useState } from "react";


const useRestaurantMenu=(w)=>{

    const [rest,setRest]=useState(null);

    //fetchData
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData= async ()=>{
         const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.61610&lng=73.72860&restaurantId="+w+"&catalog_qa=undefined&submitAction=ENTER");
         const json=await data.json();
         setRest(json);

    }
    return rest;
}

export default useRestaurantMenu;