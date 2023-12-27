import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleLanguage } from "../features/languageSlice";
import Swal from "sweetalert2";
import gambarLogo from "../assets/Logo-Pulih.png";
import { FaBurger } from "react-icons/fa6";

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
  const [activeMenu, setActiveMenu] = useState("");
  const [mobileMenuMode, setMobileMenuMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const useLanguage = useSelector((state) => state.language.useLanguage);
  const dispatch = useDispatch();

  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const loggedInUserName = localStorage.getItem("loggedInUserName");

  const toggleMobileMenu = () => {
    setMobileMenuMode(!mobileMenuMode);
    console.log(mobileMenuMode);
  };

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

  useEffect(() => {
    setActiveMenu(location.pathname);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 330);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-screen h-full flex justify-center">
      {/* <Container> */}
      <div
        className={`w-screen flex justify-between items-center md:hidden bg-white py-5 z-50 ${
          isScrolled
            ? "fixed left-0 bottom-[100vh] translate-y-[30px] duration-700"
            : ""
        }`}
      >
        <FaBurger
          onClick={toggleMobileMenu}
          className="text-[#99CF60] w-9 h-9 ml-5"
        />
        {isLoggedIn ? (
          <div onClick={() => handleDropdown(2)}>
            <h2
              onClick={() => navigate("/profile")}
              className="w-40 flex items-center gap-x-3 font-semibold text-slate-600"
            >
              Hi, {loggedInUserName}
              <FaUserCircle style={{ color: "#99CF60" }} className="w-7 h-7" />
            </h2>
          </div>
        ) : (
          <div className="mr-3">
            <Button
              onClick={() => navigate("/login")}
              size="small"
              white="white"
              button="Login"
            />
          </div>
        )}
      </div>
      <nav
        className={`hidden w-[215vh] px-20 pl-28 pr-32 h-16 md:gap-x-0 cursor-pointer md:flex justify-between items-center gap-x-12 bg-white ${
          isScrolled
            ? "fixed bottom-[100vh] translate-y-[63.8px] duration-700"
            : ""
        }`}
      >
        <img src={gambarLogo} />
        <ul className="flex gap-x-12 text-slate-500 font-semibold">
          <li
            onClick={() => navigate("/")}
            className={`hover:underline decoration-4 underline-offset-8 hover:text-blue-800 hover:font-semibold ${
              activeMenu === "/"
                ? "underline underline-offset-8 text-blue-800"
                : "visible"
            }`}
          >
            {home}
          </li>
          <li
            onClick={() => navigate("/story")}
            className={`hover:underline decoration-4 underline-offset-8 hover:text-blue-800 hover:font-semibold ${
              activeMenu === "/story"
                ? "underline underline-offset-8 text-blue-800"
                : "visible"
            }`}
          >
            {story}
          </li>
          <li
            onClick={() => navigate("/meditation")}
            className={`hover:underline decoration-4 underline-offset-8 hover:text-blue-800 hover:font-semibold ${
              activeMenu === "/meditation"
                ? "underline underline-offset-8 text-blue-800"
                : "visible"
            }`}
          >
            {meditation}
          </li>
          <li
            onClick={() => navigate("/konseling")}
            className={`hover:underline decoration-4 underline-offset-8 hover:text-blue-900 hover:font-semibold ${
              activeMenu === "/konseling"
                ? "underline underline-offset-8 text-blue-800"
                : "visible"
            }`}
          >
            {konseling}
          </li>
        </ul>
        {type === "type1" ? (
          <ul className="flex items-center gap-x-12">
            <li
              className="relative flex items-center gap-x-2"
              onClick={() => handleDropdown(1)}
            >
              {useLanguage ? (language = "EN") : (language = "IN")}{" "}
              <IoIosArrowDropdown />
              <ul
                className={`absolute left-0 top-5 w-40 mt-4 py-2 bg-white text-blue-900 rounded-md shadow-xl ${
                  openDropdown[1] ? "" : "hidden"
                }`}
              >
                <li className="px-4 py-2 hover:text-lime-500">
                  <button
                    className="bg-transparent cursor-pointer p-0 font-normal"
                    onClick={changeLanguage}
                    disabled={useLanguage === false}
                  >
                    {bahasaIndo}
                  </button>
                </li>
                <li className="px-4 py-2 hover:text-lime-500">
                  <button
                    className="bg-transparent cursor-pointer p-0 font-normal"
                    onClick={changeLanguage}
                    disabled={useLanguage === true}
                  >
                    {english}
                  </button>
                </li>
              </ul>
            </li>
            {isLoggedIn ? (
              <div onClick={() => handleDropdown(2)}>
                <h2 className="w-40 flex items-center gap-x-3 font-semibold text-slate-600">
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

      <nav
        className={`fixed right-[389px] ${
          mobileMenuMode
            ? "left-0 duration-700"
            : "-translate-x-80 duration-1000"
        } top-[75px] w-80 h-full md:gap-x-0 cursor-pointer flex-col justify-between items-center gap-x-12 bg-white rounded-md md:hidden`}
      >
        <img className="ml-6 mt-6" src={gambarLogo} />
        <ul className="grid gap-y-5 text-xl text-slate-500 ml-6 mt-6 font-semibold">
          <li
            onClick={() => navigate("/")}
            className={`p-2 rounded-lg w-60 hover:bg-[#99CF60] decoration-4 hover:text-white hover:font-semibold ${
              activeMenu === "/"
                ? "bg-[#99CF60] text-white font-semibold p-2 rounded-lg w-60"
                : "visible"
            }`}
          >
            {home}
          </li>
          <li
            onClick={() => navigate("/story")}
            className={`p-2 rounded-lg w-60 hover:bg-[#99CF60] decoration-4 hover:text-white hover:font-semibold ${
              activeMenu === "/story"
                ? "bg-[#99CF60] text-white font-semibold p-2 rounded-lg w-60"
                : "visible"
            }`}
          >
            {story}
          </li>
          <li
            onClick={() => navigate("/meditation")}
            className={`p-2 rounded-lg w-60 hover:bg-[#99CF60] decoration-4 hover:text-white hover:font-semibold ${
              activeMenu === "/meditation"
                ? "bg-[#99CF60] text-white font-semibold p-2 rounded-lg w-60"
                : "visible"
            }`}
          >
            {meditation}
          </li>
          <li
            onClick={() => navigate("/konseling")}
            className={`p-2 rounded-lg w-60 hover:bg-[#99CF60] decoration-4 hover:text-white hover:font-semibold ${
              activeMenu === "/konseling"
                ? "bg-[#99CF60] text-white font-semibold p-2 rounded-lg w-60"
                : "visible"
            }`}
          >
            {konseling}
          </li>
        </ul>
        {type === "type1" ? (
          <ul className="grid text-xl ml-8 mt-6 gap-y-96">
            <li
              className="relative flex items-center gap-x-2"
              onClick={() => handleDropdown(1)}
            >
              {useLanguage ? (language = "EN") : (language = "IN")}{" "}
              <IoIosArrowDropdown />
              <ul
                className={`absolute left-0 top-5 w-48 mt-4 py-2 bg-slate-50 text-blue-900 rounded-md shadow-xl ${
                  openDropdown[1] ? "" : "hidden"
                }`}
              >
                <li className="px-4 py-2 hover:text-lime-500">
                  <button
                    className="bg-transparent cursor-pointer p-0 font-normal"
                    onClick={changeLanguage}
                    disabled={useLanguage === false}
                  >
                    {bahasaIndo}
                  </button>
                </li>
                <li className="px-4 py-2 hover:text-lime-500">
                  <button
                    className="bg-transparent cursor-pointer p-0 font-normal"
                    onClick={changeLanguage}
                    disabled={useLanguage === true}
                  >
                    {english}
                  </button>
                </li>
              </ul>
            </li>
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
        <ul
          className={`grid gap-y-5 text-xl text-slate-500 ml-6 mt-6 font-semibold`}
        >
          <li
            onClick={() => navigate("/profile")}
            className="p-2 rounded-lg w-60 hover:bg-[#99CF60] decoration-4 hover:text-white"
          >
            Profile
          </li>
          {isLoggedIn ? (
            <li
              onClick={handleLogOut}
              className="p-2 rounded-lg w-60 hover:bg-[#99CF60] decoration-4 hover:text-white"
            >
              Logout
            </li>
          ) : (
            <li
              onClick={() => navigate("/login")}
              className="p-2 rounded-lg w-60 hover:bg-[#99CF60] decoration-4 hover:text-white"
            >
              Login
            </li>
          )}
        </ul>
      </nav>

      {/* </Container> */}
    </div>
  );
};

export default Navbar;
