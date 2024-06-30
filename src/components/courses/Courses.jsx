import React from "react";

import Items from "@/components/item/Items";
function Courses(props) {
  const{popular} =props;
console.log("the value of props from home ",props)

  return (
    <div className="popular flex flex-col items-center gap-3 h-auto">
      <h1 className=" text-5xl">
        What would you like to <span className="text-[#6E96CF]"> learn ?</span>
      </h1>
      <hr className=" w-52 h-1 rounded-sm bg-black" />
      <div className="popular-item mt-14 grid gap-0 sm:grid-cols-2 sm:gap-10">
        {popular.map((item, i) => {
          return (
            <Items
            key={item.key}
            id={item.key}
            name={item.name}
            desc={item.desc} 
            image={item.img}
            new_price={item.new_price}
            old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Courses;
