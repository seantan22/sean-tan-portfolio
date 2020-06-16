import React from "react";
import App from '../App';
import Loading from '../components/loading.js';
import FadeIn from "react-fade-in";

export default class Refresh extends React.Component {
    constructor(props){
       super(props)
       this.state = {
          done: undefined
       }
    }
    componentDidMount() {
        setTimeout(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(json => this.setState({ done: true }));
        }, 3000);
    }
    render(){
       return(
        <div>
            {!this.state.done ? 
            (<Loading />) : 
            (<FadeIn transitionDuration="2000"><App /></FadeIn>)}
        </div>
       )
    }
 }