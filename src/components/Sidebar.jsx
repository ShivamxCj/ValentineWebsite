import { FaHeart, FaEnvelope, FaRing, FaPaperPlane } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full px-4">
      <div
        className="mx-auto max-w-sm
                   bg-white/20 backdrop-blur-xl border border-white/30
                   rounded-full px-6 py-3 shadow-2xl
                   flex items-center justify-center gap-10
                   text-white text-xl sm:text-2xl"
      >
        <a
          href="#message"
          className="hover:scale-125 hover:text-pink-300 transition"
        >
          <FaEnvelope />
        </a>

        <a
          href="#gallery"
          className="hover:scale-125 hover:text-pink-300 transition"
        >
          <FaHeart />
        </a>

        <a
          href="#proposal"
          className="hover:scale-125 hover:text-pink-300 transition"
        >
          <FaRing />
        </a>

        <a
          href="#contact"
          className="hover:scale-125 hover:text-pink-300 transition"
        >
          <FaPaperPlane />
        </a>
      </div>
    </div>
  );
}
