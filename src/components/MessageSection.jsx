export default function MessageSection() {
  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center
      bg-gradient-to-b from-[#720026] to-[#1b0f2f]
      px-4 overflow-hidden font-['Bad Script',cursive] italic"
    >
      {/* Romantic Heading */}
      <h1
        className="relative z-10 mb-6 text-4xl sm:text-6xl
        font-['Rouge Script',cursive]
        text-white drop-shadow-lg tracking-wide font-semibold mb-20"
      >
        Happy Valentine’s Day Baby 💖
      </h1>

      {/* Animated Floating Dots Background */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 35 }).map((_, i) => (
          <span
            key={i}
            className="absolute w-2 h-2 bg-white/25 rounded-full animate-float"
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
          className="text-2xl sm:text-4xl mb-4
          font-['Bad Script',cursive]
          text-white drop-shadow-md"
        >
          My Message For You 💌
        </h2>

        <p
          className="text-sm sm:text-lg leading-relaxed
          font-['Bad Script',cursive]
          text-white/90"
        >
          From the moment you entered my life, everything became brighter,
          warmer, and happier. You are my peace, my madness, my love, and my
          forever. Every heartbeat of mine whispers your name.
          <br /><br />
          I love you more than words, more than time, more than life itself. ❤️
        </p>
      </div>

      {/* Floating Animation */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-18px);
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
