import React from "react";
import "./resume.css";
import { FaGoogleDrive } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

function Resume() {
    return (
        <div className="container">
            <div className="row">
                <div className="skills col">
                    <h1 className="text-center mt-5">Resume</h1>
                    <h3>Skills</h3>
                    <ul>
                        <li>HTML5</li>
                        <li>JavaScript</li>
                        <li>CSS</li>
                    </ul>
                    <p>You can view my resume here!
                    <IconContext.Provider value={{ size:"2em"}}>
                        <a href="https://docs.google.com/document/d/1mQRFZvbAm-RYVsUiqLibsyEUNsGMPlt8qeIxUFIZRmI/edit?usp=sharing" target="blank"><FaGoogleDrive className="icons"/></a>
                    </IconContext.Provider>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Resume;
