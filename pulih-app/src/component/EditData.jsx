import React from "react";
import Input from "./input";
import InputSelect from "./InputSelect";
import Button from "./Button";

function EditData({ closeEdit, edit, updateData, setUpdateData, handleSave }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedData = [...updateData];
    updatedData[0] = {
      ...updatedData[0],
      [name]: value,
    };
    setUpdateData(updatedData);
  };
  return (
    <div
      className={`${
        edit
          ? "fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
          : "hidden"
      }`}
    >
      <div
        className={`${
          edit ? "bg-white rounded-md border border-black p-4" : "hidden"
        }`}
        style={{ width: "70vh" }}
      >
        <div>
          <h2 className="text-3xl font-bold mb-4">Edit Profil</h2>
        </div>
        {updateData &&
          updateData.map((item, index) => (
            <div key={index}>
              <Input
                onChange={handleChange}
                value={item.username}
                label="Nama Lengkap"
                name="username"
                type="text"
                border="border"
              />
              <Input
                onChange={handleChange}
                value={item.email}
                label="Email"
                name="email"
                type="email"
                border="border"
              />
              <InputSelect
                label="Jenis Kelamin"
                name="gender"
                value={item.gender}
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
                value={item.region}
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
                value={item.city}
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
                onChange={handleChange}
                value={item.noHp}
                type="text"
                border="border"
              />
            </div>
          ))}
        <div className="flex justify-between items-center gap-x-2 mt-4">
          <div className="w-full">
            <Button onClick={() => handleSave(updateData)} button="Simpan" />
          </div>
          <div className="w-full">
            <Button onClick={closeEdit} button="Batal" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditData;
