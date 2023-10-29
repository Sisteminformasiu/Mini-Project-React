import Container from "./container";
import {
  IoPlaySkipBackSharp,
  IoPlaySkipForwardSharp,
  IoPauseSharp,
} from "react-icons/io5";
import { LiaRandomSolid } from "react-icons/lia";
import { SlLoop } from "react-icons/sl";

const CardMusic = ({
  id,
  title,
  description,
  image,
  author,
  date,
  onClick,
}) => {
  return (
    <div>
      <Container>
        <div
          id={id}
          style={{ width: "116vh", height: "30vh" }}
          className="flex gap-x-6"
          onClick={onClick}
        >
          <img width={260} src={image} />
          <div className="flex flex-col gap-y-2">
            <h1 className="text-4xl font-bold">{title}</h1>
            <p className="font-semibold" style={{ width: "67vh" }}>
              {description}
            </p>
            <div className="grid gap-y-2 mr-12 mt-14">
              <p className="flex justify-center items-center gap-x-4">
                <LiaRandomSolid />
                <IoPlaySkipBackSharp className="w-6 h-6" />
                <IoPauseSharp className="w-9 h-9 p-2 bg-white rounded-full" />
                <IoPlaySkipForwardSharp className="w-6 h-6" />
                <SlLoop />
              </p>
              <p
                style={{ width: "75vh" }}
                className="h-1 bg-white rounded-xl"
              ></p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CardMusic;
