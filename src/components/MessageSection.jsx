import { useEffect, useState } from "react";

export default function MessageSection() {
  const text = "Happy Valentine’s Day Baby 💝";
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [index]);

  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center
      bg-gradient-to-b from-[#720026] to-[#1b0f2f]
      px-4 overflow-hidden "
    >
      {/* Romantic Heading */}
      <h1
        className="relative z-10 mb-16 text-4xl sm:text-6xl
        font-['Rouge Script',cursive]
        text-white drop-shadow-lg tracking-wide font-semibold text-center fancy"
      >
        {displayText}
        <span className="animate-blink">|</span>
      </h1>

      {/* Floating Glowing Dots */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 35 }).map((_, i) => (
          <span
            key={i}
            className="absolute w-2 h-2 bg-white/25 rounded-full animate-float blur-[1px]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Message Card */}
      <div
        className="relative bg-white/15 backdrop-blur-xl
        rounded-3xl shadow-2xl
        border border-white/25
        p-6 sm:p-10 max-w-xl w-full text-center
        hover:scale-105 transition-all duration-500"
      >
        <h2
          className="text-2xl sm:text-4xl mb-10
          font-['Bad Script',cursive]
          text-white drop-shadow-md handwritten"
        >
          My Message For You 💌
        </h2>

        <p
          className="text-sm sm:text-lg leading-relaxed
          font-['Cedarville Cursive',cursive]
          text-white/90 handwritten "
        >
          You are very special to me, more than you’ll ever know. I know things
          aren’t perfect right now — it’s not you, it’s not me, it’s just the
          situation. But no matter what, I believe in us. As long as we’re
          together, everything will be okay.
          <br /> <br />Happy Valentine’s Day, my love ❤️
        </p>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-18px);
            opacity: 0.8;
          }
          100% {
            transform: translateY(0px);
            opacity: 0.3;
          }
        }

        .animate-float {
          animation: float linear infinite;
        }

        @keyframes blink {
          0%,
          50%,
          100% {
            opacity: 1;
          }
          25%,
          75% {
            opacity: 0;
          }
        }

        .animate-blink {
          animation: blink 1s infinite;
          margin-left: 2px;
        }
      `}</style>
    </div>
  );
}
