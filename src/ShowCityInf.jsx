import { IoUmbrellaOutline } from "react-icons/io5";

function ShowCityInf({WeatherList}) {


    return (
        <>
            {
                WeatherList.map((city) => {
                    return (
                        <div key={city.locationName}>
                            <div className="item">
                                <h3>{city.locationName}</h3>
                                <section className="content">
                                    {
                                        city.weatherElement[0].time.map((time, index) => {
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
                                                                minute: 'numeric'
                                                            })
                                                        }
                                                        <br />~<br />
                                                        {
                                                            new Date(time.endTime).toLocaleString(undefined, {
                                                                hour: 'numeric',
                                                                minute: 'numeric'
                                                            })
                                                        }
                                                    </p>
                                                    {/* 天氣圖 */}
                                                    <figure>
                                                        <img src={`./react-test1112/weatherIcon/${time.parameter.parameterName}.svg`} alt="" />
                                                    </figure>
                                                    {/* 天氣名稱 */}
                                                    <p>
                                                        {time.parameter.parameterName}
                                                    </p>
                                                    {/* 降雨機率 */}
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
            }
        </>
    )
}

export default ShowCityInf