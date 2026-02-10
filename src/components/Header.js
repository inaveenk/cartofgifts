export default function Header() {

  const scrollToFooter = () => {
    const footer = document.getElementById("footer-section");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openWhatsApp = () => {
    const phone = "919521873664";
    const message = "Hello, I want to know more about your gifts.";

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <header
      className="app-header"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        background: "#007bff",
        color: "white",
        padding: "12px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      {/* LEFT — LOGO */}
      <h2 style={{ margin: 0, cursor: "pointer" }}>
        GiftKart 🎁
      </h2>

      {/* RIGHT — NAV */}
      <div style={{ display: "flex", gap: 15 }}>

        <button
          onClick={() => window.location.href = "/"}
          style={navBtn}
        >
          Home
        </button>

        <button
          onClick={scrollToFooter}
          style={navBtn}
        >
          Contact
        </button>

        <button
          onClick={openWhatsApp}
          style={{
            ...navBtn,
            background: "#25D366"
          }}
        >
          WhatsApp
        </button>

      </div>
    </header>
  );
}

const navBtn = {
  border: "none",
  padding: "8px 14px",
  borderRadius: 6,
  cursor: "pointer",
  background: "white",
  color: "#007bff",
  fontWeight: "600"
};
