import React from "react";
import SideNav from "./sidenav"

export default function Experience({ id }) {
  return (
    <div class="mt-5 section">
      <div class="section-content" id={id}>
        <h1>Experience</h1>
        <div class="row mt-5 d-flex justify-content-center">
          <h6> Currently available for a software development/engineering internship position from June 2020-August 2020.</h6>
        </div>
          <SideNav />
      </div>
    </div>
  );
}
