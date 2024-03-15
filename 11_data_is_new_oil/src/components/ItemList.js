import { CDN_URL } from "../utils/constants";
const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div key={item.card.info.id} className="border flex  justify-between my-5">
          <div className="text-left p-2 w-9/12 ">
            <span className="">
              {item.card.info.name}-₹{item.card.info.price / 100}
            </span>
            <p className="text-xs text-left p-2">
              {item.card.info.description}
              
            </p>
          </div>
          <div className="w-3/12 border">
            <div className="absolute">
          <button className="bg-black text-white p-0.5 shadow-lg flex items-start  rounded-lg">ADD+</button>
          </div >
            <img
              src={CDN_URL + item.card.info.imageId}
              className=" w-36 h-auto  p-1"
            ></img>
           
          </div>
          
        </div>
      ))}
    </div>
  );
};

export default ItemList;
