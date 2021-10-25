import React from "react";
import "../index.css";


const links = ["Home", "Courses", "About", "Login", "signUp"];

function HomePage() {
  return (
    <>
      <div className=" bg-black flex">
        <h1
          className="
                px-10    
                py-10
                text-4xl 
                md:text-lg 
                subpixel-antialiased 
                antialiased  
                font-mono
                text-white
                hover:bg-black-700"
        >
          <a href="/" className="hover:text-black hover:underline">
            David Waza
          </a>
        </h1>
        <nav className="ml-auto font-mono">
          <ul
            className="
          flex text-4xl 
          md:text-sm 
          space-x-6 
          p-10 
          text-white 
          text-left 
          subpixel-antialiased 
          antialiased
          flex-wrap"
          >
            {links.map((link, index) => {
              return (
                <li key={index}>
                  <a href="#" className={link === "signUp" && 'signup'}>{link}</a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      <div className=""></div>
    </>
  );
}

export default HomePage;
