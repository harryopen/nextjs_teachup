"use client"

import Link from "next/link";
function Footer() {
  return (
    
    <footer className="bg-black text-gray-400 py-12">
      <div className="max-w-6xl mx-auto grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-8
      sm:px-6 lg:px-8">
       <div>
          <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
          <p className="mb-4">
           Teach_Up is succesfully running worldwide, Thankyou so much for your support 
          </p>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Courses
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Facebook
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Twitter
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Instagram
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
          <p>New  Jalandhar, India</p>
          <p>jalandhar 144008</p>
          <p>Email: hs143297@gmail.com</p>
          <p>Phone: (+91)8837787856</p>
        </div>
           
      </div>
      <p className="text-center text-sm pt-4">@Teach_Up, All rights reserved</p>
    </footer>
 
  )
}

export default Footer
