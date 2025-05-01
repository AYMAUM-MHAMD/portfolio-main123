"use client";

import Lottie from "lottie-react";
import animationData from "./animation.json";
import "./LottieIcon.css";
import Link from "next/link";

export default function LottieIcon() {
  return (
    <Link
      href="https://forms.gle/RK4YmjS6G598pKGH8"
      target="_blank"
      rel="noopener noreferrer"
      title="Service request form"
      style={{ textDecoration: "none" }}
    >
      <div className="lottie-container">
        <Lottie
          animationData={animationData}
          loop
          autoplay
          style={{ height: "80%", width: "80%" }}
        />
      </div>
    </Link>
  );
}
