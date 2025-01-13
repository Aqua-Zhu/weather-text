import { p } from "motion/react-client";
import { useForm } from "react-hook-form"
import { data } from "react-router-dom";

export default function App() {

    const {
        register, // 是一種狀態state，透過register來綁定表單欄位
        handleSubmit,  //是一種方法

        formState: { errors }  // 捕捉規則
    } = useForm();

    // 建立一個自定義的方法，表單被觸發十，將register資料帶進來
    const onSubmit = (data) => {
        // 取得表單被綁定的欄位全部資料，以物件型態顯示
        console.log(data);
        // 取得指定欄位的資料 =>data.欄位名稱
        console.log(data.uName);


    }

    return (
        <>
            <h1>HookForm</h1>
            <div>
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                    {/* 使用者名稱 */}
                    <div>
                        <label htmlFor="username">使用者名稱:</label>
                        <input
                            type="text"
                            id="username"
                            defaultValue='demo'
                            // 使用展開語法...register('欄位名稱')，帶出所有被綁定的欄位
                            // 欄位名稱可以自行定義
                            // 必填的驗證
                            {...register('userName', { required: true })}
                        />
                        {/* 當驗證成立時的訊息(沒有填寫欄位資料時) */}
                        {errors.userName && <span style={{ color: 'red' }}>必須填寫使用者名稱</span>}
                    </div>
                    {/* 使用者密碼 */}
                    <div>
                        <label htmlFor="userpw">使用者密碼:</label>
                        <input
                            type="password"
                            id="userpw"
                            defaultValue='1234567'
                            //使用展開語法...register('欄位名稱')，帶出所有被綁定的欄位
                            //欄位名稱可以自行定義
                            {...register('userpw')}
                        />
                    </div>
                    {/* 年紀 */}
                    <div>
                        <label htmlFor="userAge">使用者年紀:</label>
                        <input
                            type="text"
                            id="userAge"
                            defaultValue=''
                            // 使用正規表達式 => https://pjchender.dev/javascript/js-regex/ 
                            {...register('userAge', { pattern: /\d+/ })} // 加上只能接受數值質料的驗證
                        />
                        {errors.userAge && <span>只能輸入數字</span>}
                    </div>
                    <button type='submit'>送出</button>
                </form>
                {/* 送出紐 */}

            </div>



        </>
    )
}
