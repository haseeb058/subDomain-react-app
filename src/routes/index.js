import { Routes, Route } from "react-router-dom";

import Home from "../pages/home-page";
import Admin from "../pages/admin-page";
import CustomerPage from "../pages/customer-page";

export const HomeRouter = () => (
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
);

export const AdminRouter = () => (
  <Routes>
    <Route path="/" element={<Admin />} />
  </Routes>
);

export const CustomerRouter = () => (
  <Routes>
    <Route path="/" element={<CustomerPage />} />
  </Routes>
);
