import React from "react";
import "./WhatsAppButton.css";

export default function WhatsAppButton() {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=+2180942916354"
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none" }}
    >
      <div className="whatsapp-container">
        <img
          src="/WhatsApp.svg"
          alt="Chat on WhatsApp"
          style={{ width: "50%", height: "50%" }}
        />
      </div>
    </a>
  );
}
