import React from "react";
import headshot from "./images/sean_headshot.JPG";

export default function About({ id }) {
  return (
    <div class="mt-5 container">
      <div id={id}>
        <h1>About</h1>
        <div class="row">
          <div class="col-4">
            <h4 class="mt-3 d-flex justify-content-end">McGill University</h4>
            <h6 class="mt-3 d-flex justify-content-end">Bachelor of Software Engineering (B.S.E)<br/>Minor: Aerospace Engineering</h6>
            <p class="d-flex justify-content-end">CGPA: 3.15/4.00</p>
          </div>
          <div class="col-3">
            <img class="img-thumbnail img-responsive" src={headshot} alt="sean_headshot" width="300" height="auto"></img>
          </div>
          <div class="col-5">
            <p class="mt-3">Hey! I'm Sean, a fourth-year software engineering student based in Montréal, QC.</p>
            <p>I enjoy building applications from scratch, taking apart existing applications to see how they work, as well as learning new languages and frameworks.</p>
            <p>When I'm not developing a new app, I stay busy with a variety of challenging activities like playing lacrosse for McGill's varsity team, designing sustainable tiny-homes, or digitaly mixing music.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
