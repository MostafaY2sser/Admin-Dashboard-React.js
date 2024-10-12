import { singleProduct } from "../../../data"
import Single from "../../Components/Single/Single"
import "./SingleProduct.scss"

const SingleProduct = () => {
    return (
        <div  className="singleProduct">
            <Single  {...singleProduct}/>
        </div>
    )
}

export default SingleProduct
