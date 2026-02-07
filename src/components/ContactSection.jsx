import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send("service_6jpnts9", "template_wr70jvw", form, "LqW2OzOsJfE4OmSCD")
      .then(
        () => {
          setSent(true);
          setForm({ name: "", email: "", message: "" });
          setLoading(false);

          setTimeout(() => setSent(false), 3000);
        },
        (error) => {
          console.log(error);
          setLoading(false);
        },
      );
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center 
                 bg-gradient-to-b from-[#1b0f2f] to-[#720026] px-4 overflow-hidden"
    >
      {/* Success Popup */}
      {sent && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm 
                        flex items-center justify-center z-50"
        >
          <div
            className="bg-white rounded-3xl p-8 text-center shadow-2xl 
                          animate-scaleIn max-w-sm w-full"
          >
            <h3 className="text-3xl font-extrabold text-pink-600 mb-2">
              Message Sent 💖
            </h3>
            <p className="text-gray-600 text-lg">
              Your sweet message has been delivered 💌
            </p>
          </div>
        </div>
      )}

      {/* Main Card */}
      <div
        className="relative bg-white/10 backdrop-blur-xl border border-white/30
                      rounded-3xl shadow-2xl p-6 sm:p-10 
                      w-full max-w-lg text-center text-white"
      >
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">
          Drop Your Message 💌
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 rounded-xl bg-white/20 backdrop-blur 
                       border border-white/30 text-white placeholder-white/80 
                       focus:outline-none focus:ring-2 focus:ring-pink-300"
          />

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 rounded-xl bg-white/20 backdrop-blur 
                       border border-white/30 text-white placeholder-white/80 
                       focus:outline-none focus:ring-2 focus:ring-pink-300"
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Sweet Message 💖"
            rows="4"
            required
            className="w-full px-4 py-3 rounded-xl bg-white/20 backdrop-blur 
                       border border-white/30 text-white placeholder-white/80 
                       focus:outline-none focus:ring-2 focus:ring-pink-300 resize-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full
    bg-pink-300
    py-3 rounded-full text-lg font-semibold
    text-[#1b0f2f]
    shadow-lg
    hover:bg-[#2a145a] hover:scale-105 hover:text-pink-300
    transition disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Sending..." : "Send Message 💘"}
          </button>
        </form>
      </div>
    </section>
  );
}
