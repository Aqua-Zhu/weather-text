import { useState } from "react"

export default function App() {
    // 單一欄位處理
    // 使用者名稱
    // const [username, setUsername] = useState('');
    // const handleChange = (e) => {
    //     setUsername(e.target.value)
    // };

    // const [userPW, setUserPW] = useState('');
    // const handleChange2 = (e) => {
    //     setUserPW(e.target.value)
    // };

    // 不用重複寫function的方法
    // 同時處理不同欄位的資料(使用name屬性)
    const [formData, setFormData] = useState({
        uid: 'demo',
        upw: '1234',
        isChk: false,
    })

    const handleChange = (e) => {
        // 值
        // console.log(e.target.value);
        // 屬性
        // console.log(e.target.name);
        // 衣料型態
        // console.log(e.targettype);

        // 寫入異動欄位資料
        // let value;
        // if(e.target.type === 'checkbox'){
        //     value = e.target.checked;
        // }else{
        //     value = e.target.value;
        // }

        // 三元運算子
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

        const name = e.target.name;
        setFormData({
            ...formData,    //使用其餘運算子帶出原欄位的所有資料
            [name]: value   //使用變數的方式帶入被異動欄位的屬性
        })
    }

    const handleSumbit = (e) => {
        // 取消預設行為
        e.preventDefault();
        console.log(formData);
    }

    return (
        <>
            <div>
                <form onSubmit={handleSumbit}>
                    {/* 使用者名稱 */}
                    <div>
                        <label htmlFor="username">使用者名稱</label>
                        <input type="text" id="username" name="uid" value={formData.uid} onChange={handleChange} />
                    </div>
                    {/* 密碼 */}
                    <div>
                        <label htmlFor="userpw">使用者密碼</label>
                        <input type="password" id="userpw" name="upw" value={formData.upw} onChange={handleChange} />
                    </div>
                    {/* 確認狀態 */}
                    <div>
                        <label htmlFor="isCheck">確認狀態</label>
                        <input type='checkbox' id="isCheck" name="isChk" value={formData.isChk} onChange={handleChange} />
                    </div>

                    <button type="submit">送出</button>
                </form>
            </div>
        </>
    )
}
