import React from "react";

function SkillsSection(){
    return (
        <div id="skills" className="lg:px-5 lg:py-10">
            <h1 className="skillsHeading text-3xl">My Skills</h1>
            <div className="container mx-auto flex px-4 items-center justify-center flex-row lg:w-5/6">
            <p className="skillsPara text-xs lg:text-xl py-5" >
            With intermediate proficiency in the MERN stack, I possess a solid foundation in MongoDB, Express.js, React, and Node.js.
            </p>
            </div>
            <div className="lg:w-5/6 flex flex-row">
            <div class="grid grid-cols-4 md:grid-cols-8 gap-4 skillsGrid">
                <div>
                    <img className="h-auto md:max-w-full rounded-lg skillsImg" src="images/html.png" alt=""></img>
                </div>
                <div>
                    <img className="h-auto md:max-w-full rounded-lg skillsImg" src="images/css.png" alt=""></img>
                </div>
                <div>
                    <img className="h-auto md:max-w-full rounded-lg skillsImg" src="images/javascript.png" alt=""></img>
                </div>
                <div>
                    <img className="h-auto md:max-w-full rounded-lg skillsImg" src="images/mongodb.png" alt=""></img>
                </div>
                <div>
                    <img className="h-auto md:max-w-full rounded-lg skillsImg" src="images/express.png" alt=""></img>
                </div>
                <div>
                    <img className="h-auto md:max-w-full rounded-lg skillsImg" src="images/react.png" alt=""></img>
                </div>
                <div>
                    <img className="h-auto md:max-w-full rounded-lg skillsImg" src="images/node.png" alt=""></img>
                </div>
                <div>
                    <img className="h-auto md:max-w-full rounded-lg skillsImg" src="images/tailwind.png" alt=""></img>
                </div>
            </div>

            </div>
        </div>
    )
}

export default SkillsSection;