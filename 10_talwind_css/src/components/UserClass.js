import React from "react";
import User from "./User";


class UserClass extends React.Component{
  
    constructor(props){

        super(props);

        //if you have to create state-variables in the class-based components, you have to create it in constructor.

        this.state={

            count:0,
            count2:2,
        };
    }

  render(){
    const{name,location,contact}=this.props;
    // so instead of doing this.props.name; to access the value of name , we can destructure it and use it.
    return (
        <div className="user-class">
            <h2>Name:{name}</h2>
            <h3>location:{location}</h3>
            <h3>Contact:{contact }</h3>
            <h4>count:{this.state.count}</h4>
            {/* instead of detructure it like-const{count,count2}=this.state; */}
            <button onClick={()=>{
               this.setState({
                count:this.state.count+1,
               })
            }}>Increase Count</button>
             <button onClick={()=>{
                this.setState({
                  count:this.state.count-1,
                 })
            }}>Decrease Count</button>
             <button onClick={()=>{
                this.setState({
                      count:0,
                 })
            }}>Revert Count Count</button>
        </div>
    );
  }
}

export default UserClass;