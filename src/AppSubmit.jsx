import { useState } from "react"

export default function App() {
    const [search, setSearch] = useState('')
    // 使用表單送出
    const formhandleSubmit = (e) => {
        e.preventDefault();
        console.log('使用submit送出', search);
    }

    // 使用enter送出
    const enterHandleSubmit =(e)=>{
        console.dir(e);
        if(e.key === 'Enter'){
            console.log('使用enter送出',search);
            
        }
    }


    return (
        <>
            <div>
                {/* 使用表單送出方式，適用於單一欄位 */}
                <form onSubmit={formhandleSubmit}>
                    {/* 搜尋列1 */}
                    <div>
                        <label htmlFor="search1">搜尋</label>
                        <input type="search" id="search1" name="mySearch" 
                        value={search} onChange={(e) => setSearch(e.target.value)} 
                        />

                    </div>
                </form>
            </div>

            {/* 不使用form表單送出 */}
                {/* 搜尋列2 */}
                <div>
                    <label htmlFor="search2">搜尋2</label>
                    <input type="search" id="search2" name="mySearch2" 
                    value={search}  onChange={(e) => setSearch(e.target.value)} 
                    onKeyDown={enterHandleSubmit}
                    />
                </div>


        </>
    )
}
