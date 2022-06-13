import Link from "next/link";
function Navbar() {
    
  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">

      <div className="container">

        <a className="navbar-brand col-10" href="#">
          Sweet Cakes
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

                <Link href="/">
                    <a className="nav-link active">Home</a>
                </Link>

            </li>

            <li className="nav-item">

              <Link href="/about">
                <a className="nav-link">About</a>
              </Link>

            </li>

            <li className="nav-item">
              <Link href="/product">
                <a className="nav-link">Product</a>
              </Link>
            </li>

          </ul>

        </div>

      </div>

    </nav>
  );
}
export default Navbar;
