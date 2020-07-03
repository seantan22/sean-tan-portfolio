import React from "react";

import deep_cert from "./images/deep_learning_cert.png"
import sql_cert from "./images/sql_cert.png"

export default function Certifications() {
  return (
      <div class="container">
        <div class="row d-flex justify-content-center mt-3">
          <h4>Certifications</h4>
        </div>
        <div class="row d-flex justify-content-around">
          <a class="col-md-5 col-lg-3 cert" href="https://www.coursera.org/account/accomplishments/specialization/ZKHQEPKZTETP" target="_blank" rel="noopener noreferrer">
            <div class="row d-flex justify-content-center">
              <img class="cert-image" src={deep_cert} alt="sql-cert"/>
            </div>
            <div class="row d-flex justify-content-center">
              <h5 class="mt-2">Deep Learning Specialization</h5>
            </div>
            <div class="row d-flex justify-content-center">
              <h6>deeplearning.ai | June 2020</h6>
            </div>
            <div class="row d-flex justify-content-center">
              <p>Coursera</p>
            </div>
          </a>
          <a class="col-md-5 col-lg-3 cert" href="https://www.coursera.org/account/accomplishments/certificate/6A6FAHWAGS59" target="_blank" rel="noopener noreferrer">
            <div class="row d-flex justify-content-center">
              <img class="cert-image" src={sql_cert} alt="sql-cert"/>
            </div>
            <div class="row d-flex justify-content-center">
              <h5 class="mt-2">SQL for Data Science</h5>
            </div>
            <div class="row d-flex justify-content-center">
              <h6>UC Davis | June 2020</h6>
            </div>
            <div class="row d-flex justify-content-center">
              <p>Coursera</p>
            </div>
          </a>
          {/* <p class="col-md-5 col-lg-3 cert" data-aos="fade-left" data-aos-duration="500">
            <div class="row d-flex justify-content-center">
              <h5 class="mt-2">Ethereum & Solidity</h5>
            </div>
            <div class="row d-flex justify-content-center">
              <h6>Udemy | December 2019</h6>
            </div>
          </p> */}
          {/* <p class="col-md-5 col-lg-3 cert" data-aos="fade-left" data-aos-duration="500">
            <div class="row d-flex justify-content-center">
              <h5 class="mt-2">AWS Cloud Practitioner</h5>
            </div>
            <div class="row d-flex justify-content-center">
              <h6>[Coming Soon]</h6>
            </div>
          </p> */}
        </div>
      </div>
  );
}
