import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import LeftProject from "./LeftProject";
import RightProject from "./RightProject";

function ProjectsSection(){
    return (
        <div id="projects">
        <h1 className="skillsHeading text-3xl mt-4">Projects</h1>
            <LeftProject 
                title="Tindog"
                link="https://nishantjakane.github.io/Tindog"
                description="The website Tindog is a visually appealing and interactive platform designed to connect dog owners and enthusiasts. With its sleek design and user-friendly interface, Tindog offers a unique experience for dog lovers to meet, socialize, and arrange dog-related activities in their local area."
                github="https://github.com/nishantjakane/Tindog"
                imgSrc="images/tindog.png"
            />
            <RightProject
                title="Todolist"
                link="https://todolist-v2-shmo.onrender.com/"
                description="The website TodoList is a simple and intuitive platform that helps users stay organized and manage their tasks effectively. With its minimalist design and user-friendly features, TodoList V2 allows users to create, prioritize, and track their to-do lists effortlessly, enhancing productivity and ensuring nothing falls through the cracks."
                github="https://github.com/nishantjakane/Todolist-v2/"
                imgSrc="images/todolist.png" />
            <LeftProject 
                title="Secrets"
                link="https://secrets1.onrender.com"
                description="This website appears to be a mysterious and enigmatic platform. Its purpose and content remain concealed, inviting users to explore its secrets. With limited information available, it sparks curiosity and intrigue, leaving visitors with a sense of anticipation and wonder."
                github="https://github.com/nishantjakane/Secrets"
                imgSrc="images/secrets.png"
            />
        </div>
    )
}

export default ProjectsSection