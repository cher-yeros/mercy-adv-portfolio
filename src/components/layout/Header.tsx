"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Header() {
  useEffect(() => {
    const headerToggleBtn = document.querySelector(
      ".header-toggle"
    ) as HTMLElement | null;

    const headerToggle = () => {
      const header = document.querySelector("#header");
      if (header && headerToggleBtn) {
        header.classList.toggle("header-show");
        headerToggleBtn.classList.toggle("bi-list");
        headerToggleBtn.classList.toggle("bi-x");
      }
    };

    if (headerToggleBtn) {
      headerToggleBtn.addEventListener("click", headerToggle);
    }

    // Cleanup
    return () => {
      if (headerToggleBtn) {
        headerToggleBtn.removeEventListener("click", headerToggle);
      }
    };
  }, []);

  return (
    <header
      id="header"
      className="header dark-background d-flex flex-column justify-content-center"
    >
      <i className="header-toggle d-xl-none bi bi-list"></i>

      <div className="header-container d-flex flex-column align-items-start">
        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <Link href="/" className="active">
                <i className="bi bi-house navicon"></i>Home
              </Link>
            </li>
            <li>
              <a href="#about">
                <i className="bi bi-person navicon"></i> About
              </a>
            </li>
            {/* <li>
              <a href="#resume">
                <i className="bi bi-file-earmark-text navicon"></i> Resume
              </a>
            </li> */}
            <li>
              <a href="#portfolio">
                <i className="bi bi-images navicon"></i> Portfolio
              </a>
            </li>
            <li>
              <a href="#services">
                <i className="bi bi-hdd-stack navicon"></i> Services
              </a>
            </li>

            <li>
              <a href="#contact">
                <i className="bi bi-envelope navicon"></i> Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="social-links text-center">
          <a href="#" className="twitter">
            <i className="bi bi-twitter-x"></i>
          </a>
          <a href="#" className="facebook">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="#" className="instagram">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="#" className="google-plus">
            <i className="bi bi-skype"></i>
          </a>
          <a href="#" className="linkedin">
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
      </div>
    </header>
  );
}
