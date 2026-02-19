import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>MyDashboard</h2>
      <Link to="/dashboard/overview">Overview</Link>
      <Link to="/dashboard/products">Products</Link>
      <Link to="/dashboard/users">Users</Link>
    </div>
  );
};
export default Sidebar;
