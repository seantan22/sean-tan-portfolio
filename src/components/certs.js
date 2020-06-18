import React from "react";

export default function Certifications() {
  return (
      <div>
        <div class="row d-flex justify-content-start mt-3" data-aos="fade-right" data-aos-duration="500">
          <h4>Top Certifications</h4>
        </div>
        <div class="row d-flex justify-content-around">
          <a class="col-md-5 col-lg-3 cert" href="https://www.coursera.org/account/accomplishments/certificate/AJX7TUTLQDEY" target="_blank" rel="noopener noreferrer"
            data-aos="fade-left" data-aos-duration="500">
            <div class="row d-flex justify-content-center">
              <h5 class="mt-2">Deep Learning Specialization</h5>
            </div>
            <div class="row d-flex justify-content-center">
              <h6>Coursera | June 2020</h6>
            </div>
          </a>
          <a class="col-md-5 col-lg-3 cert" href="#" target="_blank" rel="noopener noreferrer"
            data-aos="fade-left" data-aos-duration="500">
            <div class="row d-flex justify-content-center">
              <h5 class="mt-2">Ethereum & Solidity</h5>
            </div>
            <div class="row d-flex justify-content-center">
              <h6>Udemy | December 2019</h6>
            </div>
          </a>
          <a class="col-md-5 col-lg-3 cert" href="#" target="_blank" rel="noopener noreferrer"
            data-aos="fade-left" data-aos-duration="500">
            <div class="row d-flex justify-content-center">
              <h5 class="mt-2">AWS Cloud Practitioner</h5>
            </div>
            <div class="row d-flex justify-content-center">
              <h6>[Coming Soon]</h6>
            </div>
          </a>
        </div>
      </div>
  );
}
