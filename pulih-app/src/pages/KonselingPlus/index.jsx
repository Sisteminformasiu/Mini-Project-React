import psikologList from "../../contentWord/psikologList.json";

import Navbar from "../../component/Navbar";
import Container from "../../component/container";
import Button from "../../component/Button";
import Footer from "../../component/Footer";
import { useNavigate } from "react-router-dom";

const KonselingPlus = () => {
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen bg-white">
      <div className="bg-white">
        <Navbar
          home="Home"
          story="Story"
          meditation="Lelap"
          konseling="Konseling"
          login="Login"
          type="type1"
        />
      </div>
      <div
        style={{ background: "#99CF60" }}
        className="h-60 flex items-center justify-between "
      >
        <div>
          <h2 className="text-3xl ml-56 text-white font-bold ">
            Layanan Konseling Plus
          </h2>
          <p
            style={{ width: "90vh" }}
            className="ml-56 text-white font-semibold mt-3"
          >
            Atur jadwal konseling bersama psikolog profesional yang selalu siap
            membantu mengatasi masalah kesehatan mentalmu
          </p>
        </div>
        <p
          className="w-32 h-32 mr-52 rounded-full overflow-hidden bg-cover bg-center"
          style={{
            backgroundImage:
              'URL("https://img.freepik.com/premium-photo/software-developer-mascot-company-logo-line-art-generative-ai_934475-6925.jpg")',
          }}
        />
      </div>
      <div>
        <Container>
          <div className="flex gap-x-12 mt-12">
            <div className="w-72 h-full border border-slate-400 rounded-md p-4">
              <p className="font-bold text-lg">Atur Konseling</p>
              <hr className="mt-4" />
              <p className="font-bold mt-4">Mau bahas topik yang mana ?</p>
              <label className="flex gap-x-3 mt-2">
                <input
                  name="topikKonseling"
                  value="Kendali Emosi"
                  type="radio"
                />
                Kendali Emosi
              </label>
              <label className="flex gap-x-3 mt-2">
                <input name="topikKonseling" value="Pekerjaan" type="radio" />
                Pekerjaan
              </label>
              <label className="flex gap-x-3 mt-2">
                <input name="topikKonseling" value="Kecanduan" type="radio" />
                Kecanduan
              </label>
              <label className="flex gap-x-3 mt-2">
                <input name="topikKonseling" value="Percintaan" type="radio" />
                Percintaan
              </label>
              <label className="flex gap-x-3 mt-2">
                <input name="topikKonseling" value="Keluarga" type="radio" />
                Keluarga
              </label>
              <label className="flex gap-x-3 mt-2">
                <input name="topikKonseling" value="Kesepian" type="radio" />
                Kesepian
              </label>
              <label className="flex gap-x-3 mt-2">
                <input name="topikKonseling" value="Pendidikan" type="radio" />
                Pendidikan
              </label>
              <label className="flex gap-x-3 mt-2">
                <input name="topikKonseling" value="Kecemasan" type="radio" />
                Kecemasan
              </label>
              <hr className="mt-4" />
              <p className="font-bold mt-4">Mau konseling melalui apa ?</p>
              <label className="flex gap-x-3 mt-2">
                <input name="tier" value="Psikolog Senior" type="radio" />
                Chat
              </label>
              <label className="flex gap-x-3 mt-2">
                <input name="tier" value="Psikolog Junior" type="radio" />
                Call
              </label>
              <label className="flex gap-x-3 mt-2">
                <input name="tier" value="Psikolog Junior" type="radio" />
                Video Call
              </label>
            </div>
            <div className="flex flex-col gap-y-5">
              <div className="flex gap-x-3 h-16">
                <div className="border rounded-md p-1 hover:bg-blue-300 cursor-pointer px-5">
                  <p className="font-bold">Senin</p>
                  <p>1 Nov</p>
                </div>
                <div className="border rounded-md p-1 hover:bg-blue-300 cursor-pointer px-5">
                  <p className="font-bold">Selasa</p>
                  <p>2 Nov</p>
                </div>
                <div className="border rounded-md p-1 hover:bg-blue-300 cursor-pointer px-5">
                  <p className="font-bold">Rabu</p>
                  <p>3 Nov</p>
                </div>
                <div className="border rounded-md p-1 hover:bg-blue-300 cursor-pointer px-5">
                  <p className="font-bold">Kamis</p>
                  <p>4 Nov</p>
                </div>
                <div className="border rounded-md p-1 hover:bg-blue-300 cursor-pointer px-5">
                  <p className="font-bold">Jum'at</p>
                  <p>5 Nov</p>
                </div>
                <div className="border rounded-md p-1 hover:bg-blue-300 cursor-pointer px-5">
                  <p className="font-bold">Sabtu</p>
                  <p>6 Nov</p>
                </div>
                <div className="border rounded-md p-1 hover:bg-blue-300 cursor-pointer px-5">
                  <p className="font-bold">Minggu</p>
                  <p>7 Nov</p>
                </div>
              </div>
              <div
                className="overflow-y-hidden overflow-y-scroll"
                style={{ height: "90vh" }}
              >
                <h2 className="text-xl font-bold">Daftar Psikolog</h2>
                {psikologList.map((item) => (
                  <div
                    id={item.id}
                    style={{ width: "108vh" }}
                    className="flex justify-between items-center gap-x-6 rounded-xl border p-5 mt-3"
                  >
                    <img className="w-24 h-24 rounded-full" src={item.image} />
                    <div className="grid gap-y-2 pr-5">
                      <p className="font-semibold text-lg">{item.name}</p>
                      <p className="font-reguler text-gray-400">
                        {item.spesialis}
                      </p>
                      <p className="font-semibold text-lime-500">
                        {item.status}
                      </p>
                    </div>
                    <Button
                      onClick={() =>
                        navigate("/detailkonselingPlus", {
                          state: {
                            detailItem: item,
                          },
                        })
                      }
                      button="Pilih Psikolog"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="mt-32 shadow-inner">
        <Footer />
      </div>
    </div>
  );
};

export default KonselingPlus;
