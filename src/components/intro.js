import React from 'react'

export default function Intro() {
    return (
        <div class="container intro">
            <h4 style={{fontWeight:'lighter'}}>Hi, my name is</h4>
            <h1 class="mt-1">SEAN TAN.</h1>
            <h2 class="mt-2">Let's build the future <i>together</i>.</h2>
            <h4 class="mt-5" style={{fontWeight:'lighter'}}>I'm a software engineering student with a passion for developing impactful applications.</h4>
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