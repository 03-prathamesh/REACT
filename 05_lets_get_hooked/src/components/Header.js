import img1 from "../../images/logo.jpg"


const Header=()=>{

    return (
        <div className="header">
            <div className="logo">
                 <img src={img1}  alt="image is not displaying" className="img1" />
            </div>
           

            <div className="links">
                  <li><a  href="">home</a></li>
                  <li><a  href="">about</a></li>
                  <li><a href="">Sign-IN</a></li>
                  <li><a href="">Cart</a></li>
                  

            </div>

        </div>
    );
};


export default Header;
