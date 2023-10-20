import React from "react";
import './works.css'
import Portfolio1 from '../../Assets/porttt1.jpg';
import Portfolio2 from '../../Assets/porttt2.jpg';
import Portfolio3 from '../../Assets/porttt3.jpg';
import Portfolio4 from '../../Assets/porttt4.jpg';
import Portfolio5 from '../../Assets/porttt5.jpg';
import Portfolio6 from '../../Assets/portt6.jpg';


const Works = () => {
    return (
        <section id="works">
            <h2 className="worksTitle">My Portfolio</h2>
            <span className="worksDesc">I take Pride in paying attention to the smallest details and</span>
            <div className="worksImgs">
                <img src={Portfolio1} alt="" className="worksImg" />
                <img src={Portfolio2} alt="" className="worksImg" />
                <img src={Portfolio3} alt="" className="worksImg" />
                <img src={Portfolio4} alt="" className="worksImg" />
                <img src={Portfolio5} alt="" className="worksImg" />
                <img src={Portfolio6} alt="" className="worksImg" />
            </div>
            <button className="workBtn">See More</button>
        </section>
    )
}

export default Works;