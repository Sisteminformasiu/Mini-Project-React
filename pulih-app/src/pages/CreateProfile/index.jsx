import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import Navbar from "../../component/Navbar";
import Input from "../../component/input";
import InputSelect from "../../component/InputSelect";
import Button from "../../component/Button";
import Footer from "../../component/Footer";

function CreateProfile() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [region, setRegion] = useState("");
  const [city, setCity] = useState("");
  const [noHp, setNoHp] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "username") {
      setUserName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "gender") {
      setGender(value);
    } else if (name === "region") {
      setRegion(value);
    } else if (name === "city") {
      setCity(value);
    } else if (name === "noHp") {
      setNoHp(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = [
      {
        id: uuidv4(),
        username: userName,
        email: email,
        gender: gender,
        region: region,
        city: city,
        noHp: noHp,
      },
    ];

    navigate("/biodatadiri", { state: { userData } });
  };

  return (
    <div className="w-screen h-full">
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
      <div className="w-screen h-full flex justify-eveenly bg-green-50">
        <form
          onSubmit={handleSubmit}
          className="p-7 rounded-xl shadow-md border border-slate-500 bg-white flex flex-col mx-16 my-16 gap-y-3"
          style={{ width: "78vh" }}
        >
          <h1 className="text-center text-gray-600 text-3xl font-bold">
            Create Profile
          </h1>
          <div className="mb-5 flex flex-col gap-y-3">
            <Input
              label="Nama Lengkap"
              name="username"
              type="text"
              value={userName}
              onChange={handleChange}
              placeholder="contoh : Jhon Doe"
              border="border"
            />
            <Input
              label="Email"
              name="email"
              type="email"
              value={email}
              onChange={handleChange}
              placeholder="contoh : email@example.com"
              border="border"
            />
            <InputSelect
              label="Jenis Kelamin"
              name="gender"
              value={gender}
              value1="Tidak ingin memberitahu"
              value2="Laki-Laki"
              value3="Perempuan"
              onChange={handleChange}
              option1="Tidak ingin memberitahu"
              option2="Laki-Laki"
              option3="Perempuan"
            />
            <InputSelect
              label="Negara"
              name="region"
              onChange={handleChange}
              value={region}
              value1="Indonesia"
              value2="Amerika"
              value3="Argentina"
              option1="Indonesia"
              option2="Amerika"
              option3="Argentina"
            />
            <InputSelect
              label="Kota/Kabupaten"
              name="city"
              onChange={handleChange}
              value={city}
              value1="Palu"
              value2="Bandung"
              value3="Toli-Toli"
              option1="Palu"
              option2="Bandung"
              option3="Toli-Toli"
            />
            <Input
              label="No Hp"
              name="noHp"
              type="text"
              value={noHp}
              onChange={handleChange}
              border="border"
            />
          </div>
          <Button button="Create Profile" type="submit" />
        </form>
        <div className="mt-20">
          <div className="w-96 rounded-full text-white p-2 pl-5 my-10 ml-16 p-2 h-20 bg-red-600">
            <p className="text-xl font-semibold"># Sudah Saatnya</p>
            <p className="text-3xl font-bold">Jadikan dirimu prioritas</p>
          </div>
          <div className="w-96 rounded-full text-white p-2 pl-5 my-10 ml-40 p-2 h-20 bg-yellow-400">
            <p className="text-xl ml-6 font-semibold"># Bahagia Itu</p>
            <p className="text-3xl ml-6 font-bold">Berawal Dari Dirimu</p>
          </div>
          <div className="w-96 rounded-full text-white p-2 pl-5 my-10 ml-10 p-2 h-20 bg-orange-500">
            <p className="text-xl ml-6 font-semibold"># Terimalah</p>
            <p className="text-3xl ml-6 font-bold">dirimu Apa Adanya</p>
          </div>
          <div className="w-96 rounded-full text-white p-2 pl-5 my-10 ml-52 p-2 h-20 bg-blue-600">
            <p className="text-xl ml-6 font-semibold"># Bahagiakan Dirimu</p>
            <p className="text-3xl ml-6 font-bold">Sebelum Orang lain</p>
          </div>
          <div className="w-96 rounded-full text-white p-2 pl-5 my-10 ml-24 p-2 h-20 bg-green-600">
            <p className="text-xl ml-6 font-semibold"># Terangi Duniamu</p>
            <p className="text-3xl ml-6 font-bold">Dengan Senyuman</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CreateProfile;
