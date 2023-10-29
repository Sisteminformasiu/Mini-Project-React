import React from "react";
import ListMusic from "../../contentWord/meditation_music.json";
import { useLocation, useNavigate } from "react-router-dom";
import { BsPlayCircleFill } from "react-icons/bs";
import { MdOutlineFavorite } from "react-icons/md";
import { GoKebabHorizontal } from "react-icons/go";
import { IoArrowBackCircleSharp } from "react-icons/io5";

import SideBar from "../../component/Sidebar";
import Container from "../../component/container";
import CardMusic from "../../component/CardMusic";

function DetailMusic() {
  const location = useLocation();
  const detailMusic = location.state.detailMusic;
  const navigate = useNavigate();

  const listMusic = ListMusic.slice(4, 7);
  return (
    <div className="flex">
      <div>
        <SideBar />
      </div>
      <Container>
        <div
          style={{ width: "150vh" }}
          className="relative flex flex-col gap-y-5 h-full bg-blue-950 bg-opacity-50 rounded-xl mr-96"
        >
          <IoArrowBackCircleSharp
            onClick={() => navigate(-1)}
            className="absolute top-3 left-3 w-7 h-7 cursor-pointer"
          />
          <div className="pt-12">
            <CardMusic
              image={detailMusic?.image}
              title={detailMusic?.title}
              description={detailMusic?.description}
            />
          </div>
          <Container>
            <div className="flex items-center gap-x-5">
              <BsPlayCircleFill
                style={{ background: "white", color: "#99CF60" }}
                className={`w-14 h-14 border border-white rounded-full`}
              />
              <MdOutlineFavorite
                style={{ color: "white" }}
                className={`w-10 h-10`}
              />
              <GoKebabHorizontal
                style={{ color: "white" }}
                className={`w-10 h-10`}
              />
            </div>
            <div className="mt-5 flex flex-col gap-y-2 mb-3">
              <p className="text-white font-regular"># More</p>
              <hr style={{ width: "120vh", marginBottom: "5px" }} />
              {listMusic.map((item) => (
                <li
                  style={{ width: "60vh", background: "#99CF60" }}
                  className="flex items-center justify-between p-2 pl-5 pr-5 mb-2 list-decimal text-white rounded-xl bg-white"
                  type="1"
                >
                  {item?.title}{" "}
                  <div className="flex gap-x-2">
                    {item?.description}
                    <BsPlayCircleFill
                      style={{ background: "white", color: "#99CF60" }}
                      className={`w-6 h-6 border border-white rounded-full`}
                    />
                  </div>
                </li>
              ))}
            </div>
          </Container>
        </div>
      </Container>
    </div>
  );
}

export default DetailMusic;
