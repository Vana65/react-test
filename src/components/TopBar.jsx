import { Link } from "react-router-dom";

function TopBar() {
  return (
    <div className="d-flex container">
      <h1>Store</h1>
      <Link to="/" className="register-nav">
        Go to web site
      </Link>
    </div>
  );
}

export default TopBar;
