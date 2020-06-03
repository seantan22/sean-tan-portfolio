import React from 'react'

export default class NavBar extends React.Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="/">Sean Tan</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-item nav-link" href="#">About</a>
                        <a class="nav-item nav-link" href="#">Experience</a>
                        <a class="nav-item nav-link" href="#">Projects</a>
                        <a class="nav-item nav-link" href="#">Contact</a>
                        <button class="btn btn-primary">Resume</button>
                    </div>
                </div>
            </nav>
        )
    }
}