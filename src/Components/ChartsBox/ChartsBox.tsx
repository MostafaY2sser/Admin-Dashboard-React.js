import { Link } from "react-router-dom"
import "./ChartsBox.scss"
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts"

type Props = {
    color: string;
    icon: string;
    title: string;
    dataKey: string;
    number: number | string;
    percentage: number;
    chartData: object[];
};

const ChartsBox = ( props : Props ) => {

    return (
        <div className="chartBox">
            <div className="boxInfo">
                <div className="title">
                    <img src={props.icon} alt="" />
                    <span>{props.title}</span>
                </div>
                <h1>{props.number}</h1>
                <Link className="link" to={"/"}  style={{color: props.color}}>View All</Link>
            </div>
            <div className="boxchart">
                <div className="cart">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart  data={props.chartData}>
                        <Tooltip
                            contentStyle={{background:"transparent",border:"none", fontSize:"12px"}}
                            labelStyle={{ display: "none" }}
                            position={{ x: -10, y: 50 }}
                        />
                        <Line type="monotone" dataKey={props.dataKey} stroke={props.color} dot={false} strokeWidth={2} />
                    </LineChart>
                </ResponsiveContainer>
                </div>
                <div className="text">
                    <span className="parsentage"  style={{color:props.percentage<0?"tomato":"limegreen"}}>%{props.percentage}</span>
                    <span className="duration">this month</span>
                </div>
            </div>
        </div>
    )
}

export default ChartsBox
