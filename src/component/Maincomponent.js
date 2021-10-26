import React from "react";
import picture1 from '../img/pic1.jpg'
import picture2 from '../img/pic2.jpg'
import picture3 from '../img/pic3.jpg'
function Maincomponent() {
  return (
      <>
    <div className="bg-white">
      <button
        className="
        rounded-full
        bg-black
        text-center
        h-12 
        subpixel-antialiased 
        antialised
        text-white
        mt-32
        m-10
        p-4
        w-64
        font-mono
        " 
      >
        Featured Courses
      </button>
    </div>
    <div className="grid grid-cols-2">
        <h2 className="px-10 text-4xl topic">Pick a course to get <br /> started </h2>
        <h2 className="courses px-10 text-right"><a href="#" className="hover:underline">View all Courses > </a></h2>
    </div>
   
    <div className="grid grid-cols-3 px-10 py-5 gap-1 md:gap-3 lg:gap-6">
        <img className="images py-5" src={picture1} alt="picture-src"/>
        <img className="images py-5" src={picture2} alt="picture-src"/>
        <img className="images py-5" src={picture3} alt="picture-src"/>
    </div>
    </>
  );
}

export default Maincomponent;
