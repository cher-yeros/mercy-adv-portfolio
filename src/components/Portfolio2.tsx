"use client";

import GLightbox from "glightbox";
import Isotope from "isotope-layout";
import { useEffect, useRef, useState } from "react";

export default function Portfolio2() {
  const isotope = useRef<Isotope | null>(null);

  const isotopeRef = useRef<Isotope | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // active filter state, default "*"
  const [activeFilter, setActiveFilter] = useState("*");

  // Filter button options (example)
  const filters = [
    { label: "All", filter: "*" },
    { label: "Brand Identity", filter: ".filter-brand-identity" },
    { label: "Logo Design", filter: ".logo-design" },
    { label: "Graphics", filter: ".graphics-design" },
    { label: "Mockups", filter: ".filter-mockups" },
    { label: "3D Renderings", filter: ".filter-3d-renderings" },
  ];

  useEffect(() => {
    isotope.current = new Isotope(".isotope-container", {
      itemSelector: ".isotope-item",
      layoutMode: "fitRows",
    });
    return () => isotope.current?.destroy();
  }, []);

  useEffect(() => {
    if (activeFilter === "*") isotope.current?.arrange({ filter: `*` });
    else isotope.current?.arrange({ filter: `${activeFilter}` });
  }, [activeFilter]);

  useEffect(() => {
    GLightbox({
      selector: ".glightbox",
    });
  }, []);

  const handleFilterKeyChange = (key: string) => () => setActiveFilter(key);

  return (
    <section id="portfolio" className="portfolio section">
      {/* <!-- Section Title --> */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Portfolio</h2>
        <p>
          Discover how Mercy Adv brings ideas to life through strategic design,
          impactful branding, and stunning visual storytelling. Every project
          reflects our commitment to creativity, quality, and client success.
        </p>
      </div>
      {/* <!-- End Section Title --> */}

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div
          className="isotope-layout"
          data-default-filter="*"
          data-layout="masonry"
          data-sort="original-order"
        >
          <div className="row">
            <div className="col-lg-3 filter-sidebar">
              <div
                className="filters-wrapper"
                data-aos="fade-right"
                data-aos-delay="150"
              >
                <ul className="portfolio-filters isotope-filters">
                  {filters.map((filter) => (
                    <li
                      className={`${
                        activeFilter === filter.filter ? "filter-active" : ""
                      }`}
                      key={filter.label}
                      onClick={handleFilterKeyChange(filter.filter)}
                    >
                      {filter.label}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-lg-9">
              <div
                ref={containerRef}
                className="row gy-4 portfolio-container isotope-container"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                {[...Array(21)].keys().map((i) => (
                  <div
                    className={`col-lg-6 col-md-6 portfolio-item isotope-item graphics-design`}
                  >
                    <div className="portfolio-wrap">
                      <img
                        src={`assets/img/portfolio/designs/_d (${i + 1}).jpg`}
                        className="img-fluid"
                        alt="Portfolio Image"
                        loading="lazy"
                      />
                      <div className="portfolio-info">
                        <div className="content">
                          <span className="category">Photography</span>
                          <h4>Capturing Moments</h4>
                          <div className="portfolio-links">
                            <a
                              href={`assets/img/portfolio/designs/_d (${
                                i + 1
                              }).jpg`}
                              className="glightbox"
                              title="Capturing Moments"
                            >
                              <i className="bi bi-plus-lg"></i>
                            </a>
                            <a
                              href="portfolio-details.html"
                              title="More Details"
                            >
                              <i className="bi bi-arrow-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {[...Array(1)].keys().map((i) => (
                  <div
                    className={`col-lg-6 col-md-6 portfolio-item isotope-item logo-design`}
                  >
                    <div className="portfolio-wrap">
                      <img
                        src={`assets/img/portfolio/logo/_l (${i + 1}).jpg`}
                        className="img-fluid"
                        alt="Portfolio Image"
                        loading="lazy"
                      />
                      <div className="portfolio-info">
                        <div className="content">
                          <span className="category">Photography</span>
                          <h4>Capturing Moments</h4>
                          <div className="portfolio-links">
                            <a
                              href={`assets/img/portfolio/logo/_l (${
                                i + 1
                              }).jpg`}
                              className="glightbox"
                              title="Capturing Moments"
                            >
                              <i className="bi bi-plus-lg"></i>
                            </a>
                            <a
                              href="portfolio-details.html"
                              title="More Details"
                            >
                              <i className="bi bi-arrow-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {[...Array(6)].keys().map((i) => (
                  <div
                    className={`col-lg-6 col-md-6 portfolio-item isotope-item filter-mockups`}
                  >
                    <div className="portfolio-wrap">
                      <img
                        src={`assets/img/portfolio/mockups/_m (${i + 1}).jpg`}
                        className="img-fluid"
                        alt="Portfolio Image"
                        loading="lazy"
                      />
                      <div className="portfolio-info">
                        <div className="content">
                          <span className="category">Photography</span>
                          <h4>Capturing Moments</h4>
                          <div className="portfolio-links">
                            <a
                              href={`assets/img/portfolio/mockups/_m (${
                                i + 1
                              }).jpg`}
                              className="glightbox"
                              title="Capturing Moments"
                            >
                              <i className="bi bi-plus-lg"></i>
                            </a>
                            <a
                              href="portfolio-details.html"
                              title="More Details"
                            >
                              <i className="bi bi-arrow-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-photography">
                  <div className="portfolio-wrap">
                    <img
                      src="assets/img/portfolio/portfolio-portrait-1.webp"
                      className="img-fluid"
                      alt="Portfolio Image"
                      loading="lazy"
                    />
                    <div className="portfolio-info">
                      <div className="content">
                        <span className="category">Photography</span>
                        <h4>Capturing Moments</h4>
                        <div className="portfolio-links">
                          <a
                            href="assets/img/portfolio/portfolio-portrait-1.webp"
                            className="glightbox"
                            title="Capturing Moments"
                          >
                            <i className="bi bi-plus-lg"></i>
                          </a>
                          <a href="portfolio-details.html" title="More Details">
                            <i className="bi bi-arrow-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- End Portfolio Item --> */}

                <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-design">
                  <div className="portfolio-wrap">
                    <img
                      src="assets/img/portfolio/portfolio-2.webp"
                      className="img-fluid"
                      alt="Portfolio Image"
                      loading="lazy"
                    />
                    <div className="portfolio-info">
                      <div className="content">
                        <span className="category">Web Design</span>
                        <h4>Woodcraft Design</h4>
                        <div className="portfolio-links">
                          <a
                            href="assets/img/portfolio/portfolio-2.webp"
                            className="glightbox"
                            title="Woodcraft Design"
                          >
                            <i className="bi bi-plus-lg"></i>
                          </a>
                          <a href="portfolio-details.html" title="More Details">
                            <i className="bi bi-arrow-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- End Portfolio Item --> */}

                <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-automotive">
                  <div className="portfolio-wrap">
                    <img
                      src="assets/img/portfolio/portfolio-portrait-2.webp"
                      className="img-fluid"
                      alt="Portfolio Image"
                      loading="lazy"
                    />
                    <div className="portfolio-info">
                      <div className="content">
                        <span className="category">Automotive</span>
                        <h4>Classic Beauty</h4>
                        <div className="portfolio-links">
                          <a
                            href="assets/img/portfolio/portfolio-portrait-2.webp"
                            className="glightbox"
                            title="Classic Beauty"
                          >
                            <i className="bi bi-plus-lg"></i>
                          </a>
                          <a href="portfolio-details.html" title="More Details">
                            <i className="bi bi-arrow-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- End Portfolio Item --> */}

                <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-nature">
                  <div className="portfolio-wrap">
                    <img
                      src="assets/img/portfolio/portfolio-portrait-4.webp"
                      className="img-fluid"
                      alt="Portfolio Image"
                      loading="lazy"
                    />
                    <div className="portfolio-info">
                      <div className="content">
                        <span className="category">Nature</span>
                        <h4>Natural Growth</h4>
                        <div className="portfolio-links">
                          <a
                            href="assets/img/portfolio/portfolio-portrait-4.webp"
                            className="glightbox"
                            title="Natural Growth"
                          >
                            <i className="bi bi-plus-lg"></i>
                          </a>
                          <a href="portfolio-details.html" title="More Details">
                            <i className="bi bi-arrow-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- End Portfolio Item --> */}

                <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-photography">
                  <div className="portfolio-wrap">
                    <img
                      src="assets/img/portfolio/portfolio-5.webp"
                      className="img-fluid"
                      alt="Portfolio Image"
                      loading="lazy"
                    />
                    <div className="portfolio-info">
                      <div className="content">
                        <span className="category">Photography</span>
                        <h4>Urban Stories</h4>
                        <div className="portfolio-links">
                          <a
                            href="assets/img/portfolio/portfolio-5.webp"
                            className="glightbox"
                            title="Urban Stories"
                          >
                            <i className="bi bi-plus-lg"></i>
                          </a>
                          <a href="portfolio-details.html" title="More Details">
                            <i className="bi bi-arrow-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- End Portfolio Item --> */}

                <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-design">
                  <div className="portfolio-wrap">
                    <img
                      src="assets/img/portfolio/portfolio-6.webp"
                      className="img-fluid"
                      alt="Portfolio Image"
                      loading="lazy"
                    />
                    <div className="portfolio-info">
                      <div className="content">
                        <span className="category">Web Design</span>
                        <h4>Digital Experience</h4>
                        <div className="portfolio-links">
                          <a
                            href="assets/img/portfolio/portfolio-6.webp"
                            className="glightbox"
                            title="Digital Experience"
                          >
                            <i className="bi bi-plus-lg"></i>
                          </a>
                          <a href="portfolio-details.html" title="More Details">
                            <i className="bi bi-arrow-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- End Portfolio Item --> */}
              </div>
              {/* <!-- End Portfolio Container --> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
