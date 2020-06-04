import React from 'react'
import { Link, animateScroll as scroll } from "react-scroll";
import navlogo from "./images/navlogo.png";

export default class NavBar extends React.Component {
    scrollToTop = () => {
        scroll.scrollToTop();
      };

    render() {
        return (
            <nav class="navbar navbar-expand-lg">
                <div
                    type="button"
                    alt="Logo"
                    onClick={this.scrollToTop}>
                        <img src={navlogo} alt="logo" width="100" height="auto"/>
                </div>
                    <ul class="navbar">
                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-75}
                                duration={500}>
                                    About
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
                                    Experience
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
                                    Projects
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
                                    Contact
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