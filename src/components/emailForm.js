import React from 'react';
import 'emailjs-com';
import ClipLoader from "react-spinners/ClipLoader";
import styled, {keyframes} from 'styled-components';
import { fadeIn } from "react-animations/";

const Transition = styled.div`animation: 2s ${keyframes `${fadeIn}`} 1`;

function LoadingDisplay() {
    return (
        <div className="email-display-state">
            <div className="d-flex justify-content-center">
                <button className="btn btn-outline-dark mt-3 d-flex align-items-center" type="button" disabled>
                    <ClipLoader
                        size={22}
                        loading='true'
                    />
                </button>
            </div>
            <p className="mt-5 d-flex align-items-center">
                <i class="fas fa-envelope mr-1"></i>
                    sean.tan@mail.mcgill.ca 
                <i class="fas fa-phone-alt ml-3 mr-1"></i>
                    240-938-2528
            </p>
        </div>
    )
}

function SuccessDisplay() {
    return (
        <div className="email-display-state">
            <button className="btn btn-outline-success success mt-3" type="button" disabled>
                Sent <i class="fas fa-check fa-md ml-1"></i>
            </button>
            <h5 className="mt-3">
                Thanks for contacting me! I'll be getting back to you within a few hours.
            </h5>
            <p className="mt-1">
                In the meantime be sure to check out my latest projects.
            </p>
        </div>
    )
}

function ErrorDisplay() {
    return (
        <div className="email-display-state">
            <button className="btn btn-outline-danger mt-3" type="button" disabled>Error!</button>
            <h5 className="mt-3">
                Whoops! Please contact me through the phone or email listed below:
            </h5>
            <div className="d-flex justify-content-center">
                <p className="mt-1 d-flex align-items-center">
                    <i class="fas fa-envelope mr-1"></i>
                        sean.tan@mail.mcgill.ca 
                    <i class="fas fa-phone-alt ml-3 mr-1"></i>
                        240-938-2528
                </p>
            </div>   
        </div>
    )
}

export default class EmailForm extends React.Component {
  constructor(props) {
	super(props);
    this.state = {  
        name: '', 
        company: '', 
        message: '', 
        address: '',
        isLoading: false,
        isSuccessful: false, 
        isError: false,
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleCompanyChange = this.handleCompanyChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.handleMsgChange = this.handleMsgChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {

        var isLoading = this.state.isLoading;
        var isSuccessful = this.state.isSuccessful;
        var isError = this.state.isError;

        return (
            <form className="email mt-5">
                <div className="row d-flex justify-content-center align-items-end">
                    <h5>My name is </h5>
                    <input
                        className="mx-2"
                        onChange={this.handleNameChange}
                        placeholder="Full Name"
                        required
                        value={this.state.name}
                    />
                    <h5> from </h5>
                    <input
                        className="ml-2"
                        onChange={this.handleCompanyChange}
                        placeholder="Company Name"
                        required
                        value={this.state.company}
                    />
                    <h5> . </h5>
                </div>
                <div className="row d-flex justify-content-center align-items-end mt-2">
                    <h5> You can reach me at </h5>
                    <input
                        className="ml-2"
                        onChange={this.handleAddressChange}
                        placeholder="Email Address" 
                        required
                        value={this.state.address}
                        style={{width: '35%', height: 'auto'}}
                    />
                    <h5> . </h5>
                </div>
                <div className="row d-flex justify-content-center mt-3">
                    <textarea
                        className="email-input mx-2"
                        onChange={this.handleMsgChange}
                        placeholder="Message"
                        required
                        value={this.state.message}
                        style={{width: '50%', height: '150px'}}
                    />
                </div>
                <div className="d-flex justify-content-center">
                    {isError ? <Transition><ErrorDisplay /></Transition> : 
                            isLoading ? <LoadingDisplay /> : 
                                    isSuccessful ? <Transition><SuccessDisplay /></Transition> : 
                                        <div className="email-display-state">
                                            <button className="btn btn-outline-dark mt-3"
                                                type="button" 
                                                onClick={this.handleSubmit}>
                                                    <i class="far fa-paper-plane fa-lg"/>
                                            </button>
                                            <p className="mt-5 d-flex align-items-center">
                                                <i class="fas fa-envelope mr-1"></i>
                                                    sean.tan@mail.mcgill.ca 
                                                <i class="fas fa-phone-alt ml-3 mr-1"></i>
                                                    240-938-2528
                                            </p>
                                        </div>
                    }
                </div>
            </form>
	)
  }

  handleNameChange(event) {
    this.setState({name: event.target.value})
  }
  handleCompanyChange(event) {
    this.setState({company: event.target.value})
  }
  handleAddressChange(event) {
    this.setState({address: event.target.value})
  }
  handleMsgChange(event) {
    this.setState({message: event.target.value})
  }

  handleSubmit (event) {
    const templateId = 'template_Nqly5DWJ';
    this.setState ({
        isLoading: true
    });
    this.sendEmail(templateId, {
        from_name: this.state.name, 
        company_name: this.state.company, 
        reply_to: this.state.address, 
        message_html: this.state.message,
    });
  }

  sendEmail (templateId, variables) {
    window.emailjs.send('portfolio_email', templateId, variables)
    .then(res => {
        this.setState ({
            isLoading: false,
            isSuccessful: true
        });
  	})
  	.catch(err => {
        this.setState ({
            isLoading: false,
            isSuccessful: false,
            isError: true
        });
    })  
  }
}