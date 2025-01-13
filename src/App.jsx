import axios from "axios";
import { useEffect, useRef, useState } from "react";

export default function App() {

    const api = 'https://api.unsplash.com/search/photos';
    const accessKey = 'HI2x4C5WRuNXwLWBPnCItFoP_NSwov8oQ6szhK4vZ_M';
    const [filterstring, setFilterstring] = useState('Samoyed');
    // 建立資料陣列
    const [jsonData, setJsonData] = useState([]);
    // 建立讀取變數
    const isLoading = useRef(false);
    // 頁數
    const currentPage = useRef(1);
    // 建立非同步方法，取得遠端資料


    const getPhoto = async (page = 1, isNew = true) => {
        try {
            isLoading.current = true;
            // console.log(`${api}?client-id=${accessKey}&query=${filterstring}`)
            // 發出請求給遠端api，傳回結果
            const result = await axios.get(`${api}?client_id=${accessKey}&query=${filterstring}`);
            // 全部資料
            // console.log(result);
            // 第一頁的10筆資料
            // console.log(jsonData);
            // 只會保存當前頁的資料
            // setJsonData(result.data.results);
            // 若要保存不同頁的資料，就要加上...展開語法
            setJsonData((preData) => {
                // 判斷是否為新的關鍵字，若維新的關鍵字，則覆蓋目前的關鍵字
                if (isNew) {
                    return [...result.data.results];
                }
                // 先前資料+當前資料
                return [...preData, ...result.data.results];
            })
            // 更新頁數
            currentPage.current = page;

            // 1秒之後取消寫入
            setTimeout(() => {
                isLoading.current = false;
            }, 1000);
            
            

        } catch (error) {
            // 錯誤發生顯示訊息

            console.log(error);

        }

    }


    // 列表高度
    const listRef = useRef(null)
    // 避免重新渲染，所以用useEffect
    useEffect(() => {
        getPhoto(1, true);

        // 建立滾動監聽函式
        const scrollEvent = ()=>{
            // console.dir(listRef.current);
            // 取得目前圖片列表的高度
            const height = (listRef.current.offsetHeight + listRef.current.offsetTop) - window.innerHeight;
             // 假如(沒有載入圖片)且(垂直捲軸位置>=目前圖片列表高度)，則顯示下一頁內容
            if(!isLoading.current && window.scrollY >= height ){
                // 頁數+1
                currentPage.current++;
                // 同一關鍵字資料不用覆蓋，所以補上false
                getPhoto(currentPage.current, false);
            }
        }
        // 滾動監聽
        window.addEventListener('scroll',scrollEvent);
        // 移除監聽
        return()=>window.removeEventListener('scroll',scrollEvent);

    }, [filterstring])

    // 建立搜尋列元件
    const SearchBox = ({ filterstring, onSearchHandler }) => {
        return (
            <>
                <div
                    style={{
                        margin: '5% 10%',
                        textAlign: 'center'
                    }}
                >
                    <label htmlFor="filter">請輸入關鍵字</label>
                    <input type="text" id="filter"
                        defaultValue={filterstring}
                        onKeyDown={onSearchHandler}
                    />
                </div>
            </>
        )
    }

    // 按下enter鍵時，更改filterString資料
    const onSearchHandler = (e) => {
        if (e.key === 'Enter') {
            setFilterstring(e.target.value);
        }
    }

    // 圖片元件
    const Card = () => {
        return (
            jsonData.map((item, index) => {
                return (
                    <div key={index} style={{ width: '40%', height: '400px', margin: '10px', }}>
                        {/* <Card item={item}/> */}
                        <img src={item.urls.regular} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="" />
                    </div>
                )
            })

        )
    }

    return (
        <>
            <h1 style={{ marginLeft: '10%' }}>unsplash-api</h1>
            <SearchBox onSearchHandler={onSearchHandler} filterstring={filterstring} />
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }} ref={listRef}>

                <Card />

            </div>


        </>
    )
}
