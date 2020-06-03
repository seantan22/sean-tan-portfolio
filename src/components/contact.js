import React from "react";

export default function Contact({ id }) {
  return (
    <div className="mt-5">
      <div id={id}>
        <h1>Get In Touch</h1>
        <h5 class="mt-5">Please feel free to reach out if you have any questions or would like to know more about me!</h5>
        <h4 class="mt-5">Email: sean.tan@mail.mcgill.ca</h4>
      </div>
    </div>
  );
}
