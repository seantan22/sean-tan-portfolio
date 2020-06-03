import React from "react";

export default function About({ id, subtitle }) {
  return (
    <div className="mt-5 section">
      <div className="section-content" id={id}>
        <h1>About</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}
