
import { GridColDef } from "@mui/x-data-grid";
import DataTable from "../../Components/DataTable/DataTable";
import "./users.scss";
import { userRows } from "../../../data";
import { useState } from "react";
import Add from "../../Components/Add/Add";

const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "img",
      headerName: "Avatar",
      width: 100,
      renderCell: (params) => {
        return <img src={params.row.img || "/noavatar.png"} alt="" />;
      },
    },
    {
      field: "firstName",
      type: "string",
      headerName: "First name",
      width: 150,
    },
    {
      field: "lastName",
      type: "string",
      headerName: "Last name",
      width: 150,
    },
    {
      field: "email",
      type: "string",
      headerName: "Email",
      width: 200,
    },
    {
      field: "phone",
      type: "string",
      headerName: "Phone",
      width: 200,
    },
    {
      field: "createdAt",
      headerName: "Created At",
      width: 200,
      type: "string",
    },
    {
      field: "verified",
      headerName: "Verified",
      width: 150,
      type: "boolean",
    },
];

const Users = () => {

  const [ open , setOpen ] = useState(false)
    return (
        <div  className="users">
            <div className="title">
                <h1>Users</h1>
                <button onClick={()=> setOpen(!open)}>Add user</button>
            </div>
            <DataTable  slug="user" columns={columns} rows={userRows}/>
            {open && <Add   slug={"user"} setOpen={setOpen}  columns={columns}/>}
        </div>
    )
}

export default Users
