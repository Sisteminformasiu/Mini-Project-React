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
            className="mx-[8px] md:mx-0 text-5xl font-bold mb-6 leading-tight"
          >
            {useLanguage ? Words.title_2.en : Words.title_2.id}
          </h1>
          <p
            style={{ color: "#7A8285" }}
            className="md:w-[140vh] mx-2 md:mx-0 text-xl font-semibold leading-8 mb-8"
          >
            {useLanguage ? Words.description_2.en : Words.description_2.id}
          </p>
        </div>
        <div className="flex flex-col-reverse md:flex-row mx-0 md:mx-12 mt-16 mb-36">
          <div
            style={{ backgroundImage: `URL('${gambarWellcomeMessage}')` }}
            className="ml-3 md:ml-40 h-60 w-[360px] md:w-96 bg-red-300 rounded-full overflow-hidden mr-8 bg-cover bg-center"
          ></div>
          <div
            style={{ width: `${size ? "90vh" : "110vh"}` }}
            className="mx-0 md:mx-20 h-full pb-9 divide-y"
          >
            <div className="mr-[330px] md:mr-0">
              <h1
                style={{ color: "#99CF60" }}
                className="text-2xl text-center md:tetx-start font-bold mb-6 leading-tight"
              >
                {useLanguage ? Words.title_3.en : Words.title_3.id}
              </h1>
              <p
                style={{ color: "#7A8285" }}
                className="text-xl mx-5 md:mx-0 text-center md:text-start font-semibold leading-8 mb-8"
              >
                {useLanguage ? Words.description_3.en : Words.description_3.id}
              </p>
              <div className="flex justify-center md:justify-start w-full md:w-40 mb-8">
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
