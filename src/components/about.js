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
            <p class="mt-3">Hello! I'm Sean, a fourth-year software engineering student-athlete at McGill University.</p>
            <p>I have over four years of experience building and developing applications from scratch, analyzing the inner workings of existing applications, as well as experimenting with new languages and frameworks. My interests include machine learning, . I aim to produce work that is creative, impactful and distinct.</p>
            <p>When I'm not tackling new challenges, I stay busy with a variety of up-tempo activities like playing lacrosse for McGill's varsity team, designing sustainable tiny-homes and digitaly mixing music.</p>
            <p>When I'm not tackling new challenges, I stay busy with a variety of up-tempo activities like playing lacrosse for McGill's varsity team, designing sustainable tiny-homes and digitaly mixing music.</p>
          </div>
          <div class="col-3">
            <img class="img img-responsive" src={headshot} alt="sean_headshot" width="300" height="auto"></img>
          </div>
          
        </div>
      </div>
    </div>
  );
}
