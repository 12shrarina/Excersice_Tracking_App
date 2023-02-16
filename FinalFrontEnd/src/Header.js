import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <header id="header">
        <nav id="Navbar">
          <div className="col-12 ">
            <div className="row">
              <div className="col-3">
                <a href="#">
                  <div className=" header_content logo d-flex flex-row align-items-center justify-content-start">
                    <div className="navlogo">
                      {/* <div></div> */}
                      <p>
                        Fitness <span>Cubel</span>
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-9">
                <ul id="link">
                  <div id="over">
                    <Link to="/Home">Home</Link>
                    <Link to="/Services">Services</Link>
                    <Link to="/Trainers">Trainers</Link>
                    <Link to="/About">About</Link>
                    {/* <Link to="/Addactivity">Add Activity</Link> */}
                    <Link to="/Myactivity">My Activity</Link>
                    <Link to="/Contact">Contact</Link>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
