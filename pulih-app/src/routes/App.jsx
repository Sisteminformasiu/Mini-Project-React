import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePages from "../pages/HomePage";
import Login from "../pages/Login";
import Story from "../pages/Story";
import Meditation from "../pages/Meditation";
import DetailStory from "../pages/DetailStory";
import Profile from "../pages/Profile/Dashboard";
import BiodataDiri from "../pages/Profile/BiodataDiri";
import Register from "../pages/CreateProfile";
import Konseling from "../pages/Konseling";
import SharingFriend from "../pages/SharingFriendAI";
import DetailMusic from "../pages/DetailMeditationMusic";
import PrivateRoute from "../component/PrivateRouter";
import KonselingPlus from "../pages/KonselingPlus";
import DetailKonselingPlus from "../pages/DetailKonselingPlus";

function App() {
  return (
    <div>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePages />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/story" element={<Story />} />
            <Route
              path="/konseling"
              element={
                <PrivateRoute>
                  <Konseling />
                </PrivateRoute>
              }
            />
            <Route path="/sharingFriend" element={<SharingFriend />} />
            <Route path="/konselingPlus" element={<KonselingPlus />} />
            <Route
              path="/detailkonselingPlus"
              element={<DetailKonselingPlus />}
            />
            <Route path="/detail_story/:title" element={<DetailStory />} />
            <Route
              path="/meditation"
              element={
                <PrivateRoute>
                  <Meditation />
                </PrivateRoute>
              }
            />
            <Route path="/profile" element={<Profile />} />
            <Route path="/biodatadiri" element={<BiodataDiri />} />
            <Route path="/detail_music/:id" element={<DetailMusic />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
