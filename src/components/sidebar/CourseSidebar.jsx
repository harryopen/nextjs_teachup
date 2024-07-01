import React from "react";

function CourseSidebar({ chapters,onChapterSelect }) {
  console.log("The value of chapters is",chapters) ;
  return (
    <div className="mt- bg-gray-800 text-white h-auto w-64 flex flex-col">
    <div className="p-4">
         
      {chapters &&
        chapters.map((chapter, index) => (
          <h4
            key={chapter.id ? chapter.id : index}
            className="py-2 cursor-pointer"
            onClick={() => onChapterSelect(chapter)}
          >
            {chapter.title}
          </h4>
        ))}
    </div>
  </div>
  );
}

export default CourseSidebar;
