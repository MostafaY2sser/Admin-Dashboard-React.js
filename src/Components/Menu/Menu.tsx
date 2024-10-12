
import { Link } from "react-router-dom"
import "./menu.scss"
import { menu } from "../../../data"

const Menu = () => {

    return (
        <div className="menu">
            { menu.map( (item) =>{
                return(
                    <div  key={item.id} className="item">
                        <span className="title">{item.title}</span>
                        { item.listItems.map((listitem)=>{
                            return(
                                <Link to={listitem.url} key={listitem.id}  className="listItem">
                                    <img src={listitem.icon} alt="" />
                                    <span className="listItemTitle">{listitem.title}</span> 
                                </Link>
                            )
                        })}
                    </div> 
                )
            })}
        </div>
    )
}

export default Menu
