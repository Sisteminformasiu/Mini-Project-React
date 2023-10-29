import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import gambarWellcomeMessage from "../assets/gambar landingpage2.png";
import Words from "../contentWord/Words";

import Button from "./Button";
import Container from "./container";

const WellcomeMessage = ({ size }) => {
  const useLanguage = useSelector((state) => state.language.useLanguage);
  const navigate = useNavigate();
  return (
    <div className="w-screen">
      <Container>
        <div className="flex flex-col items-center text-center mt-16">
          <h1
            style={{ color: "#99CF60" }}
            className="text-5xl font-bold mb-6 leading-tight"
          >
            {useLanguage ? Words.title_2.en : Words.title_2.id}
          </h1>
          <p
            style={{ color: "#7A8285", width: "140vh" }}
            className="text-xl font-semibold leading-8 mb-8"
          >
            {useLanguage ? Words.description_2.en : Words.description_2.id}
          </p>
        </div>
        <div className="flex mx-12 mt-16 mb-36">
          <div
            style={{ backgroundImage: `URL('${gambarWellcomeMessage}')` }}
            className="h-60 w-96 bg-red-300 rounded-full overflow-hidden mr-8 bg-cover bg-center"
          ></div>
          <div
            style={{ width: `${size ? "90vh" : "110vh"}` }}
            className="mx-20 h-full pb-9 divide-y"
          >
            <div>
              <h1
                style={{ color: "#99CF60" }}
                className="text-2xl font-bold mb-6 leading-tight"
              >
                {useLanguage ? Words.title_3.en : Words.title_3.id}
              </h1>
              <p
                style={{ color: "#7A8285" }}
                className="text-xl font-semibold leading-8 mb-8"
              >
                {useLanguage ? Words.description_3.en : Words.description_3.id}
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
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WellcomeMessage;
