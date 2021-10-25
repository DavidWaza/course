import React from "react";
import '../App.css'

function hero() {
  return (
    <div className="bg-black text-white px-10 py-10 text-center">
      <div className="grid grid-cols-2">
        <div>
          <p
            className="
                border
                bg-blackCow-100
                h-12 
                w-60
                 p-3 
                 font-mono 
                 subpixel-antialiased 
                 antialised
                  rounded-3xl
                  linear
                  "
          >
            Digital Experience
          </p>
          <p className="text-left py-5 font-mono text-3xl font-bold">Always Something new <br />to learn</p>
          <p className="text-left py-3 font-mono text-md font-thin">With Something Always new to learn in our catalogue, you<br /> you always get the latest skills, Courses from N100,000 <br />through tomorrow.</p>
          <button className=" 
                bg-gradient-to-r 
                from-green-700 
                via pink-500 
                to-red-500 
                h-12 
                w-60
                float-left
                my-4
                justify-left
                border-red-800
                 p-3 
                 font-mono 
                 subpixel-antialiased 
                 antialised
                  rounded-3xl">Explore Courses</button>
        </div>

        <div className="bg-gradient-to-r 
                from-green-700 
                via pink-500 
                to-red-500 
                h-50
                w-80  
                mx-56            
                border-red-800
                 p-3 
                 font-mono 
                 subpixel-antialiased 
                 antialised
                  rounded-full"></div>
      </div>
    </div>
  );
}

export default hero;
