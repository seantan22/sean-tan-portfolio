import React from 'react';
import RingLoader from "react-spinners/RingLoader";

export default class Loading extends React.Component {
  render() {
    return (
        <div class="loading d-flex justify-content-center align-items-center">
        <RingLoader
          size={200}
          color='black'
          loading='true'
        />
        </div>
    )
  }
}