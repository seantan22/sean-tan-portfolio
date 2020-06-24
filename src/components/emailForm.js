import React from 'react';
import 'emailjs-com';

function LoadingButton() {
    return (
        <button className="btn btn-outline-dark mt-3" type="button">Loading...</button>
    )
}

function SuccessButton() {
    return (
        <button className="btn btn-outline-dark mt-3" type="button">Success!</button>
    )
}

function ErrorButton() {
    return (
        <button className="btn btn-outline-dark mt-3" type="button">Error!</button>
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
            <form className="email mt-5" data-aos="zoom-in" data-aos-duration="5000">
                <div className="row d-flex justify-content-center align-items-center">
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
                <div className="row d-flex justify-content-center align-items-center mt-2">
                    <h5> You can reach me at </h5>
                    <input
                        className="ml-2"
                        onChange={this.handleAddressChange}
                        placeholder="Email Address" 
                        required
                        value={this.state.address}
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
                {isError ? <ErrorButton /> : 
                        isLoading ? <LoadingButton /> : 
                                isSuccessful ? <SuccessButton /> : 
                                    <button className="btn btn-outline-dark mt-3"
                                            type="button" 
                                            onClick={this.handleSubmit}>
                                                <i class="far fa-paper-plane fa-lg"/>
                                    </button>}
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