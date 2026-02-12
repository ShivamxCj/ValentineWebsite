import Sidebar from "./Sidebar";
import MessageSection from "./MessageSection";
import Gallery from "./Gallery";
import MarriageProposal from "./MarriageProposal";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import LoveGame from "./LoveGame";
import LoveTimeline from "./LoveTimeline";

export default function MainPage() {
  return (
    <div className="flex w-full h-screen overflow-hidden bg-gradient-to-br from-pink-400 to-red-400">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Scroll Area */}
      <div
        className="flex-1 overflow-y-scroll scroll-smooth"
        style={{ scrollBehavior: "smooth" }}
      >
        <section id="message">
          <MessageSection />
        </section>

        <section id="gallery">
          <Gallery />
        </section>

        <section id="timeline">
          <LoveTimeline />
        </section>

        <section id="game">
          <LoveGame />
        </section>

        <section id="proposal">
          <MarriageProposal />
        </section>

        <section id="contact">
          <ContactSection />
        </section>

        <Footer />
      </div>
    </div>
  );
}
