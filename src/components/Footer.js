import { useState } from "react";
import { db } from "../api/firebase";
import { ref, push } from "firebase/database";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !query) {
      setMessage("Fill all fields");
      return;
    }

    try {
      await push(ref(db, "enquiries"), {
        email,
        query,
        createdAt: Date.now(),
      });

      setEmail("");
      setQuery("");
      setMessage("Sent ✅");

      setTimeout(() => setMessage(""), 3000);

    } catch (error) {
      setMessage("Error ❌");
    }
  };

  return (
    <footer style={footerStyle}>

      {/* CONTACT */}
      <div style={contactBox}>
        <h4 style={{ margin: 0 }}>GiftKart</h4>
        <span style={{ fontSize: 14 }}>support@giftkart.com</span>
        <span style={{ fontSize: 14 }}>+91 9521873664</span>
      </div>

      {/* FORM + MESSAGE STACK */}
      <div style={formWrapper}>

        <form onSubmit={handleSubmit} style={formStyle}>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
          />

          <input
            placeholder="Your Query"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={inputStyle}
          />

          <button type="submit" style={buttonStyle}>
            Send
          </button>

        </form>

        {/* MESSAGE BELOW FORM */}
        {message && (
          <span style={messageStyle}>{message}</span>
        )}

      </div>

    </footer>
  );
}

/* ================= STYLES ================= */

const footerStyle = {
  width: "100%",
  padding: "14px 40px",
  boxSizing: "border-box",   // ⭐ ADD THIS

  background: "linear-gradient(90deg,#0f172a,#1e293b)",
  color: "white",

  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  flexWrap: "wrap",
  gap: "20px"
};


const contactBox = {
  display: "flex",
  flexDirection: "column",
  gap: 4
};

const formWrapper = {
  display: "flex",
  flexDirection: "column",
  minWidth: "260px"
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: 8
};

const inputStyle = {
  padding: "8px 12px",
  borderRadius: 8,
  border: "none",
  outline: "none",
  width: "220px"
};

const buttonStyle = {
  padding: "10px",
  borderRadius: 8,
  border: "none",
  background: "#22c55e",
  color: "white",
  cursor: "pointer",
  fontWeight: "bold",
  width: "100%"
};

const messageStyle = {
  fontSize: 13,
  marginTop: 6,
  color: "#86efac"
};
