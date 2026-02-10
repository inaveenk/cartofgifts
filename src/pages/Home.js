import { useEffect, useState } from "react";
import { subscribeGifts } from "../services/productService";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const [gifts, setGifts] = useState([]);

  useEffect(() => {
    const unsub = subscribeGifts(setGifts);
    return () => unsub();
  }, []);

  return (
    <div style={{ width: "90%", margin: "auto" }}>
      <h2>Gift Collection</h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))",
        gap: 15
      }}>
        {gifts.map((gift) => (
          <ProductCard key={gift.id} product={gift} />
        ))}
      </div>
    </div>
  );
}
