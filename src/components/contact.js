import React from "react";
import 'emailjs-com';
import EmailForm from "./emailForm";

export default function Contact({ id }) {
  return (
    <div className="container contact mt-3">
      <div id={id}>
        <h2 data-aos="zoom-in" data-aos-duration="5000">Get In Touch</h2>
        <div class="row>">
          <div class="mt-4" data-aos="zoom-in" data-aos-duration="500">
            <h5 style={{fontWeight:'500'}}>Interested in learning more about my work?<br/>I'd love to hear from you!</h5>
          </div>
          <EmailForm />
        </div>
      </div>
    </div>
  );
}
