import React from 'react';
import { Component } from 'react';
import { useState } from 'react';
import "../Header/header.css";


function Header(){
    var [extendIcon , setExtend] = useState(false)

    function iconChange(){
        setExtend( current => !current)
    }

    const [activeName , setActiveName] = useState("")

    function onClick(event){
        setActiveName(event.target.name)
        setExtend( current => !current)
    }

    return(
    <div className='z-10'>
        <nav>
            <a href="#">
            <h1>Nishant</h1>
            </a>
            <div>
                <ul id='navbar' className={extendIcon === true ? "#navbar active" : "#navbar"}>
                    <li><a className={activeName==="about" ? "active" : ""} name="about" href="#about" onClick={onClick}>
                    About
                    </a></li>
                    <p className='dot'>.</p>
                    <li><a className={activeName==="skills" ? "active" : ""} name="skills" href="#skills" onClick={onClick}>
                    Skills
                    </a></li>
                    <p className='dot'>.</p>
                    <li><a className={activeName==="projects" ? "active" : ""} name="projects" href="#projects" onClick={onClick}>
                    Projects
                    </a></li>
                </ul>
            </div>
            <div id="mobile">
            <button onClick={iconChange}><i id="bar" className={ extendIcon === true ? "fas fa-times icon" : "fa-sharp fa-solid fa-bars icon"} ></i></button>
            </div>

        </nav>
        <hr className='hr' style={{backgroundColor: '#282829'}}></hr>
    </div>
    )
}

export default Header;