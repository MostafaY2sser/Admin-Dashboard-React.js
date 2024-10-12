import { GridColDef } from "@mui/x-data-grid";
import "./Add.scss"


type Props = {
    slug: string;
    columns: GridColDef[];
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Add = ( props : Props ) => {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        props.setOpen(false)
    };

    return (
        <div className="addUser">
            <div className="container">
                <div className="close" onClick={()=> props.setOpen(false)}>X</div>
                <h1>Add new {props.slug}</h1>
                <form  onSubmit={handleSubmit} >
                    { props.columns.filter((item)=> item.field !== "id" && item.field !== "img" )
                    .map((item)=> (
                        <div className="item">
                            <label>{item.headerName}</label>
                            <input type={item.type} placeholder={item.field} required />
                        </div>
                    ))}
                    <button>Send</button>
                </form>
            </div>
        </div>
    )
}

export default Add
