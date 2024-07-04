"use client";
import React, { useState } from "react";

import all_courses from "@/app/assets/all_courses";
import CourseSidebar from "@/components/sidebar/courseSidebar";
import Rightbar from "@/components/sidebar/RightBar";

function page({ params }) {
  const Id = params.id;
  const product = all_courses.find((e) => e.key === Number(Id));
  const [selectedChapter, setSelectedChapter] = useState(product.chapter[0]);

  return (
    <div>
      <div className="main flex flex-1 ">
        <div className="  sticky top-0 h-sreen w-64 bg-gray-800 text-white">
          <CourseSidebar
            chapters={product.chapter}
            onChapterSelect={setSelectedChapter}
          />
        </div>
        <Rightbar chapter={selectedChapter} />
      </div>
    </div>
  );
}

export default page;
