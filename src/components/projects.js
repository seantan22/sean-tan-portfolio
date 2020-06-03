import React from "react";

export default function Projects({ id, subtitle }) {
  return (
    <div className="mt-5 section">
      <div className="section-content" id={id}>
        <h1>Projects</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}
