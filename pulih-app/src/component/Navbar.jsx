import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleLanguage } from "../features/languageSlice";
import Swal from "sweetalert2";
import gambarLogo from "../assets/Logo-Pulih.png";

import { FaSearch, FaUserCircle } from "react-icons/fa";
import { IoIosArrowDropdown } from "react-icons/io";

import Button from "./Button";
import Container from "./container";
import Input from "./input";

const Navbar = ({
  home,
  story,
  meditation,
  konseling,
  language,
  handleSearch,
  search,
  setSearch,
  type,
}) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [bahasaIndo, setBahasaIndo] = useState("Bahasa Indonesia", false);
  const [english, setEnglish] = useState("English", true);

  const navigate = useNavigate();
  const useLanguage = useSelector((state) => state.language.useLanguage);
  const dispatch = useDispatch();

  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const loggedInUserName = localStorage.getItem("loggedInUserName");

  const changeLanguage = () => {
    dispatch(handleLanguage());
  };

  const handleDropdown = (id) => {
    setOpenDropdown({ ...openDropdown, [id]: !openDropdown[id] });
    if (openDropdown[1] === true) {
      setOpenDropdown(openDropdown[2] === false);
    } else if (openDropdown[2] === true) {
      setOpenDropdown((openDropdown[1] = false));
    }
  };

  const handleLogOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to Log Out!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Log out!",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("isLoggedIn");
        navigate("/");
      }
    });
  };

  return (
    <div className="w-screen h-full flex justify-center">
      <Container>
        <nav className="h-16 cursor-pointer flex justify-between items-center ">
          <img src={gambarLogo} />
          <ul className="flex gap-x-12 text-slate-500 font-semibold">
            <li
              onClick={() => navigate("/")}
              className="hover:underline decoration-4 underline-offset-8 hover:text-blue-800 hover:font-semibold"
            >
              {home}
            </li>
            <li
              onClick={() => navigate("/story")}
              className="hover:underline decoration-4 underline-offset-8 hover:text-blue-800 hover:font-semibold"
            >
              {story}
            </li>
            <li
              onClick={() => navigate("/meditation")}
              className="hover:underline decoration-4 underline-offset-8 hover:text-blue-800 hover:font-semibold"
            >
              {meditation}
            </li>
            <li
              onClick={() => navigate("/konseling")}
              className="hover:underline decoration-4 underline-offset-8 hover:text-blue-900 hover:font-semibold"
            >
              {konseling}
            </li>
          </ul>
          {type === "type1" ? (
            <ul className="flex items-center gap-x-12">
              <li
                className="flex items-center gap-x-2"
                onClick={() => handleDropdown(1)}
              >
                {useLanguage ? (language = "EN") : (language = "IN")}{" "}
                <IoIosArrowDropdown />
                <ul
                  style={{ position: "absolute", right: "195px", top: "35px" }}
                  className={`mt-4 py-2 bg-white text-blue-900 rounded-md shadow-xl ${
                    openDropdown[1] ? "" : "hidden"
                  }`}
                >
                  <li
                    onClick={changeLanguage}
                    className="px-4 py-2 hover:text-lime-500"
                  >
                    {bahasaIndo}
                  </li>
                  <li
                    onClick={changeLanguage}
                    className="px-4 py-2 hover:text-lime-500"
                  >
                    {english}
                  </li>
                </ul>
              </li>
              {isLoggedIn ? (
                <div onClick={() => handleDropdown(2)}>
                  <h2 className="flex items-center gap-x-3 font-semibold text-slate-600">
                    <FaUserCircle
                      style={{ color: "#99CF60" }}
                      className="w-7 h-7"
                    />
                    Hi, {loggedInUserName}
                  </h2>
                  <ul
                    style={{ position: "absolute", right: "105px" }}
                    className={`w-28 mt-4 py-2 bg-white text-blue-900 rounded-md shadow-md ${
                      openDropdown[2] ? "" : "hidden"
                    }`}
                  >
                    <li
                      onClick={() => navigate("/profile")}
                      className="px-4 py-2 hover:text-lime-500"
                    >
                      Profile
                    </li>
                    <li
                      onClick={handleLogOut}
                      className="px-4 py-2 hover:text-lime-500"
                    >
                      Logout
                    </li>
                  </ul>
                </div>
              ) : (
                <Button
                  onClick={() => navigate("/login")}
                  size="small"
                  white="white"
                  button="Login"
                />
              )}
            </ul>
          ) : (
            <ul className="flex relative">
              <li>
                <Input
                  name="search"
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search..."
                  border="border"
                  size="small"
                />
              </li>
              <li
                className="absolute top-0 right-0 mt-1 mr-2 py-2"
                onClick={(item) => handleSearch(item.title)}
              >
                <FaSearch />
              </li>
            </ul>
          )}
        </nav>
      </Container>
    </div>
  );
};

export default Navbar;
