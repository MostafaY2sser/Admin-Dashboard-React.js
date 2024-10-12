import { Legend, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import "./Single.scss"
import { Tooltip } from "@mui/material"

type Props = {
    id: number;
    img?: string;
    title: string;
    info: object;
    chart?: {
        dataKeys: { name: string; color: string }[];
        data: object[];
    };
    activities?: { time: string; text: string }[];
};

const Single = (  props : Props  ) => {
    return (
        <div className="single">
            <div className="view">
                <div className="info">
                    <div className="topInfo">
                        {props.img && <img src={props.img} alt="" />}
                        <h2>{props.title}</h2>
                        <button>Update</button>
                    </div>
                    <div className="details">
                        { Object.entries(props.info).map((item)=>(
                            <div className="item" key={item[0]}>
                                <div className="itemTitle">{item[0]}:</div>
                                <div className="itemValue">{item[1]}</div>
                            </div>
                        )) }
                    </div>
                </div>
                <hr />
                {props.chart && (<div className="chart">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                        width={500}
                        height={300}
                        data={props.chart.data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                        >
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip children={undefined} title={undefined}  />
                            <Legend />
                            {props.chart.dataKeys.map((item)=>(
                                <Line type="monotone" dataKey={item.name} stroke={item.color} activeDot={{ r: 8 }} />
                            ))}
                            </LineChart>
                    </ResponsiveContainer>
                </div>)}
            </div>
            <div className="activetes">
                <h2>Latest Activetes</h2>
                {  props.activities  &&  <ul>
                    { props.activities.map((item)=>(
                        <li  key={item.text}>
                            <div>
                                <p>{item.text}</p>
                                <p>{item.time}</p>
                            </div>
                        </li>
                    )) }
                </ul> }
            </div>

        </div>
    )
}

export default Single
