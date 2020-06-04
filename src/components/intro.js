import React from 'react'

export default class Intro extends React.Component {
    render() {
        return (
            <div>
                <p>Hi, my name is</p>
                <h1 class="mt-1">SEAN TAN.</h1>
                <h2 class="mt-2">Welcome to my portfolio.</h2>
                <h6 class="mt-5">I'm a software engineering student with a passion for developing powerful web applications.</h6>
                <br></br>
                <button class="btn btn-lg btn-outline-dark mt-5">
                    Get in Touch
                </button>
            </div>
        )
    }
}