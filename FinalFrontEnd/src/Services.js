import React from "react";
import video from "../src/video/vedio.mp4";
function Services() {
  return (
    <div id="services">
      <h1 id="servicesheading">Services Our GYM</h1>
      <div>
        <h1>Fitness</h1>
        <br />
        <br />
        <h4>Develop a healthy lifestyle at Carlow</h4>
        <br />
        <p className="lead">
          Wellness and Fitness Services provides healthy lifestyle strategies,
          exercise programs and wellness education opportunities for students,
          faculty and staff. Our services promote health, teach physical skills
          and encourage positive social interactions.Our fitness classes include
          yoga, self-defense for women, weight training, tai chi, aerobics and
          Walking for Wellness, along with learning opportunities such as
          Fitness and Weight Control and Healthy Lifestyles.
        </p>
      </div>
      <br />
      <div className="col-12 ">
        <div className="row">
          <div className="col-6">
            <h4>A quick look at the best fitness trackers</h4>
            <ul className="lead">
              <li>Best overall: Apple Watch Series 7</li>
              <li>Best budget: Amazfit Band 5</li>
              <li>Best for running: Garmin Forerunner 245</li>
              <li>Best for cycling: Polar Vantage M</li>
              <li>Best for swimming: Garmin Swim 2</li>
              <li>Best for lifting weights: Garmin Vivoactive 4s</li>
              <li>Best rated: Fitbit Charge 4</li>
              <li>Best for monitoring blood pressure: Omron HeartGuide</li>
            </ul>
          </div>
          <div className="col-6">
            <video width="700" height="400" controls autoPlay>
              <source src={video} type="video/mp4"></source>
            </video>
          </div>
        </div>
      </div>
      <div>
        <h4>Fitness Classes</h4>
        <p className="lead">
          Our fitness classes include yoga, self-defense for women, weight
          training, tai chi, aerobics and Walking for Wellness, along with
          learning opportunities such as Fitness and Weight Control and Healthy
          Lifestyles.St. Joseph’s Athletic & Fitness Center (St. Joe’s Gym),
          renovated in 2019, includes a multi-level fitness center (McGinley
          Cardio Wellness Center, free weight area, sport court, and LifeFitness
          and HammerStrength exercise machines), men’s and women’s locker rooms
          and shower areas, a hospitality suite, and athletic venues.
        </p>
      </div>
    </div>
  );
}

export default Services;
