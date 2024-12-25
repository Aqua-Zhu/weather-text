import { useEffect, useState } from "react"
import axios from "axios"
import './App.css'
import { IoUmbrellaOutline } from "react-icons/io5";
import ShowCityInf from "./ShowCityInf";
function App() {
    const [WeatherList, SetWeatherList] = useState([])

    useEffect(() => {
        (async () => {
            const data = await axios.get('https://aqua-zhu.github.io/react-app1112/json/F-C0032-001.json');


            const { location } = data.data.cwaopendata.dataset;
            console.log(location);
            // locationName => 代表縣市名稱
            // weatherElement => Wx => 天氣概況
            // elementName => PoP => 降雨機率

            SetWeatherList(location);
        })()
    }, [])


    return (
        <>
            <div className="wrap">
                <h2>36小時天氣預報</h2>
                <div className="container">
                    <ShowCityInf WeatherList={WeatherList}/>



                    {/* {
                        WeatherList.map((city) => {
                            return (
                                <div key={city.locationName}>
                                    <div className="item">
                                        <h3>{city.locationName}</h3>
                                        <section className="content">
                                            {
                                                city.weatherElement[0].time.map((time,index) => {
                                                    return (
                                                        <div id="item2" key={index}>
                                                            
                                                            <p>{
                                                                new Date(time.startTime).toLocaleString(undefined, {
                                                                    day: 'numeric'
                                                                })
                                                            }</p>
                                                            <p>
                                                                {
                                                                    new Date(time.startTime).toLocaleString(undefined, {
                                                                        hour: 'numeric',
                                                                        minute:'numeric'
                                                                    })
                                                                }
                                                                <br/>~<br/>
                                                                {
                                                                    new Date(time.endTime).toLocaleString(undefined, {
                                                                        hour: 'numeric',
                                                                        minute:'numeric'
                                                                    })
                                                                }
                                                            </p>
                                                            <figure>
                                                                <img src={`./react-test1112/weatherIcon/${time.parameter.parameterName}.svg`} alt="" />
                                                            </figure>
                                                            <p>
                                                            {time.parameter.parameterName}
                                                            </p>
                                                            <p>
                                                            <IoUmbrellaOutline />
                                                            {
                                                                city.weatherElement[4].time[index].parameter.parameterName
                                                            }
                                                            </p>
                                                        </div>
                                                    )

                                                })
                                            }

                                        </section>

                                    </div>
                                </div>
                            )
                        })
                    } */}
                </div>
            </div>
        </>

    )
}
export default App
