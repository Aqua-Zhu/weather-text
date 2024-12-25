import { AnimatePresence, motion } from "motion/react"
import { useState } from "react"
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa"
// Accordion
export default function App() {
const [activeQuestionId,setActiveQuestionId] =useState(null)

    // 摺疊資料
    const questions = [
        {
            id: 1,
            question: "題目1",
            answer: "答案1"
        },
        {
            id: 2,
            question: "題目2",
            answer: "答案2"
        },
        {
            id: 3,
            question: "題目3",
            answer: "答案3"
        }
    ]

    return (
        <>

            <div className="wrapper" style={{
                backgroundColor:"black",
                maxWidth:"100vw",
                height:"100vh",
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                color:"#ccc"
            }}>
                {/* FAQ區 */}
                <div className="faq" style={{
                    backgroundColor:"grey",
                    width:"80%",
                    padding:"20px",
                    borderRadius:"15px ",
                }}>
                    {/* 主標題 */}
                    <h2 style={{
                        textAlign:"center",
                        marginBottom:"20px"
                    }}>FAQ列表</h2>
                    {
                        questions.map((q)=>{
                            return(
                                <div key={q.id} style={{marginBottom:"10px"}}>
                                    {/* QA按鈕 */}
                                    <button style={{
                                        cursor:"pointer",
                                        width:"100%",
                                        textAlign:"left",
                                        borderRadius:"10px",
                                        border:"none",
                                        outline:"none",
                                        padding:"10px",
                                        display:"flex",
                                        justifyContent:"space-between",
                                        alignItems:"center",
                                        fontSize:"1.1rem",

                                        }}
                                        onClick={()=>setActiveQuestionId(activeQuestionId === q.id ? null : q.id)}
                                        
                                        >
                                        

                                        {/* 代出題目 */}
                                        {q.question}
                                        {/* icon加減號 */}
                                        {
                                            activeQuestionId === q.id ? <FaMinusCircle /> : <FaPlusCircle />
                                        }
                                    </button>
                                    {/* 摺疊鈕動畫 motion => https://motion.dev/docs/react-quick-start */}
                                    <AnimatePresence>
                                        {
                                            // 作用中的id跟被展開的id相同時
                                            activeQuestionId === q.id && (
                                                <motion.div 
                                                // 初始化
                                                initial={{opacity:0, height:0}}
                                                // 展開動畫
                                                animate={{opacity:1, height:"auto", backgroundColor:"black"}}
                                                // 摺疊動畫
                                                exit={{opacity:0 , height:0}}
                                                style={{marginTop:"5px",color:"white",fontSize:"1.1rem"}}
                                                >
                                                    {/* 答案 */}
                                                    {q.answer}
                                                </motion.div>
                                            ) 
                                        }
                                    </AnimatePresence>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </>
    )
}
