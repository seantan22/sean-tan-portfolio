import React from "react";
import SideNav from "./sidenav"

export default function Experience({ id }) {
  return (
    <div class="mt-5 section">
      <div class="section-content" id={id}>
        <h1>Experience</h1>
        <div class="row mt-5 d-flex justify-content-center">
          <h3> Currently available for a software development/engineering internship position from June 2020-August 2020.</h3>
        </div>
        <SideNav />
        <div class="row d-flex justify-content-center">
          <h4>Certifications</h4>
        </div>
        <div class="row">
          <div class="col-4 cert">
            <div class="row d-flex justify-content-center">
              <h5>Neural Networks and Deep Learning</h5>
            </div>
            <div class="row d-flex justify-content-center">
              <h6>June 2020</h6>
            </div>
          </div>
          <div class="col-4 cert">
            <div class="row d-flex justify-content-center">
              <h5>Improving Deep Neural Networks</h5>
            </div>
            <div class="row d-flex justify-content-center">
              <h6>June 2020</h6>
            </div>
          </div>
          <div class="col-4 cert">
            <div class="row d-flex justify-content-center">
              <h5>Ethereum and Solidity</h5>
            </div>
            <div class="row d-flex justify-content-center">
              <h6>December 2019</h6>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-4 cert">
            <div class="row d-flex justify-content-center">
              <h5>Name</h5>
            </div>
            <div class="row d-flex justify-content-center">
              <h6>[In Progress]</h6>
            </div>
          </div>
          <div class="col-4 cert">
            <div class="row d-flex justify-content-center">
              <h5>Name</h5>
            </div>
            <div class="row d-flex justify-content-center">
              <h6>[In Progress]</h6>
            </div>
          </div>
          <div class="col-4 cert">
            <div class="row d-flex justify-content-center">
              <h5>Name</h5>
            </div>
            <div class="row d-flex justify-content-center">
              <h6>[In Progress]</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
