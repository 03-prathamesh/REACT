import { useState } from "react";
import ItemList from "./ItemList";

const ResCategory = ({ data,showItems,setShowIndex}) => {
  // console.log(data);
 const handleClick=()=>{
      // Prev_index=1;
      setShowIndex();

 }
  
  return (
    <div >
      {/* Header */}
      <div className="w-6/12 mx-auto my-5 bg-gray-50 shadow-lg p-4 " >
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
          <span className="font-bold">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇</span>
        </div>

        {/* accordian body */}

        <span className="text-center">
          { showItems &&  <ItemList items={data.itemCards} />}
        </span>
      </div>
    </div>
  );
};

export default ResCategory;
