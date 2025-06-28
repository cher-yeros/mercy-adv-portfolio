"use client";

export default function Contact() {
  return (
    <section id="contact" className="contact section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <p>
          Reach out to Mercy Advertising — whether you’re starting a new
          project, looking for creative direction, or just want to say hello.
        </p>
      </div>

      <div className="container">
        <div className="row g-4 g-lg-5">
          {/* Contact Info */}
          <div className="col-lg-5">
            <div className="info-box">
              <h3>Contact Info</h3>
              <p>
                Let's connect and bring your brand to life through bold ideas
                and creative solutions.
              </p>

              <div className="info-item">
                <div className="icon-box">
                  <i className="bi bi-geo-alt"></i>
                </div>
                <div className="content">
                  <h4>Our Location</h4>
                  <p>Adama</p>
                  <p>Ethiopia</p>
                </div>
              </div>

              <div className="info-item">
                <div className="icon-box">
                  <i className="bi bi-telephone"></i>
                </div>
                <div className="content">
                  <h4>Phone</h4>
                  <p>+251 938 336 078</p>
                </div>
              </div>

              <div className="info-item">
                <div className="icon-box">
                  <i className="bi bi-envelope"></i>
                </div>
                <div className="content">
                  <h4>Email</h4>
                  <p>mihrettadele0011@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-7">
            <div className="contact-form">
              <h3>Get In Touch</h3>
              <p>
                Tell us a bit about your vision or ask a question — we’re always
                excited to hear from you.
              </p>

              <form
                action="https://example.com/contact" // <-- replace with your endpoint
                method="POST"
                className="php-email-form"
              >
                <div className="row gy-4">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Your Name"
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Your Email"
                      required
                    />
                  </div>

                  <div className="col-12">
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      placeholder="Subject"
                      required
                    />
                  </div>

                  <div className="col-12">
                    <textarea
                      className="form-control"
                      name="message"
                      rows={6}
                      placeholder="Message"
                      required
                    ></textarea>
                  </div>

                  <div className="col-12 text-center">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">
                      Your message has been sent. Thank you!
                    </div>

                    <button type="submit" className="btn">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
