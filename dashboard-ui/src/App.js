import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "./layout/DashboardLayout";
import Overview from "./pages/dashboard/Overview";
import Products from "./pages/dashboard/Products";
import Users from "./pages/dashboard/Users";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="overview" element={<Overview />} />
          <Route path="products" element={<Products />} />
          <Route path="users" element={<Users />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
