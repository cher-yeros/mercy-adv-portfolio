"use client";

export default function Services() {
  return (
    <section id="services" className="services section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Our Services</h2>
        <p>
          From concept to execution, Mercy Advertising crafts compelling brand
          experiences that connect, captivate, and convert.
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="service-header">
          <div className="row align-items-center">
            <div className="col-lg-8 col-md-12">
              <div className="service-intro">
                <h2 className="service-heading">
                  <div>Creative-led</div>
                  <div>
                    <span>strategic communication</span>
                  </div>
                </h2>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="service-summary">
                <p>
                  At Mercy Advertising, we merge insight-driven strategy,
                  captivating visuals, and media expertise to build brands that
                  resonate and perform in today’s dynamic market.
                </p>
                <a href="/services" className="service-btn">
                  View All Services
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          {[
            {
              icon: "bi-palette",
              title: "Branding & Identity",
              highlight: "branding",
              desc: `We design distinct, meaningful brand systems that reflect your voice,
                values, and visual power.`,
            },
            {
              icon: "bi-gem",
              title: "Creative Design",
              highlight: "systems",
              desc: `From print to pixels, our design team brings your campaigns and concepts
                to life with purpose and beauty.`,
            },
            {
              icon: "bi-megaphone",
              title: "Marketing Campaigns",
              highlight: "strategies",
              desc: `We craft multichannel campaigns that connect emotionally and convert
                effectively across touchpoints.`,
            },
            {
              icon: "bi-code-slash",
              title: "Digital Experiences",
              highlight: "platforms",
              desc: `Websites, landing pages, social ads—we engineer digital products that
                are fast, scalable, and stunning.`,
            },
            {
              icon: "bi-graph-up",
              title: "Growth & Analytics",
              highlight: "acceleration",
              desc: `We track performance, analyze behavior, and adapt strategies for real
                business growth and ROI.`,
            },
            {
              icon: "bi-camera-video",
              title: "Media Production",
              highlight: "solutions",
              desc: `Our in-house studio produces high-quality video, motion graphics,
                and content tailored for every channel.`,
            },
          ].map(({ icon, title, highlight, desc }, index) => (
            <div
              className="col-lg-4 col-md-6"
              key={index}
              data-aos="fade-up"
              data-aos-delay={100 + index * 100}
            >
              <div className="service-card position-relative z-1">
                <div className="service-icon">
                  <i className={`bi ${icon}`}></i>
                </div>
                <a
                  href="/services"
                  className="card-action d-flex align-items-center justify-content-center rounded-circle"
                >
                  <i className="bi bi-arrow-up-right"></i>
                </a>
                <h3>
                  <a href="/services">
                    {title.split(" ")[0]} <span>{highlight}</span>
                  </a>
                </h3>
                <p>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
