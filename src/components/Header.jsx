import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="container">
        <nav className="d-flex">
          <div className="d-flex">
            <Link to="/Home">Home</Link>
            <Link to="/About">About</Link>
          </div>
          <div className="d-flex">
            {!window.localStorage.getItem("email") ? (
              <>
                <Link to="/register" className="register-btn">
                  Register
                </Link>
                <Link to="/login" className="login-btn">
                  Login
                </Link>
              </>
            ) : (
              <Link to="/logout" className="register-nav">
                Log out
              </Link>
            )}
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
