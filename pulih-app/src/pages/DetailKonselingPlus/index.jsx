import React from "react";
import Navbar from "../../component/Navbar";
import { useLocation } from "react-router-dom";
import Container from "../../component/container";
import Footer from "../../component/Footer";
import Button from "../../component/Button";

const DetailKonselingPlus = () => {
  const location = useLocation();
  const detailItem = location.state.detailItem;

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
      <div>
        <Container>
          <div className="flex gap-x-5">
            <div
              style={{ width: "70vh" }}
              className="mt-16 h-full grid border border-slate-400 rounded-md p-6 mb-5"
            >
              <div className="flex justify-between items-center gap-x-6">
                <img
                  className="w-24 h-24 rounded-full"
                  src={detailItem?.image}
                />
                <div>
                  <h2 className="font-semibold text-lg">{detailItem?.name}</h2>
                  <p className="font-reguler text-gray-400">
                    {detailItem?.spesialis}
                  </p>
                </div>
              </div>
              <div>
                <p className="font-regular text-gray-600 text-lg mt-8">
                  {detailItem?.description}
                </p>
              </div>
              <div>
                <h2 className="font-semibold text-lg mt-5">Expertise</h2>
                <div className="grid grid-cols-3 gap-x-2 gap-y-2 justify-center items-center mt-4">
                  <p className="w-full h-full p-2 rounded-full bg-gray-400 text-center text-black">
                    Pekerjaan
                  </p>
                  <p className="w-full h-full p-2 rounded-full bg-gray-400 text-center text-black">
                    Kesepian
                  </p>
                  <p className="w-full h-full p-2 rounded-full bg-gray-400 text-center text-black">
                    Percintaan
                  </p>
                  <p className="w-full h-full p-2 rounded-full bg-gray-400 text-center text-black">
                    Pendidikan
                  </p>
                  <p className="w-full h-full p-2 rounded-full bg-gray-400 text-center text-black">
                    Keluarga
                  </p>
                  <p className="w-full h-full p-2 rounded-full bg-gray-400 text-center text-black">
                    Kecanduan
                  </p>
                  <p className="w-full h-full p-2 rounded-full bg-gray-400 text-center text-black">
                    Kecemasan
                  </p>
                  <p className="w-full h-full p-2 rounded-full bg-gray-400 text-center text-black">
                    Lainnya
                  </p>
                </div>
              </div>
            </div>
            <div
              className="h-full mt-16 border rounded-md p-5"
              style={{ width: "90vh" }}
            >
              <h2 className="font-semibold text-lg mb-5">
                Pilih Waktu Konsultasi
              </h2>
              <div className="flex gap-x-3 h-24 mb-12 overflow-y-hidden ">
                <div className="h-16 border rounded-md p-1 hover:bg-blue-300 cursor-pointer px-5">
                  <p className="font-bold">Senin</p>
                  <p className="w-12">1 Nov</p>
                </div>
                <div className="h-16 border rounded-md p-1 hover:bg-blue-300 cursor-pointer px-5">
                  <p className="font-bold">Selasa</p>
                  <p>2 Nov</p>
                </div>
                <div className="h-16 border rounded-md p-1 hover:bg-blue-300 cursor-pointer px-5">
                  <p className="font-bold">Rabu</p>
                  <p className="w-12">3 Nov</p>
                </div>
                <div className="h-16 border rounded-md p-1 hover:bg-blue-300 cursor-pointer px-5">
                  <p className="font-bold">Kamis</p>
                  <p>4 Nov</p>
                </div>
                <div className="h-16 border rounded-md p-1 hover:bg-blue-300 cursor-pointer px-5">
                  <p className="font-bold">Jum'at</p>
                  <p>5 Nov</p>
                </div>
                <div className="h-16 border rounded-md p-1 hover:bg-blue-300 cursor-pointer px-5">
                  <p className="font-bold">Sabtu</p>
                  <p>6 Nov</p>
                </div>
                <div className="h-16 border rounded-md p-1 hover:bg-blue-300 cursor-pointer px-5">
                  <p className="font-bold">Minggu</p>
                  <p>7 Nov</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-x-2 gap-y-2 justify-center items-center mt-4">
                <p className="w-full h-full p-2 rounded-xl bg-gray-400 text-center text-black">
                  09:00
                </p>
                <p className="w-full h-full p-2 rounded-xl bg-gray-400 text-center text-black">
                  11:30
                </p>
                <p className="w-full h-full p-2 rounded-xl bg-gray-400 text-center text-black">
                  13:00
                </p>
                <p className="w-full h-full p-2 rounded-xl bg-gray-400 text-center text-black">
                  18:30
                </p>
                <p className="w-full h-full p-2 rounded-xl bg-gray-400 text-center text-black">
                  21:00
                </p>
              </div>
              <div className="mt-8">
                <Button rounded="md" button="JadwalKan Sekarang" />
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="shadow-inner mt-7">
        <Footer />
      </div>
    </div>
  );
};

export default DetailKonselingPlus;
