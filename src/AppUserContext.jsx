import { div } from "motion/react-client"
import { createContext, useContext, useState } from "react"

export default function App() {
    // 建立共用環境的變數
    const UserContext = createContext({});
    // 建立使用者變數
    const [username, setUsername] = useState('demo');
    // 建立登入鈕的控制
    const [isLogin, setIsLogin] = useState(false);

    // 建立登入元件
    const LoginForm = () => {
        // 要共用所以要搬出去
        // const [username,setUsername] = useState('')
        // 從共用區UserContext解構出username,setUsername
        const { username, setUsername, setIsLogin } = useContext(UserContext);
        return (
            <>
                <label htmlFor="username">使用者名稱</label>
                <input
                    type="text"
                    id="username"
                    placeholder="請輸入使用者名稱"
                    value={username}
                    onChange={(e) => {
                        setUsername(e.target.value)
                    }}
                />
                <button type="button" onClick={(e) => { setIsLogin(true) }}>登入</button>
            </>
        )
    }

    // 登入後歡迎元件
    const Greeting = () => {
        // 從共用區UserContext取得username
        const { username } = useContext(UserContext);
        return (
            <div>
                Hi,{username}
            </div>
        )
    }

    // 建立不同元件來使用username
    const ShowName=()=>{
        return <div>測試元件,{username}</div>
    }

    return (
        <>
            <h1>useContent</h1>
            <hr />
            <UserContext.Provider value={{ username, setUsername, setIsLogin }}>
            
                {/* <LoginForm />
                <Greeting /> */}
                {/* 將原本的架構改成三元運算子 */}

                {
                    // isLogin === true ? <Greeting/> : <LoginForm/>
                    isLogin ? <><Greeting/> <br /> <ShowName/> </>: <LoginForm/>
                }

            </UserContext.Provider>
        </>
    )
}
