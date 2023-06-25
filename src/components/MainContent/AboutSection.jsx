import React from "react";

function AboutSection(){
    return (
        <div id="about" className="">
            <h1 className="aboutHeading text-3xl">About</h1>

            <div class="container mx-auto flex px-4 items-center justify-center flex-row lg:px-5 lg:py-24">
              <div class="lg:w-5/6 flex lg:gap-10">
              <p className="lg:w-1/2 lg:px-20 text-xs text-center  lg:text-2xl py-10 lg:py-0">
              Hello there! My name is Nishant Jakane. At the age of 16, I'm a passionate web developer hailing from the beautiful state of Karnataka, India. From front-end development, where I craft visually stunning interfaces using HTML, CSS, and JavaScript, I'm always ready to dive into new technologies and frameworks.
              </p>
                <img class="lg:max-w-xs w-1/2 px-4 py-10 lg:py-0 aboutImg" src="https://pbs.twimg.com/media/FVKYEA7XwAgQPzj?format=jpg&name=4096x4096" alt="image description"></img>
              </div>
            </div>
        </div>
    )
}

export default AboutSection;