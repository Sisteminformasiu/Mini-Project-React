import React from "react";
import Container from "./container";

const HeaderArticle = ({ bg_Image, title, description, date, author }) => {
  return (
    <div className="w-screen h-full flex justify-center">
      <Container>
        <div
          className="w-80 sm:w-full mb-10 mt-7 h-96 bg-cover bg-center p-11 py-36"
          style={{
            backgroundImage: `URL(${bg_Image})`,
          }}
        >
          <div className="w-full sm:w-[76vh] h-28 sm:h-48 flex flex-col gap-y-4 p-6 py-0 bg-white">
            <div className="w-full flex">
              <p
                className="text-xs text-white font-bold p-1"
                style={{ background: "#99CF60" }}
              >
                {title}
              </p>
            </div>
            <div>
              <h1
                className="text-[15px] sm:text-3xl font-bold"
                style={{ color: "black" }}
              >
                {description}
              </h1>
              <p className="flex gap-x-2 text-[10px] sm:text-xs font-bold text-slate-500 mt-2">
                <p>{author}</p>
                <p className="hidden sm:block">{date}</p>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeaderArticle;
