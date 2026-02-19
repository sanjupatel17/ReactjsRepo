import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};
export default DashboardLayout;
