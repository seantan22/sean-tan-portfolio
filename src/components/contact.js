import React from "react";

export default function Contact({ id }) {
  return (
    <div className="mt-5">
      <div id={id}>
        <h1>Get In Touch</h1>
        <div class="row>">
          <div class="col-4">
            <h5 class="mt-5">Please feel free to reach out if you have any questions or would like to know more about me!</h5>
          </div>
          <div class="col-8">
            <h4>Email: sean.tan@mail.mcgill.ca</h4> 
          </div>
        </div>
      </div>
    </div>
  );
}
