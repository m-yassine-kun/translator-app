const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light  "
      style={{ backgroundColor: "#1d5093cc" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand">
          <a href="#">
            <i className="bi bi-translate" style={{ color: "#ffffff" }}></i>
          </a>
        </a>
        <a className="navbar-brand" href="#" style={{ color: "#ffffff" }}>
          Translator App
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                style={{ color: "#ffffff", marginLeft: "10px" }}
                href="#"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                style={{ color: "#ffffff", marginLeft: "10px" }}
                href="#"
              >
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                style={{ color: "#ffffff", marginLeft: "10px" }}
                href="#"
              >
                About App
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
