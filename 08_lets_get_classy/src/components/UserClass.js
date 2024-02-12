import React from "react";
import User from "./User";


class UserClass extends React.Component{
  
    constructor(props){

        super(props);
    }

  render(){
    const{name,location,contact}=this.props;
    // so instead of doing this.props.name; to access the value of name , we can destructure it and use it.
    return (
        <div className="user-class">
            <h2>Name:{name}</h2>
            <h3>location:{location}</h3>
            <h3>Contact:{contact }</h3>
        </div>
    );
  }
}

export default UserClass;