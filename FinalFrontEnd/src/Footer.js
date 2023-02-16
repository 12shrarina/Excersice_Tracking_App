import React from "react";

function Footer() {
  return (
    <div>
      <footer className="footersection">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="footer-logo-item">
                <div id="flogo">
                  <i class="bi bi-activity"></i>
                  <h5>ACTIVITY</h5>
                </div>
                <p>
                  Despite growth of the Internet over the past seven years, the
                  use of toll-free phone numbers in television advertising
                  continues.
                </p>
                <div className="sociallinks">
                  <h6>Follow us</h6>
                  <i class="bi bi-person-check-fill"></i>
                  <i class="bi bi-youtube"></i>
                  <i class="bi bi-twitter"></i>
                  <i class="bi bi-instagram"></i>
                  <i class="bi bi-facebook"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-3 offset-lg-1">
              <div className="footerwidget">
                <h5>Our Blog</h5>
                <div className="footerblog">
                  <a href="#" className="fbitem">
                    <h6>Most people who work</h6>
                    <span className="blog-time">
                      <i class="bi bi-alarm"></i> feb 06, 2019
                    </span>
                  </a>
                  <br />
                  <a href="#" className="fbitem">
                    <h6>Freelance Design Tricks How </h6>
                    <span className="blog-time">
                      <i class="bi bi-alarm"></i> feb 06, 2023
                    </span>
                  </a>
                  <br />
                  <a href="#" className="fbitem">
                    <h6>Have a computer at home have had </h6>

                    <span className="blog-time">
                      <i class="bi bi-alarm"></i> feb 06, 2019
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="footer-widget">
                <h5>Program</h5>
                <ul className="workout">
                  <li>
                    <a href="#">Bodybuilding</a>
                  </li>
                  <li>
                    <a href="#">Running</a>
                  </li>
                  <li>
                    <a href="#">Streching</a>
                  </li>
                  <li>
                    <a href="#">Weight Loss</a>
                  </li>
                  <li>
                    <a href="#">Gym Fitness</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="footer-widget">
                <h5>Get Info</h5>
                <ul className="footer-info">
                  <span className="logo">
                    <i class="bi bi-telephone" />
                    Phone: (12) 345 6789
                  </span>
                  <br />
                  <span className="logo">
                    
                    <i class="bi bi-envelope-at" />
                    sehar@gmail.com
                  </span>
                  <br />
                  <span className="logo">
                    <i class="bi bi-geo-alt-fill" />
                    Address Iris Watson, Box 283 8562, NY
                  </span>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-text">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="ct-inside">
                  Copyright © All rights reserved | This template is made with
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
