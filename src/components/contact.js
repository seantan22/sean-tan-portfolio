import React from "react";

export default function Contact({ id }) {
  return (
    <div className="mt-5">
      <div id={id}>
        <h1>Get In Touch</h1>
        <div class="row>">
          <div class="col mt-5 pt-5">
            <h5>Interested in learning more about my work?<br/>I'd love to hear from you!</h5>
          </div>
          <div class="col my-5 py-5">
            <button class="btn btn-outline-dark">
              Say Hello
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
