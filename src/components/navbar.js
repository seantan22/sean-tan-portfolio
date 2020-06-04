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
                    className="btn"
                    alt="Logo"
                    onClick={this.scrollToTop}>
                        <h1>ST</h1>
                </button>
                    <ul class="navbar">
                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-75}
                                duration={500}>
                                    | About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                to="experience"
                                spy={true}
                                smooth={true}
                                offset={-75}
                                duration={500}>
                                    | Experience
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                to="projects"
                                spy={true}
                                smooth={true}
                                offset={-75}
                                duration={500}>
                                    | Projects
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-75}
                                duration={500}>
                                    | Contact
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a class="btn btn-outline-dark" href="/">Resume</a>
                        </li>
                    </ul>
            </nav>
        )
    }
}