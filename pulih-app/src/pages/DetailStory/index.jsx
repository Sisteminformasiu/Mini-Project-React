import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaSquareXTwitter, FaInstagram, FaFacebookF } from "react-icons/fa6";
import { IoArrowRedo } from "react-icons/io5";

import Navbar from "../../component/Navbar";
import Container from "../../component/container";

function DetailStory() {
  const [isElementFixed, setIsElementFixed] = useState(false);

  const location = useLocation();
  const detailArticle = location?.state?.detailArticle;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 820) {
        setIsElementFixed(true);
      } else {
        setIsElementFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-screen h-screen">
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
        <Container>
          <div
            style={{ width: "120vh" }}
            className="flex flex-col items-center justify-center gap-y-5 mx-auto divide-y divide-gray-300"
          >
            <h2 style={{ fontSize: "42px" }} className="font-bold text-black">
              {detailArticle?.title}
            </h2>
            <div className="flex flex-col gap-y-12 pt-6">
              <div
                style={{ fontSize: "11px" }}
                className="flex gap-x-1 font-bold text-gray-400 tracking-widest"
              >
                <p>{detailArticle?.author}</p>
                <p>{detailArticle?.date}</p>
              </div>
              <img src={detailArticle?.image} />

              <div className="flex flex-col gap-y-7">
                <div className="">
                  <p className="text-lg leading-relaxed font-regular">
                    {detailArticle?.fullDescription?.content1}
                  </p>
                  <div
                    style={{
                      position: "absolute",
                      left: "220px",
                      top: "135vh",
                    }}
                  >
                    <ul
                      className={`w-12 h-40 bg-red-400 cursor-pointer ${
                        isElementFixed ? "fixed top-8" : ""
                      }`}
                    >
                      <li className="h-10 flex items-center justify-center bg-black">
                        <FaSquareXTwitter className="w-6 h-6 text-white" />
                      </li>
                      <li className="h-10 flex items-center justify-center bg-blue-600">
                        <FaFacebookF className="w-6 h-6 text-white" />
                      </li>
                      <li className="h-10 flex items-center justify-center ">
                        <FaInstagram className="w-6 h-6 text-white" />
                      </li>
                      <li className="h-10 flex items-center justify-center bg-slate-500">
                        <IoArrowRedo className="w-6 h-6 text-white" />
                      </li>
                    </ul>
                  </div>
                </div>
                <h2
                  style={{ fontSize: "32px" }}
                  className="font-bold text-black"
                >
                  {detailArticle?.fullDescription?.header}
                </h2>
                <p className="text-lg leading-relaxed font-regular">
                  {detailArticle?.fullDescription?.content2}
                </p>
                <img src={detailArticle?.fullDescription?.image2} />
                <p className="text-lg leading-relaxed font-regular">
                  {detailArticle?.fullDescription?.content3}
                </p>
                <p className="text-lg leading-relaxed font-regular">
                  {detailArticle?.fullDescription?.content4}
                </p>
              </div>
            </div>
          </div>
        </Container>
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

export default DetailStory;
