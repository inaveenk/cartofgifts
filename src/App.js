import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import GiftDetails from "./pages/GiftDetails";

import "./styles/giftAnimations.css";
import "./styles/product.css";
import "./styles/giftDetails.css";

/* =====================================================
   ✅ GITHUB PAGES REDIRECT HANDLER
===================================================== */
function RedirectHandler() {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const redirect = params.get("redirect");

    if (redirect) {
      // Clean URL + Navigate
      window.history.replaceState(null, "", redirect);
      navigate(redirect, { replace: true });
    }
  }, [navigate]);

  return null;
}

/* =====================================================
   ✅ MAIN APP
===================================================== */
function App() {
  return (
    <BrowserRouter>

      {/* ⭐ REQUIRED FOR GITHUB PAGES DIRECT URL */}
      <RedirectHandler />

      {/* ✅ APP FLEX LAYOUT WRAPPER */}
      <div style={appLayout}>

        {/* HEADER */}
        <Header />

        {/* PAGE CONTENT */}
        <div style={mainContent}>
          <Routes>

            <Route path="/" element={<Home />} />

            <Route
              path="/product/:id"
              element={<ProductDetails />}
            />

            <Route
              path="/:categoryId/:giftId"
              element={<GiftDetails />}
            />

          </Routes>
        </div>

        {/* FOOTER */}
        <Footer />

      </div>

    </BrowserRouter>
  );
}

/* =====================================================
   ✅ STICKY FOOTER LAYOUT
===================================================== */
const appLayout = {
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column"
};

const mainContent = {
  flex: 1
};

export default App;
