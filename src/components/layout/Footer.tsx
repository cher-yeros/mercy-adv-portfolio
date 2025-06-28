import BackToTop from "../BackToTop";

export default function Footer() {
  return (
    <>
      <footer id="footer" className="footer position-relative">
        <div className="container">
          <div className="copyright text-center">
            <p>
              © <span>Copyright</span>
              <strong className="px-1 sitename">iPortfolio</strong>
              <span>All Rights Reserved</span>
            </p>
          </div>
          <div className="credits">
            Designed by{" "}
            <a href="http://ifnetdigitalhub.vercel.app/">Ifnet Digital Hub</a>
          </div>
        </div>
      </footer>

      <BackToTop />
    </>
  );
}
