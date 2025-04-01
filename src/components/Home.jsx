import { Link } from "react-router-dom";
import Header from "./Header";

function Home() {
  return (
    <div>
      <Header />
      <h1>hallo</h1>
      <Link to={"/dashboard"}>Dashboard</Link>
    </div>
  );
}

export default Home;
