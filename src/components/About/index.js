import React from "react";
// import portfolioPic from "../../assets/portfolio-pic.jpg";
import "./about.css";

function About() {
    return (
        <div className="container">
            <div className="row">
                <div className=" about-body col text-center mt-5">
                    <h1 className="mb-3">About</h1>
                    {/* <img src={portfolioPic} alt="close up of face"></img> */}
                    <p> Web developer with a passion for working in teams and a background in sales, customer service, and home renovations. Currently pursuing a certificate in full stack web development from Carleton University and developed skills in HTML5, JavaScript, and CSS.
                        Excelled in the sales industry, being able to problem solve and reach goals in high stress environments. Recipient of the Leader of the Year Award in 2012. Collaborated with team members to complete home renovation projects and developed an attention to detail.
                        Enjoy the process of creating web applications and the research that goes into learning new methods to make them more efficient. Excited to contribute to projects and bring the teamwork skills gained to a company.</p>
                </div>    
            </div>
        </div>
    );
}

export default About;