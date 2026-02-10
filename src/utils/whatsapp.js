export const openWhatsApp = (product) => {
  const phone = "919521873664"; // Merchant number

  const message = `
Hello, I want to enquire about this gift:

Product: ${product.Tittle}
Description: ${product.Description}
Price: ₹${product.Price}
`;

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
};
