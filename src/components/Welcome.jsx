import { useEffect, useRef } from "react";
import confetti from "canvas-confetti";

export default function Welcome({ next }) {
  const audioRef = useRef(null);

  useEffect(() => {
    const startAudio = () => {
      if (audioRef.current) {
        audioRef.current.volume = 0.25;
        audioRef.current.play().catch(() => {});
      }
      window.removeEventListener("click", startAudio);
    };

    window.addEventListener("click", startAudio);
    return () => window.removeEventListener("click", startAudio);
  }, []);

  const handleClick = () => {
    confetti({
      particleCount: 160,
      spread: 90,
      origin: { y: 0.6 },
      colors: ["#7b2cbf", "#c77dff", "#ff4d8d", "#ff8fab"],
    });

    if (audioRef.current) audioRef.current.pause();
    next();
  };

  return (
    <div
      className="relative w-full h-screen flex items-center justify-center
      bg-gradient-to-br from-[#1b0f2f] via-[#3a0ca3] to-[#720026]
      px-4 overflow-hidden  "
    >
      {/* Background Heartbeat */}
      <audio ref={audioRef} src="/sounds/heartbeat.mp3" loop />

      {/* Floating Hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 22 }).map((_, i) => (
          <span
            key={i}
            className="absolute text-white/30 text-xl sm:text-2xl animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${7 + Math.random() * 7}s`,
            }}
          >
            💜
          </span>
        ))}
      </div>

      {/* Glass Card */}
      <div
        className="relative bg-white/15 backdrop-blur-xl
        border border-white/25
        rounded-3xl shadow-2xl
        p-6 sm:p-10
        max-w-md w-full
        text-center text-white
        animate-scaleIn"
      >
        <h1 className="text-2xl sm:text-4xl font-['Rouge Script',cursive] mb-4 drop-shadow-lg italic">
          Hello Ms. Naina Tiwari 💖
        </h1>

        <p className="text-sm sm:text-lg mb-6 text-white/90 font-['Bad Script',cursive] italic">
          Here's a special message from <br />
          <span className="font-semibold">
            Mr. Shivam Chatterjee 💌
          </span>
        </p>

        <button
          onClick={handleClick}
          className="relative sparkle-btn bg-gradient-to-r
          from-[#c77dff] to-[#ff4d8d]
          text-white px-8 py-3
          rounded-full text-base sm:text-lg
          font-semibold shadow-xl
          hover:scale-110 transition font-['Bad Script',cursive]"
        >
          Open My Heart 💝
        </button>

        <p className="text-xs text-white/70 mt-4 animate-pulse font-['Bad Script',cursive]">
          Tap anywhere to begin song 💗
        </p>
      </div>
    </div>
  );
}
