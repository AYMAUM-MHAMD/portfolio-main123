import Lottie from "lottie-react";
import animationData from "./animation.json";
import "./LottieIcon.css"; // استيراد ملف CSS
import Link from "next/link";

export default function LottieIcon() {
  return (
    <Link
      href="https://forms.gle/RK4YmjS6G598pKGH8" // استبدل هذا بالرابط الخاص بالنموذج
      target="_blank" // لفتح الرابط في نافذة جديدة
      rel="noopener noreferrer"
      title="Service request form"
      style={{ textDecoration: "none" }} // لإزالة التزيين (التسطير) من الرابط
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
