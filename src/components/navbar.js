import React from 'react'
import { Link, animateScroll as scroll } from "react-scroll";

export default class NavBar extends React.Component {
    scrollToTop = () => {
        scroll.scrollToTop();
      };

    render() {
        return (
            <nav class="navbar navbar-expand-lg">
                <button 
                    className="btn btn-white"
                    alt="Logo"
                    onClick={this.scrollToTop}>
                        <h1>ST</h1>
                </button>
                <button class="navbar-toggler" 
                        type="button" 
                        data-toggle="collapse" 
                        data-target="#navbarNavDropdown">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar">
                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}>
                                    I | About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                to="experience"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}>
                                    II | Experience
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                to="projects"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}>
                                    III | Projects
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}>
                                    IV | Contact
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a class="btn btn-outline-primary" href="/">Resume</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}