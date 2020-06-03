import React from 'react';
import './App.css'

import NavBar from "./components/navbar"
import Intro from "./components/intro"
import About from "./components/about"
import Experience from "./components/experience"
import Projects from "./components/projects"
import Contact from "./components/contact"

import dummyText from "./DummyText";

export default class App extends React.Component {
  render() {
    return (
      <div class="app">
        <div class="nav">
          <NavBar />
        </div>
        <div class="body">
          <div class="intro">
            <Intro />
          </div>
          <About
            id="about"
            subtitle={dummyText}
          />
          <Experience
            id="experience"
            subtitle={dummyText}
          />
          <Projects
            id="projects"
            subtitle={dummyText}
          />
          <Contact
            id="contact"
          />
          </div>
      </div>
    )
  }
}