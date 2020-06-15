import React from 'react'

export default class Intro extends React.Component {
    render() {
        return (
            <div class="intro">
                <p>Hi, my name is</p>
                <h1 class="mt-1">SEAN TAN.</h1>
                <h2 class="mt-2">Let's build the future <i>together</i>.</h2>
                <h6 class="mt-5">I'm a software engineering student with a passion for developing impactful applications.</h6>
                <br></br>
                <a href="mailto:sean.tan@mail.mcgill.ca">
                    <button class="btn btn-lg btn-outline-dark mt-5 email">
                        <span>
                            Get in Touch
                        </span>
                    </button>
                </a>
            </div>
        )
    }
}