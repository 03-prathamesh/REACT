import {useState} from "react";
import img1 from "../../images/logo.jpg";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header=()=>{

     const onStatus=useOnlineStatus();
    const [btnChange,setBtnChange]=useState("login");  ///default value of state_variable btn_change;

    return (
        <div className="header">
            <div className="logo">
                 <img src={img1}  alt="image is not displaying" className="img1" />
            </div>  
           

            <div className="links">
                <li>Online Status:{onStatus ? " ✅":"  🔴"}</li>
                  <li><Link   to="/">home</Link></li>
                  <li><Link  to="/about">about</Link></li>
                  {/* <li><link href="">Sign-IN</link></li>
                  <li><link href="">Cart</link></li> */}
                  <li><button onClick={()=>{
                     if(btnChange==="login"){
                        setBtnChange("logout");
                    }
                    else{
                        setBtnChange("login");
                    }
                    // every time you click on this button , a reconciliation process is triggered(happens), react finds out the diff bet older V-dom of header component and updated v-dom of header component, and it checks only button changes in header componetnet, it will udate button only and it re-render whole Header component once again on the UI, this is why REACT is fast
                    // every time i click oon button , header-component is renders again(code inside header component get called again and again and renders on UI again and again  ) but only button changes.
                  }}>{btnChange}</button></li>


                  

            </div>

        </div>
    );
};


export default Header;
