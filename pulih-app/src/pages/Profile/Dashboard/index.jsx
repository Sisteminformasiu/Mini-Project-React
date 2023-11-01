import React from "react";
import Sidebar from "../../../component/Sidebar";
import Navbar from "../../../component/Navbar";
import Container from "../../../component/container";
import Button from "../../../component/Button";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen">
      <div className="mb-12">
        <Navbar
          home="Home"
          story="Story"
          meditation="Lelap"
          konseling="Konseling"
          login="Login"
          type="type1"
        />
      </div>
      <Container>
        <div className="flex gap-x-10">
          <div>
            <Sidebar />
          </div>
          <div>
            <div
              className="h-full flex flex-col items-center justify-center gap-y-4"
              style={{ width: "120vh" }}
            >
              <h1 className="text-3xl font-bold">Cooming Soon</h1>
              <Button
                button="GO To Profile"
                onClick={() => navigate("/biodatadiri")}
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Profile;
