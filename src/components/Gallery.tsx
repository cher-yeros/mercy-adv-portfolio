"use client";

import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.min.css";
import Isotope from "isotope-layout";
import { useEffect, useRef, useState } from "react";
// import "./gallery.css";

export default function Gallery() {
  const isotopeInstance = useRef(null);
  const gridElement = useRef(null);

  const [activeFilter, setActiveFilter] = useState(".branding-and-identity");

  useEffect(() => {
    const lightbox = GLightbox({
      selector: ".portfolio-lightbox",
      touchNavigation: true,
      loop: true,
      autoplayVideos: true,
    });

    // Clean up on component unmount
    return () => {
      lightbox.destroy();
    };
  }, []);

  useEffect(() => {
    // Initialize Isotope
    isotopeInstance.current = new Isotope(gridElement.current, {
      itemSelector: ".portfolio-item",
      layoutMode: "fitRows",
    });

    // Cleanup on unmount
    return () => {
      isotopeInstance.current.destroy();
    };
  }, []);

  useEffect(() => {
    if (isotopeInstance.current) {
      isotopeInstance.current.arrange({ filter: activeFilter });
      isotopeInstance.current.on("arrangeComplete", function () {
        window.AOS && window.AOS.refresh(); // Refresh AOS if it's available
      });
    }
  }, [activeFilter]);

  const filterItems = (filter: string) => {
    setActiveFilter(filter);
  };

  const dataFilters = [
    // {
    //   className: "",
    //   dataFilter: ".one",
    //   label: "All",
    //   category: "one",
    // },
    {
      className: "",
      dataFilter: ".branding-and-identity",
      label: "branding-and-identity",
      category: "branding-and-identity",
    },
    {
      className: "",
      dataFilter: ".web-development",
      label: "Web Development",
      category: "web-development",
    },
    {
      className: "",
      dataFilter: ".content-creation-and-social-media",
      label: "Content Creation & Social Media",
      category: "content-creation-and-social-media",
    },
    {
      className: "",
      dataFilter: ".digital-marketing",
      label: "Digital Marketing",
      category: "digital-marketing",
    },
  ];

  const portfolios = [
    {
      image: "/assets/images/portfolio/portfolio-1.jpg",
      alt: "portfolio 1 image",
      title: "portfolio 1 picture",
      name: "project name goes here 1",
      category: "content-creation-and-social-media",
    },
    {
      image: "/assets/images/portfolio/portfolio-2.jpg",
      alt: "portfolio 2 image",
      title: "portfolio 2 picture",
      name: "project name goes here 2",
      category: "content-creation-and-social-media",
    },
    {
      image: "/assets/images/portfolio/portfolio-3.jpg",
      alt: "portfolio 3 image",
      title: "portfolio 3 picture",
      name: "project name goes here 3",
      category: "digital-marketing",
    },
    {
      image: "/assets/images/portfolio/portfolio-4.jpg",
      alt: "portfolio 4 image",
      title: "portfolio 4 picture",
      name: "project name goes here 4",
      category: "branding-and-identity",
    },
    {
      image: "/assets/images/portfolio/portfolio-5.jpg",
      alt: "portfolio 5 image",
      title: "portfolio 5 picture",
      name: "project name goes here 5",
      category: "content-creation-and-social-media",
    },
    {
      image: "/assets/images/portfolio/portfolio-6.jpg",
      alt: "portfolio 6 image",
      title: "portfolio 6 picture",
      name: "project name goes here 6",
      category: "digital-marketing",
    },
    {
      image: "/assets/images/portfolio/portfolio-7.jpg",
      alt: "portfolio 7 image",
      title: "portfolio 7 picture",
      name: "project name goes here 7",
      category: "web-development",
    },
    {
      image: "/assets/images/portfolio/portfolio-8.jpg",
      alt: "portfolio 8 image",
      title: "portfolio 8 picture",
      name: "project name goes here 8",
      category: "branding-and-identity",
    },
    {
      image: "/assets/images/portfolio/portfolio-9.jpg",
      alt: "portfolio 9 image",
      title: "portfolio 9 picture",
      name: "project name goes here 9",
      category: "content-creation-and-social-media",
    },
  ];

  return (
    <section
      id="services"
      className="portfolio"
      style={{ marginTop: "13rem", minHeight: "100vh" }}
    >
      <div className="container">
        <h2
          style={{
            marginInline: "auto",
            fontSize: "40px",
            textAlign: "center",
          }}
          className="h2 section-subtitle"
        >
          Gallery
        </h2>

        <div className="row mt-5 mb-4 g-3 text-center">
          <div className="col-md-12 d-flex justify-content-center gap-1">
            {/* <button
              className={`btn ${
                activeFilter === "*" ? "btn-primary" : "btn-outline-primary"
              }`}
              type="button"
              onClick={() => filterItems("*")}
            >
              All
            </button> */}

            {dataFilters.map((filter) => (
              <button
                className={`btn ${
                  activeFilter === filter.dataFilter
                    ? "btn-primary"
                    : "btn-outline-primary"
                }`}
                type="button"
                key={filter.label}
                // className={
                //   activeFilter === filter.dataFilter && "filter-active"
                // }
                onClick={() => filterItems(filter.dataFilter)}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <div
          className="row portfolio-container"
          // data-aos="fade-up"
          // data-aos-delay="200"
          ref={gridElement}
        >
          <div className="row">
            {portfolios?.map((portfolio) => (
              <div className={`col-lg-4 col-md-6  ${portfolio.category}`}>
                <div className="portfolio-box shadow">
                  <img
                    src={portfolio.image}
                    alt="portfolio 1 image"
                    title="portfolio 1 picture"
                    className="img-fluid"
                  />
                  <div className="portfolio-info">
                    <div className="caption">
                      <h4>{portfolio.title}</h4>
                      <p>{portfolio.name}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
