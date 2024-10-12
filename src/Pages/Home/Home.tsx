import ChartsBox from "../../Components/ChartsBox/ChartsBox"
import TopBox from "../../Components/TopBox/TopBox"
import "./home.scss"
import { barChartBoxRevenue, barChartBoxVisit, chartBoxConversion, chartBoxProduct, chartBoxRevenue, chartBoxUser } from './../../../data';
import BarchartBox from "../../Components/BarchartBox/BarchartBox";
import PiechartBox from "../../Components/PiechartBox/PiechartBox";
import BigchartBox from "../../Components/BigchartBox/BigchartBox";

const Home = () => {
    return (
        <div className="home">
            <div className="box box1">
                <TopBox/>
            </div>
            <div className="box box2"><ChartsBox {...chartBoxUser}/></div>
            <div className="box box3"><ChartsBox {...chartBoxRevenue}/></div>
            <div className="box box4"><PiechartBox/></div>
            <div className="box box5"><ChartsBox  {...chartBoxProduct}/></div>
            <div className="box box6"><ChartsBox  {...chartBoxConversion}/></div>
            <div className="box box7"><BigchartBox/></div>
            <div className="box box9"><BarchartBox  {...barChartBoxVisit}/></div>
            <div className="box box8"><BarchartBox  {...barChartBoxRevenue} /></div>
        </div>
    )
}

export default Home
