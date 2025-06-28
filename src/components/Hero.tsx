"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <section id="hero" className="hero section">
      <div className="background-elements">
        <div className="bg-circle circle-1"></div>
        <div className="bg-circle circle-2"></div>
      </div>

      <div className="hero-content">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-6"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <div className="hero-text">
                <h1>
                  Mercy<span className="accent-text">Adv</span>
                </h1>
                <h2>Mihret Tadele Wolde</h2>
                <p className="lead">
                  I'm a{" "}
                  <span>
                    <Typewriter
                      words={[
                        "Graphics Designer",
                        "Branding Specialist",
                        "Mockup Artist",
                        "Creative Director",
                      ]}
                      loop={5}
                      cursor
                      cursorStyle="_"
                      typeSpeed={80}
                      deleteSpeed={50}
                      delaySpeed={1500}
                      // onLoopDone={handleDone}
                      // onType={handleType}
                    />
                  </span>
                  <span
                    className="typed"
                    data-typed-items="Graphics Designer, Branding Specialist, Mockup Artist, Creative Director"
                  ></span>
                </p>
                <p className="description">
                  With 6 years of experience, I help businesses craft compelling
                  brand identities through innovative graphic design and
                  impactful visual storytelling. Over 100+ projects completed
                  with 60+ satisfied clients.
                </p>

                <div className="hero-actions">
                  <a href="#portfolio" className="btn btn-primary">
                    View My Work
                  </a>
                  <a href="#contact" className="btn btn-outline">
                    Get In Touch
                  </a>
                </div>

                <div className="social-links">
                  <a
                    href="https://t.me/Romishaye"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-telegram"></i>
                  </a>

                  <a href="#">
                    <i className="bi bi-dribbble"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-behance"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-github"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-left" data-aos-delay="200">
              <div className="hero-visual">
                <div className="profile-container">
                  <div className="profile-background"></div>
                  <img
                    src="assets/img/profile/profile-2.webp"
                    alt="Mihret Tadele Wolde"
                    className="profile-image"
                  />
                  <div className="floating-elements">
                    <div className="floating-icon icon-1">
                      <i className="bi bi-palette"></i>
                    </div>
                    <div className="floating-icon icon-2">
                      <i className="bi bi-layers"></i>
                    </div>
                    <div className="floating-icon icon-3">
                      <i className="bi bi-lightbulb"></i>
                    </div>
                    <div className="floating-icon icon-4">
                      <i className="bi bi-pen"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
