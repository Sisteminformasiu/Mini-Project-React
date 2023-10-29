import Footer from "../../component/Footer";
import Navbar from "../../component/Navbar";
import HeroSection from "../../component/HeroSection";
import WellcomeMessage from "../../component/WellcomeMessage";

function HomePages() {
  return (
    <div className="w-screen h-screen">
      <div>
        <Navbar
          home="Home"
          story="Story"
          meditation="Meditation"
          konseling="Konseling"
          login="Login"
          type="type1"
        />
      </div>
      <div>
        <HeroSection />
      </div>
      <div>
        <WellcomeMessage />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default HomePages;
