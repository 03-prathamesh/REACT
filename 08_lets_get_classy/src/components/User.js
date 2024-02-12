

//we have directly destructure the props
const User=({name,location,contact})=>{

// another syntax for destructuring of props
// const User=(props)=>{}
// const {name,contact}=props;

    return (
        <div className="user-class">
            <h2>Name:{name}</h2>
            <h3>location:{location}</h3>
            <h3>Contact:{contact}</h3>
        </div>
    );
};

export default User;