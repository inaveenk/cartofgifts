import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";


import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import GiftDetails from "./pages/GiftDetails";
import "./styles/giftAnimations.css";

import "./styles/product.css";
import "./styles/giftDetails.css";

function App() {
  return (
    <BrowserRouter>

      {/* ✅ APP FLEX LAYOUT WRAPPER */}
      <div style={appLayout}>

        {/* HEADER */}
        <Header />

        {/* ✅ MAIN CONTENT FLEX GROW */}
        <div style={mainContent}>
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/:categoryId/:giftId" element={<GiftDetails />} />

          </Routes>
        </div>

        {/* FOOTER */}
        <Footer />

      </div>

    </BrowserRouter>
  );
}

/* ✅ STICKY FOOTER LAYOUT */
const appLayout = {
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column"
};

const mainContent = {
  flex: 1
};

export default App;
