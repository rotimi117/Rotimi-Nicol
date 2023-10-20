import React from "react";
import './skills.css';
import FrontEnd from '../../Assets/ui.png';
import BackEnd from '../../Assets/website.png'
import FrameWork from '../../Assets/app.png'

const Skills = () => {
    return (
        <section id="skills">
            <span className="skillTitle">What I Do</span>
            <span className="skillDesc">I am a Skillled and passionate Software Developer With Experience</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={FrontEnd} alt="uiDesign" className="skillBarImg"/>
                    <div className="skillBarText">
                    <h2>Front-End Web Developer(HTML & CSS)</h2>
                    <p>Welcome to my portfolio, where design meets functionality, and creativity transforms into user-friendly web experiences. <br/>I'm a passionate Front-End Web Developer with a knack for crafting visually appealing and highly responsive websites.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={BackEnd} alt="webDesign" className="skillBarImg"/>
                    <div className="skillBarText">
                    <h2>Back-End Development with Python & Javascript</h2>
                    <p>Welcome to the Back-End world of web development powered by Python and Django. <br/>In this section, I'll take you through the robust and efficient back-end systems that power modern web applications.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={FrameWork} alt="appDesign" className="skillBarImg"/>
                    <div className="skillBarText">
                    <h2>Building with React and Django</h2>
                    <p>Discover the magic of combining React, the dynamic front-end library, with Django, the powerful back-end framework. <br/> In this section, I'll showcase the art of creating modern, responsive, and data-driven web applications.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;