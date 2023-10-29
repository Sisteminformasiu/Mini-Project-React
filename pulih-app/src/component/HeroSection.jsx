import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BiSolidSpa } from "react-icons/bi";
import { FaCertificate, FaFaceGrinWink, FaUserGroup } from "react-icons/fa6";
import gambarHeroSection from "../assets/gambar_3.png";

import Words from "../contentWord/Words";
import Button from "./Button";

const HeroSection = ({ size }) => {
  const useLanguage = useSelector((state) => state.language.useLanguage);
  const navigate = useNavigate();

  return (
    <div className="container flex mx-auto my-14 w-screen">
      <div
        style={{ width: `${size ? "90vh" : "110vh"}` }}
        className="mx-20 h-full pb-9 divide-y"
      >
        <div>
          <h1
            style={{ color: "#99CF60" }}
            className="text-5xl font-bold mb-6 leading-tight"
          >
            {useLanguage ? Words.title.en : Words.title.id}
          </h1>
          <p
            style={{ color: "#7A8285" }}
            className="text-xl font-semibold leading-8 mb-8"
          >
            {useLanguage ? Words.description.en : Words.description.id}
          </p>
          <div className="w-40 mb-8">
            {useLanguage ? (
              <Button
                onClick={() => navigate("/konseling")}
                button="Try Conseling"
              />
            ) : (
              <Button
                onClick={() => navigate("/konseling")}
                button="Mulai Konseling"
              />
            )}
          </div>
        </div>
        <div>
          {useLanguage ? (
            <div className="grid grid-cols-2 gap-y-8 gap-x-20">
              <div className="flex items-center gap-x-2">
                <BiSolidSpa className="w-8 h-8" style={{ color: "#99CF60" }} />
                <p className="w-60 mt-4">
                  <strong style={{ color: "#99CF60" }}>22,4%</strong> increase
                  in user’s wellbeing
                </p>
              </div>
              <div className="flex items-center gap-x-2">
                <FaUserGroup className="w-8 h-8" style={{ color: "#99CF60" }} />
                <p className="w-60 mt-1">
                  Trusted by <strong style={{ color: "#99CF60" }}>900k+</strong>{" "}
                  users
                </p>
              </div>
              <div className="flex items-center gap-x-2">
                <FaCertificate
                  className="w-8 h-8"
                  style={{ color: "#99CF60" }}
                />
                <p className="w-60 mt-4">
                  <strong style={{ color: "#99CF60" }}>Licensed</strong> and
                  trusted psychologist
                </p>
              </div>
              <div className="flex items-center gap-x-2">
                <FaFaceGrinWink
                  className="w-8 h-8"
                  style={{ color: "#99CF60" }}
                />
                <p className="w-60 mt-4">
                  Received{" "}
                  <strong style={{ color: "#99CF60" }}>a 4.7 / 5 Rating</strong>{" "}
                  from users
                </p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-y-8 gap-x-20">
              <div className="flex items-center gap-x-2">
                <BiSolidSpa className="w-8 h-8" style={{ color: "#99CF60" }} />
                <p className="w-60 mt-4">
                  Angka harapan untuk terus hidup kian naik hingga{" "}
                  <strong style={{ color: "#99CF60" }}>22,4%</strong>
                </p>
              </div>
              <div className="flex items-center gap-x-2">
                <FaUserGroup className="w-8 h-8" style={{ color: "#99CF60" }} />
                <p className="w-60 mt-4">
                  Telah di percaya{" "}
                  <strong style={{ color: "#99CF60" }}>900k+</strong> pengguna
                </p>
              </div>
              <div className="flex items-center gap-x-2">
                <FaCertificate
                  className="w-8 h-8"
                  style={{ color: "#99CF60" }}
                />
                <p className="w-60 mt-4">
                  Dilayani oleh{" "}
                  <strong style={{ color: "#99CF60" }}>
                    Psikolog Berlisensi
                  </strong>{" "}
                  yang terpercaya
                </p>
              </div>
              <div className="flex items-center gap-x-2">
                <FaFaceGrinWink
                  className="w-8 h-8"
                  style={{ color: "#99CF60" }}
                />
                <p className="w-60 mt-4">
                  Tingkat kepuasan pengguna tinggi dengan{" "}
                  <strong style={{ color: "#99CF60" }}>a 4.7 / 5 Rating</strong>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="h-full mr-8">
        <img src={gambarHeroSection} />
      </div>
    </div>
  );
};

export default HeroSection;
