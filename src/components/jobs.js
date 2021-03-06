import React from "react";

// import bam_team from "./images/bam_team.jpg"

export default class Jobs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTab: 0,
            data: [
            { id: "1", job: "Particle Health" , title: "Software Engineer Intern ", year: "May 2021 - Present",  
                desc: "Contributing to API products enabling clients to securely and conveniently access patient health data across the United States. Currently utilizing Golang paired with Google Cloud Platform services to implement metrics gathering and logging tools in the main API, with the objective of enabling both internal administrators and external clients to view API customer usage patterns.", link: "https://www.particlehealth.com/"},
            { id: "2", job: "Ericsson" , title: "Software Developer Intern ", year: "January 2021 - April 2021",  
                desc: "Contributed to Theia, an open-source cloud and desktop integrated development environment (IDE) framework. Utilized Typescript and Node.js to improve overall user experience, implement new features, and fix issues & bugs. Collaborating closely with the Theia development team using agile scrum methodologies (Daily scrum meetings, Kanban, Jira).  ", link: "https://theia-ide.org/"},
            { id: "3", job: "Blockchain at McGill" , title: "Software Design Team ", year: "October 2019 - June 2020", 
                desc: "Created a point-of-sale terminal enabling vendors to accept Ether or ERC-20 Tokens with a 90% success rate by writing Solidity smart contracts for the Ethereum blockchain. Optimized user experience by reducing task completion time by 20% through my design of an 8-page frontend user-interface using React and Bootstrap.", link: "http://blockchainmcgill.com/"},
            ]
        };
        this.handleClick = this.handleClick.bind(this);
    }
      
    handleClick(currentTab) {
        this.setState({ currentTab });
    }
        
    render() {
        return (
            <div class="row mt-3 ml-5">
                <div class="col-md-5 tab">
                    {this.state.data.map((button, i) => (
                        <button key={button.job} 
                                class="tab-links" 
                                onClick={() => this.handleClick(i)}>
                                    {button.job}
                        </button>
                    ))}
                </div>
                <div class="col-md-7 mt-2 tab-content">
                    {this.state.currentTab !== -1 &&
                        <React.Fragment>
                            <h5>{this.state.data[this.state.currentTab].title} 
                                <a href={this.state.data[this.state.currentTab].link} class="job-link" target="_blank" rel="noopener noreferrer"> 
                                    @ {this.state.data[this.state.currentTab].job}
                                </a>
                            </h5>
                            <h6>{this.state.data[this.state.currentTab].year}</h6>
                            <p class="mt-3">{this.state.data[this.state.currentTab].desc}</p>
                        </React.Fragment>
                    }
                </div>
            </div>
        )
    }
}