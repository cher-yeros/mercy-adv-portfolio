"use client";

import CountUp from "react-countup";

export default function StatsSection() {
  return (
    <section id="stats" className="stats section light-background">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="stats-wrapper">
              <div
                className="stats-item"
                data-aos="zoom-in"
                data-aos-delay="150"
              >
                <div className="icon-wrapper">
                  <i className="bi bi-emoji-smile"></i>
                </div>
                <span>
                  <CountUp start={0} end={60} duration={1} />
                </span>
                <p>Happy Clients</p>
              </div>

              <div
                className="stats-item"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <div className="icon-wrapper">
                  <i className="bi bi-journal-richtext"></i>
                </div>
                <span>
                  <CountUp start={0} end={100} duration={1} />
                </span>
                <p>Completed Projects</p>
              </div>

              <div
                className="stats-item"
                data-aos="zoom-in"
                data-aos-delay="250"
              >
                <div className="icon-wrapper">
                  <i className="bi bi-clock-history"></i>
                </div>
                <span>
                  <CountUp start={0} end={12000} duration={2} separator="," />
                </span>
                <p>Hours of Experience</p>
              </div>

              <div
                className="stats-item"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <div className="icon-wrapper">
                  <i className="bi bi-people"></i>
                </div>
                <span>
                  <CountUp start={0} end={5} duration={1} />
                </span>
                <p>Creative Team Members</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
