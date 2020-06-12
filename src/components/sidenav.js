import React from "react";

export default class SideNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTab: 0,
            data: [
            { id: "1", job: "Snowdrop Architecture" , title: "Software Intern", year: "January 2020 - Present",  
                desc: "Optimizing the energy usage of a sustainable tiny-home by 60% through the integration of home automation techniques. Analyzing datasets with 20000+ entries & training deep learning algorithms to recognize and predict human activity in the home.", link: "Learn More"},
            { id: "2", job: "Blockchain at McGill" , title: "Software Design Team Member", year: "October 2019 - June 2020", 
                desc: "Implemented a point-of-sale terminal enabling vendors to accept Ethereum or ERC-20 Tokens with a 95% success rate by    ", link: "Learn More"},
            { id: "3", job: "Sean's Websites"  , title: "Sean", year: "March 2020 - Present", 
                desc: "Volunteering to design and deploy multi-page websites for local businesses amid the COVID-19 pandemic to increase online traffic.", link: "Learn More"},
            { id: "4", job: "Company"  , title: "Position", year: "Date - Date", desc: "Description."}
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
                <div class="col-5 tab">
                    {this.state.data.map((button, i) => (
                        <button key={button.job} 
                                class="tab-links" 
                                onClick={() => this.handleClick(i)}>
                                    {button.job}
                        </button>
                    ))}
                </div>
                <div class="col-7 tab-content">
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