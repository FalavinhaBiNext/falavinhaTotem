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

  return (
    showConfetti && (
      <Confetti
        numberOfPieces={1000}
        gravity={0.1}
        width={window.innerWidth}
        height={window.innerHeight}
        recycle={false}
      />
    )
  );
}
