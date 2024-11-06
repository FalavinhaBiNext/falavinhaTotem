import { useState, useEffect } from "react";
import Confetti from "react-confetti";

export default function ConfettiAnimation() {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 20000);

    return () => clearTimeout(timer);
  }, []);

  const confettiStyle = {
    position: "fixed",
    inset: 0,
    width: "100%",
    height: "100%",
    zIndex: 100000,
    pointerEvents: "none",
  };

  return (
    showConfetti && (
      <div style={confettiStyle}>
        <Confetti
          numberOfPieces={1000}
          gravity={0.1}
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
        />
      </div>
    )
  );
}
