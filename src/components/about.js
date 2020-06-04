import React from "react";
import headshot from "./images/sean_headshot.JPG";

export default function About({ id }) {
  return (
    <div class="mt-5 container">
      <div id={id}>
        <h1>About</h1>
        <div class="row">
          <div class="col-7">
            <p class="mt-3">Hey! I'm Sean, a fourth-year student at McGill University studying software engineering and aerospace engineering.</p>
            <p>When I'm not developing a new app, I stay busy by playing lacrosse for McGill's varsity team, designing sustainable tiny-homes and digitaly mixing music.</p>
          </div>
          <div class="col-5">
            <img class="img-thumbnail img-responsive" src={headshot} alt="sean_headshot" width="300" height="auto"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
