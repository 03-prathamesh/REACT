import { useState } from "react";


//we have directly destructure the props
const User=({name,location,contact})=>{

// another syntax for destructuring of props
// const User=(props)=>{}
// const {name,contact}=props;

    const[count,setCount]=useState(0);

    return (
        <div className="user-class">
            <h2>Name:{name}</h2>
            <h3>location:{location}</h3>
            <h3>Contact:{contact}</h3>
            <h4>count:{count}</h4>
            <button onClick={()=>{
               setCount(count+1);
            }}>Increase Count</button>
             <button onClick={()=>{
               setCount(count-1);
            }}>Decrease Count</button>
             <button onClick={()=>{
               setCount(0);
            }}>Revert Count Count</button>
        </div>
    );
};

export default User;