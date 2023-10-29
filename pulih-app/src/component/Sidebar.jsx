import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { TiDelete } from "react-icons/ti";
import { BiSolidUserAccount } from "react-icons/bi";
import { IoLogOut } from "react-icons/io5";
import { FaUserTie, FaHome } from "react-icons/fa";
import Swal from "sweetalert2";

const Sidebar = ({ size, handleDelete, userData }) => {
  const [activeMenu, setActiveMenu] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const loggedInEmail = localStorage.getItem("loggedInEmail");
  const loggedInUserName = localStorage.getItem("loggedInUserName");

  useEffect(() => {
    setActiveMenu(location.pathname);
  }, [location]);

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
    <div>
      <div
        style={
          size === "fullSize" ? { height: "100vh", borderRadius: "0px" } : {}
        }
        className={`w-80 h-full flex flex-col rounded-xl shadow-xl border`}
      >
        <div className="flex flex-col items-center gap-y-2 p-6 pt-16">
          <img
            className="w-28 h-28 rounded-full"
            src="https://img.freepik.com/premium-photo/green-image-man-with-white-shirt-green-background_745528-3137.jpg"
            alt=""
          />
          <p className="text-xl font-bold">{loggedInUserName}</p>
          <p className="text-sm font-regular text-gray-500">{loggedInEmail}</p>
        </div>
        <div className="flex flex-col gap-y-14 p-5 text-sm font-semibold text-gray-500">
          <ul className="flex flex-col gap-y-2">
            <li
              onClick={() => navigate("/profile")}
              className={`flex items-center gap-x-3 p-3 rounded-md cursor-pointer ${
                activeMenu === "/profile" ? "bg-blue-100" : "visible"
              }`}
            >
              <FaHome className="w-6 h-6 cursor-pointer text-lime-600" />
              Dashboard
            </li>
            <li
              className={`flex items-center gap-x-3 p-3 rounded-md cursor-pointer ${
                activeMenu === "/biodatadiri" ? "bg-blue-100" : "visible"
              }`}
              onClick={() => navigate("/biodatadiri")}
            >
              <FaUserTie className="w-6 h-6 cursor-pointer text-lime-600" />
              Profile
            </li>
            {userData && userData.length ? (
              userData.map((item, index) => (
                <li
                  key={index}
                  onClick={() => handleDelete(item.id)}
                  className="flex items-center gap-x-2 p-2 rounded-md cursor-pointer active:bg-blue-100"
                >
                  <TiDelete className="w-8 h-8 cursor-pointer text-lime-600" />
                  Delete Profile
                </li>
              ))
            ) : (
              <li
                onClick={() => navigate("/register")}
                className="flex items-center gap-x-2 p-2 rounded-md cursor-pointer active:bg-blue-100"
              >
                <BiSolidUserAccount className="w-8 h-8 cursor-pointer text-lime-600" />
                Complete Profile
              </li>
            )}
          </ul>
          <ul>
            <li
              onClick={handleLogOut}
              className="flex items-center gap-x-2 pl-3 cursor-pointer"
            >
              <IoLogOut className="w-7 h-7 cursor-pointer text-red-500" />
              Logout
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
