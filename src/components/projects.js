import React from "react";
import cnn_asl_recog from "./images/cnn_asl_recognition_pic.png"
import box_sim from "./images/box_sim.mp4"
import eth_pos_demo from "./images/eth_pos_demo.mp4"
import beatswitch_demo from "./images/beatswitch_demo.mp4"
import coffeerun_demo from "./images/CoffeeRun Demo 1.0.mp4"
// import beat_switch from "./images/beat_switch1.png"
import coffee_run from "./images/coffee_run.png"


export default function Projects({ id }) {
  return (
    <div className="container projects mt-5 section">
      <div className="section-content" id={id}>
        <h3 data-aos="fade-right" data-aos-duration="1000">Featured Projects</h3>
          <div class="row">

          <div class="col-md-6 col-xl-4" data-aos="flip-right" data-aos-duration="1000">
              <div class="card bg-secondary mt-4">
                <div class="row d-flex justify-content-center align-items-center">
                    <div class="card-header d-flex justify-content-center">
                      <h4>CoffeeRun</h4>
                    </div>
                    <a href="https://github.com/seantan22/CoffeeRun" target="_blank" rel="noopener noreferrer">
                      <div class="fab fa-github fa-lg mb-2 ml-5"/>
                    </a>
                </div>
                <video class="card-img-top" loop="true" muted autoplay="autoplay">
                  <source src={coffeerun_demo} type="video/mp4"></source>
                </video>
                  <div class="card-body text-dark">
                    <p class="card-text">During Summer 2020, I co-founded CoffeeRun, a beverage delivery service that allows students to order drinks right to their seat in the library, or deliver drinks to other students for cash. The iOS application handles orders, deliveries and transactions, while also supporting the ability to add friends and message. The app is currently being beta tested by 50 students at McGill and under consideration for the McGill TechAccel grant.</p>
                  </div>
                  <div class="card-footer d-flex justify-content-around">
                    <small>Swift</small>
                    <small>Node.js</small>
                    <small>Express</small>
                    <small>MongoDB</small>
                  </div>
                {/* </div> */}
              </div>
            </div>


            <div class="col-md-6 col-xl-4" data-aos="flip-right" data-aos-duration="1000">
              <div class="card bg-secondary mb-3 mt-4">
                <div class="row d-flex justify-content-center align-items-center">
                    <div class="card-header d-flex justify-content-center">
                      <h4>Beat Switch</h4>
                    </div>
                    <a href="https://github.com/seantan22/dj-spotify-collab" target="_blank" rel="noopener noreferrer">
                      <div class="fab fa-github fa-lg mb-2 ml-5"/>
                    </a>
                </div>
                <a href="http://beat-switch.herokuapp.com">
                  <video class="card-img-top" loop="true" muted autoplay="autoplay">
                    <source src={beatswitch_demo} type="video/mp4"></source>
                  </video>
                </a>
                {/* <img class="card-img-top" src={beat_switch} alt="Card cap" draggable="false"/> */}
                <div class="card-body text-dark">
                  <p class="card-text">BeatSwitch is a personal project I created to assist me when digitally mixing music. The web app provides DJs with the tools to build a well-arranged tracklist. Users can view in-depth track metrics including popularity and energy, as well as get recomendations on which song to play next based on tempo and genre. (Click on the image to visit!)</p>
                </div>
                <div class="card-footer d-flex justify-content-around">
                  <small>Spotify Web API</small>
                  <small>React</small>
                  <small>Node.js</small>
                  <small>Express</small>
                </div>
              </div>
            </div>
            
            <div class="col-md-6 col-xl-4" data-aos="flip-right" data-aos-duration="1000">
              <div class="card bg-secondary mb-3 mt-4">
                <div class="row d-flex justify-content-center align-items-center">
                    <div class="card-header d-flex justify-content-center">
                      <h4>ETHPOS</h4>
                    </div>
                    <a href="https://github.com/BlockchainAtMcGill/eth_pos" target="_blank" rel="noopener noreferrer">
                      <div class="fab fa-github fa-lg mb-2 ml-5"/>
                    </a>
                </div>
                <a href="https://ethpos-frontend.herokuapp.com/">
                <video class="card-img-top" loop="true" muted autoplay="autoplay">
                  <source src={eth_pos_demo} type="video/mp4"></source>
                </video>
                </a>
                <div class="card-body text-dark">
                  <p class="card-text">A web app for vendors to accept Ether or ERC-20 Token instantaneously. Pay using your mobile wallet, receive real-time USD-to-ETH conversion rates and send transactions over the Ethereum blockchain. (Click on the image to visit!) </p>
                </div>
                <div class="card-footer d-flex justify-content-around">
                  <small>Solidity</small>
                  <small>Ganache</small>
                  <small>React</small>
                  <small>Bootstrap</small>
                  <small>Node.js</small>
                </div>
              </div>
            </div>
          </div>
          <h3 class="mt-2" data-aos="fade-right" data-aos-duration="1000">Additional Projects</h3>  
          <div class="row">
            <div class="col-md-6 col-xl-4" data-aos="flip-right" data-aos-duration="1000">
              <div class="card bg-secondary mb-3 mt-4">
                <div class="row d-flex justify-content-center align-items-center">
                    <div class="card-header d-flex justify-content-center">
                      <h4>The Box</h4>
                    </div>
                    <a href="https://github.com/Agent-Bennette/ECSE211_T14_PROJECT" target="_blank" rel="noopener noreferrer">
                      <div class="fab fa-github fa-lg mb-2 ml-5"/>
                    </a>
                </div>
                <video class="card-img-top" loop="true" muted autoplay="autoplay">
                  <source src={box_sim} type="video/mp4"></source>
                </video>
                <div class="card-body text-dark">
                  <p class="card-text">An autonomous search-and-rescue robot awarded first place recognition in McGill's Design Principles and Methods course. Fully equiped with localization, navigation and obstacle avoidance algorithms.</p>
                </div>
                <div class="card-footer d-flex justify-content-around">
                  <small>Java</small>
                  <small>leJOS</small>
                  <small>Lego Mindstorms</small>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-xl-4" data-aos="flip-right" data-aos-duration="1000">
              <div class="card bg-secondary mb-3 mt-4">
                <div class="row d-flex justify-content-center align-items-center">
                    <div class="card-header d-flex justify-content-center">
                      <h4>Portfolio Site</h4>
                    </div>
                    <a href="https://github.com/seantan22/sean-tan-portfolio" target="_blank" rel="noopener noreferrer">
                      <div class="fab fa-github fa-lg ml-5"/>
                    </a>
                </div>
                {/* <img class="card-img-top" src={st_port} alt="Card cap"></img> */}
                {/* <button class="btn btn-outline-secondary mb-2" type="button" data-toggle="collapse" data-target="#learnMorePortfolioSite" aria-expanded="false" aria-controls="learnMorePortfolioSite"><i class="fas fa-angle-double-down"></i></button> */}
                {/* <div class="collapse multi-collapse" id="learnMorePortfolioSite"> */}
                  <div class="card-body text-dark">
                    <p class="card-text">You're looking at it! First iteration of a single-page web application created to highlight my work and goals. Entirely designed and constructed using React. Utilized Bootstrap to ensure page responsiveness and promote smooth navigability. Hosted on GitHub Pages.</p>
                  </div>
                  <div class="card-footer d-flex justify-content-around">
                    <small>React</small>
                    <small>Bootstrap</small>
                    <small>CSS</small>
                    <small>SCSS</small>
                    <small>Node.js</small>
                  </div>
                {/* </div>   */}
              </div>
            </div>
            <div class="col-md-6 col-xl-4" data-aos="flip-right" data-aos-duration="1000">
              <div class="card bg-secondary mb-3 mt-4">
                <div class="row d-flex justify-content-center align-items-center">
                    <div class="card-header d-flex justify-content-center">
                      <h4>ASL Recognition</h4>
                    </div>
                    <a href="https://github.com/seantan22/cnn-asl-recognizer" target="_blank" rel="noopener noreferrer">
                      <div class="fab fa-github fa-lg mb-2 ml-4"/>
                    </a>
                </div>
                <img class="card-img-top" src={cnn_asl_recog} alt="Card cap" draggable="false"/>
                <div class="card-body text-dark">
                  <p class="card-text">A deep-learning application to recognize numbers 0 to 5 in sign language with 85% accuracy by training a 3-layer convolutional neural network. Based on Coursera's Deep Learning Specialization.</p>
                </div>
                <div class="card-footer d-flex justify-content-around">
                  <small>Python</small>
                  <small>TensorFlow</small>
                  <small>Keras</small>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}