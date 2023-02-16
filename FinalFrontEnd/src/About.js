import React from "react";
import pic from "../src/pics/pass6.png";
import pic1 from "../src/pics/pass7.jpg";
import pic2 from "../src/pics/pass8.png";
import "./App.css";

function About() {
  return (
    <div>
      <section className="about-area section-padding30">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              {/* about-img */}
              <div className="about-img ">
                <img src=".\src\pics\About.js" alt="" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="about-caption">
                {/* Section Tittle */}
                <div className="section-tittle section-tittle3 mb-35">
                  <span>ABOUT oUR GYM</span>
                  <h2>
                    Safe Body building proper Solutions That Saves our Valuable
                    Time!
                  </h2>
                </div>
                <p className="pera-top lead">
                  Brook presents your services with flexible, convenient and
                  cdpose layouts. You can select your favorite layouts &amp;
                  elements for cular ts with unlimited ustomization
                  possibilities. Pixel-perfect replication of the designers is
                  intended.
                </p>
                <p className="mb-65 pera-bottom lead">
                  Brook presents your services with flexible, convefnient and
                  chient anipurpose layouts. You can select your favorite
                  layouts.
                </p>
                <button className="btn btn-outline-danger">
                  became a member
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About-2 Area End */}
      {/*? Gallery Area Start */}
      {/* <div className="gallery-area">
          <div className="container-fluid p-0 fix">
            <div className="row">
              <div className="col-lg-6">
                <div className="box snake mb-30">
                  <div className="gallery-img">
                    <div className="overlay">
                      <div className="content">
                        <h3>Best fitness gallery</h3>
                        <p>Fitness, Body</p>
                      </div>
                    </div>
                  </div>
                  <p className="lead ml-3">
                    The benefits of fitness are undeniable. But to get the most
                    out of training, consistency and discipline are key. That’s
                    where technology can help.
                    <br />
                    <br /> The right app can act as a virtual personal trainer
                    or training partner to keep you motivated and accountable.
                    <br />
                    <br /> Healthline looked high and low for the best fitness
                    apps to help you out. We chose the year’s winners for their
                    quality, user reviews, and overall reliability. Keep reading
                    for our picks of the 9 best fitness and exercise apps.{" "}
                  </p>
                </div>
              </div>
              <div className="col-lg-6 log">
                <div className="row">
                  <div className="col-lg-6 log col-md-6 col-sm-6">
                    <div className="box snake mb-30">
                      <div className="small-img">
                        <div className="overlay">
                          <div className="overlay-content">
                            <h3>Best fitness gallery</h3>
                            <p>Fitness, Body</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6  col-md-6 col-sm-6">
                    <div className="box snake mb-30">
                      <div className="small-img">
                        <div className="overlay">
                          <div className="overlay-content">
                            <h3>Best fitness gallery</h3>
                            <p>Fitness, Body</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6  col-md-6 col-sm-6">
                    <div className="box snake mb-30">
                      <div className="gallery-imges">
                        <div className="overlay">
                          <div className="overlay-content">
                            <h3>Best fitness gallery</h3>
                            <p>Fitness, Body</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="box snake mb-30">
                      <div className="gallery-imgs">
                        <div className="overlay">
                          <div className="overlay-content">
                            <h3>Best fitness gallery</h3>
                            <p>Fitness, Body</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      <div className="container p-5">
        <div className="row">
          <div className="col-4">
            <div className="card cardImg" style={{ width: "18rem" }}>
              <img src={pic} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Parker</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-outline-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>

          <div className="col-4">
            <div className="card cardImg" style={{ width: "18rem" }}>
              <img src={pic1} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Johns</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-outline-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>

          <div className="col-4">
            <div className="card cardImg" style={{ width: "18rem" }}>
              <img src={pic2} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Kale</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-outline-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
