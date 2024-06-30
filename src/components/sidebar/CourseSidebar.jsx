import React from "react";

function CourseSidebar({ chapters,onChapterSelect }) {

  return (
    <div className="bg-gray-800 text-white h-screen w-64 flex flex-col">
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
