const timeline = [
  {
    date: "5 July 2020",
    title: "Confession of Love 💖",
    desc: "The day you confessed your feelings."
  },
  {
    date: "21 Sept 2020",
    title: "First Meet & First Hug 🤗",
    desc: "After lockdown, the moment I held you for the first time."
  },
  {
    date: "22 Sept 2020",
    title: "First Kiss 😘",
    desc: "The moment that sealed our love forever."
  },
  {
    date: "1 Nov 2020",
    title: "First Visit To Your Home 🏡",
    desc: "Stepping into your world felt magical."
  },
  {
    date: "16 Dec 2020",
    title: "Our First Date 🌹",
    desc: "Nervous smiles, racing hearts, unforgettable memories."
  },
  {
    date: "25 Dec 2020",
    title: "First Scooty Ride 🛵🎄",
    desc: "Wind, laughter & pure happiness."
  },
  {
    date: "29 Dec 2020",
    title: "Unofficially Married 💍",
    desc: "From that day, you became my forever."
  },
  {
    date: "∞",
    title: "Infinite Memories ♾️",
    desc: "And our love story continues forever..."
  }
];

export default function LoveTimeline() {
  return (
    
    <section
      id="timeline"
      className="relative min-h-screen flex flex-col items-center 
                 bg-gradient-to-b from-[#720026] to-[#1b0f2f] 
                 text-white py-20 px-4 "
    >
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
      <h1 className="text-4xl sm:text-5xl font-extrabold mb-14 text-center drop-shadow-xl romantic">
        Our Love Timeline 💞
      </h1>

      <div className="relative w-full max-w-4xl">

        {/* Center Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 
                        w-1 bg-white/40 h-full rounded-full" />

        {timeline.map((item, i) => (
          <div
            key={i}
            className={`relative flex flex-col sm:flex-row 
                        ${i % 2 === 0 ? "sm:flex-row-reverse" : ""} 
                        items-center mb-16`}
          >
            {/* Content Card */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/30 
                            rounded-2xl shadow-xl 
                            p-6 w-full sm:w-[45%]
                            hover:scale-105 transition">
              <h3 className="text-xl sm:text-2xl font-bold mb-2 text-red-500 handwritten ">
                {item.title}
              </h3>
              <p className="text-xl text-pink-200 mb-2 fancy">{item.date}</p>
              <p className="text-white/90 soft">{item.desc}</p>
            </div>

            {/* Dot */}
            <div className="w-6 h-6 bg-pink-300 rounded-full 
                            border-4 border-white 
                            absolute left-1/2 transform -translate-x-1/2 
                            shadow-xl" />
          </div>
        ))}

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
    </section>
  );
}
