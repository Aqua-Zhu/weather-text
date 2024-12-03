import { useState } from "react"


function App() {
    // 定義變數content與setContent方法
    const [content, setContent] = useState('');
    const [name, setName] = useState('');

    function changeName(e) {
        setName(e.target.value);
    }
    return (
        <>
            <h2>設計一個輸入名字的欄位，並且即時顯示出來</h2>
            <hr />
            {/* <h3>目前文字方塊的內容:{content}</h3> */}
            請輸入姓名:
            <input type="text" value={content} onChange={(e) => {
                setContent(e.target.value);
            }} />{content}
            <br />
            請輸入姓名2:<input type="text" value={name} onChange={changeName} />{name}
        </>
    )
}

export default App
