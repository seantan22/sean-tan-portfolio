import React from 'react';

import NavBar from "./components/navbar"
import Social from "./components/social"
import Intro from "./components/intro"
import About from "./components/about"
import Experience from "./components/experience"
import Projects from "./components/projects"
import Contact from "./components/contact"
import Footer from "./components/footer"

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

export default class App extends React.Component {
  render() {
    return (
      <div class="app">
        <NavBar />
        <Social />
        <div class="body">
          <Intro />
          <div class="content">
              <About id="about" />
              <Experience id="experience" />
              <Projects id="projects" />
          </div>
          <Contact id="contact" />
          <Footer />
        </div>
      </div>
    )
  }
}