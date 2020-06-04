import React from 'react';
import './App.css'

import NavBar from "./components/navbar"
import Social from "./components/social"
import Intro from "./components/intro"
import About from "./components/about"
import Experience from "./components/experience"
import Projects from "./components/projects"
import Contact from "./components/contact"
import Footer from "./components/footer"

import dummyText from "./DummyText";

export default class App extends React.Component {
  render() {
    return (
      <div class="app">
        <div class="nav">
          <NavBar />
        </div>
        <div class="social">
            <Social />
        </div>
        <div class="body">
          <div class="intro">
            <Intro />
          </div>
          <div class="section">
            <About id="about" />
            <Experience
              id="experience"
              subtitle={dummyText}
            />
            <Projects id="projects" />
          </div>
          <div class="contact">
            <Contact id="contact" />
          </div>
          <div class="footer">
            <Footer />
          </div>
        </div>
      </div>
    )
  }
}