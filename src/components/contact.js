import React from "react";

export default function Contact({ id }) {
  return (
    <div className="container contact mt-5">
      <div id={id}>
        <h2 data-aos="zoom-in" data-aos-duration="5000">Get In Touch</h2>
        <div class="row>">
          <div class="col mt-5 pt-5" data-aos="zoom-in" data-aos-duration="500">
            <h5 style={{fontWeight:'500'}}>Interested in learning more about my work?<br/>I'd love to hear from you!</h5>
          </div>
          <div class="col my-4 py-4" data-aos="zoom-in" data-aos-duration="500">
            <a href="mailto:sean.tan@mail.mcgill.ca">
              <button class="btn btn-outline-dark btn-lg email">
                <span>
                  Say Hello!
                </span> 
              </button>
            </a>  
          </div>
        </div>
      </div>
    </div>
  );
}
