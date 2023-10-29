import Button from "./Button";

const Tabel = ({ openEdit, userData }) => {
  console.log("userdata:", userData);
  return (
    <div>
      <div className="w-full h-full p-4 border border-gray-300 rounded-md">
        <table className="p-5 rounded-md border border-gray-300 border-separate border-spacing-x-5 border-spacing-y-4">
          <thead>
            <tr>
              <th className="text-xl text-start pb-2">Biodata</th>
            </tr>
          </thead>
          <tbody>
            {userData &&
              userData.map((item, index) => (
                <tr key={index}>
                  <tr>
                    <td className="w-80 rounded-xl border border-slate-300 p-3">
                      Nama Lengkap
                    </td>
                    <td className="w-80 rounded-xl border border-slate-300 p-3">
                      {item?.username}
                    </td>
                  </tr>
                  <tr>
                    <td className="rounded-xl border border-slate-300 p-3 ">
                      Email
                    </td>
                    <td className="rounded-xl border border-slate-300 p-3 ">
                      {item?.email}
                    </td>
                  </tr>
                  <tr>
                    <td className="rounded-xl border border-slate-300 p-3 ">
                      Jenis Kelamin
                    </td>
                    <td className="rounded-xl border border-slate-300 p-3 ">
                      {item?.gender}
                    </td>
                  </tr>
                  <tr>
                    <td className="rounded-xl border border-slate-300 p-3 ">
                      Negara
                    </td>
                    <td className="rounded-xl border border-slate-300 p-3 ">
                      {item?.region}
                    </td>
                  </tr>
                  <tr>
                    <td className="rounded-xl border border-slate-300 p-3">
                      Kota/Kabupaten
                    </td>
                    <td className="rounded-xl border border-slate-300 p-3">
                      {item?.city}
                    </td>
                  </tr>
                  <tr>
                    <td className="rounded-xl border border-slate-300 p-3">
                      Nomon Handphone
                    </td>
                    <td className="rounded-xl border border-slate-300 p-3">
                      {item?.noHp}
                    </td>
                  </tr>
                </tr>
              ))}
          </tbody>
        </table>
        <div style={{ width: "110vh" }} className="mt-2 mx-auto">
          <Button onClick={openEdit} button="Edit Profil" />
        </div>
      </div>
    </div>
  );
};

export default Tabel;
