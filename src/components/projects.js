import React from "react";
import eth_pos from "./images/eth_pos_screenshot.png"
import thebox from "./images/thebox.png"

export default function Projects({ id }) {
  return (
    <div className="container mt-5 section">
      <div className="section-content" id={id}>
        <h1>Featured Projects</h1>
          <div class="row">
            <div class="col-md-6 col-xl-4">
              <div class="card border-dark bg-secondary mb-3 mt-4">
                <div class="row d-flex justify-content-center align-items-center">
                    <div class="card-header d-flex justify-content-center">
                      <h5>ETHPOS</h5>
                    </div>
                    <a href="https://github.com/BlockchainAtMcGill/eth_pos" target="_blank" rel="noopener noreferrer">
                      <div class="fab fa-github fa-lg mb-2 ml-5"/>
                    </a>
                </div>
                <img class="card-img-top img-fluid" src={eth_pos} alt="eth_pos" />
                <div class="card-body text-dark">
                  <p class="card-text desc">A web application for vendors to accept Ethereum or ERC-20 Token instantaneously. Pay using your mobile wallet, receive real-time USD-to-ETH conversion rates and send transactions over the Ethereum blockchain. </p>
                </div>
                <div class="card-footer d-flex justify-content-around">
                  <p class="lang">Solidity</p>
                  <p class="lang">Ganache</p>
                  <p class="lang">React</p>
                  <p class="lang">Bootstrap</p>
                  <p class="lang">Node.js</p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-xl-4">
              <div class="card border-dark bg-secondary mb-3 mt-4">
                <div class="row d-flex justify-content-center align-items-center">
                    <div class="card-header d-flex justify-content-center">
                      <h5>The Box</h5>
                    </div>
                    <a href="https://github.com/Agent-Bennette/ECSE211_T14_PROJECT" target="_blank" rel="noopener noreferrer">
                      <div class="fab fa-github fa-lg mb-2 ml-5"/>
                    </a>
                </div>
                <img class="card-img-top" src={thebox} alt="Card cap"></img>
                <div class="card-body text-dark">
                  <p class="card-text desc">An autonomous search-and-rescue robot awarded first place recognition in McGill's Design Principles and Methods course. Fully equiped with localization, navigation and obstacle avoidance algorithms.</p>
                </div>
                <div class="card-footer d-flex justify-content-around">
                  <p class="lang">Java</p>
                  <p class="lang">leJOS</p>
                  <p class="lang">Lego Mindstorms</p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-xl-4">
              <div class="card border-dark bg-secondary mb-3 mt-4">
                <div class="row d-flex justify-content-center align-items-center">
                    <div class="card-header d-flex justify-content-center">
                      <h5>CoffeeRun</h5>
                    </div>
                    <a href="https://github.com/seantan22/CoffeeRun" target="_blank" rel="noopener noreferrer">
                      <div class="fab fa-github fa-lg mb-2 ml-5"/>
                    </a>
                </div>
                {/* <img class="card-img-top" src={thebox} alt="Card image cap"></img> */}
                <div class="card-body text-dark">
                  <p class="card-text desc">A mobile app for simple and convenient coffee runs. Order a beverage and have it delivered directly to your seat on campus. Earn points by retrieving beverages for your study buddies.</p>
                </div>
                <div class="card-footer d-flex justify-content-around">
                  <p class="lang">Languages</p>
                  <p class="lang">Frameworks</p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-xl-4">
              <div class="card border-dark bg-secondary mb-3 mt-4">
                <div class="row d-flex justify-content-center align-items-center">
                    <div class="card-header d-flex justify-content-center">
                      <h5>Portfolio Site</h5>
                    </div>
                    <a href="https://github.com/seantan22/sean-tan-portfolio" target="_blank" rel="noopener noreferrer">
                      <div class="fab fa-github fa-lg mb-2 ml-5"/>
                    </a>
                </div>
                {/* <img class="card-img-top" src={thebox} alt="Card image cap"></img> */}
                <div class="card-body text-dark">
                  <p class="card-text desc">First iteration of a single-page web application created to highlight my work and professional goals. Utilized Bootstrap to ensure page responsiveness and promote smooth navigatability. Entirely designed and constructed from scratch using React. Hosted on GitHub Pages.</p>
                </div>
                <div class="card-footer d-flex justify-content-around">
                  <p class="lang">React</p>
                  <p class="lang">Bootstrap</p>
                  <p class="lang">CSS</p>
                  <p class="lang">SCSS</p>
                  <p class="lang">Node.js</p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-xl-4">
              <div class="card border-dark bg-secondary mb-3 mt-4">
                <div class="row d-flex justify-content-center align-items-center">
                    <div class="card-header d-flex justify-content-center">
                      <h5>Project Name</h5>
                    </div>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <div class="fab fa-github fa-lg mb-2 ml-5"/>
                    </a>
                </div>
                {/* <img class="card-img-top" src={thebox} alt="Card image cap"></img> */}
                <div class="card-body text-dark">
                  <p class="card-text desc">Project Description</p>
                </div>
                <div class="card-footer d-flex justify-content-around">
                  <p class="lang">Languages</p>
                  <p class="lang">Frameworks</p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-xl-4">
              <div class="card border-dark bg-secondary mb-3 mt-4">
                <div class="row d-flex justify-content-center align-items-center">
                    <div class="card-header d-flex justify-content-center">
                      <h5>Project Name</h5>
                    </div>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <div class="fab fa-github fa-lg mb-2 ml-5"/>
                    </a>
                </div>
                {/* <img class="card-img-top" src={thebox} alt="Card image cap"></img> */}
                <div class="card-body text-dark">
                  <p class="card-text desc">Project Description</p>
                </div>
                <div class="card-footer d-flex justify-content-around">
                  <p class="lang">Languages</p>
                  <p class="lang">Frameworks</p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-xl-4">
              <div class="card border-dark bg-secondary mb-3 mt-4">
                <div class="row d-flex justify-content-center align-items-center">
                    <div class="card-header d-flex justify-content-center">
                      <h5>Project Name</h5>
                    </div>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <div class="fab fa-github fa-lg mb-2 ml-5"/>
                    </a>
                </div>
                {/* <img class="card-img-top" src={thebox} alt="Card image cap"></img> */}
                <div class="card-body text-dark">
                  <p class="card-text desc">Project Description</p>
                </div>
                <div class="card-footer d-flex justify-content-around">
                  <p class="lang">Languages</p>
                  <p class="lang">Frameworks</p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-xl-4">
              <div class="card border-dark bg-secondary mb-3 mt-4">
                <div class="row d-flex justify-content-center align-items-center">
                    <div class="card-header d-flex justify-content-center">
                      <h5>Project Name</h5>
                    </div>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <div class="fab fa-github fa-lg mb-2 ml-5"/>
                    </a>
                </div>
                {/* <img class="card-img-top" src={thebox} alt="Card image cap"></img> */}
                <div class="card-body text-dark">
                  <p class="card-text desc">Project Description</p>
                </div>
                <div class="card-footer d-flex justify-content-around">
                  <p class="lang">Languages</p>
                  <p class="lang">Frameworks</p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-xl-4">
              <div class="card border-dark bg-secondary mb-3 mt-4">
                <div class="row d-flex justify-content-center align-items-center">
                    <div class="card-header d-flex justify-content-center">
                      <h5>Project Name</h5>
                    </div>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <div class="fab fa-github fa-lg mb-2 ml-5"/>
                    </a>
                </div>
                {/* <img class="card-img-top" src={thebox} alt="Card image cap"></img> */}
                <div class="card-body text-dark">
                  <p class="card-text desc">Project Description</p>
                </div>
                <div class="card-footer d-flex justify-content-around">
                  <p class="lang">Languages</p>
                  <p class="lang">Frameworks</p>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}
