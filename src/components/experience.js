import React from "react";

export default function Experience({ id, subtitle }) {
  return (
    <div className="mt-5 section">
      <div className="section-content" id={id}>
        <h1>Experience</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}
