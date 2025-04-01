import TopBar from "./TopBar";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <TopBar />
      <Link to="/">Home</Link>
    </div>
  );
}

export default Dashboard;
