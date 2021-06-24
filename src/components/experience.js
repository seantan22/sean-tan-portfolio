import React from "react";
import Jobs from "./jobs"
import Certifications from"./certs"

export default function Experience({ id }) {
  return (
    <div class="container mt-5 pt-5 section">
      <div id={id}>
        <h3 data-aos="fade-right" data-aos-duration="500">Experience</h3>
        <div class="row mt-5 d-flex justify-content-center" data-aos="fade-left" data-aos-duration="500">
          <h5><i>Currently searching for a full-time software engineering role beginning May 2022.</i></h5>
        <Jobs />
        <Certifications />
        </div>
      </div>
    </div>
  );
}
