import React from 'react'
import { Link } from "react-scroll";

export default class Intro extends React.Component {
    render() {
        return (
            <div class="container intro">
                <h4 style={{fontWeight:'lighter'}} data-aos="fade-down" data-aos-duration="3000">Hi, my name is</h4>
                <h1 class="mt-1" data-aos="fade-down" data-aos-duration="2000">SEAN TAN.</h1>
                <h2 class="mt-2" data-aos="fade-down" data-aos-duration="1000">Welcome to my portfolio.</h2>
                <h4 class="mt-5" style={{fontWeight:'lighter'}} data-aos="fade-down" data-aos-duration="500">I'm a software engineering student with a passion for developing impactful applications.</h4>
                <br></br>
                    <Link
                        className="btn btn-outline-dark mt-4 mx-3"
                        activeClass="active" to="contact"
                        spy={true} smooth={true}
                        offset={-75} duration={500}>
                            Say Hello!
                    </Link>
            </div>
        )
    }
}