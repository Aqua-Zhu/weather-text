import { useState } from "react";



import img1 from '/images/01.jpg';
import img2 from "/images/02.jpg";
import img3 from "/images/03.jpg";
import img4 from "/images/04.jpg";



export default function App() {

    // 建立目標縮圖的變數
    const [currentImg, setCurrentImg] = useState(0);
    // 建立圖片陣列
    const arrPhotos = [img1, img2, img3, img4]


    return (
        <>



            <div className="wrapper">
                <section style={{
                    display: "flex",
                    justifyContent: "space-evenly"
                }}>
                    {/* 縮圖區 */}
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>

                        {/* 
                        <img src={arrPhotos[0]} alt="photos" width={100} height={80} />
                        <img src={arrPhotos[1]} alt="photos" width={100} height={80} />
                        <img src={arrPhotos[2]} alt="photos" width={100} height={80} />
                        <img src={arrPhotos[3]} alt="photos" width={100} height={80} /> 
                        */}
                        {
                            arrPhotos.map((photo, index) => {
                                return (
                                    <img key={index} src={photo} alt="photos" width={100} height={80}
                                        onMouseOver={(e) => setCurrentImg(index)}
                                        style={{cursor:"pointer"}}
                                    />
                                )
                            })
                        }

                    </div>
                    {/* 大圖區 */}
                    <div>
                        <img src={arrPhotos[currentImg]} alt="photos" style={{ width: 550,/* height: "100%" */}} />
                    </div>
                </section >
            </div >
        </>
    )
}
