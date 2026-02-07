const photos = Array.from({ length: 6 }, (_, i) => `/photos/${i + 1}.jpg`);

export default function Gallery() {
  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center
      bg-gradient-to-b from-[#1b0f2f] to-[#720026]
      px-4 py-16 overflow-hidden"
    >
      {/* Floating Dots Background */}
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

      {/* Heading */}
      <h1
        className="relative z-10 text-4xl sm:text-5xl mb-10
        font-['Rouge Script',cursive]
        text-white drop-shadow-lg"
      >
        Our Memories ❤️
      </h1>

      {/* Photo Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20">
        {photos.map((src, i) => (
          <div
            key={i}
            className="bg-pink-600 backdrop-blur-xl rounded-2xl p-1.5
            shadow-lg border border-pink-400/40
            hover:scale-105 hover:shadow-pink-400/40
            transition-all duration-500"
          >
            <img
              src={src}
              alt={`memory-${i}`}
              className="w-52 h-52 sm:w-60 sm:h-60
              object-cover rounded-xl"
            />
          </div>
        ))}
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
