import Container from "./container";

const Card = ({
  id,
  title,
  description,
  image,
  author,
  date,
  onClick,
  size,
}) => {
  return (
    <div>
      {size === "xl" ? (
        <Container>
          <div
            id={id}
            style={{ width: "116vh", height: "30vh" }}
            className="flex gap-x-6"
            onClick={onClick}
          >
            <img width={260} src={image} />
            <div className="flex flex-col gap-y-4">
              <h1 style={{ fontSize: "22px" }} className="text-2xl font-bold">
                {title}
              </h1>
              <div
                style={{ fontSize: "11px" }}
                className="flex gap-x-1 font-bold text-slate-400"
              >
                <p>{author}</p>
                <p>{date}</p>
              </div>
              <p className="font-regular" style={{ width: "67vh" }}>
                {description}
              </p>
            </div>
          </div>
        </Container>
      ) : (
        <div id={id} className="w-80 h-full flex gap-x-4" onClick={onClick}>
          <img className="w-32 h-24" src={image} />
          <div className="flex flex-col gap-y-2">
            <h1 style={{ fontSize: "15px" }} className="w-40 text-sm font-bold">
              {title}
            </h1>
            <div
              style={{ fontSize: "11px" }}
              className="w-64 font-bold text-slate-400"
            >
              <p>{date}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
