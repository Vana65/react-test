import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="container">
        <nav className="d-flex">
          <div className="d-flex">
            <h4>Home</h4>
            <h4>About</h4>
          </div>
          <div className="d-flex">
            <Link
              to="/register"
              className="register-btn"
              style={{ textAlign: "center" }}
            >
              Register
            </Link>
            <Link
              to="/login"
              className="login-btn"
              style={{ textAlign: "center" }}
            >
              Login
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
