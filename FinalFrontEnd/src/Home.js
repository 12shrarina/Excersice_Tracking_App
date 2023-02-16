import React from "react";
import pic from "../src/pics/picmainT.jpg";
import pic1 from "../src/pics/cycle.jpg";
import { Link } from "react-router-dom";
//import pic2 from "../src/pics/walk.jpg";

// import pic from
function Home() {
  return (
    <>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={pic1} className="d-block w-100" alt="..." />
            {/* <div className="carousel_text_con">
            <p class="lead">Lorem adsfghdiads aysduas</p>
          </div> */}
            <div className="carousel_text_con">
              <div className="wrapper">
                <h2 className="line__1">Flexibilty is a Second Power</h2>
                {/* <h2 className="line__2">
                The body achieves what the mind believes
              </h2> */}
                <h4 id="wrapper"> If you brake, you don't win.”</h4>

                <button id="btn" className="btn btn-outline-primary  ">
                  <div id="btnhome">
                    <Link to="/Addactivity">Addactivity</Link>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src={pic} className="d-block w-100" alt="..." />
            <div className="carousel_text_con">
              <div className="wrapper">
                <h2 className="line__2">Effective Therapy Against stress</h2>
                <h4 id="wrapper"> Do Yoga today for a better tomorrow</h4>
                <button id="btn" className="btn btn-outline-primary  ">
                  <div id="btnhome">
                    <Link to="/Addactivity">Addactivity</Link>
                  </div>
                </button>
              </div>
            </div>
          </div>
          {/* <div className="carousel-item">
          <img src={pic2} className="d-block w-100" alt="..." />
        </div> */}
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </>
  );
}

export default Home;
