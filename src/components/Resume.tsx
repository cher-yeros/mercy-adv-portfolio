"use client";

import { useState } from "react";
import CountUp from "react-countup";
import { Waypoint } from "react-waypoint";

type Skill = {
  name: string;
  percentage: number;
};

const skills: Skill[] = [
  { name: "Creative Branding", percentage: 95 },
  { name: "Logo Design", percentage: 90 },
  { name: "Mockup & Presentation", percentage: 92 },
  { name: "Graphic Design", percentage: 94 },
];

export default function ResumeSection() {
  const [animateSkills, setAnimateSkills] = useState(false);

  return (
    <section id="resume" className="resume section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Resume</h2>
        <p>
          Mihret Tadele Wolde is a dynamic graphics designer and the creative
          force behind Mercy Adv. With a deep focus on innovative branding and
          impactful design, he has helped 60+ businesses enhance their visual
          identity through 100+ completed projects over the past 6 years.
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          <div className="col-lg-4">
            <div
              className="resume-side"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <div className="profile-img mb-4">
                <img
                  src="/assets/img/profile/profile-square-2.webp"
                  alt="Mihret Tadele"
                  className="img-fluid rounded"
                />
              </div>

              <h3>Professional Summary</h3>
              <p>
                Senior Graphics Designer and Managing Director of Mercy Adv.
                Mihret is known for combining strategic thinking with artistic
                creativity to build strong and consistent visual identities.
              </p>

              <h3 className="mt-4">Contact Information</h3>
              <ul className="contact-info list-unstyled">
                <li>
                  <i className="bi bi-geo-alt"></i> Adama, Ethiopia
                </li>
                <li>
                  <i className="bi bi-envelope"></i> mihrettadele0011@gmail.com
                </li>
                <li>
                  <i className="bi bi-phone"></i> +251 938 336 078
                </li>
              </ul>

              <Waypoint
                onEnter={() => !animateSkills && setAnimateSkills(true)}
                bottomOffset="20%"
              />
              <div className="skills-animation mt-4">
                <h3>Technical Skills</h3>
                {skills.map(({ name, percentage }) => (
                  <div className="skill-item" key={name}>
                    <div className="d-flex justify-content-between">
                      <span>{name}</span>
                      <span>
                        {animateSkills ? (
                          <CountUp end={percentage} duration={1.5} suffix="%" />
                        ) : (
                          "0%"
                        )}
                      </span>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={percentage}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{
                          width: animateSkills ? `${percentage}%` : "0%",
                          transition: "width 1.5s ease-in-out",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-lg-8 ps-4 ps-lg-5">
            <div className="resume-section" data-aos="fade-up">
              <h3>
                <i className="bi bi-briefcase me-2"></i>Professional Experience
              </h3>

              <div className="resume-item">
                <h4>Managing Director & Senior Graphic Designer</h4>
                <h5>2018 - Present</h5>
                <p className="company">
                  <i className="bi bi-building"></i> Mercy Adv (Creative
                  Visions)
                </p>
                <ul>
                  <li>
                    Delivered over 100 successful branding and graphic projects.
                  </li>
                  <li>
                    Led a 5-person team in creative direction and execution.
                  </li>
                  <li>Specialized in logo mockups and visual storytelling.</li>
                  <li>
                    Maintained a 98% client satisfaction rate across 60+
                    clients.
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="resume-section"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h3>
                <i className="bi bi-mortarboard me-2"></i>Education & Training
              </h3>
              <div className="resume-item">
                <h4>Advanced Graphic Design & Branding (Certificate)</h4>
                <h5>2016 - 2018</h5>
                <p className="company">
                  <i className="bi bi-building"></i> Visual Arts School
                  (Ethiopia)
                </p>
                <p>
                  Gained expertise in Adobe Creative Suite, branding systems,
                  and digital presentation.
                </p>
              </div>
            </div>

            <div
              className="resume-section"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h3>
                <i className="bi bi-award me-2"></i>Recognitions
              </h3>
              <div className="resume-item">
                <h4>Highly Rated by Clients in 10+ Industries</h4>
                <h5>2020 - 2024</h5>
                <p>
                  Praised for creativity, timely delivery, and collaborative
                  process.
                </p>
              </div>
              <div className="resume-item">
                <h4>Endorsements from CEOs and Pastors</h4>
                <h5>2021 - 2024</h5>
                <p>
                  Received written testimonials from clients in hospitality,
                  restaurants, printing, and more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
