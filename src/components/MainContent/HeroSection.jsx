import React from "react";
import "./mainContent.css"


function HeroSection(){
    return (
        <div id="">
                    <div className=" text-white" style={{
            background: "black"
          }}>
            <div class="container mx-auto flex px-4 py-6 items-center justify-center flex-col lg:px-5 lg:py-24">
              <div class="text-left w-1/1 lg:w-5/6 w-full">
                <h2 className="smallHeroTitle my-6  text-2xl font-bold leading-tight lg:text-3xl">
                  Hello , I'm Nishant
                </h2>
                  <h1 className="largeHeroTitle my-10 text-5xl font-bold leading-tight lg:text-6xl ">A </h1>
                  <h1 className="largeHeroTitle2 my-10 text-5xl font-bold leading-tight lg:text-6xl">Web Developer</h1>
                  <h1 className="largeHeroTitle my-8 text-5xl font-bold leading-tight lg:text-6xl"> ,</h1>
                  <br/>
                  <h1 className="largeHeroTitle2 my-10 text-5xl font-bold leading-tight lg:text-6xl">Gamer</h1> 
                <p className="heroText mt-3 text-sm lg:text-2xl">
                Welcome to the heroic world of Nishant Jakane, a visionary web developer based in India. With 
                his unrenowned skills and passion for innovation, Nishant has been revolutionizing the digital landscape, one line of 
                lawmaking at a time.
                </p>
                <div className="flex justify-left mx-auto lg:justify-left">
                <div className="my-10"> 
                <button type="button" class="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-black dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-12 py-2.5 text-center mr-2 mb-2">
                My Skills
                </button>
                <button class="z-0 heroBtn 2relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-black dark:focus:ring-lime-800 hover:text-black">
                  <span class="relative px-12 transition-all ease-in duration-75 bg-black 
                  dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 lg:px-12 py-2.5">
                  Projects
                  </span>
                </button> 
                </div>

                </div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default HeroSection;