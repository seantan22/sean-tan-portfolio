import React from "react";
import headshot from "./images/sean_headshot_bg.png";

export default function About({ id }) {
  return (
    <div class="container mt-5">
      <div id={id}>
        <h3 data-aos="fade-right" data-aos-duration="500">About Me</h3>
        <div class="row d-flex justify-content-center">
          <div class="col-md-6 col-lg-4 right-divider" data-aos="fade-left" data-aos-duration="500">
            <h4 class="mt-5 d-flex justify-content-end lite">McGill University</h4>
            <p class="d-flex justify-content-end">September 2017 - May 2022</p>
            <h5 class="mt-5 d-flex justify-content-end"><i>Bachelor of Software Engineering</i></h5>
            <h5 class="d-flex justify-content-end"><i>Minor: Aerospace Engineering</i></h5>
            <p class="mt-5 d-flex justify-content-end">CGPA: 3.15/4.00</p>
          </div>
          <div class="col-md-6 col-lg-5" data-aos="fade-left" data-aos-duration="500">
            <h6 class="mt-3">Hello! I'm Sean, a fourth-year student at McGill University.</h6>
            <h6>I'm an aspiring software engineer with over three years of experience in building applications. I've worked with a diverse set of languages and frameworks that includes: Python, C, Java, TensorFlow, React, and many more. </h6>
            <h6>Fields that excite me include deep learning, IoT, & web and mobile development. My goal is to make impactful contributions in these areas by consistently striving to produce work that is creative, innovative and distinct.</h6>
            <h6>Off screen, you'll find me participating in a variety of up-tempo activities like playing lacrosse for McGill's varsity team, designing sustainable tiny-homes and digitaly mixing music.</h6>
          </div>
          <div class="col-sm-8 col-md-6 col-lg-3" data-aos="fade-left" data-aos-duration="500">
              <img class="img img-fluid prof-pic" src={headshot} alt="sean_headshot"/>
          </div>
        </div>
      </div>
    </div>
  );
}
