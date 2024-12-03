import { useEffect } from "react"
import axios from "axios"
import './App.css'
import { IoUmbrellaOutline } from "react-icons/io5";
function App() {

    useEffect(() => {
        (async () => {
            const data = await axios.get('https://aqua-zhu.github.io/react-app1112/json/F-C0032-001.json');
            // const { location } = data.data.cwaopendata.dataset;

            const { location } = data.data.cwaopendata.dataset;
            console.log(location);

            // locationName => 代表縣市名稱
            // weatherElement => Wx => 天氣概況
            // elementName => PoP => 降雨機率

        })()
    }, [])


    return (
        <>

            <h2>36小時天氣預報</h2>
            <div id="row">
                <div className="city">
                    <h3>臺北市</h3>
                    <section className="box">
                        <article>
                            <h4>2日</h4>
                            <p>上午6:00</p>
                            <p>~</p>
                            <p>下午6:00</p>
                            <figure>
                                <img src="./react-test1112/weatherIcon/晴時多雲.svg" alt="" />
                            </figure>
                            <p>晴時多雲</p>
                            <div>
                                <p><IoUmbrellaOutline />0%</p>
                            </div>
                        </article>

                        <article>
                            <h4>2日</h4>
                            <p>上午6:00</p>
                            <p>~</p>
                            <p>下午6:00</p>
                            <figure>
                                <img src="./react-test1112/weatherIcon/晴時多雲.svg" alt="" />
                            </figure>
                            <p>晴時多雲</p>
                            <div>
                                <p><IoUmbrellaOutline />0%</p>
                            </div>
                        </article>

                        <article>
                            <h4>2日</h4>
                            <p>上午6:00</p>
                            <p>~</p>
                            <p>下午6:00</p>
                            <figure>
                                <img src="./react-test1112/weatherIcon/晴時多雲.svg" alt="" />
                            </figure>
                            <p>晴時多雲</p>
                            <div>
                                <p><IoUmbrellaOutline />0%</p>
                            </div>
                        </article>
                    </section>
                </div>

                <div className="city">
                    <h3>新北市</h3>
                    <section className="box">
                        <article>
                            <h4>2日</h4>
                            <p>上午6:00</p>
                            <p>~</p>
                            <p>下午6:00</p>
                            <figure>
                                <img src="./react-test1112/weatherIcon/晴時多雲.svg" alt="" />
                            </figure>
                            <p>晴時多雲</p>
                            <div>
                                <p><IoUmbrellaOutline />0%</p>
                            </div>
                        </article>

                        <article>
                            <h4>2日</h4>
                            <p>上午6:00</p>
                            <p>~</p>
                            <p>下午6:00</p>
                            <figure>
                                <img src="./react-test1112/weatherIcon/晴時多雲.svg" alt="" />
                            </figure>
                            <p>晴時多雲</p>
                            <div>
                                <p><IoUmbrellaOutline />0%</p>
                            </div>
                        </article>

                        <article>
                            <h4>2日</h4>
                            <p>上午6:00</p>
                            <p>~</p>
                            <p>下午6:00</p>
                            <figure>
                                <img src="./react-test1112/weatherIcon/晴時多雲.svg" alt="" />
                            </figure>
                            <p>晴時多雲</p>
                            <div>
                                <p><IoUmbrellaOutline />0%</p>
                            </div>
                        </article>
                    </section>
                </div>
            </div>


        </>
    )
}
export default App
