import React from "react";
import headshot from "./images/sean_headshot_bg.png";

export default function About({ id }) {
  return (
    <div class="mt-5 container">
      <div id={id}>
        <h1>About Me</h1>
        <div class="row">
          <div class="col-4 right-divider">
            <h3 class="mt-5 d-flex justify-content-end">McGill University</h3>
            <h6 class="d-flex justify-content-end">September 2017 - May 2022</h6>
            <h2 class="mt-5 d-flex justify-content-end">Bachelor of Software Engineering (B.S.E)</h2>
            <h2 class="d-flex justify-content-end">Minor: Aerospace Engineering</h2>
            <h6 class="mt-5 d-flex justify-content-end">CGPA: 3.15/4.00</h6>
          </div>
          <div class="col-5">
            <p class="mt-3">Hello! I'm Sean, a fourth-year student at McGill University.</p>
            <p>I'm an aspiring software engineer with over three years of experience building applications. My wide range of language and framework capabilities include:</p>
            <p>Python, TensorFlow, React, C, and many more. </p>
            <p>Fields that excite me include deep learning, IoT, & web and mobile development. My goal is to make impactful contributions in these areas by consistently striving to produce work that is creative, innovative and distinct.</p>
            <p>Off screen, you'll find me participating in a variety of up-tempo activities like playing lacrosse for McGill's varsity team, designing sustainable tiny-homes and digitaly mixing music.</p>
          </div>
          <div class="col-3">
            <img class="img img-responsive" src={headshot} alt="sean_headshot" width="300" height="auto"></img>
          </div>
          
        </div>
      </div>
    </div>
  );
}
