import { useState } from "react";

export default function MarriageProposal() {
  const [yes, setYes] = useState(false);
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });

const moveNo = () => {
  const rangeX = window.innerWidth / 2.5;
  const rangeY = window.innerHeight / 3;

  const x = (Math.random() - 0.5) * rangeX;
  const y = (Math.random() - 0.5) * rangeY;

  setNoPos({ x, y });
};


  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#720026] to-[#1b0f2f]">
      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(45)].map((_, i) => (
          <span
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${6 + Math.random() * 6}s`,
            }}
          />
        ))}
      </div>

      {/* Main Card */}
      <div
        className="relative bg-white/10 backdrop-blur-xl border border-white/20 
                      rounded-3xl shadow-2xl p-10 sm:p-14 max-w-lg w-full text-center 
                      hover:scale-105 transition-all duration-500"
      >
        {!yes ? (
          <>
            <h1
              className="text-center text-4xl sm:text-xl md:text-4xl font-extrabold 
               mb-6 text-white drop-shadow-xl leading-snug fancy"
            >
              Will you marry me
              <br />
              <span className="block text-pink-200 mt-2">Ms. Naina Tiwari</span>
              ? 💍❤️
            </h1>

            <p className="text-white/80 mb-10 text-lg soft">
              Together forever, hand in hand, heart to heart ✨
            </p>

            <div className="relative flex justify-center gap-12 items-center h-24 handwritten">
  <button
    onClick={() => setYes(true)}
    className="bg-gradient-to-r from-green-400 to-emerald-500 
               text-white px-10 py-4 rounded-full text-xl font-semibold 
               shadow-lg hover:scale-110 transition"
  >
    YES 😍
  </button>

  <button
    onMouseEnter={moveNo}
    onMouseMove={moveNo}
    style={{
      transform: `translate(${noPos.x}px, ${noPos.y}px)`,
    }}
    className="relative bg-gradient-to-r from-blue-800 to-purple-900 
               text-white px-10 py-4 rounded-full text-xl font-semibold 
               shadow-lg transition-all duration-300"
  >
    NO 💔
  </button>
</div>

          </>
        ) : (
          <div className="animate-fade-in text-center handwritten">
            <h1 className="text-2xl sm:text-4xl font-extrabold mb-6 text-white drop-shadow-xl">
              Okay Mrs. Naina Chatterjee ❤️
            </h1>

            <p className="text-xl sm:text-2xl text-white/90">
              Now you're my forever — my wife 💍👰🤵
            </p>

            <div className="mt-6 text-4xl animate-bounce">💗💗💗</div>
          </div>
        )}
      </div>

      {/* Floating Animation */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
            opacity: 0.4;
          }
          50% {
            transform: translateY(-25px);
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

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
