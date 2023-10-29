import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";

import Tabel from "../../../component/Tabel";
import Sidebar from "../../../component/Sidebar";
import Navbar from "../../../component/Navbar";
import Container from "../../../component/container";
import EditData from "../../../component/EditData";
import Button from "../../../component/Button";

function BiodataDiri() {
  const [edit, setEdit] = useState(false);
  const [editedData, setEditedData] = useState(null);
  const [originalData, setOriginalData] = useState(null);

  const location = useLocation();
  const userData = location.state ? location.state.userData : null;
  const [updateData, setUpdateData] = useState(userData || []);
  const navigate = useNavigate();

  const handleSave = (newDataProfile) => {
    setEditedData([...updateData]);
    closeEdit();
  };

  const handleCancel = () => {
    setUpdateData([...editedData]);
    closeEdit();
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setUpdateData((oldData) => {
          return oldData.filter((item) => item.id !== id);
        });
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  const openEdit = () => {
    setEditedData([...updateData]);
    setEdit(true);
  };

  const closeEdit = () => {
    setEdit(false);
  };

  return (
    <div className="w-screen h-screen">
      <div className="mb-12">
        <Navbar
          home="Home"
          story="Story"
          meditation="Meditation"
          konseling="Konseling"
          login="Login"
          type="type1"
        />
      </div>
      <Container>
        <div className="flex gap-x-10">
          <div>
            <Sidebar userData={updateData} handleDelete={handleDelete} />
          </div>
          <div>
            {userData && updateData.length ? (
              <Tabel userData={updateData} openEdit={openEdit} />
            ) : (
              <div
                className="h-full flex flex-col items-center justify-center gap-y-4"
                style={{ width: "120vh" }}
              >
                <h1 className="text-3xl font-bold">Lengkapi Profil anda</h1>
                <Button
                  button="Lengkapi Profile"
                  onClick={() => navigate("/register")}
                />
              </div>
            )}
          </div>
        </div>
        <div>
          <EditData
            updateData={updateData}
            setUpdateData={setUpdateData}
            onSave={handleSave}
            edit={edit}
            closeEdit={handleCancel}
          />
        </div>
      </Container>
    </div>
  );
}

export default BiodataDiri;
