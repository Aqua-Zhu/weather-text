import { useEffect, useState } from "react"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function App() {

// 建立目前背景圖的變數
const [currrentImg,setCurrrentImg] =useState(0);

// 建立輪播圖片的陣列
    const slide = [
        {url:"./images/05.jpg" ,text:'slide1'},
        {url:"./images/06.jpg",text:'slide2'},
        {url:"./images/07.jpg",text:'slide3'},
        {url:"./images/08.jpg",text:'slide4'},
    ]

    // 當currrentImg改變時會重新觸發
    useEffect(()=>{
        // 每2秒呼叫nextSlide
        const autoPlay=setInterval(()=>{
            nextSlide();
        },2000);
        // 每2秒後移除autoPlay，這樣才能取得最新編號
        return()=>clearInterval(autoPlay)
    },[currrentImg])

// 上一張
const prevSlide =()=>{
    // 取得前一個索引編號，檢查是否為最後一個編號
    // 是 => 回到第一張
    // 否 => 進到下一張
    setCurrrentImg((prevIndex)=>(prevIndex === 0 ? slide.length - 1 : prevIndex - 1))
}

// 下一張
const nextSlide =()=>{
    // 取得前一個索引編號，檢查是否為第一個編號
    // 是 => 回到第一張
    // 否 => 進到下一張
    setCurrrentImg((prevIndex)=>(prevIndex === slide.length - 1 ? 0 : prevIndex + 1))
}

// 建立左右icon
const Arrow = ({ direction,onClick }) => ( //用大括號要用return回傳
    // 擺放icon的區域
    <div style={{
        position:"absolute",
        top:"48%",
        cursor:"pointer",
        color:"white",
        [direction]:"20px" //將icon拆開，並調整間距
    }}>

        {
            direction === "left" ? (
            <IoIosArrowBack size={60} onClick = {onClick} />)
            : (<IoIosArrowForward size={60} onClick = {onClick} />) 
        }
    </div>
)

    return (
        <>
        <div className="wrapper" style={{
            maxWidth:"100vw",
            height:"100vh",
            margin:"auto",
        }}>
            {/* 背景輪播區 */}
            <div style={{
                backgroundImage:`url(${slide[currrentImg].url})`, 
                width:"100%",
                height:"100%",
                backgroundSize:"cover",
                margin:"auto"
            }}>
                <p style={{ 
                    height:"100%" ,
                    color:"darkcyan",
                    fontSize:"100px" ,
                    display:"flex",
                    flexDirection: "column" ,
                    justifyContent:"center",
                    alignItems:"center" ,
                    margin:"0"
                    }}>
                    {slide[currrentImg].text}
                </p>

                {/* 上一張 */}
                <Arrow direction = "left" onClick={prevSlide} />
                {/* 下一張 */}
                <Arrow direction = "right" onClick={nextSlide} />
            </div>
        </div>
        </>
    )
}
