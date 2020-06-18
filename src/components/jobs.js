import React from "react";

export default class Jobs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTab: 0,
            data: [
            { id: "1", job: "Snowdrop Architecture" , title: "Software Intern ", year: "January 2020 - Present",  
                desc: "Optimizing the energy usage of a sustainable tiny-home by 60% through the integration of home automation techniques. Analyzing datasets with 20000+ entries & training deep learning algorithms to recognize and predict human activity in the home.", link: "https://www.snowdroparch.com/home"},
            { id: "2", job: "Blockchain at McGill" , title: "Software Design Team ", year: "October 2019 - June 2020", 
                desc: "Created a point-of-sale terminal enabling vendors to accept Ethereum or ERC-20 Tokens with a 90% success rate by writing smart contracts in Solidity for the Ethereum blockchain. Optimized user experience by reducing time required to complete tasks by 20% through my design of the frontend user-interface using React + Bootstrap.", link: "http://blockchainmcgill.com/"},
            ]
        };
        this.handleClick = this.handleClick.bind(this);
    }
      
    handleClick(currentTab) {
        this.setState({ currentTab });
    }
        
    render() {
        return (
            <div class="row mt-5 ml-5" data-aos="fade-left" data-aos-duration="500">
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
                            <h4>{this.state.data[this.state.currentTab].title} 
                                <a href={this.state.data[this.state.currentTab].link} class="job-link" target="_blank" rel="noopener noreferrer"> 
                                    @ {this.state.data[this.state.currentTab].job}
                                </a>
                            </h4>
                            <h6>{this.state.data[this.state.currentTab].year}</h6>
                            <p class="mt-3">{this.state.data[this.state.currentTab].desc}</p>
                        </React.Fragment>
                    }
                </div>
            </div>
        )
    }
}