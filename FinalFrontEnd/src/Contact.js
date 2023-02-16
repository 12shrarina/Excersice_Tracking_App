import React from "react";

function Contact() {
  return (
    <div id="contacts">
      <h2 id="contact">Contact Page</h2>
      <div className="site-section bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-7 mb-5" data-aos="fade">
              <form action="#" className="p-5 bg-white">
                <div className="row form-group">
                  <div className="col-md-6 mb-3 mb-md-0">
                    <label className="text-black" htmlFor="fname">
                      First Name
                    </label>
                    <input type="text" id="fname" className="form-control" />
                  </div>
                  <div className="col-md-6">
                    <label className="text-black" htmlFor="lname">
                      Last Name
                    </label>
                    <input type="text" id="lname" className="form-control" />
                  </div>
                </div>
                <div className="row form-group">
                  <div className="col-md-12">
                    <label className="text-black" htmlFor="email">
                      Email
                    </label>
                    <input type="email" id="email" className="form-control" />
                  </div>
                </div>

                <div className="row form-group">
                  <div className="col-md-12">
                    <label className="text-black" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      cols={30}
                      rows={7}
                      className="form-control"
                      placeholder="Write your notes or questions here..."
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="row form-group">
                  <div className="col-md-12">
                    <input
                      type="submit"
                      defaultValue="Send Message"
                      className="btn btn-pill btn-primary btn-md text-white"
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="col-md-5" data-aos="fade" data-aos-delay={100}>
              <div className="p-4 mb-3 bg-white">
                <p className="mb-0 font-weight-bold">Address</p>
                <p className="mb-4">
                  203 Fake St. Mountain View, San Francisco, California, USA
                </p>
                <p className="mb-0 font-weight-bold">Phone</p>
                <p className="mb-4">
                  <a href="#">+1 232 3235 324</a>
                </p>
                <p className="mb-0 font-weight-bold">Email Address</p>
                <p className="mb-0">
                  <a href="#">youremail@domain.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
