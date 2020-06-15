import React from "react";
import Jobs from "./jobs"
import Certifications from"./certs"

export default function Experience({ id }) {
  return (
    <div class="mt-5 section">
      <div class="section-content" id={id}>
        <h1>Experience</h1>
        <div class="row mt-5 d-flex justify-content-center">
          <h3> Currently searching for a software development/engineering internship role from June 2020 - August 2020.</h3>
        </div>
        <Jobs />
        <Certifications />
      </div>
    </div>
  );
}
