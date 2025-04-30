import React from "react";
import "./DownloadCVButton.css";

export default function DownloadCVButton() {
  return (
    <a
      href="./CV_AYMAN_FARAJ_MOHAMMED.pdf"
      download
      style={{ textDecoration: "none" }}
    >
      <div className="downloadcv-container">
        <img
          src="/downloadcv.svg"
          alt="Download CV"
          style={{ width: "50%", height: "50%" }}
        />
      </div>
    </a>
  );
}
