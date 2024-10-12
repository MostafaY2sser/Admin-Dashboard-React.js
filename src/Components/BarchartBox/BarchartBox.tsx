import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts"
import  "./BarchartBox.scss"

type Props = {
    title: string;
    color: string;
    dataKey: string;
    chartData: object[];
}

const BarchartBox = ( props : Props ) => {

    return (
        <div className="barchart">
            <h3>{props.title}</h3>
            <div className="cart">
                <ResponsiveContainer width="99%" height="100%">
                    <BarChart  data={props.chartData}>
                        <Tooltip
                            contentStyle={{ background: "#2a3447", borderRadius: "5px" }}
                            // labelStyle={{ display: "none" }}
                            cursor={{fill:"none"}}
                        />
                        <Bar dataKey={props.dataKey} fill={props.color}/>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default BarchartBox
