const Container = ({ children }) => {
  return (
    <div className="w-screen h-full flex justify-center">
      <div className="container w-full h-full mx-32">
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Container;
