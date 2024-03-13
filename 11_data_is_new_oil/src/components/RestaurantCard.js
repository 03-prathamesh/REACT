import { CDN_URL } from "../utils/constants";       //this is how you can import  a named-export(CDN_URL in this example)
// import restaurants from "../utils/mockData";



const RestaurantCard=(props)=>{    
    // this props will containt all the wrapped props
// console.log(props)-------------props in react is a OBJECT

// ------------------DESTRUCTURING ON THE FLY ------------------------------------------------------
// const{restName,cuisine}=props;
// now instead of using props.restName you can directly use restName to access its value for the perticular component
const {restdata,key}=props;

// const {
//    cloudinaryImageId
// }=restdata?.info;  we are only destructuring this, instead of using restdata.info.cloudinaryImaeid, you can directly use cloudinaryImageID


return (

   <div className="m-4 p-4 w-[230px]  bg-gray-200">
     
       <img
          className="rounded-lg h-[180px] w-[220px]" 
          src={CDN_URL + restdata.info.cloudinaryImageId}
       />
       {/* <h3>Meghana Foods</h3>
        <h4>Biryani, North India , Asian</h4>
        <h5>4.3 Stars</h5>
        <h4>38 Min</h4> */}
        {/* <h3>{props.restName}</h3>
        <h4>{props.cuisine}</h4>
        <h5>4.3 stars</h5>
        <h5>38 min</h5> */}
        <h2 className="font-bold py-2 text-lg">{restdata.info.name}</h2>
         <h4>{restdata.info.avgRating} Stars</h4>
         <h4>{restdata.info.costForTwo}</h4>
          <h4>{restdata.id}</h4>
        <p>{restdata.info.cuisines.join(", ")}</p>

    
    </div>
   );
};

// Higher Order components
export const withPromotedLabel=(RestaurantCard)=>{
    return (props)=>{
        return (
            <div>
                <label>Open</label>
               <RestaurantCard {...props }/>

            </div>
        );
    };
};

export default RestaurantCard;

