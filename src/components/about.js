import React from "react";
import headshot from "./images/sean_headshot.JPG";

export default function About({ id }) {
  return (
    <div class="mt-5 container">
      <div id={id}>
        <h1>About Me</h1>
        <div class="row">
          <div class="col-5">
            <p class="mt-3">Hello! I'm Sean, a fourth-year software engineering student based in Montréal, QC.</p>
            <p>I enjoy building applications from scratch, taking apart existing applications to see how they work, as well as learning new languages and frameworks.</p>
            <p>When I'm not developing a new app, I stay busy with a variety of challenging activities like playing lacrosse for McGill's varsity team, designing sustainable tiny-homes, or digitaly mixing music.</p>
          </div>
          <div class="col-3">
            <img class="img img-responsive" src={headshot} alt="sean_headshot" width="300" height="auto"></img>
          </div>
          <div class="col-4">
            <h3 class="mt-5 d-flex justify-content-center">McGill University</h3>
            <h6 class="d-flex justify-content-center">September 2017 - May 2022</h6>
            <h2 class="mt-5 d-flex justify-content-center">Bachelor of Software Engineering (B.S.E)</h2>
            <h2 class="d-flex justify-content-center">Minor: Aerospace Engineering</h2>
            <h6 class="mt-5 d-flex justify-content-center">CGPA: 3.15/4.00</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
