import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Vans from "../Pages/Vans";
import Login from "../Pages/Login";
import VanDetail from "../Pages/Vans/VanDetail";
import Dashboard from "../Pages/Host/Dashboard";
import Income from "../Pages/Host/income";
import Reviews from "../Pages/Host/Reviews";
import HostVans from "../Pages/Host/HostVans";
import HostVanDetail from "../Pages/Host/HostVansDetails";
import HostVanInfo from "../Pages/Host/HostVanInfo";
import HostVanPricing from "../Pages/Host/HostVanPricing";
import HostVanPhotos from "../Pages/Host/HostVanPhotos";
import Layout from "../src/components/Layout";
import HostLayout from "../src/components/HostLayout";
import NotFound from "../Pages/NotFound";
import AuthRequired from "./components/AuthRequired";
import "../server";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />
          <Route path="login" element={<Login />} />

          <Route element={<AuthRequired />}>
            <Route path="host" element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="hostVans" element={<HostVans />} />
              <Route path="vans/:id" element={<HostVanDetail />}>
                <Route index element={<HostVanInfo />} />
                <Route path="pricing" element={<HostVanPricing />} />
                <Route path="photos" element={<HostVanPhotos />} />
              </Route>
              <Route />
              <Route />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;