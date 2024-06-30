'use client'
import { useSelector } from "react-redux";
function  Category({params}) {
    const {category} = params;
    const courses = useSelector((state) => state.courses.courses);
   console.log("the value in courses is ",courses);
    const filteredCourses = courses.filter(course => course.name === 'Maths ');
    console.log("The value of filtered course is",filteredCourses);

  return (
    <>
    <div>
         {category } this is 
    </div>
    <div>
                <h1>Courses in {category}</h1>
                <ul>
                    {filteredCourses.map(course => (
                        <li key={course.id}>{course.name}</li>
                    ))}
                </ul>
            </div>
    </>
  )
}

export default  Category;
