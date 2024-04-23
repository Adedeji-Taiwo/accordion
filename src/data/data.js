import { coin, card, cash } from "../assets";

export const data = {
  title: "Choose Your Payment Method",
  subTitle:
    "At our checkout, we offer a variety of payment options tailored to suit your convenience. Whether you prefer the flexibility of credit card payments, the simplicity of cash transactions, or the innovation of cryptocurrency, we've got you covered.",
  accordionData: [
    {
      id: 1,
      img: card,
      colorDeep: "#FF3939",
      colorLite: "#ffedef",
      title: "Pay with credit card",
      subtitle:
        "Securely pay with your credit card for a hassle-free checkout experience. We accept all major credit cards, ensuring convenience and peace of mind.",
    },
    {
      id: 2,
      img: coin,
      colorDeep: "#004aab",
      colorLite: "#d3dce0",
      title: "Pay with crypto",
      subtitle:
        "Experience the future of payments with our crypto payment option. Pay with popular cryptocurrencies for a fast and secure checkout process.",
    },
    {
      id: 3,
      img: cash,
      colorDeep: "#2d9c3d",
      colorLite: "#c7f8cf",
      title: "Pay with cash",
      subtitle:
        "Prefer to pay with cash? No problem! Select the 'Pay with Cash' option at checkout and finalize your purchase in person, ensuring a seamless transaction",
    },
  ],
};
