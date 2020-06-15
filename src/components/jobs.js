import React from "react";

export default class Jobs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTab: 0,
            data: [
            { id: "1", job: "Snowdrop Architecture" , title: "Software Intern", year: "January 2020 - Present",  
                desc: "Optimizing the energy usage of a sustainable tiny-home by 60% through the integration of home automation techniques. Analyzing datasets with 20000+ entries & training deep learning algorithms to recognize and predict human activity in the home.", link: "Learn More"},
            { id: "2", job: "Blockchain at McGill" , title: "Software Design Team", year: "October 2019 - June 2020", 
                desc: "Implemented a point-of-sale terminal enabling vendors to accept Ethereum or ERC-20 Tokens with a 95% success rate by    ", link: "Learn More"},
            { id: "3", job: "Company"  , title: "Position", year: "Date - Date", 
                desc: "Description.", link: "Learn More"},
            { id: "4", job: "Company"  , title: "Position", year: "Date - Date", 
                desc: "Description.", link: "Learn More"}
            ]
        };
        this.handleClick = this.handleClick.bind(this);
    }
      
    handleClick(currentTab) {
        this.setState({ currentTab });
    }
        
    render() {
        return (
            <div class="row mt-5 ml-5">
                <div class="col-md-5 tab">
                    {this.state.data.map((button, i) => (
                        <button key={button.job} 
                                class="tab-links" 
                                onClick={() => this.handleClick(i)}>
                                    {button.job}
                        </button>
                    ))}
                </div>
                <div class="col-md-7 mt-4 tab-content">
                    {this.state.currentTab !== -1 &&
                        <React.Fragment>
                            <h1>{this.state.data[this.state.currentTab].title} @ {this.state.data[this.state.currentTab].job}</h1>
                            <h2>{this.state.data[this.state.currentTab].year}</h2>
                            <p class="mt-3">{this.state.data[this.state.currentTab].desc}</p>
                            <a href="#">{this.state.data[this.state.currentTab].link}</a>
                        </React.Fragment>
                    }
                </div>
            </div>
        )
    }
}