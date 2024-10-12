import "./TopBox.scss";
import { topDealUsers }  from "../../../data";

const TopBox = () => {
    
    return (
        <div className="topBox">
            <h1>Top Deals</h1>
            <div className="list">
                { topDealUsers.map( (item) =>{
                    return(
                        <div key={item.id} className="listItem">
                            <img src={item.img} alt="" />
                            <div className="info">
                                <span>{item.username}</span>
                                <p>{item.email}</p>
                            </div>
                            <div className="amount">${item.amount}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default TopBox
