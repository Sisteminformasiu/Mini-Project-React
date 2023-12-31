import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import gambarFooter from "../../assets/footer.png";

import Footer from "../../component/Footer";
import Navbar from "../../component/Navbar";
import HeroSection from "../../component/HeroSection";
import WellcomeMessage from "../../component/WellcomeMessage";
import Container from "../../component/container";
import Button from "../../component/Button";

function HomePages() {
  const useLanguage = useSelector((state) => state.language.useLanguage);
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen">
      <>
        <div>
          <Navbar
            home="Home"
            story="Story"
            meditation="Lelap"
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
          <div
            style={{
              backgroundColor: "rgba(153, 207, 96, 0.7)",
              borderTopLeftRadius: "147px",
              borderTopRightRadius: "147px",
              borderBottomLeftRadius: "40px",
              borderBottomRightRadius: "40px",
              opacity: "",
            }}
            className="w-full md:w-[211vh] h-96 mb-12"
          >
            <Container>
              <div className="flex justify-between">
                <div className="flex flex-col items-start justify-center gap-y-6 -mr-14 md:-mr-32 mt-28 md:mt-0">
                  <h2 className="w-[370px] md:w-[100vh] text-white text-3xl md:text-4xl font-bold">
                    {useLanguage
                      ? "ItsTime to discover a better you with Riliv’s meditation and counseling services"
                      : "#UdahSaatnya, Lebih Sehat Mental Dengan Layanan Konseling Dan Meditasi Dari Pulih"}
                  </h2>
                  <Button
                    onClick={() => navigate("/meditation")}
                    button={useLanguage ? "Go Meditation" : "Ayo Meditasi"}
                  />
                </div>
                <img
                  className="hidden md:block md:w-96 h-96"
                  src={gambarFooter}
                />
              </div>
            </Container>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </>
    </div>
  );
}

export default HomePages;
