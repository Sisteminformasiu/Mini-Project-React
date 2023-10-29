import { ImHeadphones } from "react-icons/im";
import { BsPlayCircleFill } from "react-icons/bs";

import Button from "./Button";

const cardKonseling = ({
  onClick,
  image,
  title,
  description,
  button,
  typeCard,
}) => {
  return (
    <div>
      {typeCard === "type 1" ? (
        <div className="grid gap-y-4 w-60 h-full p-5 border rounded-md shadow-xl">
          <img className="w-52 h-24 rounded-md" src={image} />
          <div>
            <h2 className="text-center text-lg font-bold">{title}</h2>
            <p className="text-center text-sm text-gray-500 ">{description}</p>
          </div>
          <Button onClick={onClick} button={button} rounded="md" />
        </div>
      ) : (
        <div className="group grid border border-slate-400 shadow-xl gap-y-4 w-60 h-full p-5 rounded-md">
          <div className={`relative`}>
            <img className="w-52 h-40 rounded-md" src={image} />
            <BsPlayCircleFill
              onClick={onClick}
              style={{ background: "white", color: "#99CF60" }}
              className={`w-10 h-10 absolute right-3 top-32 border border-white cursor-pointer rounded-full opacity-0 translate-y-1 group-hover:opacity-100 group-hover:-translate-y-5 duration-500`}
            />
          </div>
          <div>
            <h2 className="text-lg font-bold">{title}</h2>
            <p className="flex gap-x-3 items-center font-bold text-sm text-gray-500 ">
              <ImHeadphones /> {description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default cardKonseling;
