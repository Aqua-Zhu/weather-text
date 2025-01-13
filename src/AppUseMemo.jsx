import { useState } from "react"

export default function App() {
    // 單價變數
    const [price,setPrice]= useState(100);

    // 數量變數
    const [qty,setQty] = useState(1);

    // 總價變數
    const tot = price * qty;
    return (
        <>
            <h2>useMemo</h2>
        <hr style={{marginBottom:'50px'}}/>
        
             {/* <label htmlFor="price"><input type="number" id="price" /></label> */}
            {/* (e)=>(e.target.value < 0 ? alert('數量不可小於0') && setQty(1) : setQty((e.target.value))  */}
            單價<input type="number" value={price} onChange={(e)=>setPrice(e.target.value)} style={{marginBottom:'20px'}}/><br/>
            數量<input type="number" value={qty} onChange={(e=>{
                                if(e.target.value < 0){
                                    alert('數量不可小於0');
                                    setQty(0);
                                }else{
                                    setQty(e.target.value);
                                }
            })
                
            } 
                
                style={{marginBottom:'20px'}}/>
            <div>
                總價:{tot}
            </div>

        
        </>
    )
}
