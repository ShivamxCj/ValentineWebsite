import { useEffect, useState } from "react";

export default function LoveGame() {
  const [hearts, setHearts] = useState([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
  const interval = setInterval(() => {
    const id = Date.now() + Math.random();
    const duration = 5 + Math.random() * 4;

    setHearts((prev) => [
      ...prev,
      {
        id,
        left: Math.random() * 90,
        size: 24 + Math.random() * 26,
        duration,
      },
    ]);

    // Auto remove heart after animation ends
    setTimeout(() => {
      setHearts((prev) => prev.filter((h) => h.id !== id));
    }, duration * 1500);

  }, 500); // reduced frequency

  return () => clearInterval(interval);
}, []);

  const resetGame = () => {
  setScore(0);
  setHearts([]);
};


  const catchHeart = (id) => {
    setHearts((prev) => prev.filter((h) => h.id !== id));
    setScore((prev) => prev + 1);
  };

  return (
    <section
      id="game"
      className="relative min-h-screen flex flex-col items-center justify-center 
                 bg-gradient-to-b from-[#1b0f2f] to-[#720026] 
                 text-white overflow-hidden px-4"
    >
      {/* Title */}
      <h1 className="text-3xl sm:text-5xl font-extrabold mb-3 drop-shadow-lg fancy">
        Catch My Hearts 💖
      </h1>

      <p className="text-lg sm:text-xl mb-4 text-pink-100 text-center handwritten">
        Catch 10 hearts to unlock a surprise 😘
      </p>

      {/* Score */}
      <div
        className="mb-6 text-xl sm:text-2xl font-bold bg-white/20 
                      backdrop-blur-xl px-6 py-2 rounded-full shadow-xl"
      >
        Score: <span className="text-pink-200">{score}</span>
      </div>

      {/* Surprise Message */}
      {score >= 10 && (
        <div
          className="bg-white/20 backdrop-blur-xl border border-white/30 
                        px-8 py-5 rounded-2xl shadow-2xl 
                        text-center animate-bounce"
        >
          <h2 className="text-3xl sm:text-4xl font-bold fancy">
            You caught my heart forever❤️
          </h2>
          <p className="mt-2 text-xl soft">I love you infinity ♾️</p>
        </div>
      )}
      <button
  onClick={resetGame}
  className="mb-6 bg-white/20 backdrop-blur-xl 
             px-6 py-2 rounded-full text-lg font-semibold 
             shadow-lg hover:scale-110 hover:bg-white/30 transition"
>
  Reset Game ♻️
</button>


      {/* Hearts */}
      {hearts.map((h) => (
        <span
          key={h.id}
          onClick={() => catchHeart(h.id)}
          className="absolute cursor-pointer select-none animate-float"
          style={{
            left: `${h.left}%`,
            top: `${h.top}px`,
            fontSize: `${h.size}px`,
            animationDuration: `${h.duration}s`,
          }}
        >
          💖
        </span>
      ))}

      {/* Animations */}
      <style jsx>{`
  @keyframes float {
    0% {
      transform: translateY(0) scale(1);
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    100% {
      transform: translateY(-120px) scale(1.4);
      opacity: 0;
    }
  }

  .animate-float {
    animation: float ease-in-out forwards;
  }
`}</style>

    </section>
  );
}
