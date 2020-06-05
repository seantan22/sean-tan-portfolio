import React from 'react';
import './App.scss'

import NavBar from "./components/navbar"
import Social from "./components/social"
import Intro from "./components/intro"
import About from "./components/about"
import Experience from "./components/experience"
import Projects from "./components/projects"
import Contact from "./components/contact"
import Footer from "./components/footer"

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
            <div class="about">
              <About id="about" />
            </div>
            <Experience id="experience" />
            <div class="projects">
              <Projects id="projects" />
            </div>
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