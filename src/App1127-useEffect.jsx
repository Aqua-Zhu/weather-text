import { useState } from "react";
import { useEffect } from "react";

function App() {
    const [count, setCount] = useState(0);

    // 每一次渲染之後執行
    // useEffect(() => { });
    useEffect(() => {
        console.log(1);

        // 按鈕監聽事件
        // 取得按鈕

    });
    // 只執行一次(開啟檔案時)
    useEffect(() => {
        console.log(2);

        let btn2 = document.getElementById('btn2')
        // 取得段落，再變色
        btn2.addEventListener('click', () => {
            let p10 = document.getElementById('p1');
            p10.style.color = 'red';
        })
    }, []);
    // 當陣列中依賴條件改變時。就會執行
    useEffect(() => {
        console.log(3);

    }, [count]);

    function changeColor() {
        let p1c = document.getElementById('p1');
        p1c.style.color = 'green';
    }
    return (
        <>
            {console.log(0)}
            <h1>useEffect</h1>
            <hr />
            <p id="p1">我是段落</p>
            {/* 綁定事件 */}
            <button onClick={() => {
                // 取得段落位置
                let p1 = document.getElementById('p1');
                // 再變色
                p1.style.color = 'aqua';
            }}>變色</button>


            {/* 監聽 */}
            <button id="btn2">變紅色</button>
            <button id="btn3" onClick={changeColor}>變綠色</button>

        </>
    )
}

export default App
