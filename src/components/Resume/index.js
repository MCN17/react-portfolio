import React from "react";
import "./resume.css";
import { FaFileDownload } from "react-icons/fa";

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
                    <a href="/" download="MartinNolanResume.pdf">Resume</a>
                </div>
            </div>
        </div>
    );
}

export default Resume;
