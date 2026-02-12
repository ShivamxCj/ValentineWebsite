import { useEffect, useState } from "react";

export default function Loader({ next }) {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      next();
    }, 3000);

    const dotTimer = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + "." : ""));
    }, 500);

    return () => {
      clearTimeout(timer);
      clearInterval(dotTimer);
    };
  }, [next]);

  return (
    <div
      className="relative w-full h-screen flex items-center justify-center
                 bg-gradient-to-br from-[#1b0f2f] via-[#2a145a] to-[#3b1d6b]
                 overflow-hidden"
    >
      {/* Floating Hearts (Subtle) */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 14 }).map((_, i) => (
          <span
            key={i}
            className="absolute text-white/20 text-xl animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 6}s`,
            }}
          >
            💜
          </span>
        ))}
      </div>

      {/* Main Loader */}
     <div className="relative text-center text-white px-6  font-['Bad Script',cursive] italic">
  <h1 className="text-4xl sm:text-6xl mb-4 drop-shadow-lg tracking-wide romantic">
    Loading
    <span className="inline-block w-[1.5em] text-left">
      {dots}
    </span>
  </h1>

  <div className="flex justify-center gap-3 text-3xl sm:text-4xl animate-bounce opacity-90">
    💜 💜 💜
  </div>
</div>


      {/* Floating animation */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-16px);
            opacity: 0.7;
          }
          100% {
            transform: translateY(0px);
            opacity: 0.3;
          }
        }

        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </div>
  );
}
