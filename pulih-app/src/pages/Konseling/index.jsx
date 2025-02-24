import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import CardKonseling from "../../component/cardKonseling";
import Navbar from "../../component/Navbar";
import Container from "../../component/container";

function Konseling() {
  const useLanguage = useSelector((state) => state.language.useLanguage);
  const navigate = useNavigate();
  const popupRef = useRef(null);

  const togglePopup = () => {
    if (popupRef.current) {
      popupRef.current.style.display = "block";
      setTimeout(() => {
        popupRef.current.style.display = "none";
      }, 1000);
    }
  };

  return (
    <div className="w-screen h-full md:h-screen">
      <div className="my-2">
        <Navbar
          home="Home"
          story="Story"
          meditation="Lelap"
          konseling="Konseling"
          login="Login"
          type="type1"
        />
      </div>
      {useLanguage ? (
        <div className="text-center font-bold mt-5">
          <h1 className="mb-3 text-4xl">
            What type of counseling do you need?
          </h1>
          <p>Various choice of counseling services for your needs</p>
        </div>
      ) : (
        <div className="text-center font-bold mt-5">
          <h1 className="mb-3 text-4xl">Mau pilih layanan yang mana?</h1>
          <p>Berbagai pilihan layanan konseling sesuai kebutuhanmu</p>
        </div>
      )}
      <Container>
        <div className="my-12 flex flex-col md:flex-row justify-center items-center gap-x-5">
          <div className="mb-4 md:mb-0">
            {useLanguage ? (
              <CardKonseling
                image="https://img.freepik.com/premium-photo/energy-button-generative-ai_918955-775.jpg"
                title="Instant Counseling"
                description="Talk to your counselor throungh online meetings anytime"
                button="Chat Know"
                typeCard="type 1"
                onClick={() => navigate("/sharingFriend")}
              />
            ) : (
              <CardKonseling
                image="https://img.freepik.com/premium-photo/energy-button-generative-ai_918955-775.jpg"
                title="Konseling Instan"
                description="Konselor selalu siap untuk mendengarkanmu kapanpun"
                button="Chat Sekarang"
                typeCard="type 1"
                onClick={() => navigate("/sharingFriend")}
              />
            )}
          </div>
          <div className="mb-4 md:mb-0">
            {useLanguage ? (
              <CardKonseling
                image="https://img.freepik.com/premium-photo/software-developer-mascot-company-logo-line-art-generative-ai_934475-6925.jpg"
                title="Plus Counseling"
                description="Talk to your psychologist through online meetings"
                button="Book Now"
                typeCard="type 1"
                onClick={() => navigate("/konselingPlus")}
              />
            ) : (
              <CardKonseling
                image="https://img.freepik.com/premium-photo/software-developer-mascot-company-logo-line-art-generative-ai_934475-6925.jpg"
                title="Konseling Plus"
                description="Konsultasikan masalahmu secara online bersama Psikolog"
                button="Jadwalkan Sekarang"
                typeCard="type 1"
                onClick={() => navigate("/konselingPlus")}
              />
            )}
          </div>
          <div className="mb-4 md:mb-0">
            {useLanguage ? (
              <CardKonseling
                image="https://img.freepik.com/premium-photo/green-heart-realistic-3d-love-heart-symbol-illustration_980225-1452.jpg"
                title="Couple Counseling"
                description="Talk to a psychologist together with your partner"
                button="Book Now"
                typeCard="type 1"
                onClick={togglePopup}
              />
            ) : (
              <CardKonseling
                image="https://img.freepik.com/premium-photo/green-heart-realistic-3d-love-heart-symbol-illustration_980225-1452.jpg"
                title="Konseling Pasangan"
                description="Konsultasi online bersama pasangan didampingi Psikolog"
                button="Jadwalkan Sekarang"
                typeCard="type 1"
                onClick={togglePopup}
              />
            )}
          </div>
          <div className="mb-4 md:mb-0">
            {useLanguage ? (
              <CardKonseling
                image="https://img.freepik.com/premium-photo/green-armchair-yellow-background-minimalism-place-text-generative-ai_655310-4072.jpg"
                title="Offline Counseling"
                description="Talk to your psychologist in person"
                button="Book Now"
                typeCard="type 1"
                onClick={togglePopup}
              />
            ) : (
              <CardKonseling
                image="https://img.freepik.com/premium-photo/green-armchair-yellow-background-minimalism-place-text-generative-ai_655310-4072.jpg"
                title="Konseling Offline"
                description="Bertemu langsung dan ceritakan masalah ke Psikolog"
                button="Jadwalkan Sekarang"
                typeCard="type 1"
                onClick={togglePopup}
              />
            )}
          </div>
        </div>
      </Container>
      <div
        ref={popupRef}
        className="fixed inset-0 flex hidden items-center justify-center z-20 bg-white bg-opacity-50"
      >
        <p className="w-36 h-14 rounded-xl mx-auto my-52 bg-white border text-black font-bold p-4">
          Coming Soon
        </p>
      </div>
      <div className="w-screen h-16 bg-gray-400 flex justify-center items-center gap-x-5 text-slate-200 mt-16">
        <p className="font-semibold">Copyright &copy;2023 Pulih.</p>
        <p className="w-1 h-10 bg-slate-200 rounded-xl"></p>
        <p className="font-semibold">
          Better Mind Better
          <span className="font-bold">You</span>
        </p>
      </div>
    </div>
  );
}

export default Konseling;
