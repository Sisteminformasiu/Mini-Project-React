const Button = ({ button, white, size, onClick, type, rounded }) => {
  return (
    <div>
      <button
        onClick={onClick}
        type={type}
        className={`${rounded === "md" ? "rounded-md" : ""} ${
          white === "white"
            ? "bg-white hover:bg-cyan-500"
            : "bg-cyan-500 text-white border-cyan-500 hover:bg-white hover:text-cyan-500"
        } ${
          size === "small"
            ? "w-24 h-10 text-cyan-500 border-cyan-500  hover:text-white"
            : "w-full h-12"
        } flex items-center justify-center rounded-full focus:outline-none`}
      >
        {button}
      </button>
    </div>
  );
};

export default Button;
