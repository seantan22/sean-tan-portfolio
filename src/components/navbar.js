import React from 'react'
import { Link, animateScroll as scroll } from "react-scroll";
import navlogo from "./images/navlogo.png";

export default class NavBar extends React.Component {
    scrollToTop = () => {
        scroll.scrollToTop();
      };

    render() {
        return (
            <div class="nav">
                <nav class="navbar navbar-light navbar-expand-md flex-grow-1 text-right">
                    <div
                        type="button" alt="Logo" onClick={this.scrollToTop}
                        data-aos="fade-down-right" data-aos-duration="2000">
                            <img src={navlogo} alt="logo" width="100" height="auto"/>
                    </div>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav ml-auto flex-nowrap mb-3">
                            <li className="nav-item" data-aos="fade-down" data-aos-duration="500">
                                <Link
                                    className="nav-link mx-3"
                                    activeClass="active" to="about"
                                    spy={true} smooth={true}
                                    offset={-75} duration={500}>
                                        About
                                </Link>
                            </li>
                            <li className="nav-item" data-aos="fade-down" data-aos-duration="1000">
                                <Link
                                    className="nav-link mx-3"
                                    activeClass="active" to="experience"
                                    spy={true} smooth={true}
                                    offset={-75} duration={500}>
                                        Experience
                                </Link>
                            </li>
                            <li className="nav-item" data-aos="fade-down" data-aos-duration="1500">
                                <Link
                                    className="nav-link mx-3"
                                    activeClass="active" to="projects"
                                    spy={true} smooth={true}
                                    offset={-75} duration={500}>
                                        Projects
                                </Link>
                            </li>
                            <li className="nav-item" data-aos="fade-down" data-aos-duration="2000">
                                <Link
                                    className="nav-link mx-3"
                                    activeClass="active" to="contact"
                                    spy={true} smooth={true}
                                    offset={-75} duration={500}>
                                        Contact
                                </Link>
                            </li>
                            <li className="nav-item" data-aos="fade-down" data-aos-duration="2500">
                                <a class="nav-link mx-3 mb-3 resume" href="/"><i class="fas fa-download"></i> Resume</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}