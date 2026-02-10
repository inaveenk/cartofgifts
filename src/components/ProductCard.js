import { useNavigate } from "react-router-dom";
import { openWhatsApp } from "../utils/whatsapp";

export default function ProductCard({ product }) {
  const navigate = useNavigate();

  const finalPrice =
    product.Price - (product.Price * (product.Discount || 0)) / 100;

  return (
    <div
      className="product-card"
      onClick={() => navigate(`/product/${product.id}`)}
    >
      {/* Discount Badge */}
      {product.Discount > 0 && (
        <div className="discount-badge">
          {product.Discount}% OFF
        </div>
      )}

      {/* IMAGE ONLY — NO TITLE ABOVE IMAGE */}
      <div className="image-container">
        <img src={product.imageurl} alt={product.Tittle} />
      </div>

      {/* TITLE BELOW IMAGE ONLY */}
      <h3 className="product-title">{product.Tittle}</h3>

      <p className="desc">{product.Description}</p>

      <div className="price-box">
        {product.Discount > 0 && (
          <span className="old-price">₹{product.Price}</span>
        )}

        <span className="new-price">
          ₹{Math.round(finalPrice)}
        </span>
      </div>

      <button
        className="enquire-btn"
        onClick={(e) => {
          e.stopPropagation();
          openWhatsApp(product);
        }}
      >
        Enquire Now
      </button>
    </div>
  );
}
