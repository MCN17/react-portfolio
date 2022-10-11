import React from "react";
import Footer from "../../components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import portfolioPic from "../../assets/portfolio-pic.jpg";
import "./navbar.css";

function Navbar() {
    return (
        <div className="container-fluid">
            <nav className="nav d-flex flex-column flex-wrap">
                <img className="mt-3 mb-3" src={portfolioPic} alt="close up of face"></img>
                <ul>
                    <li><Link to="/">About</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/resume">Resume</Link></li>
                </ul>
                <Footer></Footer>
            </nav>
        </div>
    )
}

export default Navbar;