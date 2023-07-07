import React from "react";

function RightProject(props){
    return(
        <div>
        <section class="bg-black dark:bg-gray-900">
            <div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                <div class="mt-4 md:mt-0 ">
                <img class=" w-full dark:hidden projectImg rightImgLg" src={props.imgSrc} alt="Tingdog website Image"></img>
        <img class="w-full hidden dark:block projectImg rightImgLg" src={props.imgSrc} alt="dashboard image"></img>
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-white-900 dark:text-white skillsHeading">{props.title}</h2>
            <a href={props.link} target="_blank" class="font-medium text-blue-600 dark:text-blue-500 hover:underline text-lg">{props.link}</a><i class="fa-solid fa-arrow-up-right-from-square linkIcon"></i>
            <p class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400 heroText mt-3 text-sm lg:text-xl">{props.description}</p>
            <a href={props.github} className="" target="_blank">
            <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg 
            text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
            <i class="fa-brands fa-github fa-lg"></i> Github
            </button>
            </a>
        </div>
        <img class=" w-full dark:hidden projectImg rightImg" src={props.imgSrc} alt="Tingdog website Image"></img>
        <img class="w-full hidden dark:block projectImg rightImg" src={props.imgSrc} alt="dashboard image"></img>
    </div>
</section>
        </div>
    )
}

export default RightProject