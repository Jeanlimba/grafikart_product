const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary py-2">
      <div className="container-fluid">
        <a className="navbar-brand" href=".">
          My App
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Cart
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Contact us
              </a>
            </li>
          </ul>
          <div className="d-flex px-2" role="search">
            <button type="button" className="btn btn-primary position-relative">
              <i className="bi bi-cart"></i>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                0
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
