import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"
import  "./PiechartBox.scss"

const data = [
    { name: "Mobile", value: 400, color: "#0088FE" },
    { name: "Desktop", value: 300, color: "#00C49F" },
    { name: "Laptop", value: 300, color: "#FFBB28" },
    { name: "Tablet", value: 200, color: "#FF8042" },
];

const PiechartBox = () => {

    return (
        <div className="piechart">
            <h2>Leads by Source</h2>
            <div className="chart">
                <ResponsiveContainer  width="99%" height="100%">
                    <PieChart >
                        <Tooltip/> 
                        <Pie
                        data={data}
                        innerRadius={"55%"}
                        outerRadius={"75%"}
                        fill="#8884d8"
                        paddingAngle={5}
                        dataKey="value"
                        >
                        {data.map((item) => (
                            <Cell key={item.name} fill={item.color} />
                        ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>
            <div className="bottom">
                {data.map((item)=>(
                    <div key={item.name} className="option">
                        <div className="color" style={{background: item.color}}></div>
                        <div className="text">
                            <span>{item.name}</span>
                            <span>{item.value}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PiechartBox
