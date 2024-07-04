'use client';
import Items from "@/components/item/Items";

import { useSelector } from "react-redux";
function  Category({params}) {
    const {category} = params;
    const courses = useSelector((state) => state.courses.courses);
    const filteredCourses = courses.filter(course => course.name === category);

  return (
   <div className="popular flex flex-col items-center gap-3 h-auto ">
      <h1 className=" text-5xl">
        List of courses for {category}
      </h1>
      <hr className=" w-auto h-1 rounded-sm bg-black" />
      <div className="popular-item mt-14 grid gap-0 sm:grid-cols-2 sm:gap-10">
        {filteredCourses.map((item, i) => {
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
  )
}

export default  Category;
