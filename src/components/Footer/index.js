import React from "react";
import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import "./footer.css";

function Footer() {
    return (
        <div className="mt-auto">
             <IconContext.Provider value={{ size:"3em"}}>
                <div className="footer-icons text-center">
                    <a href="https://github.com/MCN17"><FaGithub className="icons"/></a>
                    <a href="https://www.linkedin.com/in/martin-nolan-7149b27a/"><FaLinkedin className="icons"/></a>
                    <a href="https://stackoverflow.com/users/18378299/damarts"><FaStackOverflow className="icons"/></a>
                </div>
            </IconContext.Provider>
        </div>
    );
}

export default Footer;