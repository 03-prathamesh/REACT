import { useEffect,useState } from "react";



const useOnlineStatus=()=>{


    const [onlineStatus,setOnlineStatus]=useState(true);
  // event-listner for checking weather user is ONLINE or OFFLINE is super-power which is given to us by WINDOW-OBJECT and browser
 // we just need to add that event listners into our web-page
 useEffect(()=>{
        
     window.addEventListener("offline",()=>{
          setOnlineStatus(false);
     })

     window.addEventListener("online",()=>{
        setOnlineStatus(true);
   })
 },[]);
    
   return onlineStatus;
}

export default useOnlineStatus;