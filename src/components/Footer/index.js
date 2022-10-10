import React from "react";
import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

function Footer() {
    return (
        <div className="mt-auto">
             <IconContext.Provider value={{ size:"3em"}}>
                <div className="footer-icons text-center">
                    <FaGithub/>
                    <FaLinkedin/>
                    <FaStackOverflow/>
                </div>
            </IconContext.Provider>
        </div>
    );
}

export default Footer;