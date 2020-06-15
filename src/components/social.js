import React from 'react'

export default class Social extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <a href="https://github.com/seantan22" target="_blank" rel="noopener noreferrer">
                        <div class="fab fa-github fa-lg mb-2"/>
                    </a>
                    <a href="https://www.linkedin.com/in/seankltan/" target="_blank" rel="noopener noreferrer">
                        <div class="fab fa-linkedin-in fa-lg my-3"/>
                    </a>
                    <div class="vl ml-2"/>
                </ul>
            </div>
        )
    }
}