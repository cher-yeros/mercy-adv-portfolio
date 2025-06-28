import React from "react";

export default function About() {
  return (
    <section id="about" className="about section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row">
          <div className="col-lg-5" data-aos="zoom-in" data-aos-delay="200">
            <div className="profile-card">
              <div className="profile-header">
                <div className="profile-image">
                  <img
                    src="assets/img/profile/profile-square-3.webp"
                    alt="Mihret Tadele Wolde"
                    className="img-fluid"
                  />
                </div>
                <div className="profile-badge">
                  <i className="bi bi-check-circle-fill"></i>
                </div>
              </div>

              <div className="profile-content">
                <h3>Mihret Tadele Wolde</h3>
                <p className="profession">
                  Managing Director & Graphics Designer
                </p>

                <div className="contact-links">
                  <a
                    href="mailto:mihrettadele0011@gmail.com"
                    className="contact-item"
                  >
                    <i className="bi bi-envelope"></i>
                    mihrettadele0011@gmail.com
                  </a>
                  <a href="tel:+251938336078" className="contact-item">
                    <i className="bi bi-telephone"></i>
                    +251 938 336 078
                  </a>
                  <a href="#" className="contact-item">
                    <i className="bi bi-geo-alt"></i>
                    Adama, Ethiopia
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-7" data-aos="fade-left" data-aos-delay="300">
            <div className="about-content">
              <div className="section-header">
                <span className="badge-text">Get to Know Me</span>
                <h2>Passionate About Visual Storytelling</h2>
              </div>

              <div className="description">
                <p>
                  I’m Mihret Tadele Wolde, the creative force behind{" "}
                  <strong>Mercy Adv</strong>. With 6 years of experience, I’ve
                  helped over 60 clients elevate their brands with powerful
                  visual identities. My approach blends creativity, strategic
                  design, and a deep understanding of brand storytelling.
                </p>

                <p>
                  From logo design to brand mockups and environmental graphics,
                  I lead a team of 5 passionate creatives dedicated to
                  delivering impactful, timely, and professional design
                  services. Let’s build something visually unforgettable.
                </p>
              </div>

              <div className="stats-grid">
                <div className="stat-item">
                  <div className="stat-number">100+</div>
                  <div className="stat-label">Projects Completed</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">6</div>
                  <div className="stat-label">Years Experience</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">60+</div>
                  <div className="stat-label">Happy Clients</div>
                </div>
              </div>

              <div className="details-grid">
                <div className="detail-row">
                  <div className="detail-item">
                    <span className="detail-label">Specialization</span>
                    <span className="detail-value">
                      Creative Branding & Logo Design
                    </span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Role</span>
                    <span className="detail-value">
                      Managing Director & Senior Designer
                    </span>
                  </div>
                </div>
                <div className="detail-row">
                  <div className="detail-item">
                    <span className="detail-label">Team Size</span>
                    <span className="detail-value">5 Members</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Languages</span>
                    <span className="detail-value">Amharic, English</span>
                  </div>
                </div>
              </div>

              <div className="cta-section">
                <a href="#" className="btn btn-primary">
                  <i className="bi bi-download"></i>
                  Download Portfolio
                </a>
                <a href="#contact" className="btn btn-outline">
                  <i className="bi bi-chat-dots"></i>
                  Let's Talk
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
