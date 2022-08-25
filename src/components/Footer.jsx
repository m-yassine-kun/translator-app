const Footer = () => {
  return (
    <div className="footer my-5">
      <footer
        className="text-center text-lg-start text-white"
        style={{ backgroundColor: "#0e376dd3" }}
      >
        <div className="container p-4 pb-0">
          <hr className="my-3" />

          <section className="p-3 pt-0">
            <div className="row d-flex align-items-center">
              <div className="p-1">
                <div className="p-12 text-center">
                  &copy; 2022 TranslatorApp. Made with ❤️ &amp;&nbsp;
                  <span className="text-white" href="#">
                    ReactJS
                  </span>
                  .
                </div>
              </div>
              <div className="text-center p-1">
                <a
                  className="btn btn-outline-light btn-floating m-1"
                  href="#"
                  role="button"
                >
                  <i className="bi bi-facebook"></i>
                </a>

                <a
                  className="btn btn-outline-light btn-floating m-1"
                  href="#"
                  role="button"
                >
                  <i className="bi bi-twitter"></i>
                </a>

                <a
                  className="btn btn-outline-light btn-floating m-1"
                  href="#"
                  role="button"
                >
                  <i className="bi bi-google"></i>
                </a>

                <a
                  className="btn btn-outline-light btn-floating m-1"
                  href="#"
                  role="button"
                >
                  <i className="bi bi-instagram"></i>
                </a>
              </div>
            </div>
          </section>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
