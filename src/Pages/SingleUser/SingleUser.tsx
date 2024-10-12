

import { singleUser } from "../../../data"
import Single from "../../Components/Single/Single"
import "./SingleUser.scss"

const SingleUser = () => {
    return (
        <div  className="singleUser">
            <Single   {...singleUser}/>
        </div>
    ) 
}

export default SingleUser
