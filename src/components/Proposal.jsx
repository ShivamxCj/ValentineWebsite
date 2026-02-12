import { useState, useRef } from "react";
import confetti from "canvas-confetti";

export default function Proposal({ next }) {
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const yesSound = useRef(new Audio("/sounds/yes.mp3"));

  const moveNo = () => {
    const maxX = 350;
    const maxY = 220;

    const x = (Math.random() - 0.5) * 2 * maxX;
    const y = (Math.random() - 0.5) * 2 * maxY;

    setNoPos({ x, y });
  };

  const handleYes = () => {
    // 🔊 PLAY SOUND (user-initiated, allowed)
    yesSound.current.currentTime = 0;
    yesSound.current.volume = 0.7;
    yesSound.current.play().catch((e) => {
      console.log("Audio play blocked:", e);
    });

    // 🎉 CONFETTI
    confetti({
      particleCount: 250,
      spread: 120,
      origin: { y: 0.6 },
      colors: ["#7b2cbf", "#c77dff", "#ff4d8d", "#ff8fab", "#ffffff"],
    });

    // 📳 VIBRATION
    if (navigator.vibrate) navigator.vibrate(150);

    setTimeout(() => {
      next();
    }, 1200);
  };

  return (
    <div
      className="relative w-full h-screen flex items-center justify-center overflow-hidden
      bg-gradient-to-br from-[#1b0f2f] via-[#720026] to-[#3a0ca3]"
    >
      {/* Floating Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <span
            key={i}
            className="absolute w-2 h-2 bg-white/25 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Card */}
      <div
        className="relative bg-white/15 backdrop-blur-xl border border-white/25
        rounded-3xl shadow-2xl p-8 sm:p-12 max-w-md w-full text-center"
      >
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-white drop-shadow-lg fancy">
          Will you be my Valentine? <br />💖
        </h1>

        <p className="text-white/85 mb-10 text-2xl fancy">
          I promise unlimited smiles, hugs & happiness ✨
        </p>

        <div className="relative flex justify-center gap-10 items-center h-24 handwritten">
          <button
            onClick={handleYes}
            className="bg-gradient-to-r from-[#c77dff] to-[#ff4d8d]
            text-white px-10 py-4 rounded-full text-xl font-semibold
            shadow-xl hover:scale-110 transition"
          >
            YES 💘
          </button>

          <button
            onMouseEnter={moveNo}
            onMouseMove={moveNo}
            style={{ transform: `translate(${noPos.x}px, ${noPos.y}px)` }}
            className="bg-gradient-to-r from-[#720026] to-[#ff4d8d]
            text-white px-10 py-4 rounded-full text-xl font-semibold
            shadow-xl transition-transform duration-300"
          >
            NO 😈
          </button>
        </div>
      </div>

      {/* Float Animation */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
            opacity: 0.4;
          }
          50% {
            transform: translateY(-20px);
            opacity: 0.8;
          }
          100% {
            transform: translateY(0px);
            opacity: 0.4;
          }
        }

        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </div>
  );
}
