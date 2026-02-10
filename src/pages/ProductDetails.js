import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { db } from "../api/firebase";
import { ref, get } from "firebase/database";
import { openWhatsApp } from "../utils/whatsapp";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const load = async () => {
      const snap = await get(ref(db, `gifts/${id}`));
      if (snap.exists()) setProduct(snap.val());
    };
    load();
  }, [id]);

  if (!product) return <h2 style={{ textAlign: "center" }}>Loading...</h2>;

  const finalPrice =
    product.Price - (product.Price * (product.Discount || 0)) / 100;

  return (
    <div style={outerWrapper}>
      <div style={cardContainer}>

        <img
          src={product.imageurl}
          alt={product.Tittle}
          style={productImage}
        />

        <div style={detailsText}>
          <h1>{product.Tittle}</h1>

          <p>{product.Description}</p>

          <div style={priceBox}>
            {product.Discount > 0 && (
              <span style={oldPrice}>₹{product.Price}</span>
            )}

            <span style={newPrice}>
              ₹{Math.round(finalPrice)}
            </span>
          </div>

          <button
            style={whatsappBtn}
            onClick={() => openWhatsApp(product)}
          >
            Enquire on WhatsApp
          </button>
        </div>

      </div>
    </div>
  );
}

/* 🔥 OUTER 15% PADDING */
const outerWrapper = {
  padding: "15%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

/* 🔥 CENTER CARD */
const cardContainer = {
  width: "100%",
  maxWidth: "900px",
  background: "white",
  borderRadius: "20px",
  padding: "30px",
  boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "30px"
};

/* IMAGE */
const productImage = {
  width: "100%",
  borderRadius: "16px"
};

/* TEXT */
const detailsText = {
  display: "flex",
  flexDirection: "column",
  gap: "16px"
};

/* PRICE */
const priceBox = {
  display: "flex",
  gap: "12px",
  alignItems: "center"
};

const oldPrice = {
  textDecoration: "line-through",
  color: "#888"
};

const newPrice = {
  color: "#007bff",
  fontSize: "24px",
  fontWeight: "bold"
};

/* BUTTON */
const whatsappBtn = {
  marginTop: "10px",
  padding: "14px",
  borderRadius: "12px",
  border: "none",
  background: "linear-gradient(45deg,#25D366,#128C7E)",
  color: "white",
  fontWeight: "bold",
  cursor: "pointer"
};
