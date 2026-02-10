import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { db } from "../api/firebase";
import { ref, get } from "firebase/database";

import "../styles/giftDetailsPremium.css";
import "../styles/giftAnimations.css";

export default function GiftDetails() {
  const { categoryId, giftId } = useParams();
  const [gift, setGift] = useState(null);

  useEffect(() => {
    const load = async () => {
      const snap = await get(
        ref(db, `giftkart/${categoryId}/${giftId}`)
      );
      if (snap.exists()) setGift(snap.val());
    };
    load();
  }, [categoryId, giftId]);

  if (!gift) return <h2 className="loading">Loading Gift...</h2>;

  const getGreeting = () => {
    switch (categoryId) {
      case "birthday":
        return "🎉 Happy Birthday 🎉";
      case "valentine":
        return "❤️ Happy Valentine ❤️";
      case "marriageanniversary":
        return "💖 Happy Marriage Anniversary 💖";
      case "workanniversary":
        return "⭐ Happy Work Anniversary ⭐";
      case "weddinginvitation":
        return "🌹 Wedding Invitation 🌹";
      default:
        return "🎁 Special Gift 🎁";
    }
  };

  const getAnimationClass = () => `anim-${categoryId}`;

  return (
    <div
      className={`gift-bg ${getAnimationClass()}`}
      style={{ backgroundImage: `url(${gift.Image1})` }}
    >

      {/* ✅ CORNER IMAGES (NOW CORRECT PLACE) */}
      {gift.image2 && (
        <img
          src={gift.image2}
          className="corner-img top-left"
          alt=""
        />
      )}

      {gift.image3 && (
        <img
          src={gift.image3}
          className="corner-img bottom-right"
          alt=""
        />
      )}

      {/* OVERLAY + CARD */}
      <div className="gift-overlay">

        <div className="gift-card big-card">

          <h2 className="category-text">{getGreeting()}</h2>

          <h1 className="gift-title">{gift.Tittle}</h1>

          <p className="gift-receiver">
            For: {gift.reciever}
          </p>

          <div className="gift-message-box">
            {gift.Message}
          </div>

          <div className="gift-footer">
            <p className="gift-greeting">{gift.Greetings}</p>
            <p className="gift-from">— {gift.Name}</p>
          </div>

        </div>

      </div>

    </div>
  );
}
