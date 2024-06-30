'use client'
import { StickyScroll } from "../../components/ui/sticky-scroll-reveal";
import Image from "next/image";

import python from"../../app/assets/images/python.jpg"; 
import maths from "../../app/assets/images/maths.jpg"; 
import science from "../../app/assets/images/sci.jpg"; 
import website from "../../app/assets/images/webiste.jpg"; 
const content = [
    {
      title: "Introduction To Python ",
      description:
      "Learn the fundamentals of Python programming, one of the most popular and versatile programming languages. This course covers basic syntax, data structures, functions, and modules. Perfect for beginners, you'll gain the skills needed to start writing your own Python programs and scripts, and be prepared for more advanced Python topics.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src={python}
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Introduction to Calculus",
      description:
      "Discover the fundamental principles of calculus with our comprehensive introduction. This course covers essential topics such as limits, derivatives, and integrals, providing a solid foundation for further study in mathematics and related fields. Whether you're a student preparing for exams or someone looking to refresh your knowledge, our clear explanations and practical examples will help you master the concepts of calculus.",
       content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src={maths}
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Science",
      description:
      "Embark on a journey through the fascinating world of science with our comprehensive introductory course. Covering fundamental concepts across various scientific disciplines, including physics, chemistry, biology, and earth sciences, this course provides a solid foundation for understanding the natural world. Ideal for students, educators, and science enthusiasts, our engaging content and practical examples will ignite your curiosity and deepen your appreciation for the wonders of science.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src={science}
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Website Development",
      description:
      "Unlock the skills needed to create stunning and functional websites with our introductory course on website development. Covering the basics of HTML, CSS, and JavaScript, this course provides a solid foundation for building and designing your own web pages. Learn about responsive design, user experience (UX) principles, and modern web development tools and practices. Ideal for beginners and aspiring web developers, this course will guide you through the process of bringing your web projects to life.",
       content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={website}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
      ),
    },
  ];

function WhyChooseUs() {
  return (
    <div className="p-10">
    <StickyScroll content={content} />
  </div>
  )
}

export default WhyChooseUs
