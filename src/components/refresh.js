import React from "react";
import App from '../App';
import Loading from '../components/loading.js';
import styled, {keyframes} from 'styled-components';
import { fadeIn } from "react-animations/";

const Transition = styled.div`animation: 2s ${keyframes `${fadeIn}`} 1`;

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
            (<Transition><App /></Transition>)}
        </div>
       )
    }
 }