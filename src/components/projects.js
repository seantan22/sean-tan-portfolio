import React from "react";
import eth_pos from "./images/eth_pos_screenshot.png"
import thebox from "./images/thebox.png"

export default function Projects({ id }) {
  return (
    <div className="container projects mt-5 section">
      <div className="section-content" id={id}>
        <h3 data-aos="fade-right" data-aos-duration="1000">Featured Projects</h3>
          <div class="row">
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
                <img class="card-img-top img-fluid" src={eth_pos} alt="eth_pos" />
                <div class="card-body text-dark">
                  <p class="card-text">A web application for vendors to accept Ethereum or ERC-20 Token instantaneously. Pay using your mobile wallet, receive real-time USD-to-ETH conversion rates and send transactions over the Ethereum blockchain. </p>
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
                <img class="card-img-top" src={thebox} alt="Card cap"></img>
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
                      <h4>CoffeeRun</h4>
                    </div>
                    <a href="https://github.com/seantan22/CoffeeRun" target="_blank" rel="noopener noreferrer">
                      <div class="fab fa-github fa-lg mb-2 ml-5"/>
                    </a>
                </div>
                {/* <img class="card-img-top" src={thebox} alt="Card image cap"></img> */}
                <div class="card-body text-dark">
                  <p class="card-text">A mobile app for simple and convenient coffee runs. Order a beverage and have it delivered directly to your seat on campus. Earn points by retrieving beverages for your study buddies.</p>
                </div>
                <div class="card-footer d-flex justify-content-around">
                  <small>Languages</small>
                  <small>Frameworks</small>
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
                      <div class="fab fa-github fa-lg mb-2 ml-5"/>
                    </a>
                </div>
                {/* <img class="card-img-top" src={thebox} alt="Card image cap"></img> */}
                <div class="card-body text-dark">
                  <p class="card-text">First iteration of a single-page web application created to highlight my work and professional goals. Utilized Bootstrap to ensure page responsiveness and promote smooth navigability. Entirely designed and constructed from scratch using React. Hosted on GitHub Pages.</p>
                </div>
                <div class="card-footer d-flex justify-content-around">
                  <small>React</small>
                  <small>Bootstrap</small>
                  <small>CSS</small>
                  <small>SCSS</small>
                  <small>Node.js</small>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-xl-4" data-aos="flip-right" data-aos-duration="1000">
              <div class="card bg-secondary mb-3 mt-4">
                <div class="row d-flex justify-content-center align-items-center">
                    <div class="card-header d-flex justify-content-center">
                      <h4>To-Do App</h4>
                    </div>
                    <a href="https://github.com/seantan22/todo-app" target="_blank" rel="noopener noreferrer">
                      <div class="fab fa-github fa-lg mb-2 ml-5"/>
                    </a>
                </div>
                {/* <img class="card-img-top" src={thebox} alt="Card image cap"></img> */}
                <div class="card-body text-dark">
                  <p class="card-text">A simple to-do list web-application using an MVC framework and CRUD operations.</p>
                </div>
                <div class="card-footer d-flex justify-content-around">
                  <small>MongoDB</small>
                  <small>Express.js</small>
                  <small>Node.js</small>
                  <small>CSS</small>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-xl-4" data-aos="flip-right" data-aos-duration="1000">
              <div class="card bg-secondary mb-3 mt-4">
                <div class="row d-flex justify-content-center align-items-center">
                    <div class="card-header d-flex justify-content-center">
                      <h4>Project Name</h4>
                    </div>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <div class="fab fa-github fa-lg mb-2 ml-5"/>
                    </a>
                </div>
                {/* <img class="card-img-top" src={thebox} alt="Card image cap"></img> */}
                <div class="card-body text-dark">
                  <p class="card-text">Project Description</p>
                </div>
                <div class="card-footer d-flex justify-content-around">
                  <small>Languages</small>
                  <small>Frameworks</small>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-xl-4" data-aos="flip-right" data-aos-duration="1000">
              <div class="card bg-secondary mb-3 mt-4">
                <div class="row d-flex justify-content-center align-items-center">
                    <div class="card-header d-flex justify-content-center">
                      <h4>Project Name</h4>
                    </div>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <div class="fab fa-github fa-lg mb-2 ml-5"/>
                    </a>
                </div>
                {/* <img class="card-img-top" src={thebox} alt="Card image cap"></img> */}
                <div class="card-body text-dark">
                  <p class="card-text">Project Description</p>
                </div>
                <div class="card-footer d-flex justify-content-around">
                  <small>Languages</small>
                  <small>Frameworks</small>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-xl-4" data-aos="flip-right" data-aos-duration="1000">
              <div class="card bg-secondary mb-3 mt-4">
                <div class="row d-flex justify-content-center align-items-center">
                    <div class="card-header d-flex justify-content-center">
                      <h4>Project Name</h4>
                    </div>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <div class="fab fa-github fa-lg mb-2 ml-5"/>
                    </a>
                </div>
                {/* <img class="card-img-top" src={thebox} alt="Card image cap"></img> */}
                <div class="card-body text-dark">
                  <p class="card-text">Project Description</p>
                </div>
                <div class="card-footer d-flex justify-content-around">
                  <small>Languages</small>
                  <small>Frameworks</small>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-xl-4" data-aos="flip-right" data-aos-duration="1000">
              <div class="card bg-secondary mb-3 mt-4">
                <div class="row d-flex justify-content-center align-items-center">
                    <div class="card-header d-flex justify-content-center">
                      <h4>Project Name</h4>
                    </div>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <div class="fab fa-github fa-lg mb-2 ml-5"/>
                    </a>
                </div>
                {/* <img class="card-img-top" src={thebox} alt="Card image cap"></img> */}
                <div class="card-body text-dark">
                  <p class="card-text">Project Description</p>
                </div>
                <div class="card-footer d-flex justify-content-around">
                  <small>Languages</small>
                  <small>Frameworks</small>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}
