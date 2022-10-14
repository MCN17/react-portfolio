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
                <p className="name">Martin Nolan</p>
                <ul className="text-center">
                    <li><Link className="navbar-link" to="/">About</Link></li>
                    <li><Link className="navbar-link" to="/projects">Projects</Link></li>
                    <li><Link className="navbar-link" to="/contact">Contact</Link></li>
                    <li><Link className="navbar-link" to="/resume">Resume</Link></li>
                </ul>
                <Footer></Footer>
            </nav>
        </div>
    )
}

export default Navbar;