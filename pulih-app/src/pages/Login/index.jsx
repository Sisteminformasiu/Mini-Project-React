import { useState } from "react";
import { useNavigate } from "react-router-dom";
import gambar from "../../assets/gambar landingpage.png";

import Navbar from "../../component/Navbar";
import Input from "../../component/input";
import Button from "../../component/Button";
import Footer from "../../component/Footer";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const dummyUser = {
    username: ["alfijan12@gmail.com", "Moh.afizan"],
    password: "password123",
    Permissions: ["read", "write"],
  };
  localStorage.setItem("dummyUser", JSON.stringify(dummyUser));

  const handleLogin = (event) => {
    event.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));

    if (user && user.userName === userName && user.password === password) {
      localStorage.setItem("loggedInEmail", user.userName);
      localStorage.setItem("isLoggedIn", true);

      window.location.reload;
    } else if (
      userName === dummyUser.username[0] &&
      password === dummyUser.password
    ) {
      localStorage.setItem("user", JSON.stringify(dummyUser));
      localStorage.setItem("loggedInEmail", dummyUser.username[0]);
      localStorage.setItem("loggedInUserName", dummyUser.username[1]);
      localStorage.setItem("isLoggedIn", true);

      navigate("/", { replace: true });
    } else {
      setErrorMessage("Invalid username or password");
      setUserName("");
      setPassword("");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setUserName(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

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
      <div className="w-screen h-screen flex justify-center items-start bg-green-50">
        <form
          onSubmit={handleLogin}
          className="w-[78vh] p-7 rounded-xl shadow-md flex flex-col mx-5 md:mx-32 my-12 md:my-32 gap-y-3 bg-white"
        >
          <h1 className="text-center text-gray-600 text-3xl font-bold">
            LOGIN
          </h1>
          <p className="text-center text-slate-400 font-semibold">
            Tarik Nafas Yang dalam!{" "}
            <span className="font-bold text-lime-500">Hembuskan Perlahan</span>
          </p>
          <div className="mb-5 flex flex-col gap-y-3">
            <Input
              label="Email"
              name="email"
              type="email"
              value={userName}
              onChange={handleChange}
              placeholder="Ex : email@example.com"
            />
            <Input
              label="Password"
              name="password"
              type="password"
              value={password}
              onChange={handleChange}
              placeholder="Input your password.."
            />
            <p>
              {errorMessage && (
                <div className="text-red-500">{errorMessage}</div>
              )}
            </p>
          </div>
          <Button button="Login" type="submit" />
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
